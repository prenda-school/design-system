import type { ListItemClassKey } from './ListItem';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiListItemStyleOverrides = ({
  palette,
  transitions,
}: Theme): Partial<StyleRules<ListItemClassKey>> => ({
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
