import type { Theme } from '../theme';

export { default } from '@material-ui/core/Tabs';
export * from '@material-ui/core/Tabs';

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
