import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import React from 'react';
import type { TabPanelProps } from '..';
import { TabPanel, Tabs } from '..';
import { sparkThemeProvider } from '../../../stories';

export const _retyped = TabPanel as typeof TabPanel;

export default {
  title: '@ps/TabPanel',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    'Tabs.defaultValue': '0',
  },
} as Meta;

const Template = (args) => {
  const { 'Tabs.defaultValue': TabsDefaultValue, ...other } = args;

  return (
    <Tabs defaultValue={TabsDefaultValue}>
      <TabPanel {...other}>Panel</TabPanel>
    </Tabs>
  );
};

type Story = DefaultStory<TabPanelProps>;

export const Value: Story = Template.bind({});
Value.args = { value: '0' };
Value.storyName = 'value';

export const ValueSTP: Story = Template.bind({});
ValueSTP.args = { value: '0' };
ValueSTP.decorators = [sparkThemeProvider];
ValueSTP.storyName = 'value (STP)';
