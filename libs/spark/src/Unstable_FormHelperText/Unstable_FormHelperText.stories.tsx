import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_FormHelperText } from '..';
import { Info } from '../../stories';

export const _retyped = Unstable_FormHelperText as typeof Unstable_FormHelperText;

export default {
  title: '@ps/Unstable_FormHelperText',
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

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const Disabled: Story = Template.bind({});
Disabled.args = { disabled: true };
Disabled.storyName = 'disabled';

export const Error: Story = Template.bind({});
Error.args = { error: true };
Error.storyName = 'error';

export const Focused: Story = Template.bind({});
Focused.args = { focused: true };
Focused.storyName = 'focused';

export const LeadingIcon: Story = Template.bind({});
LeadingIcon.args = { leadingIcon: '<Info />' };
LeadingIcon.storyName = 'leadingIcon';

export const LeadingIconError: Story = Template.bind({});
LeadingIconError.args = { leadingIcon: '<Info />', error: true };
LeadingIconError.storyName = 'leadingIcon error';

export const ReserveLineHeight: Story = Template.bind({});
ReserveLineHeight.args = { reserveLineHeight: true };
ReserveLineHeight.storyName = 'reserveLineHeight';

export const Required: Story = Template.bind({});
Required.args = { required: true };
Required.storyName = 'required';

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
