import type { Meta, StoryObj } from '@storybook/react';

const Sample = () => null;

const meta: Meta<typeof Sample> = {
  component: Sample,
  title: 'Sample',
};
export default meta;
type Story = StoryObj<typeof Sample>;

export const Primary = {
  args: {},
};
