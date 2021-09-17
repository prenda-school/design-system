import { ListItem, Theme } from '@material-ui/core';

export { ListItem };

export const MuiListItemStyleOverrides = ({ palette, transitions }: Theme) => ({
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
});
