import { useFormControl } from '@material-ui/core/FormControl';
import { useContext } from 'react';
import Unstable_FormControlExtraContext from '../Unstable_FormControlExtraContext';

export type UseFormControl_UnstableParams = {
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  size?: 'medium' | 'small';
  success?: boolean;
};

export type UseFormControl_UnstableResult = {
  disabled: boolean;
  error: boolean;
  fullWidth: boolean;
  required: boolean;
  size: 'medium' | 'small';
  success: boolean;
  id?: string;
  labelId?: string;
  helperTextId?: string;
  filled?: boolean;
  focused?: boolean;
  onBlur?: () => void;
  onEmpty?: () => void;
  onFilled?: () => void;
  onFocus?: () => void;
};

const useFormControl_unstable = (
  params: UseFormControl_UnstableParams
): UseFormControl_UnstableResult => {
  const muiFormControl = useFormControl();
  const formControlExtra = useContext(Unstable_FormControlExtraContext);

  let disabled = false;
  if (typeof params.disabled === 'undefined' && muiFormControl) {
    disabled = muiFormControl.disabled;
  } else {
    disabled = params.disabled;
  }

  let error = false;
  if (typeof params.error === 'undefined' && muiFormControl) {
    error = muiFormControl.error;
  } else {
    error = params.error;
  }

  let fullWidth = false;
  if (typeof params.fullWidth === 'undefined' && muiFormControl) {
    fullWidth = muiFormControl.fullWidth;
  } else {
    fullWidth = params.fullWidth;
  }

  let required = false;
  if (typeof params.required === 'undefined' && muiFormControl) {
    required = muiFormControl.required;
  } else {
    required = params.required;
  }

  let size: 'medium' | 'small' = 'medium';
  if (typeof params.size === 'undefined' && formControlExtra) {
    size = formControlExtra.size;
  } else {
    size = params.size;
  }

  let success = false;
  if (typeof params.success === 'undefined' && formControlExtra) {
    success = formControlExtra.success;
  } else {
    success = params.success;
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
