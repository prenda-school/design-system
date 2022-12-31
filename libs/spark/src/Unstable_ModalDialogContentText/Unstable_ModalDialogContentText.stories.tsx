import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import {
  Unstable_ModalDialogContentText,
  Unstable_ModalDialogContentTextProps,
} from '..';

export const _retyped =
  Unstable_ModalDialogContentText as typeof Unstable_ModalDialogContentText;

export default {
  title: '@ps/ModalDialogContentText',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <Unstable_ModalDialogContentText {...args} />;

type Story = DefaultStory<Unstable_ModalDialogContentTextProps>;

export const Children: Story = Template.bind({});
Children.args = {
  children: <>Children</>,
};
Children.storyName = 'children';
