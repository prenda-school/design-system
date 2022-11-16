import {
  TabContextValue as MuiTabContextValue,
  useTabContext as useMuiTabContext,
} from '@material-ui/lab/TabContext';
import { createContext, SyntheticEvent, useContext } from 'react';

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

const Context = createContext<Unstable_TabsContextValue | null>(null);

if (process.env.NODE_ENV !== 'production') {
  Context.displayName = 'TabsContext';
}

export const useTabsContext = () => {
  const value = useContext(Context);
  const muiValue = useMuiTabContext();
  if (value === null) {
    return value;
  } else {
    return { ...muiValue, ...value };
  }
};

export default Context;
