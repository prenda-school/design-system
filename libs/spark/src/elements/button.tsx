import React, { FC } from 'react';
import {
  ButtonBase as MuiButtonBase,
  ButtonBaseProps as MuiButtonBaseProps,
  Theme,
  createSvgIcon,
} from '@material-ui/core';
import styled from 'styled-components';
import clsx from 'clsx';
import { capitalize } from '../utils';

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

// TODO: remove me when icons are bug-free
// viewBox="0 0 24 24"
const CaretDownIcon = createSvgIcon(
  <path d="M6.69671 9.85355C6.50145 10.0488 6.50145 10.3654 6.69671 10.5607L11.6425 15.5064C11.7011 15.5651 11.7708 15.6061 11.8447 15.6295C12.0184 15.687 12.2174 15.6466 12.3556 15.5084L17.3033 10.5607C17.4986 10.3654 17.4986 10.0488 17.3033 9.85356L16.5962 9.14645C16.4009 8.95119 16.0844 8.95119 15.8891 9.14645L12 13.0355L8.11092 9.14645C7.91566 8.95118 7.59908 8.95118 7.40382 9.14645L6.69671 9.85355Z" />,
  'SparkCaretDown'
);
const UserIcon = createSvgIcon(
  <path d="M15.7128 13.7136C17.1058 12.6149 18 10.9119 18 9C18 5.68629 15.3137 3 12 3C8.6863 3 6.00001 5.68629 6.00001 9C6.00001 10.9119 6.89422 12.6149 8.28723 13.7136C5.36821 14.8898 3.22701 17.4152 3.01696 20.4999C2.9982 20.7754 3.22386 21 3.50001 21H4.50001C4.77615 21 4.99749 20.7754 5.02457 20.5006C5.31829 17.5204 8.21423 15 12 15C15.7858 15 18.6817 17.5204 18.9754 20.5006C19.0025 20.7754 19.2239 21 19.5 21H20.5C20.7761 21 21.0018 20.7754 20.9831 20.4999C20.773 17.4152 18.6318 14.8898 15.7128 13.7136ZM16 9C16 11.2091 14.2091 13 12 13C9.79087 13 8.00001 11.2091 8.00001 9C8.00001 6.79086 9.79087 5 12 5C14.2091 5 16 6.79086 16 9Z" />,
  'SparkUser'
);

export const Icons = {
  'caret-down': <CaretDownIcon />,
  user: <UserIcon />,
};
