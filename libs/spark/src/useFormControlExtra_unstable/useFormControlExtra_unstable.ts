import { useContext } from 'react';
import Unstable_FormControlExtraContext from '../Unstable_FormControlExtraContext';
import {
  DEFAULT_FORM_CONTROL_API_VALUES,
  FormControlProperties_Unstable,
} from '../useFormControl_unstable';

/** internal */
export type UseFormControlExtra_UnstableParams = Partial<
  Pick<
    FormControlProperties_Unstable,
    'inputId' | 'labelId' | 'helperTextId' | 'size' | 'success'
  >
>;

/** internal */
export type UseFormControlExtra_UnstableResult = Pick<
  FormControlProperties_Unstable,
  'inputId' | 'labelId' | 'helperTextId' | 'size' | 'success'
>;

/** internal */
const useFormControlExtra_unstable = (
  params: UseFormControlExtra_UnstableParams
): UseFormControlExtra_UnstableResult => {
  const formControlExtra = useContext(Unstable_FormControlExtraContext);

  // always let consumer override => prefer passed parameters

  let inputId: FormControlProperties_Unstable['inputId'];
  if (typeof params.inputId !== 'undefined') {
    inputId = params.inputId;
  } else if (formControlExtra) {
    inputId = formControlExtra.inputId;
  }

  let labelId: FormControlProperties_Unstable['labelId'];
  if (typeof params.labelId !== 'undefined') {
    labelId = params.labelId;
  } else if (inputId) {
    labelId = `${inputId}-label`;
  }

  let helperTextId: FormControlProperties_Unstable['helperTextId'];
  if (typeof params.helperTextId !== 'undefined') {
    helperTextId = params.helperTextId;
  } else if (inputId) {
    helperTextId = `${inputId}-helper-text`;
  }

  let size: FormControlProperties_Unstable['size'];
  if (typeof params.size !== 'undefined') {
    size = params.size;
  } else if (formControlExtra) {
    size = formControlExtra.size;
  } else {
    size = DEFAULT_FORM_CONTROL_API_VALUES.size;
  }

  let success: FormControlProperties_Unstable['success'];
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

export default useFormControlExtra_unstable;
