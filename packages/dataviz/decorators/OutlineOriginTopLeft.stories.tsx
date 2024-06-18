import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { OutlineOriginTopLeft } from './OutlineOriginTopLeft';

const meta: Meta<typeof OutlineOriginTopLeft> = {
  title: 'Decorators/OutlineOriginTopLeft',
  component: OutlineOriginTopLeft,
  decorators: (Story) => (
    <svg viewBox="0 0 200 200" width="200" height="200">
      <Story />
    </svg>
  ),
};

export default meta;

type Story = StoryObj<typeof OutlineOriginTopLeft>;

export const Example: Story = {
  args: {},
};
