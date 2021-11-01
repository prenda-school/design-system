import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { GearFilled } from '@prenda/spark-icons';
import { StepButton, StepButtonProps } from '..';

interface SbStepButtonProps extends StepButtonProps {
  /**
   * **[Storybook-only]** Show sample text in step label.
   */
  sb_showLabel?: boolean;
}

export const SbStepButton = ({ sb_showLabel, ...props }: SbStepButtonProps) => (
  <StepButton {...props} />
);

export default {
  title: '@ps/StepButton',
  component: SbStepButton,
  excludeStories: ['SbStepButton'],
  argTypes: {
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
} as Meta;

const Template = ({ sb_showLabel, ...args }: SbStepButtonProps) => (
  <StepButton {...args}>{sb_showLabel ? 'Label' : null}</StepButton>
);

export const Configurable: Story = Template.bind({});

export const Hover: Story = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };
Hover.storyName = ':hover';

export const Focus: Story = Template.bind({});
Focus.parameters = { pseudo: { focus: true } };
Focus.storyName = ':focus';

export const Active: Story = Template.bind({});
Active.parameters = { pseudo: { active: true } };
Active.storyName = ':active';

export const ActiveHover: Story = Template.bind({});
ActiveHover.args = { active: true };
ActiveHover.parameters = { pseudo: { hover: true } };
ActiveHover.storyName = 'active:hover';

export const ActiveFocus: Story = Template.bind({});
ActiveFocus.args = { active: true };
ActiveFocus.parameters = { pseudo: { focus: true } };
ActiveFocus.storyName = 'active:focus';

export const ActiveActive: Story = Template.bind({});
ActiveActive.args = { active: true };
ActiveActive.parameters = { pseudo: { active: true } };
ActiveActive.storyName = 'active:active';

export const Disabled: Story = Template.bind({});
Disabled.args = { disabled: true };
Disabled.storyName = 'disabled';
