import { createContext } from 'react';
import { RadioGroupProps } from './RadioGroup';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RadioGroupMoreState
  extends Pick<RadioGroupProps, 'required'> {}

const RadioGroupMoreContext = createContext<RadioGroupMoreState>({
  required: false,
});

if (process.env.NODE_ENV !== 'production') {
  RadioGroupMoreContext.displayName = 'RadioGroupMoreContext';
}

export default RadioGroupMoreContext;
