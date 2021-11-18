import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { AlertCircle } from '@prenda/spark-icons';

export default {
  title: '@psi/AlertCircle',
  component: AlertCircle,
} as Meta;

const Template = (args) => <AlertCircle {...args} />;

export const AlertCircleStory: Story = Template.bind({});
AlertCircleStory.storyName = 'AlertCircle';
