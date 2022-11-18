import { createContext } from 'react';

export interface Unstable_RadioGroupExtraContextValue {
  /**
   * If `true`, then descendant controls (i.e. `input` elements) will be required.
   */
  required?: boolean;
}

const Unstable_RadioGroupExtraContext = createContext<Unstable_RadioGroupExtraContextValue>(
  {
    required: false,
  }
);

if (process.env.NODE_ENV !== 'production') {
  Unstable_RadioGroupExtraContext.displayName = 'RadioGroupExtraContext';
}

export default Unstable_RadioGroupExtraContext;
