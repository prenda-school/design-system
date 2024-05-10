import type { Meta, StoryObj } from '@storybook/react';
import * as textColor from './text-color';

const meta: Meta = {
  title: 'Text color',
};

export default meta;

type Story = StoryObj;

export const Heading: Story = {
  render: () => (
    <span style={{ color: textColor.heading }}>
      Empower learners everywhere
    </span>
  ),
  name: 'heading',
};

export const Body: Story = {
  render: () => (
    <span style={{ color: textColor.body }}>Empower learners everywhere</span>
  ),
  name: 'body',
};

export const Disabled: Story = {
  render: () => (
    <span style={{ color: textColor.disabled }}>
      Empower learners everywhere
    </span>
  ),
  name: 'disabled',
};

export const Icon: Story = {
  render: () => (
    <span style={{ color: textColor.icon }}>Empower learners everywhere</span>
  ),
  name: 'icon',
};

export const SecondaryIcon: Story = {
  render: () => (
    <span style={{ color: textColor.secondaryIcon }}>
      Empower learners everywhere
    </span>
  ),
  name: 'secondaryIcon',
};

export const InverseHeading: Story = {
  render: () => (
    <span style={{ color: textColor.inverseHeading }}>
      Empower learners everywhere
    </span>
  ),
  name: 'inverseHeading',
};

export const InverseBody: Story = {
  render: () => (
    <span style={{ color: textColor.inverseBody }}>
      Empower learners everywhere
    </span>
  ),
  name: 'inverseBody',
};

export const InverseDisabled: Story = {
  render: () => (
    <span style={{ color: textColor.inverseDisabled }}>
      Empower learners everywhere
    </span>
  ),
  name: 'inverseDisabled',
};

export const InverseIcon: Story = {
  render: () => (
    <span style={{ color: textColor.inverseIcon }}>
      Empower learners everywhere
    </span>
  ),
  name: 'inverseIcon',
};

export const InverseSecondaryIcon: Story = {
  render: () => (
    <span style={{ color: textColor.inverseSecondaryIcon }}>
      Empower learners everywhere
    </span>
  ),
  name: 'inverseSecondaryIcon',
};

export const Text: Story = {
  render: () => (
    <div>
      {Object.entries(textColor.textColor).map(([name, value]) => (
        <div key={name} style={{ marginTop: 8 }}>
          <div>{name}</div>
          <span style={{ color: value }}>Empower learners everywhere</span>
        </div>
      ))}
    </div>
  ),
  name: 'text (palette)',
};
