import type { Meta, StoryObj } from '@storybook/react';
import * as backgroundColor from './background-color';
import { Palette, Swatch } from '../.storybook/components';

const meta: Meta = {
  title: 'Background color',
};

export default meta;

type Story = StoryObj;

export const Standard: Story = {
  render: () => (
    <Swatch style={{ backgroundColor: backgroundColor.standard }} />
  ),
  name: 'standard',
};

export const Alternative: Story = {
  render: () => (
    <Swatch style={{ backgroundColor: backgroundColor.alternative }} />
  ),
  name: 'alternative',
};

export const Brand: Story = {
  render: () => <Swatch style={{ backgroundColor: backgroundColor.brand }} />,
  name: 'brand',
};

export const Inverse: Story = {
  render: () => <Swatch style={{ backgroundColor: backgroundColor.inverse }} />,
  name: 'inverse',
};

export const Overlay: Story = {
  render: () => <Swatch style={{ backgroundColor: backgroundColor.overlay }} />,
  name: 'overlay',
};

export const BackgroundColor: Story = {
  render: () => (
    <Palette>
      {Object.entries(backgroundColor.backgroundColor).map(([name, value]) => (
        <div key={name}>
          <div>{name}</div>
          <Swatch style={{ backgroundColor: value }} />
        </div>
      ))}
    </Palette>
  ),
  name: 'backgroundColor (palette)',
};
