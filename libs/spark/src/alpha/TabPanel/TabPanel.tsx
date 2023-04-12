import MuiTabPanel, {
  TabPanelProps as MuiTabPanelProps,
} from '@material-ui/lab/TabPanel';
import React, { forwardRef } from 'react';
import withStyles, { Styles } from '../../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabPanelProps extends MuiTabPanelProps {}

export type TabPanelClassKey = 'root';

const styles: Styles<TabPanelClassKey> = {
  /* Styles applied to the root element. */
  root: {
    padding: 0,
  },
};

const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(function TabPanel(
  props,
  ref
) {
  const { classes, ...other } = props;

  return <MuiTabPanel classes={{ root: classes.root }} ref={ref} {...other} />;
});

export default withStyles(styles, {
  name: 'MuiSpark_alpha_TabPanel',
})(TabPanel) as typeof TabPanel;
