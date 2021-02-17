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
  const StyledFormHelperText = withStyles({
    root: {
      'font-size': '12px',
      'line-height': '18px',
      color: 'rgba(7, 46, 68, 0.72)',
    },
  })(MatFormHelperText);
  return <StyledFormHelperText>{props.label}</StyledFormHelperText>;
};

type SelectProps = {
  labelId: string;
  onChange: SelectInputProps['onChange'];
};

const Select: FC<SelectProps> = props => {

  console.log('Select props.onChange', props.onChange)

  const StyledSelect = withStyles({
    root: {
      border: '1px solid #D2D4D6',
      borderRadius: '8px',
      '&:blur': {
        border: '1px solid #498DCC',
        'box-sizing': 'border-box',
        'box-shadow': '0px 0px 0px 4px #D7F3FF',
        'border-radius': '8px',
      },
      '&:focus': {
        border: '1px solid #498DCC',
        'box-sizing': 'border-box',
        'box-shadow': '0px 0px 0px 4px #D7F3FF',
        'border-radius': '8px',
        backgroundColor: '#FFFFFF',
      },
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
  const StyledInputLabel = withStyles({
    root: {
      'font-weight': 700,
      color: '#072E44',
      'font-size': '16px',
      'line-height': '18px',
      top: '-5px',
      '&.Mui-focused': {
        color: '#072E44',
      },
    },
  })(MatInputLabel);
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
  menuItemValue: string;
};

const MenuItem: any = React.forwardRef<HTMLLIElement, MenuItemProps>(
  (props, ref) => {
    const StyledMenuItem = withStyles({})(MatMenuItem);
    return (
      <StyledMenuItem ref={ref} value={props.menuItemValue}>
        {props.displayName}
      </StyledMenuItem>
    );
  }
);

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
  const menuItems = props.menuOptions.map((o, i) => {
      return (<MenuItem
        key={`${props.menuId}-${i}`}
        menuItemValue={o.value}
        value={o.value}
        displayName={o.displayName}
      />)
    }
  );

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
