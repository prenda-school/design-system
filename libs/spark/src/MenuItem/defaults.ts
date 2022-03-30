import type { MenuItemClassKey } from './MenuItem';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiMenuItemStyleOverrides = ({
  palette,
  typography,
}: Theme): Partial<StyleRules<MenuItemClassKey>> => ({
  root: {
    ...typography['label-lg'],
    boxSizing: 'border-box' as const,
    color: palette.text.dark,
    minWidth: 228,
    minHeight: '2.125rem', // 34px
    border: '2px solid transparent',
    // have to separate to override
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 14,
    paddingLeft: 14,
    margin: 0,
    '&:first-child': {
      marginTop: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
    '&:hover': {
      backgroundColor: palette.grey.light,
      borderColor: palette.grey.light,
    },
    '&:focus-visible': {
      backgroundColor: palette.grey.light,
      borderColor: palette.blue[4],
    },
    '&:active': {
      backgroundColor: palette.grey.medium,
      borderColor: palette.blue[4],
    },

    '&$selected': {
      backgroundColor: palette.blue[3],
      borderColor: palette.blue[3],
      color: palette.common.white,
    },
    '&$selected:hover': {
      backgroundColor: palette.blue[4],
      borderColor: palette.blue[4],
      color: palette.common.white,
    },
    '&$selected:focus-visible': {
      backgroundColor: palette.blue[3],
      borderColor: palette.blue[5],
      color: palette.common.white,
    },
    '&$selected:active': {
      backgroundColor: palette.blue[4],
      borderColor: palette.blue[5],
      color: palette.common.white,
    },
  },
});
