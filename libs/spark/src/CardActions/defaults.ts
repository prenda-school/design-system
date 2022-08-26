import type { CardActionsClassKey } from './CardActions';
import type { StyleRules } from '../withStyles';

export const MuiCardActionsStyleOverrides: Partial<
  StyleRules<CardActionsClassKey>
> = {
  root: {
    padding: 24,
    justifyContent: 'flex-end',
  },
};
