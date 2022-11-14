import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import React from 'react';
import {
  Unstable_Tab,
  Unstable_TabPanel,
  Unstable_Tabs,
  Unstable_TabsList,
  Unstable_TabsProps,
} from '..';
import {
  containFocusIndicator,
  enableHooks,
  largeWidth,
  sparkThemeProvider,
  statefulValue,
} from '../../stories';

export const _retyped = Unstable_Tabs as typeof Unstable_Tabs;

export default {
  title: '@ps/Tabs',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [largeWidth, containFocusIndicator],
  args: {
    'TabsList.aria-label': 'tabs story',
  },
} as Meta;

const Template = (args) => {
  const { 'TabsList.aria-label': TabsListAriaLabel, ...other } = args;

  return (
    <Unstable_Tabs {...other}>
      <Unstable_TabsList aria-label={TabsListAriaLabel}>
        <Unstable_Tab value="0">Label 0</Unstable_Tab>
        <Unstable_Tab value="1">Label 1</Unstable_Tab>
        <Unstable_Tab value="2">Label 2</Unstable_Tab>
      </Unstable_TabsList>
      <Unstable_TabPanel value="0">Panel 0</Unstable_TabPanel>
      <Unstable_TabPanel value="1">Panel 1</Unstable_TabPanel>
      <Unstable_TabPanel value="2">Panel 2</Unstable_TabPanel>
    </Unstable_Tabs>
  );
};

type Story = DefaultStory<Unstable_TabsProps>;

export const DefaultValue: Story = Template.bind({});
DefaultValue.args = { defaultValue: '0' };
DefaultValue.storyName = 'defaultValue';

export const DefaultValueSTP: Story = Template.bind({});
DefaultValueSTP.args = { defaultValue: '0' };
DefaultValueSTP.decorators = [sparkThemeProvider];
DefaultValueSTP.storyName = 'defaultValue (STP)';

export const Value: Story = Template.bind({});
Value.args = { value: '0' };
Value.decorators = [statefulValue, enableHooks];
Value.storyName = 'value';
