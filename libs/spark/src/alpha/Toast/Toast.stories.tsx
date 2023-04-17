import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { ToastProps } from '..';
import { Toast } from '..';
import { Email } from '../../../stories';

export default {
  title: '@ps/Toast',
  component: Toast,
  args: {
    children: <>Message</>,
  },
} as Meta;

const Template = (args) => <Toast {...args} />;

type Story = DefaultStory<ToastProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const Icon: Story = Template.bind({});
Icon.args = { icon: <Email /> };
Icon.storyName = 'icon';

const onClose = () => {
  return;
};

export const OnClose: Story = Template.bind({});
OnClose.args = { onClose };
OnClose.storyName = 'onClose';

export const SeverityInfo: Story = Template.bind({});
SeverityInfo.args = { severity: 'info' };
SeverityInfo.storyName = 'severity=info';

export const SeverityWarning: Story = Template.bind({});
SeverityWarning.args = { severity: 'warning' };
SeverityWarning.storyName = 'severity=warning';

export const SeveritySuccess: Story = Template.bind({});
SeveritySuccess.args = { severity: 'success' };
SeveritySuccess.storyName = 'severity=success';

export const SeverityError: Story = Template.bind({});
SeverityError.args = { severity: 'error' };
SeverityError.storyName = 'severity=error';
