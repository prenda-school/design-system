import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Unstable_ModalDialogTitle, Unstable_ModalDialogTitleProps } from '..';

export const _retyped = Unstable_ModalDialogTitle as typeof Unstable_ModalDialogTitle;

export default {
  title: '@ps/ModalDialogTitle',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <Unstable_ModalDialogTitle {...args} />;

type Story = DefaultStory<Unstable_ModalDialogTitleProps>;

export const Children: Story = Template.bind({});
Children.args = { children: <>Children</> };
Children.storyName = 'children';
