import React from 'react';
import CheckCircleDuotone from '@prenda/spark-icons/CheckCircleDuotone';
import HomeDuotone from '@prenda/spark-icons/HomeDuotone';
import InboxFilledDuotone from '@prenda/spark-icons/InboxFilledDuotone';
import Toolbar from '@material-ui/core/Toolbar';
import UserDuotone from '@prenda/spark-icons/UserDuotone';
import UsersDuotone from '@prenda/spark-icons/UsersDuotone';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import { NavBar, NavBarProps, PrendaMonogramDark, NavBarButton } from '../src';

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

const CustomUserDuotoneIcon = styled(UserDuotone)({
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
        startIcon={<HomeDuotone fontSize="large" />}
        aria-current="page"
      >
        Home
      </NavBarButton>
      <NavBarButton
        href="#"
        startIcon={<CheckCircleDuotone fontSize="large" />}
      >
        Conquer
      </NavBarButton>
      <NavBarButton href="#" startIcon={<UsersDuotone fontSize="large" />}>
        Collaborate
      </NavBarButton>
      <NavBarButton
        href="#"
        startIcon={<CheckCircleDuotone fontSize="large" />}
      >
        Create
      </NavBarButton>
      <NavBarButton
        href="#"
        startIcon={<InboxFilledDuotone fontSize="large" />}
        style={{ marginLeft: 'auto' }}
      >
        0
      </NavBarButton>
      <UserMenu>
        <UserDuotone fontSize="large" />
      </UserMenu>
    </Toolbar>
  </NavBar>
);

export const Basic = Template.bind({});
