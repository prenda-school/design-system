import React from 'react';
import { NavBarItem } from '../src';
import UsersIconDuotone from '../src/icons/duotone/Users';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'prenda-spark/NavBarItem',
  component: NavBarItem,
  argTypes: {},
  args: {},
} as Meta;

const Template = () => (
  <NavBarItem href="#" startIcon={<UsersIconDuotone />}>
    Link Text
  </NavBarItem>
);
export const Basic = Template.bind({});
