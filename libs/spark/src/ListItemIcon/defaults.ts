import type { ListItemIconClassKey } from './ListItemIcon';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiListItemIconStyleOverrides = ({
  palette,
}: Theme): Partial<StyleRules<ListItemIconClassKey>> => ({
  root: {
    color: palette.text.onLightLowContrast,
    minWidth: 'unset',
    marginRight: 8,
    '& [class*=MuiCheckbox-root]': {
      padding: 1,
    },
    '.Mui-selected > &': {
      color: palette.common.white,
      '& *[fill="#F0F1F2"]': {
        fill: palette.blue[3],
      },
    },
  },
});
