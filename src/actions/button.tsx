import React, { FC, ReactElement } from 'react';
import { Button as MatButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { colors } from '../colors';

export type ButtonProps = {
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  icon?: ReactElement;
  outlined?: boolean;
};

export const Button: FC<ButtonProps> = props => {
  const { size, disabled, icon, outlined } = props;

  const height = size === 'large' ? 48 : size === 'small' ? 24 : 32;
  const padding =
    size === 'large'
      ? '12px 32px'
      : size === 'small'
      ? '8px 16px'
      : '12px 24px';
  const fontSize =
    size === 'large' ? '18px' : size === 'small' ? '12px' : '16px';

  const styledIcon = icon
    ? React.cloneElement(icon, {
        style: {
          maxWidth:
            size === 'large' ? '20px' : size === 'medium' ? '16px' : '12px',
        },
      })
    : {};

  const iconButtonStyles = icon
    ? {
        height,
        width: height,
        minWidth: 'auto',
        padding: 'auto',
      }
    : {};

  const outlineStyles = outlined
    ? {
        border: `2px solid ${colors.blue3}`,
        backgroundColor: 'transparent',
        color: colors.blue3,
        '&:hover': {
          backgroundColor: 'transparent',
          color: colors.blue4,
          borderColor: colors.blue4,
        },
        '&:focus': {
          boxShadow: `0px 0px 0px 4px ${colors.blue1}`,
          backgroundColor: colors.blue1,
        },
      }
    : {};

  const disabledOutlineStyles = outlined
    ? {
        backgroundColor: 'transparent',
        color: colors.blue3,
        border: `2px solid ${colors.blue3}`,
      }
    : {};

  const nonDisabledStyles = {
    backgroundColor: colors.blue3,
    '&:hover': {
      backgroundColor: colors.blue4,
    },
    '&:focus': {
      boxShadow: `0px 0px 0px 4px ${colors.blue1}`,
    },
  };

  const disabledStyles = disabled
    ? {
        '&:disabled': {
          backgroundColor: colors.blue3,
          opacity: 0.5,
          color: colors.neutralWhite,
          ...disabledOutlineStyles,
        },
      }
    : nonDisabledStyles;

  const buttonRootStyles = {
    borderRadius: 100,
    height,
    color: colors.neutralWhite,
    textTransform: 'none',
    padding,
    fontSize,
    lineHeight: fontSize,
    ...disabledStyles,
    ...iconButtonStyles,
    ...outlineStyles,
  } as CSSProperties;

  const StyledButton = withStyles({
    root: buttonRootStyles,
  })(MatButton);

  return (
    <StyledButton disabled={disabled} disableFocusRipple={true}>
      {icon ? styledIcon : props.children}
    </StyledButton>
  );
};
