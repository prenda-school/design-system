import { useFormControl } from '@material-ui/core/FormControl';
import { useContext } from 'react';
import Unstable_FormControlExtraContext from '../Unstable_FormControlExtraContext';

const useFormControl_unstable = (parameters: {
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  size?: 'medium' | 'small';
  success?: boolean;
}) => {
  const muiFormControl = useFormControl();
  const formControlExtra = useContext(Unstable_FormControlExtraContext);

  let disabled = parameters.disabled;
  if (typeof parameters.disabled === 'undefined') {
    disabled = muiFormControl?.disabled;
  }

  let error = parameters.error;
  if (typeof parameters.error === 'undefined') {
    error = muiFormControl?.error;
  }

  let fullWidth = parameters.fullWidth;
  if (typeof parameters.fullWidth === 'undefined') {
    fullWidth = muiFormControl?.fullWidth;
  }

  let required = parameters.required;
  if (typeof parameters.required === 'undefined') {
    required = muiFormControl?.required;
  }

  let size = parameters.size;
  if (typeof parameters.size === 'undefined') {
    size = formControlExtra.size;
  }

  let success = parameters.success;
  if (typeof parameters.success === 'undefined') {
    success = formControlExtra.success;
  }

  return {
    disabled,
    error,
    fullWidth,
    required,
    size,
    success,
    // PDS : not prop-controlled
    id: formControlExtra.id,
    labelId: formControlExtra.labelId,
    helperTextId: formControlExtra.helperTextId,
    // MUI : internal-determined
    filled: muiFormControl?.filled,
    focused: muiFormControl?.focused,
    onBlur: muiFormControl?.onBlur,
    onEmpty: muiFormControl?.onEmpty,
    onFilled: muiFormControl?.onFilled,
    onFocus: muiFormControl?.onFocus,
  };
};

export default useFormControl_unstable;
