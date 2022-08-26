import type { CardContentClassKey } from './CardContent';
import type { StyleRules } from '../withStyles';

export const MuiCardContentStyleOverrides: Partial<
  StyleRules<CardContentClassKey>
> = {
  root: {
    padding: '24px 24px 0',
  },
};
