import type { DividerProps, Theme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

export default Divider;

export type { DividerProps };

export const MuiDividerStyleOverrides = ({ palette }: Theme) => ({
  root: {
    height: 2,
    backgroundColor: palette.grey.medium,
  },
});
