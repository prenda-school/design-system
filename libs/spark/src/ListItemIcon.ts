import type { ListItemIconProps, Theme } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default ListItemIcon;

export type { ListItemIconProps };

export const MuiListItemIconStyleOverrides = ({ palette }: Theme) => ({
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
