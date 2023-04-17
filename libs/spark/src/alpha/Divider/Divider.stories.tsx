import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { DecoratorFn } from '@storybook/react';
import type { DividerProps } from '..';
import { Divider } from '..';

export const _retyped = Divider as typeof Divider;

const boundary: DecoratorFn = (Story, context) => (
  <span style={{ display: 'block', height: 90, width: 360 }}>
    <Story {...context} />
  </span>
);

export default {
  title: '@ps/Divider',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [boundary],
} as Meta;

const Template = (args) => <Divider {...args} />;

type Story = DefaultStory<
  DividerProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any;
  }
>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const ComponentSpan: Story = Template.bind({});
ComponentSpan.args = { component: 'span' };
ComponentSpan.storyName = 'component=span';

export const Darker: Story = Template.bind({});
Darker.args = { darker: true };
Darker.storyName = 'darker';

export const OrientationVertical: Story = Template.bind({});
OrientationVertical.args = { orientation: 'vertical' };
OrientationVertical.storyName = 'orientation=vertical';

export const VariantInset: Story = Template.bind({});
VariantInset.args = { variant: 'inset' };
VariantInset.storyName = 'variant=inset';

export const VariantMiddle: Story = Template.bind({});
VariantMiddle.args = { variant: 'middle' };
VariantMiddle.storyName = 'variant=middle';
