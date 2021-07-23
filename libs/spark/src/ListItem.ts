import { palette } from './styles/palette';

export const MuiListItemStyleOverrides = {
  root: {
    '&$disabled': {
      color: palette.grey.dark,
    },
  },
};
