import React, { FC } from 'react';
import {
  Select as MatSelect,
  InputLabel as MatInputLabel,
  FormControl as MatFormControl,
  MenuItem as MatMenuItem,
  FormHelperText as MatFormHelperText,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { SelectInputProps } from '@material-ui/core/Select/SelectInput';

type FormHelperTextProps = {
  label?: string;
};

const FormHelperText: FC<FormHelperTextProps> = props => {
  const StyledFormHelperText = withStyles({})(MatFormHelperText);
  return <StyledFormHelperText>{props.label}</StyledFormHelperText>;
};

type SelectProps = {
  labelId: string;
  onChange: SelectInputProps['onChange'];
};

const Select: FC<SelectProps> = props => {
  const StyledSelect = withStyles({
    root: {
      border: '1px solid #D2D4D6',
      borderRadius: '8px',
    },
  })(MatSelect);
  return (
    <StyledSelect
      onChange={props.onChange}
      labelId={props.labelId}
      disableUnderline
    >
      {props.children}
    </StyledSelect>
  );
};

type InputLabelProps = {
  id: string;
};

const InputLabel: FC<InputLabelProps> = props => {
  const StyledInputLabel = withStyles({})(MatInputLabel);
  return (
    <StyledInputLabel shrink id={props.id}>
      {props.children}
    </StyledInputLabel>
  );
};

type FormControlInput = {
  minWidth: number;
};

const FormControl: FC<FormControlInput> = props => {
  const StyledFormControl = withStyles({})(MatFormControl);
  return (
    <StyledFormControl style={{ minWidth: props.minWidth }}>
      {props.children}
    </StyledFormControl>
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
  bottomFormLabel?: string;
  selectPlaceholder?: string;
  menuOptions: MenuItemOptions[];
  minWidth?: number;
  onChange: SelectInputProps['onChange'];
};

export const Menu: FC<MenuProps> = props => {
  const menuItems = props.menuOptions.map((o, i) => (
    <MenuItem
      key={`${props.menuId}-${i}`}
      value={o.value}
      displayName={o.displayName}
    />
  ));

  return (
    <FormControl minWidth={props.minWidth || 100}>
      <InputLabel id={props.menuId}>{props.label}</InputLabel>
      <Select onChange={props.onChange} labelId={props.menuId}>
        {menuItems}
      </Select>
      <FormHelperText label={props.bottomFormLabel} />
    </FormControl>
  );
};

{
  /* <FormControl className={classes.formControl}>
  <InputLabel shrink id="demo-simple-select-placeholder-label-label">
    Age
  </InputLabel>
  <Select
    labelId="demo-simple-select-placeholder-label-label"
    id="demo-simple-select-placeholder-label"
    value={age}
    onChange={handleChange}
    displayEmpty
    className={classes.selectEmpty}
  >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
  <FormHelperText>Label + placeholder</FormHelperText>
</FormControl> */
}
