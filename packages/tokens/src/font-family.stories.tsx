import type { Meta, StoryObj } from '@storybook/react';
import {
  FontFamilyBody,
  FontFamilyCode,
  FontFamilyHeading,
} from './font-family';

const meta: Meta = {
  title: 'Font family',
};

export default meta;

type Story = StoryObj;

export const Heading: Story = {
  render: () => (
    <span style={{ fontFamily: FontFamilyHeading }}>
      Empower Learners everywhere ({FontFamilyHeading})
    </span>
  ),
};

export const Body: Story = {
  render: () => (
    <span style={{ fontFamily: FontFamilyBody }}>
      Empower Learners everywhere ({FontFamilyBody})
    </span>
  ),
};

export const Code: Story = {
  render: () => (
    <span style={{ fontFamily: FontFamilyCode }}>
      console.log("Hello world"); // {FontFamilyCode}
    </span>
  ),
};
