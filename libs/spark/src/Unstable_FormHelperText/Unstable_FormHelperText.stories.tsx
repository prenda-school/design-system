import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_FormHelperText } from '..';
import { Info } from '../../stories';

export const _retyped = Unstable_FormHelperText as typeof Unstable_FormHelperText;

export default {
  title: '@ps/FormHelperText',
  component: _retyped,
  excludeStories: ['_retyped'],
  argTypes: {
    leadingIcon: {
      control: 'select',
      options: ['undefined', '<Info />'],
      mapping: {
        undefined: undefined,
        '<Info />': <Info />,
      },
    },
    children: {
      control: 'select',
      options: ['(text)', '(ul)'],
      mapping: {
        '(text)': <>Helper text</>,
        '(ul)': (
          <ul>
            <li>list item one</li>
            <li>list item two</li>
            <li>list item three</li>
          </ul>
        ),
        '(ol)': (
          <ol>
            <li>list item one</li>
            <li>list item two</li>
            <li>list item three</li>
          </ol>
        ),
        '(span > ul)': (
          <span>
            More information
            <ul>
              <li>list item one</li>
              <li>list item two</li>
              <li>list item three</li>
            </ul>
          </span>
        ),
      },
    },
  },
} as Meta;

const Template = (args) => <Unstable_FormHelperText {...args} />;

export const ChildrenText: Story = Template.bind({});
ChildrenText.args = { children: '(text)' };
ChildrenText.storyName = 'children=(text)';

export const ChildrenTextDisabled: Story = Template.bind({});
ChildrenTextDisabled.args = { children: '(text)', disabled: true };
ChildrenTextDisabled.storyName = 'children=(text) disabled';

export const ChildrenTextError: Story = Template.bind({});
ChildrenTextError.args = { children: '(text)', error: true };
ChildrenTextError.storyName = 'children=(text) error';

export const ChildrenTextFocused: Story = Template.bind({});
ChildrenTextFocused.args = { children: '(text)', focused: true };
ChildrenTextFocused.storyName = 'children=(text) focused';

export const ChildrenTextLeadingIcon: Story = Template.bind({});
ChildrenTextLeadingIcon.args = { children: '(text)', leadingIcon: '<Info />' };
ChildrenTextLeadingIcon.storyName = 'children=(text) leadingIcon';

export const ChildrenTextLeadingIconError: Story = Template.bind({});
ChildrenTextLeadingIconError.args = {
  children: '(text)',
  leadingIcon: '<Info />',
  error: true,
};
ChildrenTextLeadingIconError.storyName = 'children=(text) leadingIcon error';

export const ChildrenTextRequired: Story = Template.bind({});
ChildrenTextRequired.args = { children: '(text)', required: true };
ChildrenTextRequired.storyName = 'children=(text) required';

export const ChildrenListItemsComponentUl: Story = Template.bind({});
ChildrenListItemsComponentUl.args = {
  children: '(ul)',
  component: 'span',
};
ChildrenListItemsComponentUl.storyName = 'children=(ul) component=span';

export const ChildrenListItemsComponentUlLeadingIcon: Story = Template.bind({});
ChildrenListItemsComponentUlLeadingIcon.args = {
  children: '(ul)',
  component: 'span',
  leadingIcon: '<Info />',
};
ChildrenListItemsComponentUlLeadingIcon.storyName =
  'children=(ul) component=span leadingIcon';

export const ChildrenListItemsComponentOl: Story = Template.bind({});
ChildrenListItemsComponentOl.args = {
  children: '(ol)',
  component: 'span',
};
ChildrenListItemsComponentOl.storyName = 'children=(ol) component=span';

export const ChildrenListItemsComponentSpanUlLeadingIcon: Story = Template.bind(
  {}
);
ChildrenListItemsComponentSpanUlLeadingIcon.args = {
  children: '(span > ul)',
  component: 'span',
  leadingIcon: '<Info />',
};
ChildrenListItemsComponentSpanUlLeadingIcon.storyName =
  'children=(span > ul) component=span leadingIcon';

export const ReserveLineHeight: Story = Template.bind({});
ReserveLineHeight.args = { reserveLineHeight: true };
ReserveLineHeight.storyName = 'reserveLineHeight';
