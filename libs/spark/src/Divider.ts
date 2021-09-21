import { Divider, DividerProps, Theme } from '@material-ui/core';

export default Divider;

export type { DividerProps };

export const MuiDividerStyleOverrides = ({ palette }: Theme) => ({
  root: {
    height: 2,
    backgroundColor: palette.grey.medium,
  },
});
