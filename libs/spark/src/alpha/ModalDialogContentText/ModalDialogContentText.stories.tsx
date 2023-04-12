import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { ModalDialogContentText, ModalDialogContentTextProps } from '..';

export const _retyped = ModalDialogContentText as typeof ModalDialogContentText;

export default {
  title: '@ps/ModalDialogContentText',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <ModalDialogContentText {...args} />;

type Story = DefaultStory<ModalDialogContentTextProps>;

export const Children: Story = Template.bind({});
Children.args = {
  children: <>Children</>,
};
Children.storyName = 'children';
