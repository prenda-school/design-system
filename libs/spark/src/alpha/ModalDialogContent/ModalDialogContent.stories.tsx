import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { ModalDialogTitleProps } from '..';
import { ModalDialogContent } from '..';

export const _retyped = ModalDialogContent as typeof ModalDialogContent;

export default {
  title: '@ps/ModalDialogContent',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <ModalDialogContent {...args} />;

type Story = DefaultStory<ModalDialogTitleProps>;

export const Children: Story = Template.bind({});
Children.args = {
  children: <>Children</>,
};
Children.storyName = 'children';
