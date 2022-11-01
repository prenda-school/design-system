import React, { cloneElement, CSSProperties, forwardRef } from 'react';
import { SelectProps as MuiSelectProps } from '@material-ui/core/Select';
import MuiSelectInput, {
  SelectInputProps as MuiSelectInputProps,
} from '@material-ui/core/Select/SelectInput';
import MuiNativeSelectInput, {
  styles as nativeSelectStyles,
} from '@material-ui/core/NativeSelect/NativeSelect';
import Unstable_Input, { Unstable_InputProps } from '../Unstable_Input';
import { StandardProps } from '../utils';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { Unstable_ChevronDown } from '../internal';
import { Theme } from '../theme';
import Unstable_Tag, { Unstable_TagProps } from '../Unstable_Tag';
import { useUnstable_PaperStyles } from '../Unstable_Paper';

declare module '@material-ui/core/NativeSelect/NativeSelect' {
  export const styles: (
    theme: Theme
  ) => Record<
    'root' | 'select' | 'selectMenu' | 'icon' | 'iconOpen' | 'nativeInput',
    CSSProperties
  >;
}

export interface Unstable_SelectProps
  extends StandardProps<
      Omit<Unstable_InputProps, 'trailingEl'>,
      Unstable_SelectClassKey,
      'value' | 'onChange'
    >,
    Pick<MuiSelectInputProps, 'onChange'>,
    Pick<
      MuiSelectProps,
      | 'autoWidth'
      | 'children'
      | 'defaultValue'
      | 'displayEmpty'
      | 'IconComponent'
      | 'id'
      | 'input'
      | 'inputProps'
      | 'labelId'
      | 'MenuProps'
      | 'multiple'
      | 'native'
      | 'onChange'
      | 'onClose'
      | 'onOpen'
      | 'open'
      | 'renderValue'
      | 'SelectDisplayProps'
      | 'value'
    > {
  /**
   * A tag props getter. Use to customize the props of `Unstable_Tag`'s rendered when `renderValueAsTag={true}`.
   */
  getTagProps?: ({
    value,
    index,
  }: {
    value: MuiSelectProps['value'];
    index: number;
  }) => Unstable_TagProps;
  /**
   * Prevent the render container from overflowing with multiple values or tags.
   */
  preventMultipleOverflow?: boolean;
  /**
   * Render the value as Tag components.
   */
  renderValueAsTag?: boolean;
}

export type Unstable_SelectClassKey =
  | 'root'
  | 'nativeInput'
  | 'icon'
  | 'iconOpen'
  | 'menuPaper';

const useStyles = makeStyles<Unstable_SelectClassKey>(
  (theme) => {
    const styles = nativeSelectStyles(theme);
    // disabled is no longer a rule
    delete styles.icon['&$disabled'];
    delete styles.select['&$disabled'];
    // most browsers don't recognize this option and JSS warns about caught error (an IE11 fix anyway, which we don't support)
    delete styles.select['&::-ms-expand'];
    return {
      root: (props: Unstable_SelectProps) => ({
        ...styles.root,
        ...styles.select,
        ...styles.selectMenu,
        '&&': {
          paddingRight: 24 + 14 + 4, // override MUI (icon width + right margin + left margin) (requires increased specificity)
        },
        '.MuiSparkUnstable_InputAdornment-root ~ &': {
          paddingLeft: 14 + 24 + 8,
          // adjust embedded Menu's anchor/transform position to edge when there's a startAdornment
          marginLeft: -40,
        },
        /* renderValueAsTag */
        ...(props.renderValueAsTag && {
          paddingBottom: 8,
          paddingTop: 8,
          '& > div': {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            ...(props.preventMultipleOverflow && {
              flexWrap: 'nowrap',
              overflowX: 'scroll',
              whiteSpace: 'nowrap',
            }),
          },
          '& > .PrivateSelect-renderValueAsTagNoValue': {
            paddingBottom: 4,
            paddingTop: 4,
          },
        }),
      }),
      nativeInput: {
        ...styles.nativeInput,
      },
      icon: {
        ...styles.icon,
        color: theme.unstable_palette.text.icon,
        fontSize: theme.unstable_typography.pxToRem(24),
        marginRight: 14,
        transition: 'transform 250ms ease',
        /* disabled -- can get from internal context => can't condition on prop */
        '.Mui-disabled > &': {
          color: theme.unstable_palette.text.disabled,
        },
      },
      iconOpen: {
        ...styles.iconOpen,
      },
      menuPaper: {
        marginTop: 4,
      },
    };
  },
  { name: 'MuiSparkUnstable_Select' }
);

