import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { AlertCircleDuotone } from '@prenda/spark-icons';

export default {
  title: '@psi/AlertCircleDuotone',
  component: AlertCircleDuotone,
} as Meta;

const Template: Story = (args) => <AlertCircleDuotone {...args} />;

export const AlertCircleDuotoneStory = Template.bind({});
AlertCircleDuotoneStory.storyName = 'AlertCircleDuotone';
