import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { AlertCircleFilled } from '@prenda/spark-icons';

export default {
  title: 'PDS/@psi/AlertCircleFilled',
  component: AlertCircleFilled,
} as Meta;

const Template: Story = (args) => <AlertCircleFilled {...args} />;

export const AlertCircleFilledStory = Template.bind({});
AlertCircleFilledStory.storyName = 'AlertCircleFilled';
