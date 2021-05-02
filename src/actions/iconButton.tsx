import React, { FC } from 'react';
import {
  ButtonBase as MuiButtonBase,
  ButtonBaseProps as MuiButtonBaseProps,
  Theme,
} from '@material-ui/core';
import styled from 'styled-components';
import clsx from 'clsx';
import { capitalize } from '../utils';

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
    border-radius: 50%;

    // FROM-MUI
    text-align: center;
    flex: 0 0 auto;
    overflow: visible; // Explicitly set the default value to solve a bug on IE 11.

    &.Mui-focusVisible {
      box-shadow: 0 0 0 4px ${theme.palette.tertiary.blue[1]};
    }
    &.Mui-disabled {
      opacity: 50%;
    }

    &.SparkIconButton-variantSolid {
      border-color: ${theme.palette.tertiary.blue[3]};
      background-color: ${theme.palette.tertiary.blue[3]};
      color: white;
      &:hover {
        border-color: ${theme.palette.tertiary.blue[4]};
        background-color: ${theme.palette.tertiary.blue[4]};
      }
    }
    &.SparkIconButton-variantOutlined {
      border-color: ${theme.palette.neutral.mediumGrey};
      background-color: white;
      color: ${theme.palette.tertiary.blue[3]};
      &:hover {
        background-color: ${theme.palette.neutral.lightGrey};
      }
    }
    &.SparkIconButton-variantFlat {
      border-color: transparent;
      background-color: transparent;
      color: ${theme.palette.tertiary.blue[3]};
      &:hover {
        color: ${theme.palette.tertiary.blue[4]};
      }
      &.Mui-focusVisible {
        border-color: ${theme.palette.tertiary.blue[3]};
        background-color: ${theme.palette.tertiary.blue[1]};
      }
    }
    &.SparkIconButton-sizeLarge {
      font-size: 1.5rem; // 24px
      line-height: 1.5rem; // 24px
      padding: .75rem; // 12px
      & .SparkButton-content {
        height: 1.5rem; // 24px
      }
    }
    &.SparkIconButton-sizeMedium {
      font-size: 1.25rem; // 20px
      line-height: 1.25rem; // 20px
      padding: .375rem; // 6px
      & .SparkButton-content {
        height: 1.25rem; // 20px
      }
    }

    & .SparkIconButton-content {
      // FROM-MUI
      width: 100%; // Ensure the correct width for iOS Safari
      display: inherit;
      align-items: inherit;
      justify-content: inherit;
    }
  `}
`;

const SparkIconButton: FC<IconButtonProps> = ({
  className,
  variant = 'solid',
  size = 'medium',
  children,
  ...other
}) => {
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
      {/* FROM-MUI
       * The inner <span> is required to vertically align the children.
       * Browsers don't support `display: flex` on a <button> element.
       * https://github.com/philipwalton/flexbugs/blob/master/README.md#flexbug-9
       */}
      <span className="SparkIconButton-content">{children}</span>
    </ButtonBase>
  );
};

export { SparkIconButton as IconButton };
