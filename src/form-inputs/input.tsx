import React, { FC } from 'react';
import {
  TextField as MatTextField,
  InputLabel as MatInputLabel,
  FormHelperText as MatFormHelperText,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

// TODO: apparently to alter the Input field underline, you need to pass InputProps as a prop? 
// Don't like the look of this, open to suggestions on changes.
export type InputProps = {
  inputId: string;
  label?: string;
  bottomInputLabel?: string;
  inputPlaceholder?: string;
  multiline?: boolean;
  rows?: number;
  InputProps?: string;
  hasError?: (val?: string) => boolean;
};

export const Input: FC<InputProps> = props => {
  const InputLabel = withStyles({
    root: {
      color: '#072E44',
      'margin-bottom': '0.2rem',
      'font-weight': 700,
      'font-size': '16px',
      'line-height': '18px',
      '&.Mui-focused': {
        color: '#072E44',
      },
    },
  })(MatInputLabel);

  const isError = props.hasError ? props.hasError() : false;

  const InputTextField = withStyles({
    root: {
      border: '1px solid #D2D4D6',
      'box-sizing': 'border-box',
      'border-radius': '8px',
      width: '320px',
      '& .MuiInputBase-input': {
        color: 'rgba(7, 46, 68, 0.72)',
        'padding-left': '16px',
      },
      '& .Mui-error': {
        border: '1px solid #DE5160',
        'box-sizing': 'border-box',
        'box-shadow': '0px 0px 0px 4px #F7D2DA',
        'border-radius': '8px',
        },
      '& .Mui-focused': {
        border: '1px solid #498DCC',
        'box-sizing': 'border-box',
        'box-shadow': '0px 0px 0px 4px #D7F3FF',
        'border-radius': '8px',
        '& .MuiInputBase-input': {
          color: '#072E44',
        },
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
      <InputLabel shrink>{props.label}</InputLabel>
      <InputTextField
        error={isError}
        id={props.inputId}
        defaultValue={props.inputPlaceholder}
        InputProps={{ disableUnderline: true }}
        multiline={props.multiline}
        rows={props.rows}
      ></InputTextField>
      <InputHelperText>{props.bottomInputLabel}</InputHelperText>
    </>
  );
};
