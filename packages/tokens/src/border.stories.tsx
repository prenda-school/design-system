import type { Meta, StoryObj } from '@storybook/react';
import * as border from './border';
import { Palette, BorderSwatch as Swatch } from '../.storybook/components';
import React from 'react';

const meta: Meta = {
  title: 'Border',
};

export default meta;

type Story = StoryObj;

export const None: Story = {
  render: () => <Swatch style={{ border: border.none }} />,
  name: 'none',
};

export const Transparent: Story = {
  render: () => <Swatch style={{ border: border.transparent }} />,
  name: 'transparent',
};

export const Subtle: Story = {
  render: () => <Swatch style={{ border: border.subtle }} />,
  name: 'subtle',
};

export const Standard: Story = {
  render: () => <Swatch style={{ border: border.standard }} />,
  name: 'standard',
};

export const Bold: Story = {
  render: () => <Swatch style={{ border: border.bold }} />,
  name: 'bold',
};

export const Selected: Story = {
  render: () => <Swatch style={{ border: border.selected }} />,
  name: 'selected',
};

export const Active: Story = {
  render: () => <Swatch style={{ border: border.active }} />,
  name: 'active',
};

export const Expanded: Story = {
  render: () => <Swatch style={{ border: border.expanded }} />,
  name: 'expanded',
};

export const Hover: Story = {
  render: () => <Swatch style={{ border: border.hover }} />,
  name: 'hover',
};

export const Focus: Story = {
  render: () => <Swatch style={{ border: border.focus }} />,
  name: 'focus',
};

export const Error: Story = {
  render: () => <Swatch style={{ border: border.error }} />,
  name: 'error',
};

export const Info: Story = {
  render: () => <Swatch style={{ border: border.info }} />,
  name: 'info',
};

export const Success: Story = {
  render: () => <Swatch style={{ border: border.success }} />,
  name: 'success',
};

export const Warning: Story = {
  render: () => <Swatch style={{ border: border.warning }} />,
  name: 'warning',
};

export const Stylistic: Story = {
  render: () => (
    <Palette>
      {Object.entries(border.stylistic).map(([name, value]) => (
        <div key={name}>
          <div>{name}</div>
          <Swatch style={{ border: value }} />
        </div>
      ))}
    </Palette>
  ),
  name: 'stylistic (palette)',
};

export const Action: Story = {
  render: () => (
    <Palette>
      {Object.entries(border.action).map(([name, value]) => (
        <div key={name}>
          <div>{name}</div>
          <Swatch style={{ border: value }} />
        </div>
      ))}
    </Palette>
  ),
  name: 'action (palette)',
};

export const Severity: Story = {
  render: () => (
    <Palette>
      {Object.entries(border.severity).map(([name, value]) => (
        <div key={name}>
          <div>{name}</div>
          <Swatch style={{ border: value }} />
        </div>
      ))}
    </Palette>
  ),
  name: 'severity (palette)',
};

export const Border: Story = {
  render: () => (
    <div>
      {Object.entries(border.border).map(([name, value]) => (
        <React.Fragment key={name}>
          <div>{name}</div>
          <Palette>
            {Object.entries(value).map(([name, value]) => (
              <div key={name}>
                <div>{name}</div>
                <Swatch style={{ border: value }} />
              </div>
            ))}
          </Palette>
        </React.Fragment>
      ))}
    </div>
  ),
  name: 'border (nested palettes)',
};
