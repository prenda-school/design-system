import {
  ListItemText,
  ListItemTextClassKey,
  StyleRules,
} from '@material-ui/core';
import { typography } from './styles/typography';

export { ListItemText };

export const MuiListItemTextStyleOverrides: Partial<
  StyleRules<ListItemTextClassKey>
> = {
  primary: {
    ...typography['label-lg'],
  },
};
