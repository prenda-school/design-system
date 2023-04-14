import { useTabContext as useMuiTabContext } from '@material-ui/lab/TabContext';
import { useContext } from 'react';
import type { TabsContextValue } from '../TabsContext';
import TabsContext from '../TabsContext';

const useTabs = (): TabsContextValue => {
  const value = useContext(TabsContext);
  const muiValue = useMuiTabContext();
  if (value === null) {
    return null;
  } else {
    return { ...muiValue, ...value };
  }
};

export default useTabs;
