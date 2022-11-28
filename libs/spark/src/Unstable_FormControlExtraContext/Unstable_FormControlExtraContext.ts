import { createContext } from 'react';

export interface Unstable_FormControlExtraContextValue {
  /**
   * The size of the descendant components
   */
  size?: 'medium' | 'small';
  /**
   * If `true`, then descendant components will be displayed in a success state.
   */
  success?: boolean;
}

const Unstable_FormControlExtraContext = createContext<Unstable_FormControlExtraContextValue>(
  {
    size: 'medium',
    success: false,
  }
);

if (process.env.NODE_ENV !== 'production') {
  Unstable_FormControlExtraContext.displayName = 'FormControlExtraContext';
}

export default Unstable_FormControlExtraContext;
