import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PaginationItem } from '@material-ui/lab';

export default {
  title: 'prenda-spark/Pagination Item',
  component: PaginationItem,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'page',
          'first',
          'last',
          'next',
          'previous',
          'start-ellipsis',
          'end-ellipsis',
        ],
      },
    },
    page: { control: 'number' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    type: 'page',
    page: 1,
  },
} as Meta;

const Template = (args) => (
  <div style={{ margin: '1rem', height: '3rem', aspectRatio: '1' }}>
    <PaginationItem {...args} />
  </div>
);

export const Configurable = Template.bind({});

export const Page = Template.bind({});
Page.args = { type: 'page' };

export const PageHover = Template.bind({});
PageHover.args = { type: 'page' };
PageHover.parameters = { pseudo: { hover: true } };

export const PageFocus = Template.bind({});
PageFocus.args = { type: 'page' };
PageFocus.parameters = { pseudo: { focus: true } };

export const PageSelected = Template.bind({});
PageSelected.args = { type: 'page', selected: true };

export const PageSelectedHover = Template.bind({});
PageSelectedHover.args = { type: 'page', selected: true };
PageSelectedHover.parameters = { pseudo: { hover: true } };

export const PageSelectedFocus = Template.bind({});
PageSelectedFocus.args = { type: 'page', selected: true };
PageSelectedFocus.parameters = { pseudo: { focus: true } };

export const PageSelectedDisabled = Template.bind({});
PageSelectedDisabled.args = { type: 'page', selected: true, disabled: true };

export const PageDisabled = Template.bind({});
PageDisabled.args = { type: 'page', disabled: true };

export const PageDisabledHover = Template.bind({});
PageDisabledHover.args = { type: 'page', disabled: true };
PageDisabledHover.parameters = { pseudo: { hover: true } };

export const PageDisabledFocus = Template.bind({});
PageDisabledFocus.args = { type: 'page', disabled: true };
PageDisabledFocus.parameters = { pseudo: { focus: true } };

export const First = Template.bind({});
First.args = { type: 'first' };

export const FirstHover = Template.bind({});
FirstHover.args = { type: 'first' };
FirstHover.parameters = { pseudo: { hover: true } };

export const FirstFocus = Template.bind({});
FirstFocus.args = { type: 'first' };
FirstFocus.parameters = { pseudo: { focus: true } };

export const FirstDisabled = Template.bind({});
FirstDisabled.args = { type: 'first', disabled: true };

export const Last = Template.bind({});
Last.args = { type: 'last' };

export const LastHover = Template.bind({});
LastHover.args = { type: 'last' };
LastHover.parameters = { pseudo: { hover: true } };

export const LastFocus = Template.bind({});
LastFocus.args = { type: 'last' };
LastFocus.parameters = { pseudo: { focus: true } };

export const LastDisabled = Template.bind({});
LastDisabled.args = { type: 'last', disabled: true };

export const Next = Template.bind({});
Next.args = { type: 'next' };

export const NextHover = Template.bind({});
NextHover.args = { type: 'next' };
NextHover.parameters = { pseudo: { hover: true } };

export const NextFocus = Template.bind({});
NextFocus.args = { type: 'next' };
NextFocus.parameters = { pseudo: { focus: true } };

export const NextDisabled = Template.bind({});
NextDisabled.args = { type: 'next', disabled: true };

export const Previous = Template.bind({});
Previous.args = { type: 'previous' };

export const PreviousHover = Template.bind({});
PreviousHover.args = { type: 'previous' };
PreviousHover.parameters = { pseudo: { hover: true } };

export const PreviousFocus = Template.bind({});
PreviousFocus.args = { type: 'previous' };
PreviousFocus.parameters = { pseudo: { focus: true } };

export const PreviousDisabled = Template.bind({});
PreviousDisabled.args = { type: 'previous', disabled: true };

export const StartEllipsis = Template.bind({});
StartEllipsis.args = { type: 'start-ellipsis' };

export const EndEllipsis = Template.bind({});
EndEllipsis.args = { type: 'end-ellipsis' };
