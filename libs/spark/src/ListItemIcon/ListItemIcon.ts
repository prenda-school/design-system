import type { Theme } from '../theme';

export { default } from '@material-ui/core/ListItemIcon';
export * from '@material-ui/core/ListItemIcon';

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
