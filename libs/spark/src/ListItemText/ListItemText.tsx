import type { ListItemTextClassKey } from '@material-ui/core/ListItemText';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export { default } from '@material-ui/core/ListItemText';
export * from '@material-ui/core/ListItemText';

export const MuiListItemTextStyleOverrides = ({
  typography,
}: Theme): Partial<StyleRules<ListItemTextClassKey>> => ({
  primary: {
    ...typography['label-lg'],
  },
});
