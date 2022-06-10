import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { StepConnector, StepConnectorProps } from '..';
import { sparkThemeProvider } from '../../stories';

export default {
  title: '@ps/StepConnector',
  component: StepConnector,
  decorators: [sparkThemeProvider],
} as Meta;

const Template = (args: StepConnectorProps) => <StepConnector {...args} />;

export const Configurable: Story = Template.bind({});

export const Horizontal: Story = Template.bind({});
Horizontal.args = { orientation: 'horizontal' };
Horizontal.storyName = 'horizontal';

export const HorizontalActive: Story = Template.bind({});
HorizontalActive.args = { active: true };
HorizontalActive.storyName = 'horizontal active';

export const HorizontalCompleted: Story = Template.bind({});
HorizontalCompleted.args = { completed: true };
HorizontalCompleted.storyName = 'horizontal completed';

export const HorizontalDisabled: Story = Template.bind({});
HorizontalDisabled.args = { disabled: true };
HorizontalDisabled.storyName = 'horizontal disabled';

export const Vertical: Story = Template.bind({});
Vertical.args = { orientation: 'vertical' };
Vertical.storyName = 'vertical';

export const VerticalActive: Story = Template.bind({});
VerticalActive.args = { orientation: 'vertical', active: true };
VerticalActive.storyName = 'vertical active';

export const VerticalCompleted: Story = Template.bind({});
VerticalCompleted.args = { orientation: 'vertical', completed: true };
VerticalCompleted.storyName = 'vertical completed';

export const VerticalDisabled: Story = Template.bind({});
VerticalDisabled.args = { orientation: 'vertical', disabled: true };
VerticalDisabled.storyName = 'vertical disabled';
