import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_Paper } from '..';

export const _retyped = Unstable_Paper as typeof Unstable_Paper;

export default {
  title: '@ps/Paper',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    style: { height: 120, width: 120 },
  },
} as Meta;

const Template = (args) => <Unstable_Paper {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const Elevation0: Story = Template.bind({});
Elevation0.args = { elevation: 0 };
Elevation0.storyName = 'elevation=0';

export const Elevation100: Story = Template.bind({});
Elevation100.args = { elevation: 100 };
Elevation100.storyName = 'elevation=100';

export const Elevation200: Story = Template.bind({});
Elevation200.args = { elevation: 200 };
Elevation200.storyName = 'elevation=200';

export const Elevation300: Story = Template.bind({});
Elevation300.args = { elevation: 300 };
Elevation300.storyName = 'elevation=300';

export const Elevation400: Story = Template.bind({});
Elevation400.args = { elevation: 400 };
Elevation400.storyName = 'elevation=400';

export const Elevation500: Story = Template.bind({});
Elevation500.args = { elevation: 500 };
Elevation500.storyName = 'elevation=500';
