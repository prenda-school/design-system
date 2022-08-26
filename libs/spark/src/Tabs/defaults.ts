import type { TabsClassKey, TabsProps } from './Tabs';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiTabsDefaultProps: Partial<TabsProps> = {
  indicatorColor: 'primary' as const,
  textColor: 'primary' as const,
};

export const MuiTabsStyleOverrides = ({
  palette,
}: Theme): Partial<StyleRules<TabsClassKey>> => ({
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
