import type { TabPanelClassKey } from './TabPanel';
import type { StyleRules } from '../withStyles';

export const MuiTabPanelStyleOverrides: Partial<
  StyleRules<TabPanelClassKey>
> = {
  root: {
    padding: 0,
  },
};
