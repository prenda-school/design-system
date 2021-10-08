import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  Avatar,
  Checkbox,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  MenuItem,
  MenuList,
  Divider,
  Paper,
  withStyles,
} from '../src';
import { DocTemplate } from './documentation-template';
import { ChangelogTemplate } from './changelog-template';

export default {
  title: 'PDS/@ps/MenuList',
  component: MenuList,
  argTypes: {},
  args: {},
} as Meta;

const CustomPaper = withStyles((theme) => ({
  root: {
    borderRadius: 16,
    width: 256,
    maxHeight: 40 * 8 + 16,
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollbarColor: `${theme.palette.text.onLightLowContrast} transparent`,
  },
}))(Paper);

export const Basic = (args) => (
  <CustomPaper elevation={4}>
    <MenuList {...args}>
      {['Profile', 'Resources', 'Menu item', 'Sign out'].map((primary) => (
        <MenuItem key={primary}>
          <ListItemText primary={primary} />
        </MenuItem>
      ))}
    </MenuList>
  </CustomPaper>
);

export const Sectioned = (args) => (
  <CustomPaper elevation={4}>
    <MenuList {...args}>
      {['Profile', 'Resources'].map((primary) => (
        <MenuItem key={primary}>
          <ListItemText primary={primary} />
        </MenuItem>
      ))}
      <Divider component="li" />
      {['Menu item', 'Sign out'].map((primary) => (
        <MenuItem key={primary}>
          <ListItemText primary={primary} />
        </MenuItem>
      ))}
    </MenuList>
  </CustomPaper>
);

export const Checkboxes = (args) => (
  <CustomPaper elevation={4}>
    <MenuList {...args}>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <MenuItem key={i}>
          <ListItemIcon>
            <Checkbox
              tabIndex={-1}
              inputProps={{ 'aria-labelledby': `menu-item-label-${i}` }}
              checked={[4, 6].includes(i)}
            />
          </ListItemIcon>
          <ListItemText id={`menu-item-label-${i}`} primary="Label" />
        </MenuItem>
      ))}
    </MenuList>
  </CustomPaper>
);

export const Avatars = (args) => (
  <CustomPaper elevation={4}>
    <MenuList {...args}>
      {[
        {
          src: '/img/student-girl-1.png',
          primary: 'Sarah',
        },
        {
          src: '/img/student-boy-1.png',
          primary: 'Jones',
        },
        {
          src: '/img/student-girl-3.png',
          primary: 'Sam',
        },
        {
          src: '/img/guide-3.png',
          primary: 'Samson',
        },
        {
          src: '/img/student-boy-3.png',
          primary: 'Jake',
        },
        {
          src: '/img/student-boy-2.png',
          primary: 'Michael',
        },
        {
          src: '/img/student-girl-2.png',
          primary: 'Ali',
        },
      ].map(({ src, primary }) => (
        <MenuItem key={src}>
          <ListItemAvatar>
            <Avatar size="xsmall" src={src} />
          </ListItemAvatar>
          <ListItemText primary={primary} />
        </MenuItem>
      ))}
    </MenuList>
  </CustomPaper>
);

export const Scrolling = (args) => (
  <CustomPaper elevation={4}>
    <MenuList {...args}>
      {Array.from(Array(16).keys()).map((i) => (
        <MenuItem key={i}>
          <ListItemText primary="Menu item" />
        </MenuItem>
      ))}
    </MenuList>
  </CustomPaper>
);

export const SectionTitle = (args) => (
  <CustomPaper elevation={4}>
    <MenuList
      subheader={
        <ListSubheader component="div" id="menu-list-subheader">
          Title
        </ListSubheader>
      }
      {...args}
    >
      {['Profile', 'Resources', 'Menu item', 'Sign out'].map((primary) => (
        <MenuItem key={primary}>
          <ListItemText primary={primary} />
        </MenuItem>
      ))}
    </MenuList>
  </CustomPaper>
);

const MenuListDocTemplate = (args) => <DocTemplate {...args} />;

export const Documentation: Story = MenuListDocTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'MenuList',
    href: 'https://v4.mui.com/components/menus/',
  },
  props: {
    extends: {
      href: 'https://v4.mui.com/api/menu-list/#props',
    },
  },
  css: {
    extends: {
      href: 'https://v4.mui.com/api/menu-item/#css',
    },
  },
};

const MenuListChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = MenuListChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.11.0',
      versionDate: '2021-08-21',
      changes: ['Initial styling implementation.'],
    },
  ],
};
