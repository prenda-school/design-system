import React from 'react';
import { NavBarButton } from '../src';
import UsersIconDuotone from '../src/icons/duotone/Users';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'prenda-spark/NavBarButton',
  component: NavBarButton,
  argTypes: {},
  args: {},
} as Meta;

const Template = () => (
  <NavBarButton href="#" startIcon={<UsersIconDuotone />}>
    Link Text
  </NavBarButton>
);
export const Basic = Template.bind({});
