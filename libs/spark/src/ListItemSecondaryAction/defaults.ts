import type { ListItemSecondaryActionClassKey } from './ListItemSecondaryAction';
import type { StyleRules } from '../withStyles';

export const MuiListItemSecondaryActionStyleOverrides: Partial<
  StyleRules<ListItemSecondaryActionClassKey>
> = {
  root: {
    right: 8,
  },
};
