import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import { Navbar, NavbarProps, NavbarLink } from '../src';
import {
  HomeIconDuotone,
  CheckCircleIconDuotone,
  RocketIconDuotone,
  InboxFilledIconDuotone,
  UsersIconDuotone,
  UserIconDuotone,
} from '../src/icons';

export default {
  title: 'prenda-spark/Navbar',
  component: Navbar,
  argTypes: {},
  args: {},
} as Meta;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarTemplate = (args: NavbarProps) => (
  <Navbar {...args}>
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
  </Navbar>
);
export const BasicNavbar = NavbarTemplate.bind({});

const NavbarLinkTemplate = (args) => (
  <NavbarLink as="a">
    <UsersIconDuotone />
    <span>Link Text</span>
  </NavbarLink>
);
export const BasicNavbarLink = NavbarLinkTemplate.bind({});
