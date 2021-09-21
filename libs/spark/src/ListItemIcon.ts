import { Theme } from '@material-ui/core';

export { ListItemIcon } from '@material-ui/core';

export const MuiListItemIconStyleOverrides = ({ palette }: Theme) => ({
  root: {
    color: palette.text.onLightLowContrast,
    minWidth: 'unset',
    marginRight: 8,
    '& .MuiCheckbox-root': {
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
