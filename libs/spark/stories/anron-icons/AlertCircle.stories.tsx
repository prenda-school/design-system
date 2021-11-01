import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { AlertCircle } from '@prenda/spark-icons';

export default {
  title: '@psi/AlertCircle',
  component: AlertCircle,
} as Meta;

const Template: Story = (args) => <AlertCircle {...args} />;

export const AlertCircleStory = Template.bind({});
AlertCircleStory.storyName = 'AlertCircle';
