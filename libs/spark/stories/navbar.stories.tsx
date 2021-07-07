import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import { NavBar, NavBarProps, NavbarLink } from '../src';
import {
  HomeIconDuotone,
  CheckCircleIconDuotone,
  RocketIconDuotone,
  InboxFilledIconDuotone,
  UsersIconDuotone,
  UserIconDuotone,
} from '../src/icons';

export default {
  title: 'prenda-spark/NavBar',
  component: NavBar,
  argTypes: {},
  args: {},
} as Meta;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavBarTemplate = (args: NavBarProps) => (
  <NavBar {...args}>
    <NavbarLink href="/">
      <HomeIconDuotone fillColor="transparent" />
      <span>Dashboard</span>
    </NavbarLink>
    <NavbarLink href="/" aria-current="page">
      <CheckCircleIconDuotone />
      <span>Active</span>
    </NavbarLink>
    <NavbarLink className="disabled">
      <RocketIconDuotone />
      <span>Disabled</span>
    </NavbarLink>
    <NavbarLink style={{ marginLeft: 'auto' }}>
      <InboxFilledIconDuotone />
      <span>0</span>
    </NavbarLink>
    <UserMenu>
      <UserIconDuotone fillColor="pink" />
    </UserMenu>
  </NavBar>
);
export const BasicNavBar = NavBarTemplate.bind({});

const NavbarLinkTemplate = (args) => (
  <NavbarLink as="a">
    <UsersIconDuotone />
    <span>Link Text</span>
  </NavbarLink>
);
export const BasicNavbarLink = NavbarLinkTemplate.bind({});
