import type { Meta, StoryObj } from '@storybook/react';
import * as radius from './radius';
import { Palette, RadiusSwatch as Swatch } from '../.storybook/components';

const meta: Meta = {
  title: 'Radius',
};

export default meta;

type Story = StoryObj;

export const Zero: Story = {
  render: () => <Swatch style={{ borderRadius: radius.zero }} />,
  name: 'zero',
};

export const Xs: Story = {
  render: () => <Swatch style={{ borderRadius: radius.xs }} />,
  name: 'xs',
};

export const Sm: Story = {
  render: () => <Swatch style={{ borderRadius: radius.sm }} />,
  name: 'sm',
};

export const Md: Story = {
  render: () => <Swatch style={{ borderRadius: radius.md }} />,
  name: 'md',
};

export const Lg: Story = {
  render: () => <Swatch style={{ borderRadius: radius.lg }} />,
  name: 'lg',
};

export const Xl: Story = {
  render: () => <Swatch style={{ borderRadius: radius.xl }} />,
  name: 'xl',
};

export const Full: Story = {
  render: () => <Swatch style={{ borderRadius: radius.full }} />,
  name: 'full',
};

export const Radius: Story = {
  render: () => (
    <Palette>
      {Object.entries(radius.radius).map(([name, value]) => (
        <div key={name}>
          <div>{name}</div>
          <Swatch style={{ borderRadius: value }} />
        </div>
      ))}
    </Palette>
  ),
  name: 'radius (palette)',
};
