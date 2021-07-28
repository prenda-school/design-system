import * as React from 'react';
import {
  ButtonBase as MuiButtonBase,
  ButtonBaseProps as MuiButtonBaseProps,
  Theme,
  styled,
} from '@material-ui/core';
import clsx from 'clsx';
import { capitalize } from './utils';

export interface IconButtonProps
  extends Omit<
    MuiButtonBaseProps,
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'centerRipple'
    | 'TouchRippleProps'
  > {
  variant?: 'solid' | 'outlined' | 'flat';
  size?: 'large' | 'medium';
}

// TODO: file Figma issue: all borders should be "outside" strokes; otherwise they should be box-shadows; the main issue produced is spacing discrepancies (e.g. 12px of padding, but a center stroke of 2px width cuts the padding by 1px inside to 11px in effect). NOTE: this does not apply to icons

export const ButtonBase = styled(MuiButtonBase)(({ theme }) => ({
  fontFamily: theme.typography.button.fontFamily,
  fontWeight: 700,
  borderRadius: 8,
  borderWidth: 2,
  borderStyle: 'solid',

  // FROM-MUI
  textAlign: 'center',
  flex: '0 0 auto',
  overflow: 'visible', // Explicitly set the default value to solve a bug on IE 11.

  '&.Mui-focusVisible, &:focus': {
    boxShadow: `0 0 0 4px ${theme.palette.blue[1]}`,
  },
  '&.Mui-disabled': {
    opacity: '50%',
  },

  '&.SparkIconButton-variantSolid': {
    borderColor: theme.palette.blue[3],
    backgroundColor: theme.palette.blue[3],
    '& > .MuiSvgIcon-root': {
      color: 'white',
    },
    '&:hover': {
      borderColor: theme.palette.blue[4],
      backgroundColor: theme.palette.blue[4],
    },
    '&:active': {
      borderColor: theme.palette.blue[5],
      color: theme.palette.blue[4],
    },
  },
  '&.SparkIconButton-variantOutlined': {
    borderColor: theme.palette.grey.medium,
    backgroundColor: 'white',
    '& > .MuiSvgIcon-root': {
      color: theme.palette.blue[3],
    },
    '&:hover': {
      backgroundColor: theme.palette.grey.light,
    },
    '&:active': {
      backgroundColor: theme.palette.grey.light,
      borderColor: theme.palette.blue[5],
    },
  },
  '&.SparkIconButton-variantFlat': {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    '& > .MuiSvgIcon-root': {
      color: theme.palette.blue[3],
    },
    '&:hover': {
      color: theme.palette.blue[4],
    },
    '&.Mui-focusVisible, &:focus': {
      borderColor: theme.palette.blue[3],
      backgroundColor: theme.palette.blue[1],
    },
    '&:active': {
      color: theme.palette.blue[4],
    },
  },
  '&.SparkIconButton-sizeLarge': {
    padding: '.675rem', // 10px (plus 2px border width for 12px)
    '& > .MuiSvgIcon-root': {
      fontSize: '1.5rem', // 24px
      lineHeight: '1.5rem', // 24px
    },
  },
  '&.SparkIconButton-sizeMedium': {
    padding: '.25rem', // 4px (plus 2px border width for 6px)
    '& > .MuiSvgIcon-root': {
      fontSize: '1.25rem', // 20px
      lineHeight: '1.25rem', // 20px
    },
  },
}));

function SparkIconButton({
  className,
  variant = 'solid',
  size = 'large',
  children,
  ...other
}: IconButtonProps) {
  return (
    <ButtonBase
      disableRipple={true}
      disableTouchRipple={true}
      focusRipple={false}
      className={clsx(
        className,
        'SparkIconButton-root',
        `SparkIconButton-variant${capitalize(variant)}`,
        `SparkIconButton-size${capitalize(size)}`
      )}
      {...other}
    >
      {children}
    </ButtonBase>
  );
}

export { SparkIconButton as IconButton };
