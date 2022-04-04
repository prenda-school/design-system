import * as React from 'react';
import clsx from 'clsx';
import Unstable_Input, { Unstable_InputProps } from '../Unstable_Input';
import Unstable_InputLabel, {
  Unstable_InputLabelProps,
} from '../Unstable_InputLabel';
import FormControl, { FormControlProps } from '../FormControl';
import Unstable_FormHelperText, {
  Unstable_FormHelperTextProps,
} from '../Unstable_FormHelperText';
import Unstable_Select, { Unstable_SelectProps } from '../Unstable_Select';
import makeStyles from '../makeStyles';
import { StandardProps, useId } from '../utils';

export interface Unstable_TextFieldProps
  extends StandardProps<
    Omit<
      FormControlProps,
      'color' | 'hiddenLabel' | 'margin' | 'size' | 'variant'
    >,
    Unstable_TextFieldClassKey,
    // event handlers are declared on derived interfaces
    'onChange' | 'onBlur' | 'onFocus' | 'defaultValue'
  > {
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete?: string;
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus?: boolean;
  /**
   * @ignore
   */
  children?: React.ReactNode;
  /**
   * The default value of the `input` element.
   */
  defaultValue?: unknown;
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error?: boolean;
  /**
   * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps?: Partial<Unstable_FormHelperTextProps>;
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * The helper text content.
   */
  helperText?: React.ReactNode;
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id?: string;
  /**
   * Props applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps?: Partial<Unstable_InputLabelProps>;
  /**
   * Props applied to the Input element.
   */
  InputProps?: Partial<Unstable_InputProps>;
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: Unstable_InputProps['inputProps'];
  /**
   * Pass a ref to the `input` element.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inputRef?: React.Ref<any>;
  /**
   * The label content.
   */
  label?: React.ReactNode;
  /**
   * The content of the `startAdornment` (InputAdornment), usually an Icon, IconButton, or string.
   */
  leadingEl?: React.ReactNode;
  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline?: boolean;
  /**
   * Name attribute of the `input` element.
   */
  name?: string;
  onBlur?: Unstable_InputProps['onBlur'];
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: Unstable_InputProps['onChange'];
  onFocus?: Unstable_InputProps['onFocus'];
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder?: string;
  /**
   * If `true`, the label is displayed as required and the `input` element` will be required.
   */
  required?: boolean;
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows?: string | number;
  /**
   * Minimum number of rows to display.
   */
  minRows?: string | number;
  /**
   * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select?: boolean;
  /**
   * Props applied to the [`Select`](/api/select/) element.
   */
  SelectProps?: Partial<Unstable_SelectProps>;
  /**
   * If `true`, the input will indicate a success.
   */
  success?: boolean;
  /**
   * The content of the `endAdornment` (an InputAdornment), usually an Icon, IconButton, or string.
   */
  trailingEl?: React.ReactNode;
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type?: React.InputHTMLAttributes<unknown>['type'];
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: unknown;
}

export type Unstable_TextFieldClassKey = 'root';

const useStyles = makeStyles<Unstable_TextFieldClassKey>((theme) => ({
  root: {},
}));

const Unstable_TextField = React.forwardRef(function TextField(
  props: Unstable_TextFieldProps,
  ref
) {
  const {
    autoComplete,
    autoFocus = false,
    children,
    classes: classesProp,
    className,
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps,
    fullWidth = false,
    helperText,
    id: idProp,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    leadingEl,
    label,
    multiline = false,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    maxRows,
    minRows,
    select = false,
    SelectProps,
    success,
    trailingEl,
    type,
    value,
    ...other
  } = props;

  const classes = useStyles();

  const id = useId(idProp);

  if (process.env.NODE_ENV !== 'production') {
    if (select && !children) {
      console.error(
        'Prenda Spark: Material-UI: `children` must be passed when using the `TextField` component with `select`.'
      );
    }
  }

  const InputMore: Partial<Unstable_InputProps> = {};

  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }
    InputMore['aria-describedby'] = undefined;
  }

  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const InputElement = (
    <Unstable_Input
      aria-describedby={helperTextId}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      disabled={disabled}
      defaultValue={defaultValue}
      fullWidth={fullWidth}
      leadingEl={leadingEl}
      multiline={multiline}
      name={name}
      maxRows={maxRows}
      minRows={minRows}
      success={success}
      trailingEl={trailingEl}
      type={type}
      value={value}
      id={id}
      inputRef={inputRef}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      inputProps={inputProps}
      {...InputMore}
      {...InputProps}
    />
  );

  return (
    <FormControl
      className={clsx(classes.root, classesProp?.root, className)}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      ref={(ref as unknown) as React.RefObject<HTMLDivElement>}
      required={required}
      {...other}
    >
      {label && (
        <Unstable_InputLabel
          htmlFor={id}
          id={inputLabelId}
          {...InputLabelProps}
        >
          {label}
        </Unstable_InputLabel>
      )}

      {select ? (
        <Unstable_Select
          aria-describedby={helperTextId}
          id={id}
          labelId={inputLabelId}
          value={value}
          input={InputElement}
          {...SelectProps}
        >
          {children}
        </Unstable_Select>
      ) : (
        InputElement
      )}

      {helperText && (
        <Unstable_FormHelperText id={helperTextId} {...FormHelperTextProps}>
          {helperText}
        </Unstable_FormHelperText>
      )}
    </FormControl>
  );
});

export default Unstable_TextField;
