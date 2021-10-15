import type { ListClassKey } from './List';
import type { StyleRules } from '../withStyles';

export const MuiListStyleOverrides: Partial<StyleRules<ListClassKey>> = {
  subheader: {
    paddingTop: 8,
  },
};
