import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { CheckCircleDuotone } from '@prenda/spark-icons';
import { Box, NavBarButton, NavBarButtonProps } from '..';

interface SbNavBarButtonProps
  extends Omit<
    NavBarButtonProps,
    | 'centerRipple'
    | 'disableRipple'
    | 'disableElevation'
    | 'disableFocusRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'tabIndex'
    | 'TouchRippleProps'
  > {
  /**
   * **[Storybook-note:** available if `component='a'` or equivalent.**]**
   */
  href?: string;
}
export const SbNavBarButton = (props: SbNavBarButtonProps) => (
  <NavBarButton {...props} />
);

export default {
  title: '@ps/NavBarButton',
  component: SbNavBarButton,
  excludeStories: ['SbNavBarButton'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    disabled: { control: 'boolean' },
    startIcon: {
      control: 'select',
      options: ['undefined', 'CheckCircleDuotone'],
      mapping: {
        undefined: undefined,
        CheckCircleDuotone: <CheckCircleDuotone />,
      },
    },
    endIcon: {
      control: 'select',
      options: ['undefined', 'CheckCircleDuotone'],
      mapping: {
        undefined: undefined,
        CheckCircleDuotone: <CheckCircleDuotone />,
      },
    },
  },
  args: {
    children: 'Label',
  },
} as Meta;

const Template = (args: NavBarButtonProps) => <NavBarButton {...args} />;
export const Configurable: Story = Template.bind({});

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

const AllTemplate = (args) => (
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

export const All: Story = AllTemplate.bind({});

export const AllDisabled: Story = AllTemplate.bind({});
AllDisabled.args = { disabled: true };

export const AllHover: Story = AllTemplate.bind({});
AllHover.parameters = { pseudo: { hover: true } };

export const AllFocus: Story = AllTemplate.bind({});
AllFocus.parameters = { pseudo: { focusVisible: true } };

export const AllActive: Story = AllTemplate.bind({});
AllActive.parameters = { pseudo: { active: true } };
