import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import {
  LinearProgress_unstable,
  LinearProgressProps_unstable,
  Unstable_Typography,
} from '..';

export const _retyped =
  LinearProgress_unstable as typeof LinearProgress_unstable;

export default {
  title: '@ps/LinearProgress',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <LinearProgress_unstable {...args} />;

type Story = DefaultStory<LinearProgressProps_unstable>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const Value0: Story = Template.bind({});
Value0.args = { value: 0 };
Value0.storyName = 'value=0';

export const Value50: Story = Template.bind({});
Value50.args = { value: 50 };
Value50.storyName = 'value=50';

export const Value100: Story = Template.bind({});
Value100.args = { value: 100 };
Value100.storyName = 'value=100';

export const VariantDeterminateValueColorBlue: Story = Template.bind({});
VariantDeterminateValueColorBlue.args = {
  color: 'blue',
  value: 50,
  variant: 'determinate',
};
VariantDeterminateValueColorBlue.storyName =
  'variant=determinate value=50 color=blue';

export const VariantDeterminateValueColorGreen: Story = Template.bind({});
VariantDeterminateValueColorGreen.args = {
  color: 'green',
  value: 50,
  variant: 'determinate',
};
VariantDeterminateValueColorGreen.storyName =
  'variant=determinate value=50 color=green';

export const VariantDeterminateValueColorNeutral: Story = Template.bind({});
VariantDeterminateValueColorNeutral.args = {
  color: 'neutral',
  value: 50,
  variant: 'determinate',
};
VariantDeterminateValueColorNeutral.storyName =
  'variant=determinate value=50 color=neutral';

export const VariantDeterminateValueColorPurple: Story = Template.bind({});
VariantDeterminateValueColorPurple.args = {
  color: 'purple',
  value: 50,
  variant: 'determinate',
};
VariantDeterminateValueColorPurple.storyName =
  'variant=determinate value=50 color=purple';

export const VariantDeterminateValueColorRed: Story = Template.bind({});
VariantDeterminateValueColorRed.args = {
  color: 'red',
  value: 50,
  variant: 'determinate',
};
VariantDeterminateValueColorRed.storyName =
  'variant=determinate value=50 color=red';

export const VariantDeterminateValueColorTeal: Story = Template.bind({});
VariantDeterminateValueColorTeal.args = {
  color: 'teal',
  value: 50,
  variant: 'determinate',
};
VariantDeterminateValueColorTeal.storyName =
  'variant=determinate value=50 color=teal';

export const VariantDeterminateValueColorYellow: Story = Template.bind({});
VariantDeterminateValueColorYellow.args = {
  color: 'yellow',
  value: 50,
  variant: 'determinate',
};
VariantDeterminateValueColorYellow.storyName =
  'variant=determinate value=50 color=yellow';

export const VariantIndeterminate: Story = Template.bind({});
VariantIndeterminate.args = { variant: 'indeterminate' };
VariantIndeterminate.storyName = 'variant=indeterminate';

export const VariantQuery: Story = Template.bind({});
VariantQuery.args = { variant: 'query' };
VariantQuery.storyName = 'variant=query';

const labelElement = (
  <Unstable_Typography component="span" variant="T14">
    50%
  </Unstable_Typography>
);

export const Value50Children: Story = Template.bind({});
Value50Children.args = {
  children: labelElement,
  value: 50,
};
Value50Children.storyName = 'children value=50';

export const Value50ChildrenLabelPlacementStart: Story = Template.bind({});
Value50ChildrenLabelPlacementStart.args = {
  children: labelElement,
  value: 50,
  labelPlacement: 'start',
};
Value50ChildrenLabelPlacementStart.storyName =
  'children value=50 labelPlacement=start';

export const Value50ChildrenLabelPlacementEnd: Story = Template.bind({});
Value50ChildrenLabelPlacementEnd.args = {
  children: labelElement,
  value: 50,
  labelPlacement: 'end',
};
Value50ChildrenLabelPlacementEnd.storyName =
  'children value=50 labelPlacement=end';
