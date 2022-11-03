import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Unstable_SectionMessage, Unstable_SectionMessageProps } from '..';

export default {
  title: '@ps/SectionMessage',
  component: Unstable_SectionMessage,
  args: {
    children: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>,
  },
} as Meta;

const Template = (args) => <Unstable_SectionMessage {...args} />;

type Story = DefaultStory<Unstable_SectionMessageProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const SeverityInfo: Story = Template.bind({});
SeverityInfo.args = { severity: 'info' };
SeverityInfo.storyName = 'severity=info';

const onClose = () => {
  return;
};

export const SeverityInfoOnClose: Story = Template.bind({});
SeverityInfoOnClose.args = { severity: 'info', onClose };
SeverityInfoOnClose.storyName = 'severity=info onClose';

export const SeverityInfoOnCloseTitle: Story = Template.bind({});
SeverityInfoOnCloseTitle.args = {
  title: 'Info',
  severity: 'info',
  onClose,
};
SeverityInfoOnCloseTitle.storyName = 'severity=info onClose title';

export const SeverityWarning: Story = Template.bind({});
SeverityWarning.args = { severity: 'warning' };
SeverityWarning.storyName = 'severity=warning';

export const SeverityWarningOnClose: Story = Template.bind({});
SeverityWarningOnClose.args = {
  severity: 'warning',
  onClose,
};
SeverityWarningOnClose.storyName = 'severity=warning onClose';

export const SeverityWarningOnCloseTitle: Story = Template.bind({});
SeverityWarningOnCloseTitle.args = {
  title: 'Warning',
  severity: 'warning',
  onClose,
};
SeverityWarningOnCloseTitle.storyName = 'severity=warning onClose title';

export const SeveritySuccess: Story = Template.bind({});
SeveritySuccess.args = { severity: 'success' };
SeveritySuccess.storyName = 'severity=success';

export const SeveritySuccessOnClose: Story = Template.bind({});
SeveritySuccessOnClose.args = {
  severity: 'success',
  onClose,
};
SeveritySuccessOnClose.storyName = 'severity=success onClose';

export const SeveritySuccessOnCloseTitle: Story = Template.bind({});
SeveritySuccessOnCloseTitle.args = {
  title: 'Success',
  severity: 'success',
  onClose,
};
SeveritySuccessOnCloseTitle.storyName = 'severity=success onClose title';

export const SeverityError: Story = Template.bind({});
SeverityError.args = { severity: 'error' };
SeverityError.storyName = 'severity=error';

export const SeverityErrorOnClose: Story = Template.bind({});
SeverityErrorOnClose.args = {
  severity: 'error',
  onClose,
};
SeverityErrorOnClose.storyName = 'severity=error onClose';

export const SeverityErrorOnCloseTitle: Story = Template.bind({});
SeverityErrorOnCloseTitle.args = {
  title: 'Error',
  severity: 'error',
  onClose,
};
SeverityErrorOnCloseTitle.storyName = 'severity=error onClose title';
