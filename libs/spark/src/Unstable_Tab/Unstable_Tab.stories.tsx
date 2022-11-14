import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import React from 'react';
import {
  Unstable_Tab,
  Unstable_TabProps,
  Unstable_Tabs,
  Unstable_TabsProps,
} from '..';
import { containFocusIndicator, sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_Tab as typeof Unstable_Tab;

export default {
  title: '@ps/Tab',
  component: _retyped,
  excludeStories: ['_retyped'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [containFocusIndicator],
  argTypes: {},
  args: {
    children: <>Label</>,
  },
} as Meta;

const Template = (args) => {
  const { 'Tabs.orientation': TabsOrientation, ...other } = args;

  return (
    <Unstable_Tabs defaultValue="0" orientation={TabsOrientation}>
      <Unstable_Tab {...other} />
    </Unstable_Tabs>
  );
};

type Story = DefaultStory<
  Unstable_TabProps & {
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

export const Disabled: Story = Template.bind({});
Disabled.args = { disabled: true };
Disabled.storyName = 'disabled';

export const DisabledHover: Story = Template.bind({});
DisabledHover.args = { disabled: true };
DisabledHover.parameters = { pseudo: { hover: true } };
DisabledHover.storyName = 'disabled :hover';

export const Selected: Story = Template.bind({});
Selected.args = { selected: true };
Selected.storyName = 'selected';

export const SelectedHover: Story = Template.bind({});
SelectedHover.args = { selected: true };
SelectedHover.parameters = { pseudo: { hover: true } };
SelectedHover.storyName = 'selected :hover';

export const SelectedActive: Story = Template.bind({});
SelectedActive.args = { selected: true };
SelectedActive.parameters = { pseudo: { active: true } };
SelectedActive.storyName = 'selected :active';

export const SelectedDisabled: Story = Template.bind({});
SelectedDisabled.args = { selected: true, disabled: true };
SelectedDisabled.storyName = 'selected disabled';

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
TabsOrientationVerticalActive.storyName = ' Tabs.orientation=vertical :active';
