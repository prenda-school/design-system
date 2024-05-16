import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  args: {
    children: <>Empower Learners everywhere</>,
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const VariantDisplay: Story = {
  name: 'variant=display',
  args: {
    variant: 'display',
  },
};

export const VariantT32: Story = {
  name: 'variant=T32',
  args: {
    variant: 'T32',
  },
};

export const VariantT28: Story = {
  name: 'variant=T28',
  args: {
    variant: 'T28',
  },
};

export const VariantT22: Story = {
  name: 'variant=T22',
  args: {
    variant: 'T22',
  },
};

export const VariantT18: Story = {
  name: 'variant=T18',
  args: {
    variant: 'T18',
  },
};

export const VariantT14: Story = {
  name: 'variant=T14',
  args: {
    variant: 'T14',
  },
};

export const VariantBody: Story = {
  name: 'variant=body',
  args: {
    variant: 'body',
  },
};

export const VariantLabel: Story = {
  name: 'variant=label',
  args: {
    variant: 'label',
  },
};

export const VariantDescription: Story = {
  name: 'variant=description',
  args: {
    variant: 'description',
  },
};

export const VariantCode: Story = {
  name: 'variant=code',
  args: {
    variant: 'code',
  },
};

// body/description strong
// color
