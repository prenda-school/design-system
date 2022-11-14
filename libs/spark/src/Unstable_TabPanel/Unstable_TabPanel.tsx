import MuiTabPanel, {
  TabPanelProps as MuiTabPanelProps,
} from '@material-ui/lab/TabPanel';
import React, { forwardRef } from 'react';
import withStyles, { Styles } from '../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_TabPanelProps extends MuiTabPanelProps {}

export type Unstable_TabPanelClassKey = 'root';

const styles: Styles<Unstable_TabPanelClassKey> = {
  /* Styles applied to the root element. */
  root: {
    padding: 0,
  },
};

const Unstable_TabPanel = forwardRef<HTMLDivElement, Unstable_TabPanelProps>(
  function Unstable_TabPanel(props, ref) {
    const { classes, ...other } = props;

    return (
      <MuiTabPanel classes={{ root: classes.root }} ref={ref} {...other} />
    );
  }
);

export default withStyles(styles, {
  name: 'MuiSparkUnstable_TabPanel',
})(Unstable_TabPanel) as typeof Unstable_TabPanel;
