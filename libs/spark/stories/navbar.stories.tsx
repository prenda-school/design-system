import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import { NavBar, NavBarProps, NavbarLink, PrendaMonogramDark } from '../src';
import HomeIconDuotone from '../src/icons/duotone/Home';
import CheckCircleIconDuotone from '../src/icons/duotone/CheckCircle';
import RocketIconDuotone from '../src/icons/duotone/Rocket';
import InboxFilledIconDuotone from '../src/icons/duotone/InboxFilled';
import UsersIconDuotone from '../src/icons/duotone/Users';
import UserIconDuotone from '../src/icons/duotone/User';
import Toolbar from '@material-ui/core/Toolbar';

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

const Template = (args: NavBarProps) => (
  <NavBar {...args}>
    <Toolbar>
      <PrendaMonogramDark fontSize="62px" />
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
    </Toolbar>
  </NavBar>
);

export const Basic = Template.bind({});

const NavbarLinkTemplate = (args) => (
  <NavbarLink as="a">
    <UsersIconDuotone />
    <span>Link Text</span>
  </NavbarLink>
);
export const BasicNavbarLink = NavbarLinkTemplate.bind({});
