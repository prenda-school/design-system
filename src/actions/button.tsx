import React, { FC, ReactElement } from 'react';
import { Button as MatButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

type Size = 'large' | 'medium' | 'small';

const getHeight = (size: Size) =>
  size === 'large' ? 48 : size === 'small' ? 24 : 32;
const getPadding = (size: Size) =>
  size === 'large' ? '12px 32px' : size === 'small' ? '8px 16px' : '12px 24px';
const getFontSize = (size: Size) =>
  size === 'large' ? '18px' : size === 'small' ? '12px' : '16px';

const getIconButtonStyles = (isIcon: boolean, size: Size) =>
  isIcon
    ? {
        height: getHeight(size),
        width: getHeight(size),
        minWidth: 'auto',
        padding: 'auto',
      }
    : {};

const getOutlineStyles = (outlined?: boolean) =>
  outlined
    ? {
        border: '2px solid #2967A6',
        backgroundColor: 'transparent',
        color: '#2967A6',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '#0A4872',
          borderColor: '#0A4872',
        },
        '&:focus': {
          boxShadow: '0px 0px 0px 4px #D7F3FF',
          backgroundColor: '#D7F3FF',
        },
      }
    : {};

const getDisabledOutlineStyles = (outlined?: boolean) =>
  outlined
    ? {
        backgroundColor: 'transparent',
        color: '#2967A6',
        border: '2px solid #2967A6',
      }
    : {};

const nonDisabledStyles = {
  backgroundColor: '#2967A6',
  '&:hover': {
    backgroundColor: '#0A4872',
  },
  '&:focus': {
    boxShadow: '0px 0px 0px 4px #D7F3FF',
  },
};

const getDisabledStyles = (disabled?: boolean, outlined?: boolean) =>
  disabled
    ? {
        '&:disabled': {
          backgroundColor: '#2967A6',
          opacity: 0.5,
          color: '#FFF',
          ...getDisabledOutlineStyles(outlined),
        },
      }
    : nonDisabledStyles;

const StyledButton = withStyles({
  root: (props: ButtonProps) => ({
    borderRadius: 100,
    height: getHeight(props.size),
    color: '#FFF',
    textTransform: 'none',
    padding: getPadding(props.size),
    fontSize: getFontSize(props.size),
    lineHeight: getFontSize(props.size),
    ...getDisabledStyles(props?.disabled, props.outlined),
    ...getIconButtonStyles(!!props.icon, props.size),
    ...getOutlineStyles(props.outlined),
  }),
})(MatButton);

export type ButtonProps = {
  size: 'large' | 'medium' | 'small';
  disabled?: boolean;
  icon?: ReactElement;
  outlined?: boolean;
};

export const Button: FC<ButtonProps> = props => {
  const { size, disabled, icon } = props;

  const styledIcon = icon
    ? React.cloneElement(icon, {
        style: {
          maxWidth:
            size === 'large' ? '20px' : size === 'medium' ? '16px' : '12px',
        },
      })
    : {};

  return (
    <StyledButton disabled={disabled} disableFocusRipple={true} {...props}>
      {icon ? styledIcon : props.children}
    </StyledButton>
  );
};
