import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MoreHorizFilled } from '@prenda/spark-icons';
import {
  DropdownAnchor,
  DropdownContext,
  DropdownMenu,
  Unstable_AvatarButton,
  Unstable_Button,
  Unstable_IconButton,
  Unstable_Menu,
} from '..';
import Unstable_MenuMeta from '../Unstable_Menu/Unstable_Menu.stories';

const anchorComponents = {
  default: undefined,
  Unstable_Button,
  Unstable_IconButton,
  Unstable_AvatarButton,
};

const menuComponents = { default: undefined, Unstable_Menu };

export default {
  title: '@ps/Dropdown (pattern)',
  argTypes: {
    /* Dropdown Anchor props */
    'DropdownAnchor.component': {
      options: Object.keys(anchorComponents),
      mapping: anchorComponents,
      control: {
        type: 'select',
      },
    },
    'DropdownAnchor.disabled': { control: 'boolean' },

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
    'DropdownMenu.children': Unstable_MenuMeta.argTypes.children,
  },
  args: {
    'DropdownAnchor.component': 'Unstable_Button',
    'DropdownMenu.component': 'Unstable_Menu',
    'DropdownMenu.children': Unstable_MenuMeta.argTypes.children.options[0],
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
    'DropdownAnchor.component': dropdownAnchorComponent,
    'DropdownAnchor.disabled': dropdownAnchorDisabled,
    'DropdownMenu.children': dropdownMenuChildren,
    'DropdownMenu.component': dropdownMenuComponent,
    'DropdownMenu.placement': dropdownMenuPlacement,
    'DropdownMenu.PaperProps': dropdownMenuPaperProps,
  } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anchorProps: any = {
    children: 'Label',
    disabled: dropdownAnchorDisabled,
  };
  if (dropdownAnchorComponent !== undefined) {
    anchorProps.component = dropdownAnchorComponent;
  }
  if (dropdownAnchorComponent?._PDS_ID === 'Unstable_IconButton') {
    anchorProps.children = <MoreHorizFilled />;
  }
  if (dropdownAnchorComponent?._PDS_ID === 'Unstable_AvatarButton') {
    anchorProps.src = '/img/guide-1.png';
    delete anchorProps.children;
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
    <div style={{ position: 'relative', height: 182 + 48 + 8, width: 256 }}>
      <div style={positioningStyles}>
        <DropdownContext>
          <DropdownAnchor {...anchorProps} />
          <DropdownMenu {...menuProps} />
        </DropdownContext>
      </div>
    </div>
  );
};

export const Composition: Story = Template.bind({});
Composition.storyName = '(composition)';
