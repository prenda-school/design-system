import React, { FC } from 'react';
import { Checkbox as MatCheckbox, FormControlLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export type CheckboxProps = {
  disabled?: boolean;
  checked?: boolean;
  label: React.ReactNode;
  value: string | number;
  name: string;
};

export const Checkbox: FC<CheckboxProps> = props => {
  const { disabled, label } = props;

  const checkboxHoverStyles = !disabled 
    ? {
        '&:hover': {
          backgroundColor: 'inherit',
          color: '#0A4872'
        }
      } 
    : {};

  const checkedStyles = {
    color: '#2967A6',
    ...checkboxHoverStyles
  }

  const checkboxRootStyles = {
    color: '#D2D4D6',
    backgroundColor: "#FFF",
    borderRadius: '2px',
    width: '20px',
    height: '20px',
    '&$checked': {...checkedStyles},
    ...checkboxHoverStyles,
  } as CSSProperties;

  const StyledCheckbox = withStyles({
    root: checkboxRootStyles,
    checked: { ...checkedStyles }
  })(MatCheckbox);

  const disabledStyles = {
    color: 'rgba(7, 46, 68, 0.72)'
  }

  const StyledFormControlLabel = withStyles({
    root: { },
    label: {
      color: 'rgba(7, 46, 68, 0.72)',
      '&:hover': { color: '#072E44' },
      '&$disabled': { ...disabledStyles }
    },
    disabled: { ...disabledStyles }
  })(FormControlLabel)

  return (
    <StyledFormControlLabel label={label} disabled={disabled} control={<StyledCheckbox {...props}/>} />
  );
};
