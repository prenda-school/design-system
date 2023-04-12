import { createContext } from 'react';

export interface RadioGroupExtraContextValue {
  /**
   * If `true`, then descendant controls (i.e. `input` elements) will be required.
   */
  required?: boolean;
}

const RadioGroupExtraContext = createContext<RadioGroupExtraContextValue>({
  required: false,
});

if (process.env.NODE_ENV !== 'production') {
  RadioGroupExtraContext.displayName = 'RadioGroupExtraContext';
}

export default RadioGroupExtraContext;
