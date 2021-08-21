import { Divider, DividerProps } from '@material-ui/core';
import { palette } from './styles/palette';

export default Divider;

export type { DividerProps };

export const MuiDividerStyleOverrides = {
  root: {
    height: 2,
    backgroundColor: palette.grey.medium,
  },
};
