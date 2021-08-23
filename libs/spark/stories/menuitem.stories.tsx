import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  Avatar,
  Box,
  Checkbox,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
  MenuItem,
  styled,
  FormControlLabel,
} from '../src';
import { GearDuotone } from '@prenda/spark-icons';
import { DocTemplate } from './documentation-template';
import { ChangelogTemplate } from './changelog-template';

export default {
  title: 'prenda-spark/MenuItem',
  component: MenuItem,
  argTypes: {
    startIcon: { control: 'boolean' },
    text: { control: 'text' },
  },
  args: {
    text: 'Menu item',
    startIcon: false,
    button: true,
  },
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

const Template: Story = ({ text, startIcon, args }) => (
  <Container>
    <MenuItem {...args}>
      {startIcon ? (
        <ListItemIcon>
          <GearDuotone />
        </ListItemIcon>
      ) : null}
      <ListItemText primary={text} />
    </MenuItem>
  </Container>
);

export const Configurable: Story = Template.bind({});

const CompositionsTemplate: Story = ({ startIcon, ...args }) => (
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

export const Compositions = CompositionsTemplate.bind({});

export const CompositionsHover = CompositionsTemplate.bind({});
CompositionsHover.parameters = { pseudo: { hover: true } };

export const CompositionsFocus = CompositionsTemplate.bind({});
CompositionsFocus.parameters = { pseudo: { focus: true } };

export const CompositionsActive = CompositionsTemplate.bind({});
CompositionsActive.parameters = { pseudo: { active: true } };

export const CompositionsDisabled = CompositionsTemplate.bind({});
CompositionsDisabled.args = { disabled: true };

export const CompositionsSelected = CompositionsTemplate.bind({});
CompositionsSelected.args = { selected: true };

export const CompositionsSelectedHover = CompositionsTemplate.bind({});
CompositionsSelectedHover.args = { selected: true };
CompositionsSelectedHover.parameters = { pseudo: { hover: true } };

export const CompositionsSelectedFocus = CompositionsTemplate.bind({});
CompositionsSelectedFocus.args = { selected: true };
CompositionsSelectedFocus.parameters = { pseudo: { focus: true } };

export const CompositionsSelectedDisabled = CompositionsTemplate.bind({});
CompositionsSelectedDisabled.args = { selected: true, disabled: true };

const MenuItemDocTemplate = (args) => <DocTemplate {...args} />;

export const Documentation: Story = MenuItemDocTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'MenuItem',
    href: 'https://material-ui.com/api/menu-item/',
  },
  props: {
    extends: {
      href: 'https://material-ui.com/api/menu-item/#props',
    },
  },
  css: {
    extends: {
      href: 'https://material-ui.com/api/menu-item/#css',
    },
  },
};

const MenuItemChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = MenuItemChangelogTemplate.bind({});
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
