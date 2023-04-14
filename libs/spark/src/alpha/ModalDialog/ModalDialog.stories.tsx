import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type {
  ModalDialogProps} from '..';
import {
  Button,
  ModalDialog,
  ModalDialogActions,
  ModalDialogContent,
  ModalDialogContentText,
  ModalDialogTitle,
} from '..';

export const _retyped = ModalDialog as typeof ModalDialog;

export default {
  title: '@ps/ModalDialog',
  component: _retyped,
  excludeStories: ['_retyped'],
} as Meta;

const Template = (args) => <ModalDialog {...args} />;

type Story = DefaultStory<ModalDialogProps>;

export const Example: Story = Template.bind({});
Example.args = {
  children: (
    <>
      <ModalDialogTitle>Title</ModalDialogTitle>
      <ModalDialogContent>
        <ModalDialogContentText>
          This is the body of the dialog. It can span multiple lines and
          sometimes it will cause a scrollbar to appear on the right. If a
          dialog gets too long consider creating a new page for your content.
        </ModalDialogContentText>
        <ModalDialogContentText>
          This is a second paragraph of text. It is spaced from the previous
          paragraph.
        </ModalDialogContentText>
      </ModalDialogContent>
      <ModalDialogActions>
        <Button variant="stroked">Secondary</Button>
        <Button>Primary</Button>
      </ModalDialogActions>
    </>
  ),
  closeable: true,
  fullWidth: true,
  maxWidth: 'sm',
  open: true,
};
Example.storyName = 'Example';
