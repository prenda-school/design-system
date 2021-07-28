import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  DropdownContext,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
  DropdownDivider,
  Box,
} from '../src';
import UserDuotoneIcon from '@prenda/spark-icons/UserDuotone';
import ChevronDownIcon from '@prenda/spark-icons/ChevronDown';

export default {
  title: 'prenda-spark/Dropdown',
  component: DropdownContext,
  argTypes: {
    open: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story = ({ disabled, open, ...otherArgs }) => {
  const menuProps: { open?: boolean } = {};
  if (open !== undefined) menuProps.open = open;

  const buttonProps: { disabled?: boolean } = {};
  if (disabled !== undefined) buttonProps.disabled = disabled;

  return (
    <Box mx={16} my={4}>
      <DropdownContext id="dropdown">
        <DropdownButton endIcon={<ChevronDownIcon />} {...buttonProps}>
          Options
        </DropdownButton>
        <DropdownMenu {...menuProps}>
          <DropdownMenuItem startIcon={<UserDuotoneIcon />}>
            Profile
          </DropdownMenuItem>
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
