import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_AvatarButton } from '..';
import {
  containFocusIndicator,
  inverseBackground,
  sparkThemeProvider,
  User,
} from '../../stories';

export const _retyped = Unstable_AvatarButton as typeof Unstable_AvatarButton;

export default {
  title: '@ps/Unstable_AvatarButton',
  component: _retyped,
  excludeStories: ['_retyped'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [containFocusIndicator],
  argTypes: {
    children: {
      control: 'select',
      options: [undefined, 'Initials', 'Icon'],
      mapping: {
        undefined: undefined,
        Initials: <>A</>,
        Icon: <User />,
      },
    },
    src: {
      control: 'select',
      options: [
        undefined,
        '(Guide 1)',
        '(Guide 2)',
        '(Guide 3)',
        '(Boy 1)',
        '(Boy 2)',
        '(Boy 3)',
        '(Girl 1)',
        '(Girl 2)',
        '(Girl 3)',
      ],
      mapping: {
        undefined: undefined,
        '(Guide 1)': '/img/guide-1.png',
        '(Guide 2)': '/img/guide-2.png',
        '(Guide 3)': '/img/guide-3.png',
        '(Boy 1)': '/img/student-boy-1.png',
        '(Boy 2)': '/img/student-boy-2.png',
        '(Boy 3)': '/img/student-boy-3.png',
        '(Girl 1)': '/img/student-girl-1.png',
        '(Girl 2)': '/img/student-girl-2.png',
        '(Girl 3)': '/img/student-girl-3.png',
      },
    },
    alt: {
      control: 'select',
      options: [undefined, '(for Guide)', '(for Boy)', '(for Girl)'],
      mapping: {
        undefined: undefined,
        '(for Guide)': 'Adult woman smiling',
        '(for Boy)': 'Child boy smiling',
        '(for Girl)': 'Child girl smiling',
      },
    },
  },
  args: {
    children: 'Initials',
    color: 'purple',
  },
} as Meta;

const Template = (args) => <Unstable_AvatarButton {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const SparkThemeProvider: Story = Template.bind({});
SparkThemeProvider.decorators = [sparkThemeProvider];
SparkThemeProvider.storyName = '(SparkThemeProvider)';

export const Hover: Story = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };
Hover.storyName = ':hover';

export const Active: Story = Template.bind({});
Active.parameters = { pseudo: { active: true } };
Active.storyName = ':active';

export const Expanded: Story = Template.bind({});
Expanded.args = { 'aria-expanded': true };
Expanded.storyName = 'aria-expanded';

export const FocusVisible: Story = Template.bind({});
FocusVisible.parameters = { pseudo: { focusVisible: true } };
FocusVisible.storyName = ':focus-visible';

export const Disabled: Story = Template.bind({});
Disabled.args = { disabled: true };
Disabled.storyName = 'disabled';

const OnInverseTemplate = (args) => (
  <div style={{ padding: 5 }}>
    <Unstable_AvatarButton {...args} />
  </div>
);

export const OnInverse: Story = OnInverseTemplate.bind({});
OnInverse.decorators = [inverseBackground];
OnInverse.storyName = '(on inverse)';

export const OnInverseDisabled: Story = OnInverseTemplate.bind({});
OnInverseDisabled.args = { disabled: true };
OnInverseDisabled.decorators = [inverseBackground];
OnInverseDisabled.storyName = '(on inverse) disabled';
