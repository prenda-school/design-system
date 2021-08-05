import { palette } from './styles/palette';

export { ListItem } from '@material-ui/core';

export const MuiListItemStyleOverrides = {
  root: {
    '&$disabled': {
      color: palette.grey.dark,
    },
  },
};
