import { createContext } from 'react';
import { Unstable_RadioGroupProps } from './Unstable_RadioGroup';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RadioGroupMoreState
  extends Pick<Unstable_RadioGroupProps, 'required'> {}

const RadioGroupMoreContext = createContext<RadioGroupMoreState>({
  required: false,
});

if (process.env.NODE_ENV !== 'production') {
  RadioGroupMoreContext.displayName = 'RadioGroupMoreContext';
}

export default RadioGroupMoreContext;
