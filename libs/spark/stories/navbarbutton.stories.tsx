import React from 'react';
import { NavBarButton, NavBarButtonProps } from '../src';
import UsersIconDuotone from '../src/icons/duotone/Users';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'prenda-spark/NavBarButton',
  component: NavBarButton,
  argTypes: {
    onClick: { actions: 'clicked' },
    disabled: { control: 'boolean' },
    startIcon: {
      control: {
        type: 'select',
        options: [undefined, `users-icon-duotone`],
      },
    },
    endIcon: {
      control: {
        type: 'select',
        options: [undefined, `users-icon-duotone`],
      },
    },
    href: { control: 'text' },
  },
  args: {},
} as Meta;

interface TemplateButtonProps
  extends Omit<NavBarButtonProps, 'startIcon' | 'endIcon'> {
  startIcon?: typeof UsersIconDuotone;
  endIcon?: typeof UsersIconDuotone;
}

const Template: Story = (args: TemplateButtonProps) => (
  <NavBarButton
    startIcon={args.startIcon ? <UsersIconDuotone /> : undefined}
    endIcon={args.endIcon ? <UsersIconDuotone /> : undefined}
    {...args}
  >
    Label
  </NavBarButton>
);
export const ConfigurableInput = Template.bind({});

const AllTemplate: Story = (args) => (
  <>
    <div>
      <NavBarButton {...args}>Label</NavBarButton>
      <NavBarButton {...args} startIcon={<UsersIconDuotone />}>
        Label
      </NavBarButton>
      <NavBarButton {...args} endIcon={<UsersIconDuotone />}>
        Label
      </NavBarButton>
    </div>
    <div>
      <NavBarButton href="#" {...args}>
        Link
      </NavBarButton>
      <NavBarButton href="#" {...args} startIcon={<UsersIconDuotone />}>
        Link
      </NavBarButton>
      <NavBarButton href="#" {...args} endIcon={<UsersIconDuotone />}>
        Link
      </NavBarButton>
    </div>
  </>
);

export const All = AllTemplate.bind({});
export const AllDisabled = AllTemplate.bind({});
AllDisabled.args = { disabled: true };
export const AllHover = AllTemplate.bind({});
AllHover.parameters = { pseudo: { hover: true } };
export const AllFocus = AllTemplate.bind({});
AllFocus.parameters = { pseudo: { focus: true } };
