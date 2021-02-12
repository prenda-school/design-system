import React, { FC, ReactElement } from 'react'
import { Button as MatButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export type ButtonProps = {
  size?: 'large' | 'medium' | 'small',
  disabled?: boolean,
  icon?: ReactElement
}

export const Button: FC<ButtonProps> = (props) => {
  const { size, disabled, icon } = props
  const height = (
    size === 'large' ? 48 :
    size === 'small' ? 24 :
    32
  )

  const styledIcon = icon ? React.cloneElement(icon, {
    style: {
      maxWidth: (
        size === 'large' ? '20px' :
        size === 'medium' ? '16px' :
        '12px'
      ),
    }
  }) : {}

  const iconButtonStyles = {
    height,
    width: height,
    minWidth: 'auto'
  }

  const disabledStyles = {
    "&:disabled": {
      backgroundColor: '#2967A6',
      opacity: 0.5,
      color: '#FFF',
    }
  }

  const nonDisabledStyles = { 
    backgroundColor: '#2967A6',
    '&:hover': {
      backgroundColor: "#0A4872",
    },
    "&:focus": {
      border: '4px solid #498DCC',
    }
  }

  const StyledButton = withStyles({
    root: {
      ...(disabled ? disabledStyles : nonDisabledStyles),
      ...(icon ? iconButtonStyles : {}),
      borderRadius: 100,
      height,
      color: '#FFF',
      textTransform: 'none',
    },
  })(MatButton);

  return <StyledButton disableFocusRipple={true} { ...props }>
    { icon ? styledIcon : props.children } 
  </StyledButton>;
}




