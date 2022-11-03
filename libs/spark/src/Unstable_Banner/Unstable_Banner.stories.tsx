import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Unstable_Banner, Unstable_BannerProps } from '..';

export default {
  title: '@ps/Banner',
  component: Unstable_Banner,
  args: {
    children: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>,
  },
} as Meta;

const Template = (args) => <Unstable_Banner {...args} />;

type Story = DefaultStory<Unstable_BannerProps>;

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

export const SeverityWarning: Story = Template.bind({});
SeverityWarning.args = { severity: 'warning' };
SeverityWarning.storyName = 'severity=warning';

export const SeverityWarningOnClose: Story = Template.bind({});
SeverityWarningOnClose.args = {
  severity: 'warning',
  onClose,
};
SeverityWarningOnClose.storyName = 'severity=warning onClose';

export const SeveritySuccess: Story = Template.bind({});
SeveritySuccess.args = { severity: 'success' };
SeveritySuccess.storyName = 'severity=success';

export const SeveritySuccessOnClose: Story = Template.bind({});
SeveritySuccessOnClose.args = {
  severity: 'success',
  onClose,
};
SeveritySuccessOnClose.storyName = 'severity=success onClose';

export const SeverityError: Story = Template.bind({});
SeverityError.args = { severity: 'error' };
SeverityError.storyName = 'severity=error';

export const SeverityErrorOnClose: Story = Template.bind({});
SeverityErrorOnClose.args = {
  severity: 'error',
  onClose,
};
SeverityErrorOnClose.storyName = 'severity=error onClose';
