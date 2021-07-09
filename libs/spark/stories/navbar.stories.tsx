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
import { theme } from '../src/styles';

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
      <NavBarItem
        href={`#`}
        startIcon={<HomeIconDuotone fillColor="transparent" />}
      >
        Dashboard
      </NavBarItem>
      <NavBarItem
        href={`#`}
        startIcon={
          <CheckCircleIconDuotone fillColor={theme.palette.brand.lightBlue} />
        }
        aria-current="page"
      >
        Active
      </NavBarItem>
      <NavBarItem href={`#`} startIcon={<RocketIconDuotone />} disabled>
        Disabled
      </NavBarItem>
      <NavBarItem
        href={`#`}
        startIcon={<InboxFilledIconDuotone />}
        style={{ marginLeft: 'auto' }}
      >
        0
      </NavBarItem>
      <UserMenu>
        <UserIconDuotone fillColor="pink" />
      </UserMenu>
    </Toolbar>
  </NavBar>
);

export const Basic = Template.bind({});
