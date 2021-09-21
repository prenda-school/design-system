import {
  ListItemText,
  ListItemTextClassKey,
  StyleRules,
  Theme,
} from '@material-ui/core';

export { ListItemText };

export const MuiListItemTextStyleOverrides = ({
  typography,
}: Theme): Partial<StyleRules<ListItemTextClassKey>> => ({
  primary: {
    ...typography['label-lg'],
  },
});
