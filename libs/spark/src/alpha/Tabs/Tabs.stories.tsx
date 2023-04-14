import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import React from 'react';
import type { TabsProps } from '..';
import { Tab, TabPanel, Tabs, TabsList } from '..';
import {
  containBoxShadow,
  enableHooks,
  sparkThemeProvider,
  statefulValue,
} from '../../../stories';

export const _retyped = Tabs as typeof Tabs;

export default {
  title: '@ps/Tabs',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containBoxShadow],
  args: {
    'TabsList.aria-label': 'tabs story',
  },
} as Meta;

const Template = (args) => {
  const { 'TabsList.aria-label': TabsListAriaLabel, ...other } = args;

  return (
    <Tabs {...other}>
      <TabsList aria-label={TabsListAriaLabel}>
        <Tab value="0">Label 0</Tab>
        <Tab value="1">Label 1</Tab>
        <Tab value="2">Label 2</Tab>
      </TabsList>
      <TabPanel value="0">Panel 0</TabPanel>
      <TabPanel value="1">Panel 1</TabPanel>
      <TabPanel value="2">Panel 2</TabPanel>
    </Tabs>
  );
};

type Story = DefaultStory<TabsProps>;

export const DefaultValue: Story = Template.bind({});
DefaultValue.args = { defaultValue: '0' };
DefaultValue.storyName = 'defaultValue';

export const DefaultValueSTP: Story = Template.bind({});
DefaultValueSTP.args = { defaultValue: '0' };
DefaultValueSTP.decorators = [sparkThemeProvider];
DefaultValueSTP.storyName = 'defaultValue (STP)';

export const DefaultValueOrientationVertical: Story = Template.bind({});
DefaultValueOrientationVertical.args = {
  defaultValue: '0',
  orientation: 'vertical',
};
DefaultValueOrientationVertical.storyName = 'defaultValue orientation=vertical';

export const Value: Story = Template.bind({});
Value.args = { value: '0' };
Value.decorators = [statefulValue, enableHooks];
Value.storyName = 'value';
