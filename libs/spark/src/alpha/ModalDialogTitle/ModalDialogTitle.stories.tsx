import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { ModalDialogTitleProps } from '..';
import { ModalDialogTitle } from '..';

export const _retyped = ModalDialogTitle as typeof ModalDialogTitle;

export default {
  title: '@ps/ModalDialogTitle',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <ModalDialogTitle {...args} />;

type Story = DefaultStory<ModalDialogTitleProps>;

export const Children: Story = Template.bind({});
Children.args = { children: <>Children</> };
Children.storyName = 'children';
