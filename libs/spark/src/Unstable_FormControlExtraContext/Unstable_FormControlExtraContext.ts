import { createContext } from 'react';
import { FormControlProperties_Unstable } from '../useFormControl_unstable';

/** internal */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_FormControlExtraContextValue
  extends Partial<
    Pick<
      FormControlProperties_Unstable,
      'inputId' | 'labelId' | 'helperTextId' | 'size' | 'success'
    >
  > {}

/** internal */
const Unstable_FormControlExtraContext =
  createContext<Unstable_FormControlExtraContextValue | null>(null);

if (process.env.NODE_ENV !== 'production') {
  Unstable_FormControlExtraContext.displayName = 'FormControlExtraContext';
}

export default Unstable_FormControlExtraContext;
