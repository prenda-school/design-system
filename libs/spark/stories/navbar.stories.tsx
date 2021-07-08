import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import { NavBar, NavBarProps, PrendaMonogramDark, NavBarItem } from '../src';
import HomeIconDuotone from '../src/icons/duotone/Home';
import CheckCircleIconDuotone from '../src/icons/duotone/CheckCircle';
import RocketIconDuotone from '../src/icons/duotone/Rocket';
import InboxFilledIconDuotone from '../src/icons/duotone/InboxFilled';
import UsersIconDuotone from '../src/icons/duotone/Users';
import UserIconDuotone from '../src/icons/duotone/User';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
      <Router>
        <PrendaMonogramDark fontSize="62px" />
        <NavBarItem component={Link} to={`/`}>
          <HomeIconDuotone fillColor="transparent" />
          <span>Dashboard</span>
        </NavBarItem>
        <NavBarItem component={Link} to={`/`} active>
          <CheckCircleIconDuotone />
          <span>Active</span>
        </NavBarItem>
        <NavBarItem component={Link} to={`/`} disabled>
          <RocketIconDuotone />
          <span>Disabled</span>
        </NavBarItem>
        <NavBarItem style={{ marginLeft: 'auto' }}>
          <InboxFilledIconDuotone />
          <span>0</span>
        </NavBarItem>
        <UserMenu>
          <UserIconDuotone fillColor="pink" />
        </UserMenu>
      </Router>
    </Toolbar>
  </NavBar>
);

export const Basic = Template.bind({});

const NavBarItemTemplate = () => (
  <NavBarItem component={Link} to="/">
    <UsersIconDuotone />
    <span>Link Text</span>
  </NavBarItem>
);
export const BasicNavBarItem = NavBarItemTemplate.bind({});
