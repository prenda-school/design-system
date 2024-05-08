import type { Meta, StoryObj } from '@storybook/react';
import { Tokens } from './tokens';

const meta: Meta<typeof Tokens> = {
  component: Tokens,
  title: 'Tokens',
};
export default meta;
type Story = StoryObj<typeof Tokens>;

export const Primary = {
  args: {},
};
