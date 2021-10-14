import * as React from 'react';
import {
  default as MuiTabPanel,
  TabPanelClassKey,
  TabPanelProps,
} from '@material-ui/lab/TabPanel';
import makeStyles from '../makeStyles';
import { useCustomClasses } from '../utils';

export * from '@material-ui/lab/TabPanel';

// subset of TabPanelClassKey
type CustomClassKey = 'root';

const useCustomStyles = makeStyles<CustomClassKey>(
  {
    root: {
      padding: 0,
    },
  },
  { name: 'MuiSparkTabPanel' }
);

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  function TabPanel({ classes, ...other }, ref) {
    const baseCustomClasses = useCustomStyles();

    const { otherClasses, customClasses } = useCustomClasses<
      TabPanelClassKey,
      CustomClassKey
    >({
      classes,
      baseCustomClasses,
    });

    return (
      <MuiTabPanel
        classes={{
          ...otherClasses,
          // can spread because CustomClassKey is a subset, see definition comment
          ...customClasses,
        }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default TabPanel;
