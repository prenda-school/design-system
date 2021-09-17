import type {
  ListItemTextClassKey,
  ListItemTextProps,
  StyleRules,
  Theme,
} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';

export default ListItemText;

export type { ListItemTextProps };

export const MuiListItemTextStyleOverrides = ({
  typography,
}: Theme): Partial<StyleRules<ListItemTextClassKey>> => ({
  primary: {
    ...typography['label-lg'],
  },
});
