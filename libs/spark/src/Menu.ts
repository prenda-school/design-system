import { palette } from './styles/palette';

export { Menu } from '@material-ui/core';
export type { MenuProps } from '@material-ui/core';

export const MuiMenuDefaultProps = {
  elevation: 4, // E400
};

export const MuiMenuStyleOverrides = {
  paper: {
    borderRadius: 8,
    '&.SparkMenu-paperOffsetTop': {
      marginTop: 8,
    },
  },
  list: {
    border: `2px solid ${palette.grey.medium}`,
    borderRadius: 8,
  },
};
