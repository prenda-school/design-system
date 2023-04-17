import { createContext } from 'react';
import type { FormControlProperties } from '../useFormControl';

/** internal */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormControlExtraContextValue
  extends Partial<
    Pick<
      FormControlProperties,
      'inputId' | 'labelId' | 'helperTextId' | 'size' | 'success'
    >
  > {}

/** internal */
const FormControlExtraContext =
  createContext<FormControlExtraContextValue | null>(null);

if (process.env.NODE_ENV !== 'production') {
  FormControlExtraContext.displayName = 'FormControlExtraContext';
}

export default FormControlExtraContext;
