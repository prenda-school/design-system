import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Unstable_AvatarButton, Unstable_AvatarButtonProps } from '..';
import {
  containFocusIndicator,
  inverseBackground,
  sparkThemeProvider,
  User,
} from '../../stories';

export const _retyped = Unstable_AvatarButton as typeof Unstable_AvatarButton;

export default {
  title: '@ps/AvatarButton',
  component: _retyped,
  excludeStories: ['_retyped'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [containFocusIndicator],
  argTypes: {
    children: {
      control: 'select',
      options: [undefined, '(Initials)', '(Icon)'],
      mapping: {
        undefined: undefined,
        '(Initials)': <>A</>,
        '(Icon)': <User />,
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
} as Meta;

const Template = (args) => <Unstable_AvatarButton {...args} />;

type Story = DefaultStory<Unstable_AvatarButtonProps>;

export const ChildrenInitials: Story = Template.bind({});
ChildrenInitials.args = { children: '(Initials)' };
ChildrenInitials.storyName = 'children=(Initials)';

export const ChildrenInitialsSTP: Story = Template.bind({});
ChildrenInitialsSTP.args = { children: '(Initials)' };
ChildrenInitialsSTP.decorators = [sparkThemeProvider];
ChildrenInitialsSTP.storyName = 'children=(Initials) (STP)';

export const ChildrenInitialsSizeMedium: Story = Template.bind({});
ChildrenInitialsSizeMedium.args = { children: '(Initials)', size: 'medium' };
ChildrenInitialsSizeMedium.storyName = 'children=(Initials) size=medium';

export const ChildrenInitialsHover: Story = Template.bind({});
ChildrenInitialsHover.args = { children: '(Initials)' };
ChildrenInitialsHover.parameters = { pseudo: { hover: true } };
ChildrenInitialsHover.storyName = 'children=(Initials) :hover';

export const ChildrenInitialsActive: Story = Template.bind({});
ChildrenInitialsActive.args = { children: '(Initials)' };
ChildrenInitialsActive.parameters = { pseudo: { active: true } };
ChildrenInitialsActive.storyName = 'children=(Initials) :active';

export const ChildrenInitialsExpanded: Story = Template.bind({});
ChildrenInitialsExpanded.args = {
  'aria-expanded': true,
  children: '(Initials)',
};
ChildrenInitialsExpanded.storyName = 'children=(Initials) aria-expanded';

export const ChildrenInitialsFocusVisible: Story = Template.bind({});
ChildrenInitialsFocusVisible.args = { children: '(Initials)' };
ChildrenInitialsFocusVisible.parameters = { pseudo: { focusVisible: true } };
ChildrenInitialsFocusVisible.storyName = 'children=(Initials) :focus-visible';

export const ChildrenInitialsDisabled: Story = Template.bind({});
ChildrenInitialsDisabled.args = { children: '(Initials)', disabled: true };
ChildrenInitialsDisabled.storyName = 'children=(Initials) disabled';

const OnInverseTemplate = (args) => (
  <div style={{ padding: 5 }}>
    <Unstable_AvatarButton {...args} />
  </div>
);

export const OnInverseChildrenInitials: Story = OnInverseTemplate.bind({});
OnInverseChildrenInitials.args = { children: '(Initials)' };
OnInverseChildrenInitials.decorators = [inverseBackground];
OnInverseChildrenInitials.storyName = '(on inverse) children=(Initials)';

export const OnInverseChildrenInitialsDisabled: Story = OnInverseTemplate.bind(
  {}
);
OnInverseChildrenInitialsDisabled.args = {
  children: '(Initials)',
  disabled: true,
};
OnInverseChildrenInitialsDisabled.decorators = [inverseBackground];
OnInverseChildrenInitialsDisabled.storyName =
  '(on inverse) children=(Initials) disabled';
