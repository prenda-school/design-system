import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import React from 'react';
import { Unstable_Tab, Unstable_TabProps, Unstable_Tabs } from '..';
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

const Template = (args) => (
  <Unstable_Tabs defaultValue="0">
    <Unstable_Tab {...args} />
  </Unstable_Tabs>
);

type Story = DefaultStory<Unstable_TabProps>;

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
