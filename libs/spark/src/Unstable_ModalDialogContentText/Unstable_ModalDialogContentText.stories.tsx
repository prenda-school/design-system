import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_ModalDialogContentText } from '..';

export const _retyped = Unstable_ModalDialogContentText as typeof Unstable_ModalDialogContentText;

export default {
  title: '@ps/ModalDialogContentText',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <Unstable_ModalDialogContentText {...args} />;

export const Children: Story = Template.bind({});
Children.args = {
  children: <>Children</>,
};
Children.storyName = 'children';
