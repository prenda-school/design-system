import * as React from 'react';
import {
  MenuItem,
  MenuItemProps as MuiMenuItemProps,
  MenuItemClassKey,
  StyleRules,
} from '@material-ui/core';
import { palette } from './styles/palette';
import { typography } from './styles/typography';

export const MuiMenuItemStyleOverrides: Partial<
  StyleRules<MenuItemClassKey>
> = {
  root: {
    boxSizing: 'border-box' as const,
    color: palette.text.onLight,
    minWidth: 228,
    minHeight: '2.125rem', // 34px
    ...typography['label-lg'],
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
      '.SparkMenuItem-startIcon': {
        color: palette.text.onLight,
      },
    },
    '&.Mui-focusVisible': {
      backgroundColor: palette.blue[1],
      '.SparkMenuItem-startIcon': {
        color: palette.text.onLight,
      },
    },

    '.SparkMenuItem-startIcon': {
      display: 'inherit',
      marginRight: '.5rem', // 8px
      color: palette.text.onLightLowContrast,
    },
  },
};

export interface MenuItemProps extends MuiMenuItemProps {
  startIcon?: React.ReactNode;
  // Fix mismatch on Mui's end
  button?: true | undefined;
}

const SparkMenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ startIcon, children, ...other }, ref) => {
    return (
      <MenuItem ref={ref} {...other}>
        {startIcon ? (
          <span className="SparkMenuItem-startIcon">{startIcon}</span>
        ) : null}
        {children}
      </MenuItem>
    );
  }
);

export { SparkMenuItem as MenuItem };
