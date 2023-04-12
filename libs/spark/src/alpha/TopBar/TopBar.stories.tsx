import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { TopBar, TopBarProps } from '..';

export const _retyped = TopBar as typeof TopBar;

export default {
  title: '@ps/TopBar',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <TopBar {...args} />;

type Story = DefaultStory<TopBarProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const ColorStandard: Story = Template.bind({});
ColorStandard.args = { color: 'standard' };
ColorStandard.storyName = 'color=standard';

export const ColorBrand: Story = Template.bind({});
ColorBrand.args = { color: 'brand' };
ColorBrand.storyName = 'color=brand';

export const ColorInverse: Story = Template.bind({});
ColorInverse.args = { color: 'inverse' };
ColorInverse.storyName = 'color=inverse';

export const ColorAlternative: Story = Template.bind({});
ColorAlternative.args = { color: 'alternative' };
ColorAlternative.storyName = 'color=alternative';

export const ColorTransparent: Story = Template.bind({});
ColorTransparent.args = { color: 'transparent' };
ColorTransparent.storyName = 'color=transparent';
