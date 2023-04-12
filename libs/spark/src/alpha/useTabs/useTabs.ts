import { useTabContext as useMuiTabContext } from '@material-ui/lab/TabContext';
import { useContext } from 'react';
import TabsContext, { TabsContextValue } from '../TabsContext';

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
