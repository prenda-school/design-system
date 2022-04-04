import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_SectionMessage,
  // Unstable_SectionMessageProps,
  // Unstable_SectionMessageTitle,
} from '..';

// interface SbUnstable_SectionMessageProps extends Unstable_SectionMessageProps {
//   severity?: Unstable_SectionMessageProps['severity'];
// }

// export const SbUnstable_SectionMessage = (
//   props: SbUnstable_SectionMessageProps
// ) => <Unstable_SectionMessage {...props} />;

export default {
  title: '@ps/Unstable_SectionMessage',
  component: Unstable_SectionMessage,
  // excludeStories: ['SbUnstable_SectionMessage'],
} as Meta;

const Template = (args) => (
  <Unstable_SectionMessage {...args}>
    {/* <Unstable_SectionMessageTitle>Section Message</Unstable_SectionMessageTitle> */}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Unstable_SectionMessage>
);

export const Configurable: Story = Template.bind({});

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const SeverityInfo: Story = Template.bind({});
SeverityInfo.args = { severity: 'info' };
SeverityInfo.storyName = 'severity=info';

export const SeverityInfoOnClose: Story = Template.bind({});
SeverityInfoOnClose.args = {
  severity: 'info',
  onClose: () => {
    return;
  },
};
SeverityInfoOnClose.storyName = 'severity=info onClose';

export const SeverityInfoOnCloseTitle: Story = Template.bind({});
SeverityInfoOnCloseTitle.args = {
  title: 'Info',
  severity: 'info',
  onClose: () => {
    return;
  },
};
SeverityInfoOnCloseTitle.storyName = 'severity=info onClose title';

export const SeverityWarning: Story = Template.bind({});
SeverityWarning.args = { severity: 'warning' };
SeverityWarning.storyName = 'severity=warning';

export const SeverityWarningOnClose: Story = Template.bind({});
SeverityWarningOnClose.args = {
  severity: 'warning',
  onClose: () => {
    return;
  },
};
SeverityWarningOnClose.storyName = 'severity=warning onClose';

export const SeverityWarningOnCloseTitle: Story = Template.bind({});
SeverityWarningOnCloseTitle.args = {
  title: 'Warning',
  severity: 'warning',
  onClose: () => {
    return;
  },
};
SeverityWarningOnCloseTitle.storyName = 'severity=warning onClose title';

export const SeveritySuccess: Story = Template.bind({});
SeveritySuccess.args = { severity: 'success' };
SeveritySuccess.storyName = 'severity=success';

export const SeveritySuccessOnClose: Story = Template.bind({});
SeveritySuccessOnClose.args = {
  severity: 'success',
  onClose: () => {
    return;
  },
};
SeveritySuccessOnClose.storyName = 'severity=success onClose';

export const SeveritySuccessOnCloseTitle: Story = Template.bind({});
SeveritySuccessOnCloseTitle.args = {
  title: 'Success',
  severity: 'success',
  onClose: () => {
    return;
  },
};
SeveritySuccessOnCloseTitle.storyName = 'severity=success onClose title';

export const SeverityError: Story = Template.bind({});
SeverityError.args = { severity: 'error' };
SeverityError.storyName = 'severity=error';

export const SeverityErrorOnClose: Story = Template.bind({});
SeverityErrorOnClose.args = {
  severity: 'error',
  onClose: () => {
    return;
  },
};
SeverityErrorOnClose.storyName = 'severity=error onClose';

export const SeverityErrorOnCloseTitle: Story = Template.bind({});
SeverityErrorOnCloseTitle.args = {
  title: 'Error',
  severity: 'error',
  onClose: () => {
    return;
  },
};
SeverityErrorOnCloseTitle.storyName = 'severity=error onClose title';
