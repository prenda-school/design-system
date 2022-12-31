import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import {
  Unstable_Button,
  Unstable_ModalDialogActions,
  Unstable_ModalDialogActionsProps,
} from '..';

export const _retyped =
  Unstable_ModalDialogActions as typeof Unstable_ModalDialogActions;

export default {
  title: '@ps/ModalDialogActions',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <Unstable_ModalDialogActions {...args} />;

type Story = DefaultStory<Unstable_ModalDialogActionsProps>;

export const Children: Story = Template.bind({});
Children.args = {
  children: <>Children</>,
};
Children.storyName = 'children';

export const SecondaryAndPrimary: Story = Template.bind({});
SecondaryAndPrimary.args = {
  children: (
    <>
      <Unstable_Button variant="stroked">Secondary</Unstable_Button>
      <Unstable_Button>Primary</Unstable_Button>
    </>
  ),
};
SecondaryAndPrimary.storyName = 'Secondary & Primary';
