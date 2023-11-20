import type { Meta, StoryObj } from '@storybook/react';
import { Components } from './components';

const meta: Meta<typeof Components> = {
  component: Components,
  title: 'Components',
};
export default meta;
type Story = StoryObj<typeof Components>;

export const Primary = {
  args: {},
};
