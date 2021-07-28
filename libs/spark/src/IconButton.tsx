import * as React from 'react';
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@material-ui/core';
import clsx from 'clsx';
import { palette } from './styles/palette';
import { capitalize } from './utils';

export const MuiIconButtonDefaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
  variant: 'contained' as const,
  size: 'medium' as const,
};

export const MuiIconButtonStyleOverrides = {
  root: {
    borderRadius: '50%',
    borderWidth: 2,
    borderStyle: 'solid' as const,
    '&$disabled': {
      opacity: '50%',
    },
    '&:focus': {
      boxShadow: `0 0 0 4px ${palette.blue[1]}`,
    },
    '&.SparkIconButton-variantContained': {
      borderColor: palette.blue[3],
      backgroundColor: palette.blue[3],
      color: palette.common.white,
      '&:hover': {
        borderColor: palette.blue[4],
        backgroundColor: palette.blue[4],
      },
      '&:active': {
        borderColor: palette.blue[5],
      },
    },
    '&.SparkIconButton-variantOutlined': {
      borderColor: palette.grey.medium,
      backgroundColor: palette.common.white,
      color: palette.blue[3],
      '&:hover': {
        backgroundColor: palette.grey.light,
      },
      '&:active': {
        backgroundColor: palette.grey.light,
        borderColor: palette.blue[5],
      },
    },
    '&.SparkIconButton-variantText': {
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      color: palette.blue[3],
      '&:hover': {
        color: palette.blue[4],
        backgroundColor: 'transparent',
      },
      '&:focus': {
        borderColor: palette.blue[3],
        backgroundColor: palette.blue[1],
      },
      '&:active': {
        color: palette.blue[4],
      },
    },
    '&.SparkIconButton-sizeLarge': {
      padding: 10, // plus 2px border width for 12px
    },
    '&.SparkIconButton-sizeMedium': {
      padding: 4, // plus 2px border width for 6px
      '& > .MuiIconButton-label': {
        fontSize: '1.25rem', // 20px
        lineHeight: '1.25rem', // 20px
      },
    },
  },
  label: {
    color: 'inherit',
    fontSize: '1.5rem', // 24px
    lineHeight: '1.5rem', // 24px
    '& > .MuiSvgIcon-root': {
      color: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
    },
  },
  sizeSmall: {},
};

export interface IconButtonProps extends Omit<MuiIconButtonProps, 'size'> {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'large' | 'medium';
}

function SparkIconButton({
  className,
  variant = 'contained',
  size = 'large',
  children,
  ...other
}: IconButtonProps) {
  return (
    <MuiIconButton
      className={clsx(
        className,
        `SparkIconButton-variant${capitalize(variant)}`,
        `SparkIconButton-size${capitalize(size)}`
      )}
      {...other}
    >
      {children}
    </MuiIconButton>
  );
}

export { SparkIconButton as IconButton };
