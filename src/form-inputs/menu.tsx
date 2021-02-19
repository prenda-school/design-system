import React, { FC, useState } from 'react';
import {
  Select as MatSelect,
  InputLabel as MatInputLabel,
  FormControl as MatFormControl,
  MenuItem as MatMenuItem,
  FormHelperText as MatFormHelperText,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { SelectInputProps } from '@material-ui/core/Select/SelectInput';
import styled from 'styled-components';

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
  value: string;
  renderValue: ((value: unknown) => React.ReactNode) | undefined;
};

const Select: FC<SelectProps> = props => {
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
      displayEmpty
      onChange={props.onChange}
      labelId={props.labelId}
      disableUnderline
      value={props.value}
      name={props.value}
      renderValue={props.renderValue}
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

/**
 * Want to get this componenet working, but issues extracting value with ref.
 */
// type MenuItemProps = {
//   displayName?: string;
//   menuItemValue: string;
// };

// const MenuItem: FC<MenuItemProps> = props => {
//   // const StyledMenuItem = withStyles({})(MatMenuItem);
//   return (
//     <MatMenuItem value={props.menuItemValue}>
//       {props.children}
//     </MatMenuItem>
//   );
// }


const RenderContainer = styled.div`
  padding-left: 5px;
`

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
  value: string;
};

export const Menu: FC<MenuProps> = props => {
  const [selectVal, setSelectVal] = useState('')
  
  const menuItems = props.menuOptions.map((o, i) => {
      const StyledMenuItem = withStyles({})(MatMenuItem);
      return (<StyledMenuItem
        key={`${props.menuId}-${i}`}
        value={o.value}
      >{o.displayName}</StyledMenuItem>)
    }
  );

  const handleOnChange = (
    evt: React.ChangeEvent<{
      name?: string;
      value: unknown;
    }>,
    child: React.ReactNode
  ) => {
    setSelectVal(evt.target.value as string)
    props.onChange && props.onChange(evt, child)
  };

  return (
    <FormControl minWidth={props.minWidth || 100}>
      <InputLabel id={props.menuId}>{props.label}</InputLabel>
      <Select 
        onChange={handleOnChange} 
        labelId={props.menuId} 
        value={props.value}
        renderValue={() => {
          return (<RenderContainer>{props.menuOptions.find(o => {
            return o.value === selectVal
          })?.displayName}</RenderContainer>)
        }}
      >
        {menuItems}
      </Select>
      <FormHelperText label={props.bottomFormLabel} />
    </FormControl>
  );
};
