import type { Meta, StoryObj } from '@storybook/react';
import * as skinTone from './skin-tone';
import { Palette, Swatch } from '../.storybook/components';
import React from 'react';

const meta: Meta = {
  title: 'Skin tone',
};

export default meta;

type Story = StoryObj;

export const Cool100: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Cool100 }} />,
  name: 'Cool100',
};

export const Cool200: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Cool200 }} />,
  name: 'Cool200',
};

export const Cool300: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Cool300 }} />,
  name: 'Cool300',
};

export const Cool400: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Cool400 }} />,
  name: 'Cool400',
};

export const Cool500: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Cool500 }} />,
  name: 'Cool500',
};

export const Neutral100: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Neutral100 }} />,
  name: 'Neutral100',
};

export const Neutral200: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Neutral200 }} />,
  name: 'Neutral200',
};

export const Neutral300: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Neutral300 }} />,
  name: 'Neutral300',
};

export const Neutral400: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Neutral400 }} />,
  name: 'Neutral400',
};

export const Neutral500: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Neutral500 }} />,
  name: 'Neutral500',
};

export const Warm100: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Warm100 }} />,
  name: 'Warm100',
};

export const Warm200: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Warm200 }} />,
  name: 'Warm200',
};

export const Warm300: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Warm300 }} />,
  name: 'Warm300',
};

export const Warm400: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Warm400 }} />,
  name: 'Warm400',
};

export const Warm500: Story = {
  render: () => <Swatch style={{ backgroundColor: skinTone.Warm500 }} />,
  name: 'Warm500',
};

export const Cool: Story = {
  render: () => (
    <Palette>
      {Object.entries(skinTone.cool).map(([name, value]) => (
        <div key={name}>
          <div>{name}</div>
          <Swatch style={{ backgroundColor: value }} />
        </div>
      ))}
    </Palette>
  ),
  name: 'cool (palette)',
};

export const Neutral: Story = {
  render: () => (
    <Palette>
      {Object.entries(skinTone.neutral).map(([name, value]) => (
        <div key={name}>
          <div>{name}</div>
          <Swatch style={{ backgroundColor: value }} />
        </div>
      ))}
    </Palette>
  ),
  name: 'neutral (palette)',
};

export const Warm: Story = {
  render: () => (
    <Palette>
      {Object.entries(skinTone.warm).map(([name, value]) => (
        <div key={name}>
          <div>{name}</div>
          <Swatch style={{ backgroundColor: value }} />
        </div>
      ))}
    </Palette>
  ),
  name: 'warm (palette)',
};

export const SkinTone: Story = {
  render: () => (
    <div>
      {Object.entries(skinTone.skinTone).map(([name, value]) => (
        <React.Fragment key={name}>
          <div>{name}</div>
          <Palette>
            {Object.entries(value).map(([name, value]) => (
              <div key={name}>
                <div>{name}</div>
                <Swatch style={{ backgroundColor: value }} />
              </div>
            ))}
          </Palette>
        </React.Fragment>
      ))}
    </div>
  ),
  name: 'skinTone (nested palettes)',
};
