import React, {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  Ref,
  RefObject,
} from 'react';
import Unstable_Input, { Unstable_InputProps } from '../Unstable_Input';
import Unstable_FormLabel, {
  Unstable_FormLabelProps,
} from '../Unstable_FormLabel';
import Unstable_FormControl, {
  Unstable_FormControlProps,
} from '../Unstable_FormControl';
import Unstable_FormHelperText, {
  Unstable_FormHelperTextProps,
} from '../Unstable_FormHelperText';
import Unstable_Select, { Unstable_SelectProps } from '../Unstable_Select';
import { useId } from '../utils';

export interface Unstable_TextFieldProps
  extends Omit<
    Unstable_FormControlProps,
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
  children?: ReactNode;
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
   * Props applied to the `FormHelperText` element.
   */
  FormHelperTextProps?: Partial<Unstable_FormHelperTextProps>;
  /**
   * Props applied to the `FormLabel` element.
   */
  FormLabelProps?: Partial<Unstable_FormLabelProps>;
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * The helper text content.
   */
  helperText?: ReactNode;
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id?: string;
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
  inputRef?: Ref<any>;
  /**
   * The label content.
   */
  label?: ReactNode;
  /**
   * The content of the `startAdornment` (InputAdornment), usually an Icon, IconButton, or string.
   */
  leadingEl?: ReactNode;
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
   * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select?: boolean;
  /**
   * Props applied to the `Select` element.
   */
  SelectProps?: Partial<Unstable_SelectProps>;
  /**
   * If `true`, the input will indicate a success.
   */
  success?: boolean;
  /**
   * The content of the `endAdornment` (an `InputAdornment`), usually an `Icon`, `IconButton`, or `string`.
   */
  trailingEl?: ReactNode;
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type?: InputHTMLAttributes<unknown>['type'];
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: unknown;
}

const Unstable_TextField = forwardRef<unknown, Unstable_TextFieldProps>(
  function Unstable_TextField(props, ref) {
    const {
      autoComplete,
      autoFocus = false,
      children,
      defaultValue,
      disabled = false,
      error = false,
      FormHelperTextProps,
      fullWidth = false,
      helperText,
      id: idProp,
      FormLabelProps,
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
    const labelId = label && id ? `${id}-label` : undefined;
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
      <Unstable_FormControl
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        ref={(ref as unknown) as RefObject<HTMLDivElement>}
        required={required}
        {...other}
      >
        {label ? (
          <Unstable_FormLabel htmlFor={id} id={labelId} {...FormLabelProps}>
            {label}
          </Unstable_FormLabel>
        ) : null}

        {select ? (
          <Unstable_Select
            aria-describedby={helperTextId}
            id={id}
            labelId={labelId}
            value={value}
            input={InputElement}
            {...SelectProps}
          >
            {children}
          </Unstable_Select>
        ) : (
          InputElement
        )}

        {helperText ? (
          <Unstable_FormHelperText id={helperTextId} {...FormHelperTextProps}>
            {helperText}
          </Unstable_FormHelperText>
        ) : null}
      </Unstable_FormControl>
    );
  }
);

export default Unstable_TextField;
