import type { Meta, StoryObj } from '@storybook/react';
import * as borderRadius from './border-radius';
import {
  Palette,
  BorderRadiusSwatch as Swatch,
} from '../.storybook/components';

const meta: Meta = {
  title: 'Border radius',
};

export default meta;

type Story = StoryObj;

export const Zero: Story = {
  render: () => <Swatch style={{ borderRadius: borderRadius.zero }} />,
  name: 'zero',
};

export const Xs: Story = {
  render: () => <Swatch style={{ borderRadius: borderRadius.xs }} />,
  name: 'xs',
};

export const Sm: Story = {
  render: () => <Swatch style={{ borderRadius: borderRadius.sm }} />,
  name: 'sm',
};

export const Md: Story = {
  render: () => <Swatch style={{ borderRadius: borderRadius.md }} />,
  name: 'md',
};

export const Lg: Story = {
  render: () => <Swatch style={{ borderRadius: borderRadius.lg }} />,
  name: 'lg',
};

export const Xl: Story = {
  render: () => <Swatch style={{ borderRadius: borderRadius.xl }} />,
  name: 'xl',
};

export const Full: Story = {
  render: () => <Swatch style={{ borderRadius: borderRadius.full }} />,
  name: 'full',
};

export const BorderRadius: Story = {
  render: () => (
    <Palette>
      {Object.entries(borderRadius.borderRadius).map(([name, value]) => (
        <div key={name}>
          <div>{name}</div>
          <Swatch style={{ borderRadius: value }} />
        </div>
      ))}
    </Palette>
  ),
  name: 'Border radius (palette)',
};
