import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_ModalDialogTitle } from '..';

export const _retyped = Unstable_ModalDialogTitle as typeof Unstable_ModalDialogTitle;

export default {
  title: '@ps/ModalDialogTitle',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <Unstable_ModalDialogTitle {...args} />;

export const Children: Story = Template.bind({});
Children.args = { children: <>Children</> };
Children.storyName = 'children';
