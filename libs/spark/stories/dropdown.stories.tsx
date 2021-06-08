import React from 'react';
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import {
  DropdownContext,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
  DropdownDivider,
} from '../src';
import { Icons } from './utils';
import { Box } from '@material-ui/core';

export default {
  title: 'prenda-spark/Dropdown',
  component: DropdownContext,
  argTypes: {
    open: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template = ({ disabled, open, ...otherArgs }) => {
  const menuProps: { open?: boolean } = {};
  if (open !== undefined) menuProps.open = open;

  const buttonProps: { disabled?: boolean } = {};
  if (disabled !== undefined) buttonProps.disabled = disabled;

  return (
    <Box mx={16} my={4}>
      <DropdownContext id="dropdown">
        <DropdownButton endIcon={Icons['caret-down']} {...buttonProps}>
          Options
        </DropdownButton>
        <DropdownMenu {...menuProps}>
          <DropdownMenuItem startIcon={Icons['user']}>Profile</DropdownMenuItem>
          <DropdownMenuItem>Resources</DropdownMenuItem>
          <DropdownMenuItem disabled>Menu item</DropdownMenuItem>
          <DropdownDivider />
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </DropdownMenu>
      </DropdownContext>
    </Box>
  );
};
export const ConfigurableInput = Template.bind({});
