import React, { FC, useState } from 'react';
import {
  Select as MatSelect,
  InputLabel as MatInputLabel,
  FormControl as MatFormControl,
  MenuItem as MatMenuItem,
  FormHelperText as MatFormHelperText,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
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
  onChange: (val: string) => void;
  value: string;
};

const FormControl = withStyles({})(MatFormControl);
const StyledMenuItem = withStyles({})(MatMenuItem);
const Select = withStyles(theme => {
  const { blue } = theme.palette.tertiary;
  return {
    root: {
      border: `1px solid ${theme.palette.neutral.darkGrey}`,
      color: 'rgba(7, 46, 68, 0.72)',
      borderRadius: '8px',
      '&:blur': {
        border: `1px solid ${blue[2]}`,
        'box-sizing': 'border-box',
        'box-shadow': `0px 0px 0px 4px ${blue[1]}`,
        'border-radius': '8px',
      },
      '&:focus': {
        border: `1px solid ${blue[2]}`,
        'box-sizing': 'border-box',
        'box-shadow': `0px 0px 0px 4px ${blue[1]}`,
        'border-radius': '8px',
        backgroundColor: theme.palette.background.white,
        color: blue[5],
      },
    },
  };
})(MatSelect);
const InputLabel = withStyles(theme => {
  const { blue } = theme.palette.tertiary;
  return {
    root: {
      'font-weight': 700,
      color: blue[5],
      'font-size': '16px',
      'line-height': '18px',
      top: '-5px',
      '&.Mui-focused': {
        color: blue[5],
      },
    },
  };
})(MatInputLabel);
const FormHelperText = withStyles(theme => ({
  root: {
    'font-size': '12px',
    'line-height': '18px',
    color: theme.palette.background.lightLowContrastText,
  },
}))(MatFormHelperText);

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
    }>
  ) => {
    const newInputVal = evt.target.value as string;
    setSelectVal(newInputVal);
    props.onChange && props.onChange(newInputVal);
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
    return (
      <StyledMenuItem key={`${props.menuId}-${i}`} value={o.value}>
        {o.displayName}
      </StyledMenuItem>
    );
  });

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
