import React from 'react';
import { NavBarButton, NavBarButtonProps } from '../src';
import UsersIconDuotone from '../src/icons/duotone/Users';
import { Meta, Story } from '@storybook/react/types-6-0';
import Box from '@material-ui/core/Box';

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
    {...args}
    startIcon={args.startIcon ? <UsersIconDuotone /> : undefined}
    endIcon={args.endIcon ? <UsersIconDuotone /> : undefined}
  >
    Label
  </NavBarButton>
);
export const Configurable = Template.bind({});

const GridContainer = (props) => (
  <Box
    m={1}
    display="grid"
    gridTemplateColumns="1fr 1fr 1fr"
    gridGap="16px"
    alignItems="center"
    {...props}
  />
);

const AllTemplate: Story = (args) => (
  <GridContainer>
    <span>
      <NavBarButton {...args}>Label</NavBarButton>
    </span>
    <span>
      <NavBarButton {...args} startIcon={<UsersIconDuotone />}>
        Label
      </NavBarButton>
    </span>
    <span>
      <NavBarButton {...args} endIcon={<UsersIconDuotone />}>
        Label
      </NavBarButton>
    </span>
    <span>
      <NavBarButton href="#" {...args}>
        Link
      </NavBarButton>
    </span>
    <span>
      <NavBarButton href="#" {...args} startIcon={<UsersIconDuotone />}>
        Link
      </NavBarButton>
    </span>
    <span>
      <NavBarButton href="#" {...args} endIcon={<UsersIconDuotone />}>
        Link
      </NavBarButton>
    </span>
  </GridContainer>
);

export const All = AllTemplate.bind({});
export const AllDisabled = AllTemplate.bind({});
AllDisabled.args = { disabled: true };
export const AllHover = AllTemplate.bind({});
AllHover.parameters = { pseudo: { hover: true } };
export const AllFocus = AllTemplate.bind({});
AllFocus.parameters = { pseudo: { focus: true } };
