import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { OutlineOriginCenter } from './OutlineOriginCenter';

const meta: Meta<typeof OutlineOriginCenter> = {
  title: 'Decorators/OutlineOriginCenter',
  component: OutlineOriginCenter,
  decorators: (Story) => (
    <svg viewBox="-100 -100 200 200" width="200" height="200">
      <Story />
    </svg>
  ),
};

export default meta;

type Story = StoryObj<typeof OutlineOriginCenter>;

export const Example: Story = {
  args: {},
};
