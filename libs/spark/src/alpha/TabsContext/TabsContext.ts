import { TabContextValue as MuiTabContextValue } from '@material-ui/lab/TabContext';
import { createContext, SyntheticEvent } from 'react';

type Value = string | false;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabsContextValue extends Omit<MuiTabContextValue, 'value'> {
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

const TabsContext = createContext<TabsContextValue | null>(null);

if (process.env.NODE_ENV !== 'production') {
  TabsContext.displayName = 'TabsContext';
}

export default TabsContext;
