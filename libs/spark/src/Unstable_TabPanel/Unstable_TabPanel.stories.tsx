import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import React from 'react';
import { Unstable_TabPanel, Unstable_TabPanelProps, Unstable_Tabs } from '..';
import { sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_TabPanel as typeof Unstable_TabPanel;

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
    <Unstable_Tabs defaultValue={TabsDefaultValue}>
      <Unstable_TabPanel {...other}>Panel</Unstable_TabPanel>
    </Unstable_Tabs>
  );
};

type Story = DefaultStory<Unstable_TabPanelProps>;

export const Value: Story = Template.bind({});
Value.args = { value: '0' };
Value.storyName = 'value';

export const ValueSTP: Story = Template.bind({});
ValueSTP.args = { value: '0' };
ValueSTP.decorators = [sparkThemeProvider];
ValueSTP.storyName = 'value (STP)';
