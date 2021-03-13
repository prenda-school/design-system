import React, { FC, ReactElement } from 'react';
import { Button as MatButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

type Size = 'large' | 'medium' | 'small';

const StyledButton = withStyles(theme => {
  const { blue } = theme.palette.tertiary;
  const { background } = theme.palette;

  const getHeight = (size: Size) =>
    size === 'large' ? 48 : size === 'small' ? 24 : 32;
  const getPadding = (size: Size) =>
    size === 'large'
      ? '12px 32px'
      : size === 'small'
      ? '8px 16px'
      : '12px 24px';
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
          border: `2px solid ${blue[3]}`,
          backgroundColor: 'transparent',
          color: blue[3],
          '&:hover': {
            backgroundColor: 'transparent',
            color: blue[4],
            borderColor: blue[4],
          },
          '&:focus': {
            boxShadow: `0px 0px 0px 4px ${blue[1]}`,
            backgroundColor: background.lightBlue,
          },
        }
      : {};

  const getDisabledOutlineStyles = (outlined?: boolean) =>
    outlined
      ? {
          backgroundColor: 'transparent',
          color: blue[3],
          border: `2px solid ${blue[3]}`,
        }
      : {};

  const nonDisabledStyles = {
    backgroundColor: blue[3],
    '&:hover': {
      backgroundColor: background.blue,
    },
    '&:focus': {
      boxShadow: `0px 0px 0px 4px ${blue[1]}`,
    },
  };

  const getDisabledStyles = (disabled?: boolean, outlined?: boolean) =>
    disabled
      ? {
          '&:disabled': {
            backgroundColor: blue[3],
            opacity: 0.5,
            color: theme.palette.neutral.white,
            ...getDisabledOutlineStyles(outlined),
          },
        }
      : nonDisabledStyles;

  return {
    root: (props: ButtonProps) => ({
      borderRadius: 100,
      height: getHeight(props.size),
      color: theme.palette.neutral.white,
      textTransform: 'none',
      padding: getPadding(props.size),
      fontSize: getFontSize(props.size),
      lineHeight: getFontSize(props.size),
      ...getDisabledStyles(props?.disabled, props.outlined),
      ...getIconButtonStyles(!!props.icon, props.size),
      ...getOutlineStyles(props.outlined),
    }),
  };
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
