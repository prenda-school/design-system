import React from 'react';
import BeakerDuotone from '@prenda/spark-icons/BeakerDuotone';
import HomeDuotone from '@prenda/spark-icons/HomeDuotone';
import InboxFilledDuotone from '@prenda/spark-icons/InboxFilledDuotone';
import MountainDuotone from '@prenda/spark-icons/MountainDuotone';
import UserDuotone from '@prenda/spark-icons/UserDuotone';
import UsersDuotone from '@prenda/spark-icons/UsersDuotone';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import { NavBar, NavBarProps, NavBarButton, withStyles, Toolbar } from '../src';
import { PrendaMonogram } from '@prenda/spark-icons';

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

const BluePrendaMonogram = styled(PrendaMonogram)(({ theme }) => ({
  fontSize: '62px',
  fill: theme.palette.brand.blue,
}));

const CustomToolbar = withStyles({
  root: {
    gap: 8,
  },
})(Toolbar);

const InboxNavBarButton = withStyles({
  root: {
    marginLeft: 'auto',
  },
  startIcon: {
    marginRight: 2,
  },
})(NavBarButton);

const Template = (args: NavBarProps) => (
  <NavBar {...args}>
    <CustomToolbar>
      <BluePrendaMonogram />
      <NavBarButton
        href="#"
        startIcon={<HomeDuotone fontSize="large" />}
        aria-current="page"
      >
        Home
      </NavBarButton>
      <NavBarButton href="#" startIcon={<MountainDuotone fontSize="large" />}>
        Conquer
      </NavBarButton>
      <NavBarButton href="#" startIcon={<UsersDuotone fontSize="large" />}>
        Collaborate
      </NavBarButton>
      <NavBarButton href="#" startIcon={<BeakerDuotone fontSize="large" />}>
        Create
      </NavBarButton>
      <InboxNavBarButton
        href="#"
        startIcon={<InboxFilledDuotone fontSize="large" />}
      >
        0
      </InboxNavBarButton>
      <UserMenu>
        <UserDuotone fontSize="large" />
      </UserMenu>
    </CustomToolbar>
  </NavBar>
);

export const Basic = Template.bind({});
