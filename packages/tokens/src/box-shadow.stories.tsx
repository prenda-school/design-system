import type { Meta, StoryObj } from '@storybook/react';
import * as shadow from './box-shadow';
import { Palette, BoxShadowSwatch as Swatch } from '../.storybook/components';
import React from 'react';

const meta: Meta = {
  title: 'Shadow',
};

export default meta;

type Story = StoryObj;

export const None: Story = {
  render: () => <Swatch style={{ boxShadow: shadow.none }} />,
  name: 'none',
};

export const E100: Story = {
  render: () => <Swatch style={{ boxShadow: shadow.E100 }} />,
  name: 'E100',
};

export const E200: Story = {
  render: () => <Swatch style={{ boxShadow: shadow.E200 }} />,
  name: 'E200',
};

export const E300: Story = {
  render: () => <Swatch style={{ boxShadow: shadow.E300 }} />,
  name: 'E300',
};

export const E400: Story = {
  render: () => <Swatch style={{ boxShadow: shadow.E400 }} />,
  name: 'E400',
};

export const E500: Story = {
  render: () => <Swatch style={{ boxShadow: shadow.E500 }} />,
  name: 'E500',
};

export const Focus: Story = {
  render: () => <Swatch style={{ boxShadow: shadow.focus }} />,
  name: 'focus',
};

export const Error: Story = {
  render: () => <Swatch style={{ boxShadow: shadow.error }} />,
  name: 'error',
};

export const Info: Story = {
  render: () => <Swatch style={{ boxShadow: shadow.info }} />,
  name: 'info',
};

export const Success: Story = {
  render: () => <Swatch style={{ boxShadow: shadow.success }} />,
  name: 'success',
};

export const Warning: Story = {
  render: () => <Swatch style={{ boxShadow: shadow.warning }} />,
  name: 'warning',
};

export const Elevation: Story = {
  render: () => (
    <Palette>
      {Object.entries(shadow.elevation).map(([name, value]) => (
        <div key={name}>
          <div>{name}</div>
          <Swatch style={{ boxShadow: value }} />
        </div>
      ))}
    </Palette>
  ),
  name: 'elevation (palette)',
};

export const Action: Story = {
  render: () => (
    <Palette>
      {Object.entries(shadow.action).map(([name, value]) => (
        <div key={name}>
          <div>{name}</div>
          <Swatch style={{ boxShadow: value }} />
        </div>
      ))}
    </Palette>
  ),
  name: 'action (palette)',
};

export const Severity: Story = {
  render: () => (
    <Palette>
      {Object.entries(shadow.severity).map(([name, value]) => (
        <div key={name}>
          <div>{name}</div>
          <Swatch style={{ boxShadow: value }} />
        </div>
      ))}
    </Palette>
  ),
  name: 'severity (palette)',
};

export const BoxShadow: Story = {
  render: () => (
    <div>
      {Object.entries(shadow.boxShadow).map(([name, value]) => (
        <React.Fragment key={name}>
          <div>{name}</div>
          <Palette>
            {Object.entries(value).map(([name, value]) => (
              <div key={name}>
                <div>{name}</div>
                <Swatch style={{ boxShadow: value }} />
              </div>
            ))}
          </Palette>
        </React.Fragment>
      ))}
    </div>
  ),
  name: 'boxShadow (nested palettes)',
};
