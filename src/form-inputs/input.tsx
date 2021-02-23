import React, { FC } from 'react';
import {
  TextField as MatTextField,
  InputLabel as MatInputLabel,
  FormHelperText as MatFormHelperText,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

//TODO: apparently to alter the Input field, you need to pass InputProps as a prop? Don't like the look of this,
// open to suggestions on changes.
export type InputProps = {
  inputId: string;
  label?: string;
  bottomInputLabel?: string;
  inputPlaceholder?: string;
  InputProps?: string;
};

export const Input: FC<InputProps> = props => {
  const InputLabel = withStyles({
    root: {
      color: '#072E44',
      top: '-5px',
      'font-weight': 700,
      'font-size': '12px',
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
      '& .MuiInputBase-input': {
        'padding-left': '16px',
      },
      '& .Mui-focused': {
        border: '1px solid #498DCC',
        'box-sizing': 'border-box',
        'box-shadow': '0px 0px 0px 4px #D7F3FF',
        'border-radius': '8px',
      },
    },
  })(MatTextField);

  const InputHelperText = withStyles({
    root: {
      color: 'rgba(7, 46, 68, 0.72)',
      'font-size': '10px',
      'line-height': '18px',
    },
  })(MatFormHelperText);

  return (
    <>
      <InputLabel>{props.label}</InputLabel>
      <InputTextField
        id={props.inputId}
        defaultValue={props.inputPlaceholder}
        InputProps={{ disableUnderline: true }}
      ></InputTextField>
      <InputHelperText>{props.bottomInputLabel}</InputHelperText>
    </>
  );
};
