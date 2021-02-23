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

const RenderContainer = styled.div`
  padding-left: 5px;
  padding-top: 2px;
  font-size: 16px;
  line-height: 18px;
`;

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
  /**
   * Selection handling
   *
   * TODO:
   *    Optimize selection handling we should
   *    need to have an internal useState within
   *    this component. We should find a way to
   *    reference the value prop of this component
   *    when determining which selected value to
   *    render.
   *
   *    The current issue is that this
   *    component is not re-rendering when the
   *    value changes.
   *
   *    Potential Solution: This might be just due to
   *    the storybook using a variable scoped to
   *    the module as opposed to rendering this
   *    component within another component and then
   *    using useState and passing the value prop
   *    of this component that resulting state.
   */
  const [selectVal, setSelectVal] = useState('');
  const handleOnChange = (
    evt: React.ChangeEvent<{
      name?: string;
      value: unknown;
    }>,
    child: React.ReactNode
  ) => {
    setSelectVal(evt.target.value as string);
    props.onChange && props.onChange(evt, child);
  };
  const renderValue = () => {
    return (
      <RenderContainer>
        {props.menuOptions.find(o => {
          return o.value === selectVal;
        })?.displayName ||
          props.selectPlaceholder ||
          ''}
      </RenderContainer>
    );
  };

  /**
   * Menu Items
   */
  const menuItems = props.menuOptions.map((o, i) => {
    const StyledMenuItem = withStyles({})(MatMenuItem);
    return (
      <StyledMenuItem key={`${props.menuId}-${i}`} value={o.value}>
        {o.displayName}
      </StyledMenuItem>
    );
  });

  /**
   * Form Control
   */
  const FormControl = withStyles({})(MatFormControl);

  /**
   * Select Box
   */
  const Select = withStyles({
    root: {
      border: '1px solid #D2D4D6',
      color: 'rgba(7, 46, 68, 0.72)',
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
        color: '#072E44',
      },
    },
  })(MatSelect);

  /**
   * Primary Label
   */
  const InputLabel = withStyles({
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

  /**
   * Optional Label
   */
  const FormHelperText = withStyles({
    root: {
      'font-size': '12px',
      'line-height': '18px',
      color: 'rgba(7, 46, 68, 0.72)',
    },
  })(MatFormHelperText);

  return (
    <FormControl style={{ minWidth: props.minWidth || 100 }}>
      <InputLabel id={props.menuId} shrink>
        {props.label}
      </InputLabel>
      <Select
        displayEmpty
        onChange={handleOnChange}
        labelId={props.menuId}
        disableUnderline
        value={props.value}
        name={props.value}
        renderValue={renderValue}
      >
        {menuItems}
      </Select>
      <FormHelperText>{props.bottomFormLabel}</FormHelperText>
    </FormControl>
  );
};
