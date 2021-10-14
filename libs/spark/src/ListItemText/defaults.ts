import type { ListItemTextClassKey } from './ListItemText';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiListItemTextStyleOverrides = ({
  typography,
}: Theme): Partial<StyleRules<ListItemTextClassKey>> => ({
  primary: {
    ...typography['label-lg'],
  },
});
