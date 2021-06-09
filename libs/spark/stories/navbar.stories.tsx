import React from 'react';
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

const Template = (args: NavbarProps) => (
  <Navbar {...args}>
    <NavbarLink href="/">
      <HomeIcon fontSize="large" color="navy" contrast="low" />
      <span>Dashboard</span>
    </NavbarLink>
    <NavbarLink href="/" aria-current="page">
      <CheckCircleIcon fontSize="large" color="navy" contrast="low" />
      <span>Active</span>
    </NavbarLink>
    <NavbarLink>
      <QuestionCircleIcon fontSize="large" color="navy" contrast="low" />
      <span>Disabled</span>
    </NavbarLink>
  </Navbar>
);
export const BasicNavbar = Template.bind({});
