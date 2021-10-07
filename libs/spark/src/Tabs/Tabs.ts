import type { TabsProps, Theme } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';

export default Tabs;

export type { TabsProps };

export const MuiTabsDefaultProps = {
  indicatorColor: 'primary' as const,
  textColor: 'primary' as const,
};

export const MuiTabsStyleOverrides = ({ palette }: Theme) => ({
  root: {
    boxShadow: `inset 0 -2px ${palette.grey.medium}`,
  },
  flexContainer: {
    gap: 24,
  },
  indicator: {
    backgroundColor: palette.blue[3],
  },
});
