import * as React from 'react';
import {
  default as MuiTabList,
  TabListTypeMap,
  TabListClassKey,
} from '@material-ui/lab/TabList';
import makeStyles from '../makeStyles';
import { OverridableComponent, useCustomClasses } from '../utils';

export * from '@material-ui/lab/TabList';

// subset of TabListClassKey
type CustomClassKey = 'root' | 'flexContainer' | 'indicator';

const useCustomStyles = makeStyles<CustomClassKey>(
  ({ palette }) => ({
    root: {
      boxShadow: `inset 0 -2px ${palette.grey.medium}`,
    },
    flexContainer: {
      gap: 24,
    },
    indicator: {
      backgroundColor: palette.blue[3],
    },
  }),
  { name: 'MuiSparkTabList' }
);

const TabList: OverridableComponent<TabListTypeMap> = React.forwardRef(
  function TabList(
    { classes, indicatorColor = 'primary', textColor = 'primary', ...other },
    ref
  ) {
    const baseCustomClasses = useCustomStyles();

    const { otherClasses, customClasses } = useCustomClasses<
      TabListClassKey,
      CustomClassKey
    >({
      classes,
      baseCustomClasses,
    });

    return (
      <MuiTabList
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

export default TabList;
