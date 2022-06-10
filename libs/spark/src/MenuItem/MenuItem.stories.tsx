import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { GearDuotone } from '@prenda/spark-icons';
import {
  Avatar,
  Box,
  Checkbox,
  ListItemAvatar,
  ListItemIcon,
  ListItemIconProps,
  ListItemText,
  ListItemTextProps,
  MenuItem,
  MenuItemProps,
} from '..';
import {
  ChangelogTemplate,
  DocumentationTemplate,
} from '../../stories/templates';
import { sparkThemeProvider } from '../../stories';

// underlying MenuItemProps don't have descriptions
interface SbMenuItemProps extends MenuItemProps {
  /**
   * **[Storybook-only]:** passed to `ListItemText` child.**]**
   *
   * The main content element.
   */
  sb_ListItemText_primary?: ListItemTextProps['primary'];
  /**
   * **[Storybook-only]:** passed to `ListItemIcon` child.**]**
   *
   * The content of the component, normally `SvgIcon` or a `@prenda/spark-icons` SVG icon element.
   */
  sb_ListItemIcon_children?: ListItemIconProps['children'];
}

export const SbMenuItem = ({
  sb_ListItemText_primary,
  sb_ListItemIcon_children,
  button,
  ...other
}: SbMenuItemProps) => <MenuItem {...other} />;

export default {
  title: '@ps/MenuItem',
  component: SbMenuItem,
  excludeStories: ['SbMenuItem'],
  argTypes: {
    sb_ListItemIcon_children: {
      type: 'select',
      options: ['undefined', 'GearDuotone'],
      mapping: {
        undefined: undefined,
        GearDuotone: <GearDuotone />,
      },
    },
  },
  args: {
    sb_ListItemText_primary: 'Menu item',
    button: true,
  },
  decorators: [sparkThemeProvider],
} as Meta;

const Container = (props) => (
  <Box
    m={0.5}
    display="grid"
    gridTemplateColumns="224px"
    gridGap="4px"
    alignItems="center"
    width={224}
    {...props}
  />
);

const Template = ({
  sb_ListItemText_primary,
  sb_ListItemIcon_children,
  args,
}) => (
  <Container>
    <MenuItem {...args}>
      {sb_ListItemIcon_children ? (
        <ListItemIcon>{sb_ListItemIcon_children}</ListItemIcon>
      ) : null}
      <ListItemText primary={sb_ListItemText_primary} />
    </MenuItem>
  </Container>
);

export const Configurable: Story = Template.bind({});

const CompositionsTemplate = ({
  startIcon,
  sb_ListItemText_primary,
  sb_ListItemIcon_children,
  ...args
}) => (
  <Container>
    <MenuItem {...args}>
      <ListItemText primary="Menu item" />
    </MenuItem>
    <MenuItem {...args}>
      <ListItemIcon>
        <GearDuotone />
      </ListItemIcon>
      <ListItemText primary="Menu item" />
    </MenuItem>
    <MenuItem {...args}>
      <ListItemAvatar>
        <Avatar size="xsmall" src="/img/student-girl-1.png" />
      </ListItemAvatar>
      <ListItemText primary="Menu item" />
    </MenuItem>
    <MenuItem {...args}>
      <ListItemIcon>
        <Checkbox
          tabIndex={-1}
          inputProps={{ 'aria-labelledby': 'menu-item-label' }}
          disabled={args.disabled}
          // let this be uncontrolled if selected not specified
          {...(args.selected !== undefined ? { checked: args.selected } : {})}
        />
      </ListItemIcon>
      <ListItemText id="menu-item-label" primary="Menu item" />
    </MenuItem>
  </Container>
);

export const Compositions: Story = CompositionsTemplate.bind({});

export const CompositionsHover: Story = CompositionsTemplate.bind({});
CompositionsHover.parameters = { pseudo: { hover: true } };

export const CompositionsFocus: Story = CompositionsTemplate.bind({});
CompositionsFocus.parameters = { pseudo: { focusVisible: true } };

export const CompositionsActive: Story = CompositionsTemplate.bind({});
CompositionsActive.parameters = { pseudo: { active: true } };

export const CompositionsDisabled: Story = CompositionsTemplate.bind({});
CompositionsDisabled.args = { disabled: true };

export const CompositionsSelected: Story = CompositionsTemplate.bind({});
CompositionsSelected.args = { selected: true };

export const CompositionsSelectedHover: Story = CompositionsTemplate.bind({});
CompositionsSelectedHover.args = { selected: true };
CompositionsSelectedHover.parameters = { pseudo: { hover: true } };

export const CompositionsSelectedFocus: Story = CompositionsTemplate.bind({});
CompositionsSelectedFocus.args = { selected: true };
CompositionsSelectedFocus.parameters = { pseudo: { focusVisible: true } };

export const CompositionsSelectedDisabled: Story = CompositionsTemplate.bind(
  {}
);
CompositionsSelectedDisabled.args = { selected: true, disabled: true };

export const Documentation: Story = DocumentationTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'MenuItem',
    href: 'https://v4.mui.com/api/menu-item/',
  },
  props: {
    extends: {
      href: 'https://v4.mui.com/api/menu-item/#props',
    },
  },
  css: {
    extends: {
      href: 'https://v4.mui.com/api/menu-item/#css',
    },
  },
};

export const Changelog: Story = ChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.11.0',
      versionDate: '2021-08-21',
      changes: [
        'Added styling for pseudo-states: `:hover`, `:focus`, `:active`',
        'Added styling for content: `ListItemText`, `ListItemIcon`, `ListItemAvatar`, `ListItem`',
        'Added styling when prop `selected` is `true`.',
      ],
    },
    {
      version: 'vHistory',
      versionDate: '...',
      changes: ['missing'],
    },
  ],
};
