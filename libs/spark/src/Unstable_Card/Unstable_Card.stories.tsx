import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Unstable_Card, Unstable_CardProps, Unstable_Typography } from '..';

export const _retyped = (props: Unstable_CardProps) => (
  <Unstable_Card {...props} />
);

export default {
  title: '@ps/Card',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    // mimic defaults
    border: 'standard',
    orientation: 'vertical',
    radius: 'md',
    shadow: 'none',
  },
} as Meta;

const Template = (args) => (
  <Unstable_Card {...args}>
    <Unstable_Typography component="h1" variant="T22">
      Lorem Ipsum
    </Unstable_Typography>
    <Unstable_Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Unstable_Typography>
  </Unstable_Card>
);

type Story = DefaultStory<Unstable_CardProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';
