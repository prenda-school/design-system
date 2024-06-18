import type { Meta, StoryObj } from '@storybook/react';
import { Dataviz } from './dataviz';

const meta: Meta<typeof Dataviz> = {
  component: Dataviz,
  title: 'Dataviz',
};
export default meta;
type Story = StoryObj<typeof Dataviz>;

export const Primary = {
  args: {},
};
