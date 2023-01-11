import { createContext } from 'react';

export interface Unstable_FormControlExtraContextValue {
  /**
   * The id of the descendent input.
   */
  id?: string;
  /**
   * The id of the descendent label.
   */
  labelId?: string;
  /**
   * The id of the descendent helper text.
   */
  helperTextId?: string;
  /**
   * The size of the descendant components
   */
  size?: 'medium' | 'small';
  /**
   * If `true`, then descendant components will be displayed in a success state.
   */
  success?: boolean;
}

const Unstable_FormControlExtraContext =
  createContext<Unstable_FormControlExtraContextValue>({
    size: 'medium',
    success: false,
  });

if (process.env.NODE_ENV !== 'production') {
  Unstable_FormControlExtraContext.displayName = 'FormControlExtraContext';
}

export default Unstable_FormControlExtraContext;
