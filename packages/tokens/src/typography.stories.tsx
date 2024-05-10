import type { Meta, StoryObj } from '@storybook/react';
import * as typography from './typography';

const meta: Meta = {
  title: 'Typography',
};

export default meta;

type Story = StoryObj;

export const Display: Story = {
  render: () => (
    <span style={{ ...typography.display }}>Empower Learners everywhere</span>
  ),
  name: 'display',
};

export const T32: Story = {
  render: () => (
    <span style={{ ...typography.T32 }}>Empower Learners everywhere</span>
  ),
  name: 'T32',
};

export const T28: Story = {
  render: () => (
    <span style={{ ...typography.T28 }}>Empower Learners everywhere</span>
  ),
  name: 'T28',
};

export const T22: Story = {
  render: () => (
    <span style={{ ...typography.T22 }}>Empower Learners everywhere</span>
  ),
  name: 'T22',
};

export const T18: Story = {
  render: () => (
    <span style={{ ...typography.T18 }}>Empower Learners everywhere</span>
  ),
  name: 'T18',
};

export const T14: Story = {
  render: () => <span style={{ ...typography.T14 }}>Passion to learn</span>,
  name: 'T14',
};

export const Body: Story = {
  render: () => (
    <span style={{ ...typography.body }}>
      When we allow students to own their education, connect them with quality
      learning tools, caring adults, and a community, their natural love of
      learning takes over and they become unstoppable.
    </span>
  ),
  name: 'body',
};

export const Label: Story = {
  render: () => <span style={{ ...typography.label }}>Select grades</span>,
  name: 'label',
};

export const Description: Story = {
  render: () => (
    <span style={{ ...typography.description }}>
      When we allow students to own their education, connect them with quality
      learning tools, caring adults, and a community, their natural love of
      learning takes over and they become unstoppable.
    </span>
  ),
  name: 'description',
};

export const Code: Story = {
  render: () => (
    <span style={{ ...typography.code }}>console.log("Hello world");</span>
  ),
  name: 'code',
};

export const Typography: Story = {
  render: () => (
    <div>
      {Object.entries(typography.typography).map(([name, value]) => (
        <div key={name} style={{ marginTop: 8 }}>
          <div>{name}</div>
          <span style={{ ...value }}>Empower learners everywhere</span>
        </div>
      ))}
    </div>
  ),
  name: 'typography (palette)',
};
