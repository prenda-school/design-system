import React from 'react';
import { NavBarButton } from '../src';
import UsersIconDuotone from '../src/icons/duotone/Users';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'prenda-spark/NavBarButton',
  component: NavBarButton,
  argTypes: {},
  args: {},
} as Meta;

export const BasicNavBarButton: Story = (args) => (
  <NavBarButton href="#" {...args}>
    Link Text
  </NavBarButton>
);

export const WithStartIcon = () => (
  <NavBarButton href="#" startIcon={<UsersIconDuotone />}>
    Link Text
  </NavBarButton>
);

export const WithEndIcon = () => (
  <NavBarButton href="#" endIcon={<UsersIconDuotone />}>
    Link Text
  </NavBarButton>
);

export const Hover = WithStartIcon.bind({});
Hover.parameters = { pseudo: { hover: true } };

export const Disabled = () => (
  <NavBarButton href="#" startIcon={<UsersIconDuotone />} disabled>
    Link Text
  </NavBarButton>
);

export const Active = () => (
  <NavBarButton href="#" startIcon={<UsersIconDuotone />} aria-current="page">
    Link Text
  </NavBarButton>
);
