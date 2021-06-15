import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import {
  Navbar,
  NavbarProps,
  NavbarLink,
  HomeIcon,
  CheckCircleIcon,
  QuestionCircleIcon,
} from '../src';

export default {
  title: 'prenda-spark/Navbar',
  component: Navbar,
  argTypes: {},
  args: {},
} as Meta;

const UserMenu = styled.div`
  margin-left: auto;
  display: flex;
`;

const NavbarTemplate = (args: NavbarProps) => (
  <Navbar {...args}>
    <NavbarLink href="/">
      <HomeIcon fontSize="large" color="navy" contrast="low" />
      <span>Dashboard</span>
    </NavbarLink>
    <NavbarLink href="/" aria-current="page">
      <CheckCircleIcon fontSize="large" color="navy" contrast="low" />
      <span>Active</span>
    </NavbarLink>
    <NavbarLink className="disabled">
      <QuestionCircleIcon fontSize="large" color="navy" contrast="low" />
      <span>Disabled</span>
    </NavbarLink>
    <UserMenu>
      <QuestionCircleIcon fontSize="large" color="navy" contrast="low" />
      <span>0</span>
    </UserMenu>
  </Navbar>
);
export const BasicNavbar = NavbarTemplate.bind({});

const NavbarLinkTemplate = (args) => (
  <NavbarLink as="a">
    <QuestionCircleIcon fontSize="large" color="navy" contrast="low" />
    <span>Link Text</span>
  </NavbarLink>
);
export const BasicNavbarLink = NavbarLinkTemplate.bind({});
