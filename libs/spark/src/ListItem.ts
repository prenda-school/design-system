import type { ListItemProps, Theme } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';

export default ListItem;

export type { ListItemProps };

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
