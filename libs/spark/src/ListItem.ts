import { ListItem } from '@material-ui/core';
import { palette } from './styles/palette';
import { transitions } from './styles/transitions';

export { ListItem };

export const MuiListItemStyleOverrides = {
  root: {
    '&$disabled': {
      color: palette.grey.dark,
    },
  },
  button: {
    transition: transitions.create(['background-color', 'border-color'], {
      duration: transitions.duration.shortest,
    }),
  },
};
