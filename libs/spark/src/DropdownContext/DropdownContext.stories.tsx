import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { UserDuotone, ChevronDown } from '@prenda/spark-icons';
import {
  Box,
  Button,
  Divider,
  DropdownAnchor,
  DropdownAnchorProps,
  DropdownContext,
  DropdownContextProps,
  DropdownMenu,
  DropdownMenuProps,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from '..';
import { sparkThemeProvider } from '../../stories';

interface SbDropdownContextProps extends DropdownContextProps {
  /**
   * **[Storybook-only:** passed to `DropdownAnchor`.**]**
   *
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  sb_DropdownAnchor_component?: DropdownAnchorProps['component'];
  /**
   * **[Storybook-only:** passed to `DropdownAnchor`.**]**
   *
   * If `true`, the anchor component is disabled.
   */
  sb_DropdownAnchor_disabled?: boolean;
  /**
   * **[Storybook-only:** passed to `DropdownMenu`.**]**
   *
   * If `true`, the menu is visible.
   */
  sb_DropdownMenu_open?: DropdownMenuProps['open'];
  /**
   * **[Storybook-only:** passed to `DropdownMenu`.**]**
   *
   * The placement of the menu `Popover` in relation to its anchor.
   * This is a shortcut for common combinations of `anchorOrigin` and `transformOrigin`.
   */
  sb_DropdownMenu_placement?: DropdownMenuProps['placement'];
}

export const SbDropdownContext = ({
  sb_DropdownAnchor_component,
  sb_DropdownAnchor_disabled,
  sb_DropdownMenu_open,
  sb_DropdownMenu_placement,
  ...props
}: SbDropdownContextProps) => <DropdownContext {...props} />;

export default {
  title: '@ps/DropdownContext',
  component: SbDropdownContext,
  excludeStories: ['SbDropdownContext'],
  argTypes: {
    sb_DropdownAnchor_component: {
      control: 'select',
      options: ['Button', 'IconButton'],
      mapping: { Button: Button, IconButton: IconButton },
    },
  },
  args: {
    sb_DropdownAnchor_component: 'Button',
    sb_DropdownMenu_placement: 'bottom-left',
  },
  decorators: [sparkThemeProvider],
} as Meta;

const ConfigurableTemplate = ({
  sb_DropdownAnchor_component,
  sb_DropdownAnchor_disabled,
  sb_DropdownMenu_open,
  sb_DropdownMenu_placement,
}) => {
  const optionalMenuProps: { open?: boolean } = {};
  if (sb_DropdownMenu_open !== undefined) {
    optionalMenuProps.open = sb_DropdownMenu_open;
  }

  const positioningStyles = getPositioningStyles(sb_DropdownMenu_placement);

  return (
    // menu height + (largest) anchor el height + space between; menu width
    <Box position="relative" height={182 + 48 + 8} width={232}>
      <Box {...positioningStyles}>
        <DropdownContext>
          <DropdownAnchor
            component={sb_DropdownAnchor_component}
            endIcon={
              sb_DropdownAnchor_component.displayName ===
              'IconButton' ? undefined : (
                <ChevronDown />
              )
            }
            disabled={sb_DropdownAnchor_disabled}
          >
            {sb_DropdownAnchor_component.displayName === 'IconButton' ? (
              <ChevronDown />
            ) : (
              'Label'
            )}
          </DropdownAnchor>
          <DropdownMenu
            placement={sb_DropdownMenu_placement}
            {...optionalMenuProps}
          >
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

export const Configurable: Story = ConfigurableTemplate.bind({});

function getPositioningStyles(placement) {
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
