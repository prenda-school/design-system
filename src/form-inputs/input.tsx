import React, { FC } from 'react';
import {
  TextField as MatTextField,
  InputLabel as MatInputLabel,
  FormHelperText as MatFormHelperText,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

export type InputProps = {
  inputId: string;
  label?: string;
  bottomInputLabel?: string;
  inputPlaceholder?: string;
};

export const Input: FC<InputProps> = props => {

  const InputLabel = withStyles({
    root: {
      color: '#072E44',
      top: '-5px',
      'font-weight': 700,
      'font-size': '10px',
      'line-height': '18px',
      '&.Mui-focused': {
        color: '#072E44',
      },
    },
  })(MatInputLabel);

  const InputTextField = withStyles({
    root: {
      border: '1px solid #D2D4D6',
      'box-sizing': 'border-box',
      'border-radius': '8px',
      'padding-left': '16px',
      
    },
  })(MatTextField);

  const InputHelperText = withStyles({
    root: {
      color: 'rgba(7, 46, 68, 0.72)',
      'font-size': '8px',
      'line-height': '18px',
    },
  })(MatFormHelperText);


  return (
    <div>
      <InputLabel>{props.label}</InputLabel>
      <InputTextField
        defaultValue={props.inputPlaceholder}
      ></InputTextField>
      <InputHelperText>{props.bottomInputLabel}</InputHelperText>
    </div>
  );
};
