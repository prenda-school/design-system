import * as React from 'react';
import { MenuItem, MenuItemClassKey, StyleRules } from '@material-ui/core';
import { palette } from './styles/palette';
import { typography } from './styles/typography';

export { MenuItem };

export const MuiMenuItemStyleOverrides: Partial<StyleRules<MenuItemClassKey>> = {
  root: {
    ...typography['label-lg'],
    boxSizing: 'border-box' as const,
    color: palette.text.onLight,
    minWidth: 228,
    minHeight: '2.125rem', // 34px
    border: '2px solid transparent',
    // have to separate to override
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 14,
    paddingLeft: 14,
    // margins collapse with other menu items
    margin: '4px 0',
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
    '&:focus': {
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
    '&$selected:focus': {
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
};
