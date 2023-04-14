import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { CardProps} from '..';
import { Card, Typography } from '..';

export const _retyped = (props: CardProps) => <Card {...props} />;

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
  <Card {...args}>
    <Typography component="h1" variant="T22">
      Lorem Ipsum
    </Typography>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Typography>
  </Card>
);

type Story = DefaultStory<CardProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';
