import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { UserDuotone, ChevronDown } from '@prenda/spark-icons';
import {
  Box,
  Divider,
  DropdownContext,
  DropdownMenu,
  ListItemIcon,
  ListItemText,
  MenuItem,
  DropdownAnchor,
  IconButton,
} from '../src';

export default {
  title: 'prenda-spark/Dropdown',
  component: DropdownContext,
  argTypes: {
    open: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placement: {
      control: 'select',
      options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
    },
  },
  args: {
    placement: 'bottom-left',
  },
} as Meta;

const ConfigurableTemplate: Story = ({ disabled, open, placement }) => {
  const optionalMenuProps: { open?: boolean } = {};
  if (open !== undefined) optionalMenuProps.open = open;

  return (
    <Box mx={14} my={20}>
      <DropdownContext>
        <DropdownAnchor component={IconButton} disabled={disabled}>
          <ChevronDown />
        </DropdownAnchor>
        <DropdownMenu placement={placement} {...optionalMenuProps}>
          <MenuItem>
            <ListItemIcon>
              <UserDuotone />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </MenuItem>
          <MenuItem>
            <ListItemText primary="Resources" />
          </MenuItem>
          <MenuItem disabled>
            <ListItemText primary="Menu item" />
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText primary="Sign out" />
          </MenuItem>
        </DropdownMenu>
      </DropdownContext>
    </Box>
  );
};

export const Configurable = ConfigurableTemplate.bind({});
