import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';

import { NavBar, NavBarProps, PrendaMonogramDark, NavBarButton } from '../src';
import HomeIconDuotone from '../src/icons/duotone/Home';
import CheckCircleIconDuotone from '../src/icons/duotone/CheckCircle';
import InboxFilledIconDuotone from '../src/icons/duotone/InboxFilled';
import UserIconDuotone from '../src/icons/duotone/User';

import Toolbar from '@material-ui/core/Toolbar';
import UsersIconDuotone from '../src/icons/duotone/Users';

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
    <Toolbar style={{ gap: 8 }}>
      <PrendaMonogramDark fontSize="4.5rem" />
      <NavBarButton
        href="#"
        startIcon={<HomeIconDuotone fontSize="large" />}
        aria-current="page"
      >
        Home
      </NavBarButton>
      <NavBarButton
        href="#"
        startIcon={<CheckCircleIconDuotone fontSize="large" />}
      >
        Conquer
      </NavBarButton>
      <NavBarButton href="#" startIcon={<UsersIconDuotone fontSize="large" />}>
        Collaborate
      </NavBarButton>
      <NavBarButton
        href="#"
        startIcon={<CheckCircleIconDuotone fontSize="large" />}
      >
        Create
      </NavBarButton>
      <NavBarButton
        href="#"
        startIcon={<InboxFilledIconDuotone fontSize="large" />}
        style={{ marginLeft: 'auto' }}
      >
        0
      </NavBarButton>
      <UserMenu>
        <UserIconDuotone fontSize="large" />
      </UserMenu>
    </Toolbar>
  </NavBar>
);

export const Basic = Template.bind({});

