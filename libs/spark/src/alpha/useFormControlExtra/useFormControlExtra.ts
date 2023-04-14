import { useContext } from 'react';
import FormControlExtraContext from '../FormControlExtraContext';
import type {
  FormControlProperties} from '../useFormControl';
import {
  DEFAULT_FORM_CONTROL_API_VALUES
} from '../useFormControl';

/** internal */
export type UseFormControlExtraParams = Partial<
  Pick<
    FormControlProperties,
    'inputId' | 'labelId' | 'helperTextId' | 'size' | 'success'
  >
>;

/** internal */
export type UseFormControlExtraResult = Pick<
  FormControlProperties,
  'inputId' | 'labelId' | 'helperTextId' | 'size' | 'success'
>;

/** internal */
const useFormControlExtra = (
  params: UseFormControlExtraParams
): UseFormControlExtraResult => {
  const formControlExtra = useContext(FormControlExtraContext);

  // always let consumer override => prefer passed parameters

  let inputId: FormControlProperties['inputId'];
  if (typeof params.inputId !== 'undefined') {
    inputId = params.inputId;
  } else if (formControlExtra) {
    inputId = formControlExtra.inputId;
  }

  let labelId: FormControlProperties['labelId'];
  if (typeof params.labelId !== 'undefined') {
    labelId = params.labelId;
  } else if (inputId) {
    labelId = `${inputId}-label`;
  }

  let helperTextId: FormControlProperties['helperTextId'];
  if (typeof params.helperTextId !== 'undefined') {
    helperTextId = params.helperTextId;
  } else if (inputId) {
    helperTextId = `${inputId}-helper-text`;
  }

  let size: FormControlProperties['size'];
  if (typeof params.size !== 'undefined') {
    size = params.size;
  } else if (formControlExtra) {
    size = formControlExtra.size;
  } else {
    size = DEFAULT_FORM_CONTROL_API_VALUES.size;
  }

  let success: FormControlProperties['success'];
  if (typeof params.success !== 'undefined') {
    success = params.success;
  } else if (formControlExtra) {
    success = formControlExtra.success;
  } else {
    success = DEFAULT_FORM_CONTROL_API_VALUES.success;
  }

  return {
    inputId,
    labelId,
    helperTextId,
    size,
    success,
  };
};

export default useFormControlExtra;
