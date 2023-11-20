import type { Meta, StoryObj } from '@storybook/react';
import { Icons } from './icons';

const meta: Meta<typeof Icons> = {
  component: Icons,
  title: 'Icons',
};
export default meta;
type Story = StoryObj<typeof Icons>;

export const Primary = {
  args: {},
};
