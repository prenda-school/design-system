import type { CSSProperties } from 'react';
import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  AvatarButton,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  IconButton,
  Menu,
} from '..';
import MenuMeta from '../Menu/Menu.stories';
import { MoreHorizFilled } from '../../../stories';

const triggerComponents = {
  default: undefined,
  Button,
  IconButton,
  AvatarButton,
};

const menuComponents = { default: undefined, Menu };

export default {
  title: '@ps/Dropdown',
  argTypes: {
    /* Dropdown Trigger props */
    'DropdownTrigger.component': {
      options: Object.keys(triggerComponents),
      mapping: triggerComponents,
      control: {
        type: 'select',
      },
    },
    'DropdownTrigger.disabled': { control: 'boolean' },

    /* Dropdown Menu props */
    'DropdownMenu.component': {
      options: Object.keys(menuComponents),
      mapping: menuComponents,
      control: {
        type: 'select',
      },
    },
    'DropdownMenu.placement': {
      control: 'select',
      options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
    },
    'DropdownMenu.children': MenuMeta.argTypes.children,
  },
  args: {
    'DropdownMenu.children': MenuMeta.argTypes.children.options[0],
    'DropdownMenu.placement': 'bottom-left',
    'DropdownMenu.PaperProps': { style: { width: 256 } },
  },
} as Meta;

function getPositioningStyles(placement): CSSProperties {
  let top, left, right, bottom: number;
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

const Template: Story = (props) => {
  const {
    'DropdownTrigger.component': dropdownTriggerComponent,
    'DropdownTrigger.disabled': dropdownTriggerDisabled,
    'DropdownMenu.children': dropdownMenuChildren,
    'DropdownMenu.component': dropdownMenuComponent,
    'DropdownMenu.placement': dropdownMenuPlacement,
    'DropdownMenu.PaperProps': dropdownMenuPaperProps,
  } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const triggerProps: any = {
    children: 'Label',
    disabled: dropdownTriggerDisabled,
  };
  if (dropdownTriggerComponent !== undefined) {
    triggerProps.component = dropdownTriggerComponent;
  }
  if (dropdownTriggerComponent?._PDS_ID === 'IconButton') {
    triggerProps.children = <MoreHorizFilled />;
  }
  if (dropdownTriggerComponent?._PDS_ID === 'AvatarButton') {
    triggerProps.src = '/img/guide-1.png';
    delete triggerProps.children;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const menuProps: any = {
    children: dropdownMenuChildren,
    PaperProps: dropdownMenuPaperProps,
    placement: dropdownMenuPlacement,
  };
  if (dropdownMenuComponent !== undefined) {
    menuProps.component = dropdownMenuComponent;
  }

  const positioningStyles = getPositioningStyles(dropdownMenuPlacement);

  return (
    // menu height + (largest) anchor el height + space between; menu width
    <div style={{ position: 'relative', height: 273 + 48 + 8, width: 256 }}>
      <div style={positioningStyles}>
        <Dropdown>
          <DropdownTrigger {...triggerProps} />
          <DropdownMenu {...menuProps} />
        </Dropdown>
      </div>
    </div>
  );
};

export const Composition: Story = Template.bind({});
Composition.storyName = '(composition)';
