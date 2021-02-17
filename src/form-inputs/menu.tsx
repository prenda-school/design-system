import React, { FC } from 'react';
import {
  Select as MatSelect,
  InputLabel as MatInputLabel,
  FormControl as MatFormControl,
  MenuItem as MatMenuItem,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

type SelectProps = {
  labelId: string;
};

const Select: FC<SelectProps> = props => {
  const StyledSelect = withStyles({})(MatSelect);
  return <StyledSelect labelId={props.labelId}>{props.children}</StyledSelect>;
};

type InputLabelProps = {
  id: string;
};

const InputLabel: FC<InputLabelProps> = props => {
  const StyledInputLabel = withStyles({})(MatInputLabel);
  return <StyledInputLabel id={props.id}>{props.children}</StyledInputLabel>;
};

const FormControl: FC = props => {
  const StyledFormControl = withStyles({})(MatFormControl);
  return (
    <StyledFormControl variant="outlined">{props.children}</StyledFormControl>
  );
};

type MenuItemProps = {
  displayName: string;
  value: string;
};

const MenuItem: FC<MenuItemProps> = props => {
  const StyledMenuItem = withStyles({})(MatMenuItem);
  return (
    <StyledMenuItem value={props.value}>{props.displayName}</StyledMenuItem>
  );
};

export type MenuItemOptions = {
  displayName: string;
  value: string;
};

export type MenuProps = {
  menuId: string;
  label?: string;
  menuOptions: MenuItemOptions[];
};

export const Menu: FC<MenuProps> = props => {
  return (
    <FormControl>
      <InputLabel id={props.menuId}>{props.label}</InputLabel>
      <Select labelId={props.menuId}>{props.children}</Select>
      {props.menuOptions.map((o, i) => (
        <MenuItem
          key={`${props.menuId}-${i}`}
          value={o.value}
          displayName={o.displayName}
        />
      ))}
    </FormControl>
  );
};