const Unstable_Select = forwardRef<unknown, Unstable_SelectProps>(
  function Unstable_Select(props, ref) {
    const {
      autoWidth = false,
      children,
      classes: classesProp,
      disabled,
      displayEmpty = true,
      getTagProps,
      IconComponent = Unstable_ChevronDown,
      id,
      input,
      inputProps,
      labelId,
      MenuProps = {
        getContentAnchorEl: null,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      },
      multiple = false,
      native = false,
      onClose,
      onOpen,
      open,
      preventMultipleOverflow = false,
      renderValue: renderValueProp,
      renderValueAsTag = false,
      value,
      SelectDisplayProps,
      ...other
    } = props;
    const { PaperProps: { elevation = 400, ...PaperProps } = {} } = MenuProps;

    const classes = useStyles({
      preventMultipleOverflow,
      renderValueAsTag,
    });
    const paperClasses = useUnstable_PaperStyles();

    const inputComponent = native ? MuiNativeSelectInput : MuiSelectInput;

    const InputComponent = input || <Unstable_Input />;

    let renderValue;
    if (renderValueProp) {
      renderValue = renderValueProp;
    } else if (renderValueAsTag) {
      renderValue = (selected: string[]) => {
        if (selected.length) {
          return (
            <div>
              {selected.map((value, index) => (
                // can't make deletable because Select's `onChange` isn't extensible enough; but consumer can implement custom logic through `getTagProps`
                <Unstable_Tag
                  key={value}
                  label={value}
                  disabled={disabled}
                  {...(getTagProps && getTagProps({ value, index }))}
                />
              ))}
            </div>
          );
        } else {
          return (
            <div
              className="PrivateSelect-renderValueAsTagNoValue"
              // [from MUI] Set `dangerouslySetInnerHTML` so the vertical align positioning algorithm kicks in; otherwise, the component shifts up in positioning because this span is rendered too high.
              dangerouslySetInnerHTML={{ __html: '&#8203;' }}
            />
          );
        }
      };
    }

    return cloneElement(InputComponent, {
      disabled,
      inputComponent,
      inputProps: {
        children,
        IconComponent,
        type: undefined, // We render a select. We can ignore the type provided by the `Input`.
        multiple,
        ...(native
          ? { id }
          : {
              autoWidth,
              displayEmpty,
              labelId,
              MenuProps: {
                ...MenuProps,
                PaperProps: {
                  ...PaperProps,
                  className: clsx(
                    classes.menuPaper,
                    PaperProps.className,
                    paperClasses[`elevation${elevation}`]
                  ),
                  elevation: 0,
                },
              },
              onClose,
              onOpen,
              open,
              renderValue,
              SelectDisplayProps: { id, ...SelectDisplayProps },
            }),
        ...inputProps,
        classes: {
          root: clsx(
            classes.root,
            classesProp?.root,
            inputProps?.classes?.root
          ),
          nativeInput: clsx(
            classes.nativeInput,
            classesProp?.nativeInput,
            inputProps?.classes?.nativeInput
          ),
          icon: clsx(
            classes.icon,
            classesProp?.icon,
            inputProps?.classes?.icon
          ),
          iconOpen: clsx(
            classes.iconOpen,
            classesProp?.iconOpen,
            inputProps?.classes?.iconOpen
          ),
        },
        ...(input ? input.props.inputProps : {}),
      },
      value,
      ref,
      ...other,
    });
  }
);

export default Unstable_Select;
