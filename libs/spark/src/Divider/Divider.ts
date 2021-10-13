import type { Theme } from '../theme';

export { default } from '@material-ui/core/Divider';
export * from '@material-ui/core/Divider';

export const MuiDividerStyleOverrides = ({ palette }: Theme) => ({
  root: {
    height: 2,
    backgroundColor: palette.grey.medium,
  },
});
