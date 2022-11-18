import { useTabContext as useMuiTabContext } from '@material-ui/lab/TabContext';
import { useContext } from 'react';
import Unstable_TabsContext, {
  Unstable_TabsContextValue,
} from '../Unstable_TabsContext';

const useTabs_unstable = (): Unstable_TabsContextValue => {
  const value = useContext(Unstable_TabsContext);
  const muiValue = useMuiTabContext();
  if (value === null) {
    return null;
  } else {
    return { ...muiValue, ...value };
  }
};

export default useTabs_unstable;
