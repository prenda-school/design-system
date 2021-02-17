import React, { FC } from 'react';
import {
  Select as MatSelect,
  InputLabel as MatInputLabel,
  FormControl as MatFormControl,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const Select: FC = props => {
  const StyledSelect = withStyles({})(MatSelect);
  return <StyledSelect>{props.children}</StyledSelect>;
};

type InputLabelProps = {
  labelId: string;
};

const InputLabel: FC<InputLabelProps> = props => {
  const StyledInputLabel = withStyles({})(MatInputLabel);
  return (
    <StyledInputLabel id={props.labelId}>{props.children}</StyledInputLabel>
  );
};

const FormControl: FC = props => {
  const StyledFormControl = withStyles({})(MatFormControl);
  return (
    <StyledFormControl variant="outlined">{props.children}</StyledFormControl>
  );
};

export type MenuProps = {
  menuId: string;
  label?: string;
};

export const Menu: FC<MenuProps> = props => {
  return (
    <FormControl>
      <InputLabel labelId={props.menuId}>{props.label}</InputLabel>
      <Select>{props.children}</Select>
    </FormControl>
  );
};
