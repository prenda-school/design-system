import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import {
  Unstable_Button,
  Unstable_ModalDialog,
  Unstable_ModalDialogActions,
  Unstable_ModalDialogContent,
  Unstable_ModalDialogContentText,
  Unstable_ModalDialogProps,
  Unstable_ModalDialogTitle,
} from '..';

export const _retyped = Unstable_ModalDialog as typeof Unstable_ModalDialog;

export default {
  title: '@ps/ModalDialog',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <Unstable_ModalDialog {...args} />;

type Story = DefaultStory<Unstable_ModalDialogProps>;

export const Example: Story = Template.bind({});
Example.args = {
  children: (
    <>
      <Unstable_ModalDialogTitle>Title</Unstable_ModalDialogTitle>
      <Unstable_ModalDialogContent>
        <Unstable_ModalDialogContentText>
          This is the body of the dialog. It can span multiple lines and
          sometimes it will cause a scrollbar to appear on the right. If a
          dialog gets too long consider creating a new page for your content.
        </Unstable_ModalDialogContentText>
        <Unstable_ModalDialogContentText>
          This is a second paragraph of text. It is spaced from the previous
          paragraph.
        </Unstable_ModalDialogContentText>
      </Unstable_ModalDialogContent>
      <Unstable_ModalDialogActions>
        <Unstable_Button variant="stroked">Secondary</Unstable_Button>
        <Unstable_Button>Primary</Unstable_Button>
      </Unstable_ModalDialogActions>
    </>
  ),
  closeable: true,
  fullWidth: true,
  maxWidth: 'sm',
  open: true,
};
Example.storyName = 'Example';
