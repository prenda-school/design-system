import {
  TabContextValue as MuiTabContextValue,
  useTabContext as useMuiTabContext,
} from '@material-ui/lab/TabContext';
import { createContext, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_TabsContextValue
  extends Omit<MuiTabContextValue, 'value'> {
  /**
   * Callback for setting new value.
   */
  onSelected: (
    event: React.SyntheticEvent,
    value: number | string | false
  ) => void;
  /**
   * The component orientation (layout flow direction).
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The currently selected tab's value.
   */
  value: number | string | false;
}

/**
 * @type {React.Context<{ idPrefix: string; value: string } | null>}
 */
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
