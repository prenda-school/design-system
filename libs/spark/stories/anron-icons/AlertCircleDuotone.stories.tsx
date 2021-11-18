import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { AlertCircleDuotone } from '@prenda/spark-icons';

export default {
  title: '@psi/AlertCircleDuotone',
  component: AlertCircleDuotone,
} as Meta;

const Template = (args) => <AlertCircleDuotone {...args} />;

export const AlertCircleDuotoneStory: Story = Template.bind({});
AlertCircleDuotoneStory.storyName = 'AlertCircleDuotone';
