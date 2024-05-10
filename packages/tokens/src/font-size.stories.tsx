import type { Meta, StoryObj } from '@storybook/react';
import { FontSizeDefault } from './font-size';

const meta: Meta = {
  title: 'Font size',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <span style={{ fontSize: FontSizeDefault }}>
      Empower Learners everywhere ({FontSizeDefault})
    </span>
  ),
};
