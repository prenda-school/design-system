import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import React from 'react';
import {
  Unstable_Tab,
  Unstable_Tabs,
  Unstable_TabsList,
  Unstable_TabsListProps,
  Unstable_TabsProps,
} from '..';
import { containBoxShadow, sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_TabsList as typeof Unstable_TabsList;

export default {
  title: '@ps/TabsList',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containBoxShadow],
  args: {
    'Tabs.defaultValue': '0',
    'aria-label': 'Example of three tabs',
  },
} as Meta;

const Template = (args) => {
  const {
    'Tabs.orientation': TabsOrientation,
    'Tabs.defaultValue': TabsDefaultValue,
    ...other
  } = args;

  return (
    <Unstable_Tabs
      defaultValue={TabsDefaultValue}
      orientation={TabsOrientation}
    >
      <Unstable_TabsList {...other}>
        <Unstable_Tab value="0">Label 0</Unstable_Tab>
        <Unstable_Tab value="1">Label 1</Unstable_Tab>
        <Unstable_Tab value="2">Label 2</Unstable_Tab>
      </Unstable_TabsList>
    </Unstable_Tabs>
  );
};

type Story = DefaultStory<
  Unstable_TabsListProps & {
    'Tabs.orientation': Unstable_TabsProps['orientation'];
  }
>;

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

export const TabsOrientationVertical: Story = Template.bind({});
TabsOrientationVertical.args = { 'Tabs.orientation': 'vertical' };
TabsOrientationVertical.storyName = 'Tabs.orientation=vertical';

export const TabsOrientationVerticalHover: Story = Template.bind({});
TabsOrientationVerticalHover.args = { 'Tabs.orientation': 'vertical' };
TabsOrientationVerticalHover.parameters = { pseudo: { hover: true } };
TabsOrientationVerticalHover.storyName = 'Tabs.orientation=vertical :hover';

export const TabsOrientationVerticalFocusVisible: Story = Template.bind({});
TabsOrientationVerticalFocusVisible.args = { 'Tabs.orientation': 'vertical' };
TabsOrientationVerticalFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};
TabsOrientationVerticalFocusVisible.storyName =
  'Tabs.orientation=vertical :focus-visible';

export const TabsOrientationVerticalActive: Story = Template.bind({});
TabsOrientationVerticalActive.args = { 'Tabs.orientation': 'vertical' };
TabsOrientationVerticalActive.parameters = { pseudo: { active: true } };
TabsOrientationVerticalActive.storyName = 'Tabs.orientation=vertical :active';
