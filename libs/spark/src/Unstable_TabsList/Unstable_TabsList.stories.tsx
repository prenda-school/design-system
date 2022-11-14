import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import React from 'react';
import {
  Unstable_Tab,
  Unstable_Tabs,
  Unstable_TabsList,
  Unstable_TabsListProps,
} from '..';
import {
  containFocusIndicator,
  largeWidth,
  sparkThemeProvider,
} from '../../stories';

export const _retyped = Unstable_TabsList as typeof Unstable_TabsList;

export default {
  title: '@ps/TabsList',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [largeWidth, containFocusIndicator],
  args: {
    'Tabs.defaultValue': '0',
    'aria-label': 'Example of three tabs',
  },
} as Meta;

const Template = (args) => {
  const { 'Tabs.defaultValue': TabsDefaultValue, ...other } = args;

  return (
    <Unstable_Tabs defaultValue={TabsDefaultValue}>
      <Unstable_TabsList {...other}>
        <Unstable_Tab value="0">Label 0</Unstable_Tab>
        <Unstable_Tab value="1">Label 1</Unstable_Tab>
        <Unstable_Tab value="2">Label 2</Unstable_Tab>
      </Unstable_TabsList>
    </Unstable_Tabs>
  );
};

type Story = DefaultStory<Unstable_TabsListProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const STP: Story = Template.bind({});
STP.decorators = [sparkThemeProvider];
STP.storyName = '(STP)';

export const Hover: Story = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };
Hover.storyName = ':hover';

export const FocusVisible: Story = Template.bind({});
FocusVisible.parameters = { pseudo: { focusVisible: true } };
FocusVisible.storyName = ':focus-visible';

export const Active: Story = Template.bind({});
Active.parameters = { pseudo: { active: true } };
Active.storyName = ':active';
