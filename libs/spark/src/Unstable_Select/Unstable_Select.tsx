import * as React from 'react';
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

declare module '@material-ui/core/NativeSelect/NativeSelect' {
  export const styles: (
    theme: Theme
  ) => Record<
    'root' | 'select' | 'selectMenu' | 'icon' | 'iconOpen' | 'nativeInput',
    React.CSSProperties
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
    > {}

export type Unstable_SelectClassKey =
  | 'root'
  | 'nativeInput'
  | 'icon'
  | 'iconOpen';

const useStyles = makeStyles<Unstable_SelectClassKey>(
  (theme) => {
    const styles = nativeSelectStyles(theme);
    return {
      root: {
        ...styles.root,
        ...styles.select,
        ...styles.selectMenu,
        // adjust embedded Menu's anchor/transform position to edge when there's a startAdornment
        '.MuiSparkUnstable_InputAdornment-root ~ &': {
          marginLeft: -40,
        },
      },
      nativeInput: {
        ...styles.nativeInput,
      },
      icon: {
        ...styles.icon,
        color: theme.unstable_palette.text.icon,
        fontSize: theme.unstable_typography.pxToRem(24),
        marginRight: 14,
        transition: 'transform 250ms ease',
        '.Mui-disabled > &': {
          color: theme.unstable_palette.neutral[100],
        },
      },
      iconOpen: {
        ...styles.iconOpen,
      },
      // necessary key for a rule in nativeSelectStyles
      disabled: {},
    };
  },
  { name: 'MuiSparkUnstable_Select' }
);

const Unstable_Select = React.forwardRef(function Unstable_Select(
  props: Unstable_SelectProps,
  ref
) {
  const {
    autoWidth = false,
    children,
    classes: classesProp,
    displayEmpty = true,
    IconComponent = Unstable_ChevronDown,
    id,
    input,
    inputProps,
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
      classes: { paper: 'MuiSparkMenu-offsetTop' },
    },
    multiple = false,
    native = false,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    ...other
  } = props;

  const classes = useStyles();

  const inputComponent = native ? MuiNativeSelectInput : MuiSelectInput;

  const InputComponent = input || <Unstable_Input />;

  return React.cloneElement(InputComponent, {
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
            MenuProps,
            onClose,
            onOpen,
            open,
            renderValue,
            SelectDisplayProps: { id, ...SelectDisplayProps },
          }),
      ...inputProps,
      classes: {
        root: clsx(classes.root, classesProp?.root, inputProps?.classes?.root),
        nativeInput: clsx(
          classes.nativeInput,
          classesProp?.nativeInput,
          inputProps?.classes?.nativeInput
        ),
        icon: clsx(classes.icon, classesProp?.icon, inputProps?.classes?.icon),
        iconOpen: clsx(
          classes.iconOpen,
          classesProp?.iconOpen,
          inputProps?.classes?.iconOpen
        ),
      },
      ...(input ? input.props.inputProps : {}),
    },
    ref,
    ...other,
  });
});

export default Unstable_Select;
