import React, { ReactNode } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { GearFilled } from '@prenda/spark-icons';
import { StepButton, StepButtonProps } from '..';
import { sparkThemeProvider } from '../../stories';

interface SbStepButtonProps extends StepButtonProps {
  /**
   * **[Storybook-only:** hard-coded options.**]**
   */
  children?: ReactNode;
}

export const SbStepButton = (props: SbStepButtonProps) => (
  <StepButton {...props} />
);

export default {
  title: '@ps/StepButton',
  component: SbStepButton,
  excludeStories: ['SbStepButton'],
  argTypes: {
    children: {
      type: 'select',
      options: [null, 'Label'],
      mapping: {
        null: null,
        Label: 'Label',
      },
    },
    icon: {
      control: 'select',
      options: [1, 2, 3, 'A', 'GearFilled'],
      mapping: {
        1: 1,
        2: 2,
        3: 3,
        A: 'A',
        GearFilled: <GearFilled />,
      },
    },
  },
  args: {
    icon: 1,
  },
  decorators: [sparkThemeProvider],
} as Meta;

const Template = (args: SbStepButtonProps) => <StepButton {...args} />;

export const Configurable: Story = Template.bind({});

export const Hover: Story = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };
Hover.storyName = ':hover';

export const Focus: Story = Template.bind({});
Focus.parameters = { pseudo: { focusVisible: true } };
Focus.storyName = ':focus-visible';

export const Active: Story = Template.bind({});
Active.parameters = { pseudo: { active: true } };
Active.storyName = ':active';

export const ActiveHover: Story = Template.bind({});
ActiveHover.args = { active: true };
ActiveHover.parameters = { pseudo: { hover: true } };
ActiveHover.storyName = 'active:hover';

export const ActiveFocus: Story = Template.bind({});
ActiveFocus.args = { active: true };
ActiveFocus.parameters = { pseudo: { focusVisible: true } };
ActiveFocus.storyName = 'active:focus-visible';

export const ActiveActive: Story = Template.bind({});
ActiveActive.args = { active: true };
ActiveActive.parameters = { pseudo: { active: true } };
ActiveActive.storyName = 'active:active';

export const Disabled: Story = Template.bind({});
Disabled.args = { disabled: true };
Disabled.storyName = 'disabled';
