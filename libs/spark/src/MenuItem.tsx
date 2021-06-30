import * as React from 'react';
import { MenuItem, MenuItemProps as MuiMenuItemProps } from '@material-ui/core';
import { colors } from './theme/colors';

export interface MenuItemProps extends MuiMenuItemProps {
  startIcon?: React.ReactNode;
  // Fix mismatch on Mui's end
  button?: true | undefined;
}

export const MuiMenuItemStyleOverrides = {
  root: {
    boxSizing: 'border-box' as const,
    color: colors.colorsTextIconOnLightHighContrast,
    minWidth: 228,
    minHeight: '2.125rem', // 34px
    // Figma says 600 but that appears too heavy
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '1.125rem',
    // margins collapse with other menu items
    margin: '4px 0',
    '&:first-child': {
      marginTop: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
    '&:hover': {
      backgroundColor: colors.colorsPrendaLightGrey,
      '.SparkMenuItem-startIcon': {
        color: colors.colorsTextIconOnLightHighContrast,
      },
    },
    '&.Mui-focusVisible': {
      backgroundColor: colors.colorsBlue[1],
      '.SparkMenuItem-startIcon': {
        color: colors.colorsTextIconOnLightHighContrast,
      },
    },
    '&$disabled': {
      color: colors.colorsPrendaDarkGrey,
    },

    '.SparkMenuItem-startIcon': {
      display: 'inherit',
      marginRight: '.5rem', // 8px
      color: colors.colorsTextIconOnLightLowContrast,
    },
  },
};

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
