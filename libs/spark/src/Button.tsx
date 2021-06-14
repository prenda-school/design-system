import React, { FC } from 'react';
import {
  ButtonBase as MuiButtonBase,
  ButtonBaseProps as MuiButtonBaseProps,
  Theme,
} from '@material-ui/core';
import styled from 'styled-components';
import clsx from 'clsx';
import { capitalize } from './utils';

export interface ButtonProps
  extends Omit<
    MuiButtonBaseProps,
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'centerRipple'
    | 'TouchRippleProps'
  > {
  variant?: 'solid' | 'outlined' | 'flat';
  size?: 'large' | 'medium' | 'small';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

// TODO: file Figma issue: all borders should be "outside" strokes; otherwise they should be box-shadows; the main issue produced is spacing discrepancies (e.g. 12px of padding, but a center stroke of 2px width cuts the padding by 1px inside to 11px in effect). NOTE: this does not apply to icons

export const ButtonBase = styled(MuiButtonBase)`
  ${({ theme }: { theme: Theme }) => `
    font-family: ${theme.typography.button.fontFamily};

    font-size: 1rem; // 16px;
    line-height: 1.125rem; // 18px;
    font-weight: 700;
    border-radius: 8px;
    border-width: 2px;
    border-style: solid;

      // FROM-MUI
    box-sizing: border-box;
    transition: ${theme.transitions.create(
      ['background-color', 'box-shadow', 'border'],
      {
        duration: theme.transitions.duration.short,
      }
    )};
    
    &.Mui-focusVisible {
      box-shadow: 0 0 0 4px ${theme.palette.tertiary.blue[1]};
    }
    &.Mui-disabled {
      opacity: 50%;
    }

        &.SparkButton-variantSolid {
      border-color: ${theme.palette.tertiary.blue[3]};
      background-color: ${theme.palette.tertiary.blue[3]};
      color: white;
      &:hover {
        border-color: ${theme.palette.tertiary.blue[4]};
        background-color: ${theme.palette.tertiary.blue[4]};
      }
    }
    &.SparkButton-variantOutlined {
      border-color: ${theme.palette.neutral.mediumGrey};
      background-color: white;
      color: ${theme.palette.tertiary.blue[3]};
      &:hover {
        background-color: ${theme.palette.neutral.lightGrey};
      }
    }
    &.SparkButton-variantFlat {
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
    // Y-paddings are subtracted by 2 to account for border-width
    &.SparkButton-sizeLarge {
      font-size: 1.125rem; // 18px
      padding: .675rem 1rem; // 12-2px 16px
      & .SparkButton-content {
        height: 1.5rem; // 24px
      }
    }
    &.SparkButton-sizeMedium {
      padding: .25rem 1rem; // 6-2px 16px
      & .SparkButton-content {
        height: 1.25rem; // 20px
      }
    }
    &.SparkButton-sizeSmall {
      font-size: 0.75rem; // 12px
      line-height: 0.75rem; // 12px
      padding: .125rem 1rem; // 4-2px 16px
      & .SparkButton-content {
        height: 1rem; // 16px
      }
    }

        & .SparkButton-content {
      // FROM-MUI
      width: 100%; // Ensure the correct width for iOS Safari
      display: inherit;
      align-items: inherit;
      justify-content: inherit;
    }

        & .SparkButton-startIcon {
      display: inherit;
      margin-right: .5rem; // 8px
    }
    & .SparkButton-endIcon {
      display: inherit;
      margin-left: .5rem; // 8px
    }

        & .SparkButton-iconSizeSmall {
      font-size: 1rem; // 16px
    }
    & .SparkButton-iconSizeMedium {
      font-size: 1.25rem; // 20px
    }
    & .SparkButton-iconSizeLarge {
      font-size: 1.5rem; // 24px
    }
  `}
`;

const SparkButton: FC<ButtonProps> = ({
  className,
  variant = 'solid',
  size = 'medium',
  children,
  startIcon,
  endIcon,
  ...other
}) => {
  return (
    <ButtonBase
      disableRipple={true}
      disableTouchRipple={true}
      focusRipple={false}
      className={clsx(
        className,
        'SparkButton-root',
        `SparkButton-variant${capitalize(variant)}`,
        `SparkButton-size${capitalize(size)}`
      )}
      {...other}
    >
      {/* FROM-MUI
       * The inner <span> is required to vertically align the children.
       * Browsers don't support `display: flex` on a <button> element.
       * https://github.com/philipwalton/flexbugs/blob/master/README.md#flexbug-9
       */}
      <span className="SparkButton-content">
        {startIcon ? (
          <span
            className={clsx(
              'SparkButton-startIcon',
              `SparkButton-iconSize${capitalize(size)}`
            )}
          >
            {startIcon}
          </span>
        ) : null}
        {children}
        {endIcon ? (
          <span
            className={clsx(
              'SparkButton-endIcon',
              `SparkButton-iconSize${capitalize(size)}`
            )}
          >
            {endIcon}
          </span>
        ) : null}
      </span>
    </ButtonBase>
  );
};

export { SparkButton as Button };