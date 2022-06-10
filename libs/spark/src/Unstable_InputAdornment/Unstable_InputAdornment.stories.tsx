import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_InputAdornment,
  Unstable_InputAdornmentProps,
  unstable_createSvgIcon,
} from '..';
import { sparkThemeProvider } from '../../stories';

const Search = unstable_createSvgIcon(
  <path d="M2.75 11a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zM11 1.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a9.712 9.712 0 006.344-2.346l3.126 3.126a.75.75 0 101.06-1.06l-3.126-3.126A9.712 9.712 0 0020.75 11c0-5.385-4.365-9.75-9.75-9.75z" />,
  'Sb_Search'
);

// underlying props don't have descriptions
export const Sb_Unstable_InputAdornment = (
  props: Unstable_InputAdornmentProps
) => <Unstable_InputAdornment {...props} />;

export default {
  title: '@ps/Unstable_InputAdornment',
  component: Sb_Unstable_InputAdornment,
  excludeStories: ['Sb_Unstable_InputAdornment'],
  argTypes: {
    children: {
      control: 'select',
      options: ['text', 'Search'],
      mapping: {
        text: 'kg',
        Search: <Search />,
      },
    },
  },
  args: {
    children: 'Search',
  },
} as Meta;

const Template = (args) => <Unstable_InputAdornment {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const SparkThemeProvider: Story = Template.bind({});
SparkThemeProvider.decorators = [sparkThemeProvider];
SparkThemeProvider.storyName = '(SparkThemeProvider)';

export const PositionStart: Story = Template.bind({});
PositionStart.args = { position: 'start' };
PositionStart.storyName = 'position=start';

export const PositionEnd: Story = Template.bind({});
PositionEnd.args = { position: 'end' };
PositionEnd.storyName = 'position=end';

export const ChildrenText: Story = Template.bind({});
ChildrenText.args = { children: 'text' };
ChildrenText.storyName = 'children=text';
