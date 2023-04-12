import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Button, ModalDialogActions, ModalDialogActionsProps } from '..';

export const _retyped = ModalDialogActions as typeof ModalDialogActions;

export default {
  title: '@ps/ModalDialogActions',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <ModalDialogActions {...args} />;

type Story = DefaultStory<ModalDialogActionsProps>;

export const Children: Story = Template.bind({});
Children.args = {
  children: <>Children</>,
};
Children.storyName = 'children';

export const SecondaryAndPrimary: Story = Template.bind({});
SecondaryAndPrimary.args = {
  children: (
    <>
      <Button variant="stroked">Secondary</Button>
      <Button>Primary</Button>
    </>
  ),
};
SecondaryAndPrimary.storyName = 'Secondary & Primary';
