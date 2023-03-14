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
   * Props applied to the `FormHelperText` element.
   */
  FormHelperTextProps?: Partial<Unstable_FormHelperTextProps>;
  /**
   * Props applied to the `FormLabel` element.
   */
  FormLabelProps?: Partial<Unstable_FormLabelProps>;
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

/**
 * @deprecated Compose the Form Control pattern directly.
 */
const Unstable_TextField = forwardRef<unknown, Unstable_TextFieldProps>(
  function Unstable_TextField(props, ref) {
    const {
      autoComplete,
      autoFocus = false,
      children,
      defaultValue,
      FormHelperTextProps,
      helperText,
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
      maxRows,
      minRows,
      select = false,
      SelectProps,
      trailingEl,
      type,
      value,
      ...other
    } = props;

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

    const InputElement = (
      <Unstable_Input
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        leadingEl={leadingEl}
        multiline={multiline}
        name={name}
        maxRows={maxRows}
        minRows={minRows}
        trailingEl={trailingEl}
        type={type}
        value={value}
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
        ref={ref as unknown as RefObject<HTMLDivElement>}
        {...other}
      >
        {label ? (
          <Unstable_FormLabel {...FormLabelProps}>{label}</Unstable_FormLabel>
        ) : null}

        {select ? (
          <Unstable_Select value={value} input={InputElement} {...SelectProps}>
            {children}
          </Unstable_Select>
        ) : (
          InputElement
        )}

        {helperText ? (
          <Unstable_FormHelperText {...FormHelperTextProps}>
            {helperText}
          </Unstable_FormHelperText>
        ) : null}
      </Unstable_FormControl>
    );
  }
);

export default Unstable_TextField;
