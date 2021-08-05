import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { UserDuotone, ChevronDown } from '@prenda/spark-icons';
import { Box } from '@material-ui/core';
import {
  DropdownContext,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
  DropdownDivider,
} from '../src';

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
        <DropdownButton endIcon={<ChevronDown />} {...buttonProps}>
          Options
        </DropdownButton>
        <DropdownMenu {...menuProps}>
          <DropdownMenuItem startIcon={<UserDuotone />}>
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
