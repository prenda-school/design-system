import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  BeakerDuotone,
  HomeDuotone,
  InboxFilledDuotone,
  MountainDuotone,
  UsersDuotone,
  PrendaMonogram,
} from '@prenda/spark-icons';
import {
  NavBar,
  NavBarProps,
  NavBarButton,
  withStyles,
  Toolbar,
  styled,
  Avatar,
} from '../src';

export default {
  title: 'prenda-spark/NavBar',
  component: NavBar,
  argTypes: {},
  args: {},
} as Meta;

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

const CustomAvatar = withStyles({
  root: {
    width: 38,
    height: 38,
  },
})(Avatar);

const Template: Story<NavBarProps> = (args) => (
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
      <CustomAvatar src="/img/student-boy-2.png" alt="john doe" />
    </CustomToolbar>
  </NavBar>
);

export const Basic = Template.bind({});
