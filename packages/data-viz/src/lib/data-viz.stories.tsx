import type { Meta, StoryObj } from '@storybook/react';
import { DataViz } from './data-viz';

const meta: Meta<typeof DataViz> = {
  component: DataViz,
  title: 'DataViz',
};
export default meta;
type Story = StoryObj<typeof DataViz>;

export const Primary = {
  args: {},
};
