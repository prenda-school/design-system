import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { PaperProps } from '..';
import { Paper } from '..';
import { containElevation } from '../../../stories';

export const _retyped = (props: PaperProps) => <Paper {...props} />;

export default {
  title: '@ps/Paper',
  component: _retyped,
  decorators: [containElevation],
  excludeStories: ['_retyped'],
  args: {
    style: { height: 120, width: 120 },
    // mimic defaults
    border: 'none',
    radius: 'zero',
    shadow: 'none',
  },
} as Meta;

const Template = (args) => <Paper {...args} />;

type Story = DefaultStory<PaperProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';
