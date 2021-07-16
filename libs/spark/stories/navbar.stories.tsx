import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import { NavBar, NavBarProps, NavbarLink } from '../src';
import { PrendaMonogram } from '@prenda/spark-icons';
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

const CustomUserDuotoneIcon = styled(UserDuotoneIcon)({
  '& path[fill="#F0F1F2"]': {
    fill: 'pink',
  },
});

const Template = (args: NavBarProps) => (
  <NavBar {...args}>
    <Toolbar>
      <PrendaMonogram style={{ fontSize: '62px' }} />
      <NavbarLink href="/">
        <HomeDuotoneIcon />
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
        <CustomUserDuotoneIcon />
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
