import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { AlertCircleFilled } from '@prenda/spark-icons';

export default {
  title: '@psi/AlertCircleFilled',
  component: AlertCircleFilled,
} as Meta;

const Template = (args) => <AlertCircleFilled {...args} />;

export const AlertCircleFilledStory: Story = Template.bind({});
AlertCircleFilledStory.storyName = 'AlertCircleFilled';
