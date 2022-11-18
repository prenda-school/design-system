import { TabContextValue as MuiTabContextValue } from '@material-ui/lab/TabContext';
import { createContext, SyntheticEvent } from 'react';

type Value = string | false;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_TabsContextValue
  extends Omit<MuiTabContextValue, 'value'> {
  /**
   * Callback for setting new value.
   */
  onSelected: (event: SyntheticEvent, value: Value) => void;
  /**
   * The component orientation (layout flow direction).
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The currently selected tab's value.
   */
  value: Value;
}

const Unstable_TabsContext = createContext<Unstable_TabsContextValue | null>(
  null
);

if (process.env.NODE_ENV !== 'production') {
  Unstable_TabsContext.displayName = 'TabsContext';
}

export default Unstable_TabsContext;
