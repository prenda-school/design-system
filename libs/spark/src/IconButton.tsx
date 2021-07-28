import React from 'react';
import {
  ButtonBase as MuiButtonBase,
  ButtonBaseProps as MuiButtonBaseProps,
  Theme,
} from '@material-ui/core';
import styled from 'styled-components';
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

export const ButtonBase = styled(MuiButtonBase)`
  ${({ theme }: { theme: Theme }) => `
    font-family: ${theme.typography.button.fontFamily};
    font-weight: 700;
    border-radius: 8px;
    border-width: 2px;
    border-style: solid;
    border-radius: 8px;

    // FROM-MUI
    text-align: center;
    flex: 0 0 auto;
    overflow: visible; // Explicitly set the default value to solve a bug on IE 11.

    &.Mui-focusVisible, &:focus {
      box-shadow: 0 0 0 4px ${theme.palette.blue[1]};
    }
    &.Mui-disabled {
      opacity: 50%;
    }

    &.SparkIconButton-variantSolid {
      border-color: ${theme.palette.blue[3]};
      background-color: ${theme.palette.blue[3]};
      & > .MuiSvgIcon-root {
        color: white;
      }
      &:hover {
        border-color: ${theme.palette.blue[4]};
        background-color: ${theme.palette.blue[4]};
      }
      &:active {
        border-color: ${theme.palette.blue[5]};
        color: ${theme.palette.blue[4]}
      }
    }
    &.SparkIconButton-variantOutlined {
      border-color: ${theme.palette.grey.medium};
      background-color: white;
      & > .MuiSvgIcon-root {
        color: ${theme.palette.blue[3]};
      }
      &:hover {
        background-color: ${theme.palette.grey.light};
      }
      &:active {
        background-color: ${theme.palette.grey.light};
        border-color: ${theme.palette.blue[5]};
      }
    }
    &.SparkIconButton-variantFlat {
      border-color: transparent;
      background-color: transparent;
      & > .MuiSvgIcon-root {
        color: ${theme.palette.blue[3]};
      }
      &:hover {
        color: ${theme.palette.blue[4]};
      }
      &.Mui-focusVisible, &:focus {
        border-color: ${theme.palette.blue[3]};
        background-color: ${theme.palette.blue[1]};
      }
      &:active {
        color: ${theme.palette.blue[4]};
      }
    }
    &.SparkIconButton-sizeLarge {
      padding: .675rem; // 10px (plus 2px border width for 12px)
      & > .MuiSvgIcon-root {
        font-size: 1.5rem; // 24px
        line-height: 1.5rem; // 24px
      }
    }
    &.SparkIconButton-sizeMedium {
      padding: .25rem; // 4px (plus 2px border width for 6px)
      & > .MuiSvgIcon-root {
        font-size: 1.25rem; // 20px
        line-height: 1.25rem; // 20px
      }
    }
  `}
`;

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
