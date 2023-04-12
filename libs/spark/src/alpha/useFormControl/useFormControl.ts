import { useFormControl } from '@material-ui/core/FormControl';
import useFormControlExtra from '../useFormControlExtra/useFormControlExtra';

export type UseFormControlParams = Partial<
  Omit<FormControlProperties, 'onBlur' | 'onEmpty' | 'onFilled' | 'onFocus'>
>;

export type UseFormControlResult = FormControlProperties;

export type FormControlProperties = {
  /**
   * Whether the components display in a disabled state.
   */
  disabled: boolean;
  /**
   * Whether the components display in an error state.
   */
  error: boolean;
  /**
   * Whether the components take up the full width of the container.
   */
  fullWidth: boolean;
  /**
   * Whether the components display as required.
   */
  required: boolean;
  /**
   * The size of the components.
   */
  size: 'medium' | 'small';
  /**
   * Whether the components display in a success state.
   */
  success: boolean;
  /**
   * The id of the input element.
   */
  inputId?: string;
  /**
   * The id of the label element.
   */
  labelId?: string;
  /**
   * The id of the helper text element.
   */
  helperTextId?: string;
  /**
   * Whether the components display as filled.
   */
  filled?: boolean;
  /**
   * Whether the components display as focused.
   */
  focused?: boolean;
  onBlur?: () => void;
  onEmpty?: () => void;
  onFilled?: () => void;
  onFocus?: () => void;
};

export const DEFAULT_FORM_CONTROL_API_VALUES: Readonly<FormControlProperties> =
  {
    disabled: false,
    error: false,
    fullWidth: false,
    required: false,
    size: 'medium',
    success: false,
  };

const useFormControl = (params: UseFormControlParams): UseFormControlResult => {
  const muiFormControl = useFormControl();
  const formControlExtra = useFormControlExtra(params);

  // always let consumer override => prefer passed parameters -- note, the consumer can't override mui form control internals given that their api doesn't accept parameters, so consumer overrides of those attributes are isolated to the single, calling component

  let disabled: FormControlProperties['disabled'];
  if (typeof params.disabled !== 'undefined') {
    disabled = params.disabled;
  } else if (muiFormControl) {
    disabled = muiFormControl.disabled;
  } else {
    disabled = DEFAULT_FORM_CONTROL_API_VALUES.disabled;
  }

  let error: FormControlProperties['error'];
  if (typeof params.error !== 'undefined') {
    error = params.error;
  } else if (muiFormControl) {
    error = muiFormControl.error;
  } else {
    error = DEFAULT_FORM_CONTROL_API_VALUES.error;
  }

  let fullWidth: FormControlProperties['fullWidth'];
  if (typeof params.fullWidth !== 'undefined') {
    fullWidth = params.fullWidth;
  } else if (muiFormControl) {
    fullWidth = muiFormControl.fullWidth;
  } else {
    fullWidth = DEFAULT_FORM_CONTROL_API_VALUES.fullWidth;
  }

  let required: FormControlProperties['required'];
  if (typeof params.required !== 'undefined') {
    required = params.required;
  } else if (muiFormControl) {
    required = muiFormControl.required;
  } else {
    required = DEFAULT_FORM_CONTROL_API_VALUES.required;
  }

  let filled: FormControlProperties['filled'];
  if (typeof params.filled !== 'undefined') {
    filled = params.filled;
  } else if (muiFormControl) {
    filled = muiFormControl.filled;
  }

  let focused: FormControlProperties['focused'];
  if (typeof params.focused !== 'undefined') {
    focused = params.focused;
  } else if (muiFormControl) {
    focused = muiFormControl.focused;
  }

  return {
    disabled,
    error,
    fullWidth,
    required,
    size: formControlExtra.size,
    success: formControlExtra.success,
    inputId: formControlExtra.inputId,
    labelId: formControlExtra.labelId,
    helperTextId: formControlExtra.helperTextId,
    ...(filled && { filled }),
    ...(focused && { focused }),
    // determined completely by mui-internals
    ...(muiFormControl?.onBlur && { onBlur: muiFormControl?.onBlur }),
    ...(muiFormControl?.onEmpty && { onEmpty: muiFormControl?.onEmpty }),
    ...(muiFormControl?.onFilled && { onFilled: muiFormControl?.onFilled }),
    ...(muiFormControl?.onFocus && { onBlur: muiFormControl?.onFocus }),
  };
};

export default useFormControl;
