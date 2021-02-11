import React, { FC } from 'react'
import { Button as MatButton } from '@material-ui/core';
import { ButtonProps as MatButtonProps } from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

type ButtonProps = {
  size?: 'large' | 'medium' | 'small',
  disabled: boolean,
}

export const Button: FC<ButtonProps | MatButtonProps> = (props) => {
  const { size, disabled } = props
  const height = (
    size === 'large' ? 48 :
    size === 'small' ? 24 :
    32
  )

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
      borderRadius: 100,
      height,
      color: '#FFF',
    },
  })(MatButton);

  return <StyledButton disableFocusRipple={true} { ...props }>
    {props.children}
  </StyledButton>;
}




