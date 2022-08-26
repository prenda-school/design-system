import type { ListItemAvatarClassKey } from './ListItemAvatar';
import type { StyleRules } from '../withStyles';

export const MuiListItemAvatarStyleOverrides: Partial<
  StyleRules<ListItemAvatarClassKey>
> = {
  root: {
    minWidth: 'unset',
    marginRight: 8,
  },
};
