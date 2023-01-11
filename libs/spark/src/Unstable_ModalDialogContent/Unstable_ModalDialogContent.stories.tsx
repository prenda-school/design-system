import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import {
  Unstable_ModalDialogContent,
  Unstable_ModalDialogTitleProps,
} from '..';

export const _retyped =
  Unstable_ModalDialogContent as typeof Unstable_ModalDialogContent;

export default {
  title: '@ps/ModalDialogContent',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <Unstable_ModalDialogContent {...args} />;

type Story = DefaultStory<Unstable_ModalDialogTitleProps>;

export const Children: Story = Template.bind({});
Children.args = {
  children: <>Children</>,
};
Children.storyName = 'children';
