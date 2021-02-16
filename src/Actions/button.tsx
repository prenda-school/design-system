import React, { FC, ReactElement } from 'react';
import { Button as MatButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export type ButtonProps = {
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  icon?: ReactElement;
  outlined?: boolean}

export const Button: FC<ButtonProps> = (props) => {
  const { size, disabled, icon, outlined } = props;

  const height = size === 'large' ? 48 : size === 'small' ? 24 : 32;

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
      }
    : {};

  const outlineStyles = outlined
    ? {
        border: '2px solid #2967A6',
        backgroundColor: 'transparent',
        color: '#2967A6',
      }
    : {};

  const disabledOutlineStyles = outlined
    ? {
        backgroundColor: 'transparent',
        color: '#2967A6',
        border: '2px solid ##2967A6',
      }
    : {};

  const nonDisabledStyles = {
    backgroundColor: '#2967A6',
    '&:hover': {
      backgroundColor: '#0A4872',
    },
    '&:focus': {
      border: '4px solid #498DCC',
    },
  };

  const disabledStyles = disabled
    ? {
        '&:disabled': {
          backgroundColor: '#2967A6',
          opacity: 0.5,
          color: '#FFF',
          ...disabledOutlineStyles,
        },
      }
    : nonDisabledStyles;

  const buttonRootStyles = {
    borderRadius: 100,
    height,
    color: '#FFF',
    textTransform: 'none',
    ...disabledStyles,
    ...iconButtonStyles,
    ...outlineStyles,
  } as CSSProperties;

  const StyledButton = withStyles({
    root: buttonRootStyles,
  })(MatButton);

  return (
    <StyledButton disableFocusRipple={true} {...props}>
      {icon ? styledIcon : props.children}
    </StyledButton>
  );
};
