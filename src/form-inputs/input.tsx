import React, { FC } from 'react';
import { TextField as MatTextField } from '@material-ui/core/';

export type InputProps = {
  inputId: string;
  label?: string;
  bottomInputLabel?: string;
  inputPlaceholder?: string;
};

export const Input: FC<InputProps> = props => {
  return (
    <MatTextField
      id={props.inputId}
      label={props.label}
      defaultValue={props.inputPlaceholder}
      helperText={props.bottomInputLabel}
    />
  );
};
