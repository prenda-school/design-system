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
import { Unstable_ChevronDown } from '../internal';
import { Theme } from '../theme';
import Unstable_Tag, { Unstable_TagProps } from '../Unstable_Tag';
import {
  Unstable_PaperProps,
  usePaperStyles_unstable,
} from '../Unstable_Paper';
import withStyles, { Styles } from '../withStyles';
import useFormControl_unstable from '../useFormControl_unstable';

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
   * Props applied to the `Menu` element.
   */
  // Hide MUI's Paper Props, add PDS's Paper Props (which will be used to apply class names, not forward as props, since the component cannot be overridden).
  MenuProps?: Partial<
    Omit<MuiSelectProps['MenuProps'], 'PaperProps'> & {
      PaperProps?: Partial<Unstable_PaperProps>;
    }
  >;
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

type PrivateClassKey =
  | 'private-root-fullWidth'
  | 'private-root-renderValueAsTag'
  | 'private-root-renderValueAsTag-preventMultipleOverflow'
  | 'private-icon-size-medium'
  | 'private-icon-size-small';

const styles: Styles<Unstable_SelectClassKey | PrivateClassKey> = (theme) => {
  const styles = nativeSelectStyles(theme);
  // disabled is no longer a rule
  delete styles.icon['&$disabled'];
  delete styles.select['&$disabled'];
  // most browsers don't recognize this option and JSS warns about caught error (an IE11 fix anyway, which we don't support)
  delete styles.select['&::-ms-expand'];
  return {
    root: {
      ...styles.root,
      ...styles.select,
      ...styles.selectMenu,
      '&&': {
        paddingRight: 4 + 24 + 16, // spacing + icon + padding; override MUI
      },
      '.MuiSparkUnstable_InputAdornment-root ~ &': {
        paddingLeft: 14 + 24 + 8,
        // adjust embedded Menu's anchor/transform position to edge when there's a startAdornment
        marginLeft: -40,
      },
    },
    nativeInput: {
      ...styles.nativeInput,
    },
    icon: {
      ...styles.icon,
      color: theme.unstable_palette.text.icon,
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
    /* Private */
    'private-root-fullWidth': {
      width: '100%',
    },
    'private-root-renderValueAsTag': {
      paddingBottom: 8,
      paddingTop: 8,
      '& > div': {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
      },
      '& > .PrivateSelect-renderValueAsTagNoValue': {
        paddingBottom: 4,
        paddingTop: 4,
      },
    },
    'private-root-renderValueAsTag-preventMultipleOverflow': {
      '& > div': {
        flexWrap: 'nowrap',
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
      },
    },
    'private-icon-size-medium': {
      fontSize: theme.unstable_typography.pxToRem(24),
      marginRight: 16,
      top: 'calc(50% - 12px)',
    },
    'private-icon-size-small': {
      fontSize: theme.unstable_typography.pxToRem(20),
      marginRight: 8,
      top: 'calc(50% - 10px)',
    },
  };
};

const Unstable_Select = forwardRef<unknown, Unstable_SelectProps>(
  function Unstable_Select(props, ref) {
    const {
      autoWidth = false,
      children,
      classes,
      displayEmpty = true,
      getTagProps,
      IconComponent = Unstable_ChevronDown,
      input,
      inputProps,
      labelId: labelIdProp,
      MenuProps = {} as Unstable_SelectProps['MenuProps'],
      multiple = false,
      native = false,
      onClose,
      onOpen,
      open,
      preventMultipleOverflow = false,
      renderValue: renderValueProp,
      renderValueAsTag = false,
      SelectDisplayProps,
      value,
      // form control
      'aria-describedby': ariaDescribedByProp,
      disabled: disabledProp,
      error: errorProp,
      fullWidth: fullWidthProp,
      id: idProp,
      required: requiredProp,
      size: sizeProp,
      success: successProp,
      ...other
    } = props;

    const formControl = useFormControl_unstable({
      disabled: disabledProp,
      error: errorProp,
      fullWidth: fullWidthProp,
      inputId: idProp,
      required: requiredProp,
      size: sizeProp,
      success: successProp,
    });

    const {
      getContentAnchorEl: getContentAnchorElMenuProp = null,
      anchorOrigin: anchorOriginMenuProp = {
        vertical: 'bottom',
        horizontal: 'right',
      },
      transformOrigin: transformOriginMenuProp = {
        vertical: 'top',
        horizontal: 'right',
      },
      PaperProps:
        MenuPaperProps = {} as Unstable_SelectProps['MenuProps']['PaperProps'],
    } = MenuProps;

    const {
      bgcolor: bgcolorMenuPaperProp = 'default',
      border: borderMenuPaperProp = 'none',
      className: classNameMenuPaperProp,
      radius: radiusMenuPaperProp = 'sm',
      shadow: shadowMenuPaperProp = 'E400',
      ...otherMenuPaperProps
    } = MenuPaperProps;

    const paperClasses_unstable = usePaperStyles_unstable();

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
                  disabled={formControl.disabled}
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
      'aria-describedby': formControl.helperTextId,
      disabled: formControl.disabled,
      error: formControl.error,
      fullWidth: formControl.fullWidth,
      inputComponent,
      inputProps: {
        children,
        IconComponent,
        type: undefined, // We render a select. We can ignore the type provided by the `Input`.
        multiple,
        ...(native
          ? { id: formControl.inputId }
          : {
              autoWidth,
              displayEmpty,
              labelId: formControl.labelId,
              MenuProps: {
                ...MenuProps,
                anchorOrigin: anchorOriginMenuProp,
                getContentAnchorEl: getContentAnchorElMenuProp,
                transformOrigin: transformOriginMenuProp,
                PaperProps: {
                  ...otherMenuPaperProps,
                  className: clsx(
                    classes.menuPaper,
                    paperClasses_unstable.root,
                    paperClasses_unstable[
                      `private-root-bgcolor-${bgcolorMenuPaperProp}`
                    ],
                    paperClasses_unstable[
                      `private-root-border-${borderMenuPaperProp}`
                    ],
                    paperClasses_unstable[
                      `private-root-radius-${radiusMenuPaperProp}`
                    ],
                    paperClasses_unstable[
                      `private-root-shadow-${shadowMenuPaperProp}`
                    ],
                    classNameMenuPaperProp
                  ),
                },
              },
              onClose,
              onOpen,
              open,
              renderValue,
              SelectDisplayProps: {
                id: formControl.inputId,
                ...SelectDisplayProps,
              },
            }),
        ...inputProps,
        classes: {
          root: clsx(
            classes.root,
            {
              [classes['private-root-fullWidth']]: formControl.fullWidth,
              [classes['private-root-renderValueAsTag']]: renderValueAsTag,
              [classes[
                'private-root-renderValueAsTag-preventMultipleOverflow'
              ]]: renderValueAsTag && preventMultipleOverflow,
            },
            inputProps?.classes?.root
          ),
          nativeInput: clsx(
            classes.nativeInput,
            inputProps?.classes?.nativeInput
          ),
          icon: clsx(
            classes.icon,
            inputProps?.classes?.icon,
            classes[`private-icon-size-${formControl.size}`]
          ),
          iconOpen: clsx(classes.iconOpen, inputProps?.classes?.iconOpen),
        },
        ...(input ? input.props.inputProps : {}),
      },
      required: formControl.required,
      size: formControl.size,
      success: formControl.success,
      value,
      ref,
      ...other,
    });
  }
);

export default withStyles(styles, { name: 'MuiSparkUnstable_Select' })(
  Unstable_Select
) as typeof Unstable_Select;
