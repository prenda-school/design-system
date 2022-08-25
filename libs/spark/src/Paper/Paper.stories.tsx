import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Paper } from '..';

export const _retyped = Paper as typeof Paper;

export default {
  title: '@ps/Paper',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    style: { height: 120, width: 120 },
  },
} as Meta;

const Template = (args) => <Paper {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const Elevation0: Story = Template.bind({});
Elevation0.args = { elevation: 0 };
Elevation0.storyName = 'elevation=0';

export const Elevation1: Story = Template.bind({});
Elevation1.args = { elevation: 1 };
Elevation1.storyName = 'elevation=1';

export const Elevation2: Story = Template.bind({});
Elevation2.args = { elevation: 2 };
Elevation2.storyName = 'elevation=2';

export const Elevation3: Story = Template.bind({});
Elevation3.args = { elevation: 3 };
Elevation3.storyName = 'elevation=3';

export const Elevation4: Story = Template.bind({});
Elevation4.args = { elevation: 4 };
Elevation4.storyName = 'elevation=4';

export const Elevation5: Story = Template.bind({});
Elevation5.args = { elevation: 5 };
Elevation5.storyName = 'elevation=5';

export const Elevation6Thru24: Story = Template.bind({});
Elevation6Thru24.args = { elevation: 6 };
Elevation6Thru24.storyName = 'elevation=(6..24)';
