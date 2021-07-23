import React from 'react';
import { NavBarButton } from '../src';
import CheckCircleDuotone from '@prenda/spark-icons/CheckCircleDuotone';
import { Meta, Story } from '@storybook/react/types-6-0';
import Box from '@material-ui/core/Box';
import { NavBarButtonProps } from '../src/NavBarButton';

export default {
  title: 'prenda-spark/NavBarButton',
  component: NavBarButton,
  argTypes: {
    onClick: { actions: 'clicked' },
    disabled: { control: 'boolean' },
    startIcon: {
      control: {
        type: 'select',
        options: [undefined, `check-circle-duotone`],
      },
    },
    endIcon: {
      control: {
        type: 'select',
        options: [undefined, `check-circle-duotone`],
      },
    },
    href: { control: 'text' },
  },
  args: {},
} as Meta;

interface TemplateButtonProps
  extends Omit<NavBarButtonProps, 'startIcon' | 'endIcon'> {
  startIcon?: typeof CheckCircleDuotone;
  endIcon?: typeof CheckCircleDuotone;
}

const Template: Story = (args: TemplateButtonProps) => (
  <NavBarButton
    {...args}
    startIcon={args.startIcon ? <CheckCircleDuotone /> : undefined}
    endIcon={args.endIcon ? <CheckCircleDuotone /> : undefined}
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
      <NavBarButton {...args} startIcon={<CheckCircleDuotone />}>
        Label
      </NavBarButton>
    </span>
    <span>
      <NavBarButton {...args} endIcon={<CheckCircleDuotone />}>
        Label
      </NavBarButton>
    </span>
    <span>
      <NavBarButton href="#" {...args}>
        Link
      </NavBarButton>
    </span>
    <span>
      <NavBarButton href="#" {...args} startIcon={<CheckCircleDuotone />}>
        Link
      </NavBarButton>
    </span>
    <span>
      <NavBarButton href="#" {...args} endIcon={<CheckCircleDuotone />}>
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
export const AllActive = AllTemplate.bind({});
AllActive.parameters = { pseudo: { active: true } };