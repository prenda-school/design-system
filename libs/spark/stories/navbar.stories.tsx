import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import { NavBar, NavBarProps, NavbarLink, PrendaMonogramDark } from '../src';
import HomeDuotoneIcon from '@prenda/spark-icons/HomeDuotone';
import CheckCircleDuotoneIcon from '@prenda/spark-icons/CheckCircleDuotone';
import RocketDuotoneIcon from '@prenda/spark-icons/RocketDuotone';
import InboxFilledDuotoneIcon from '@prenda/spark-icons/InboxFilledDuotone';
import UsersDuotoneIcon from '@prenda/spark-icons/UsersDuotone';
import UserDuotoneIcon from '@prenda/spark-icons/UserDuotone';
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
        <HomeDuotoneIcon fillColor="transparent" />
        <span>Dashboard</span>
      </NavbarLink>
      <NavbarLink href="/" aria-current="page">
        <CheckCircleDuotoneIcon />
        <span>Active</span>
      </NavbarLink>
      <NavbarLink className="disabled">
        <RocketDuotoneIcon />
        <span>Disabled</span>
      </NavbarLink>
      <NavbarLink style={{ marginLeft: 'auto' }}>
        <InboxFilledDuotoneIcon />
        <span>0</span>
      </NavbarLink>
      <UserMenu>
        <UserDuotoneIcon fillColor="pink" />
      </UserMenu>
    </Toolbar>
  </NavBar>
);

export const Basic = Template.bind({});

const NavbarLinkTemplate = (args) => (
  <NavbarLink as="a">
    <UsersDuotoneIcon />
    <span>Link Text</span>
  </NavbarLink>
);
export const BasicNavbarLink = NavbarLinkTemplate.bind({});
