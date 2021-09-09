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
  Button,
  IconButton,
} from '../src';

const components = { Button, IconButton };

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
    component: {
      options: Object.keys(components),
      mapping: components,
      control: {
        type: 'select',
      },
    },
  },
  args: {
    placement: 'bottom-left',
    component: 'Button',
  },
} as Meta;

const ConfigurableTemplate: Story = ({
  disabled,
  open,
  placement,
  component,
}) => {
  const optionalMenuProps: { open?: boolean } = {};
  if (open !== undefined) optionalMenuProps.open = open;

  const position = getPosition(placement);

  return (
    <Box position="relative" height={182 + 48 + 8} width={232}>
      <Box {...position}>
        <DropdownContext>
          <DropdownAnchor
            component={component}
            endIcon={
              component.displayName === 'IconButton' ? undefined : (
                <ChevronDown />
              )
            }
            disabled={disabled}
          >
            {component.displayName === 'IconButton' ? <ChevronDown /> : 'Label'}
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
    </Box>
  );
};

export const Configurable = ConfigurableTemplate.bind({});

function getPosition(placement) {
  let top, left, right, bottom;
  if (placement === 'bottom-left') {
    top = 0;
    left = 0;
  } else if (placement === 'bottom-right') {
    top = 0;
    right = 0;
  } else if (placement === 'top-left') {
    bottom = 0;
    left = 0;
  } else if (placement === 'top-right') {
    bottom = 0;
    right = 0;
  }

  return { position: 'absolute', top, left, right, bottom };
}
