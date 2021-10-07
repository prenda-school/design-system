import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Banner, styled } from '../src';
import { DocTemplate } from './documentation-template';
import { ChangelogTemplate } from './changelog-template';

export default {
  title: 'PDS/@ps/Banner',
  component: Banner,
  argTypes: {
    severity: {
      control: 'select',
      options: ['error', 'info', 'warning', 'success'],
    },
  },
  args: {
    severity: 'info',
  },
} as Meta;

// severity: message
const messages = {
  info: 'Information banner',
  success: 'Successful',
  warning: 'Attention needed',
  error: 'There are two errors with your submission',
};

const Template: Story = (args) => (
  <Banner {...args}>{messages[args.severity]}</Banner>
);

export const Configurable = Template.bind({});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const SeverityTemplate: Story = (args) => (
  <Container>
    <Banner {...args} severity="info">
      {messages.info}
    </Banner>
    <Banner {...args} severity="success">
      {messages.success}
    </Banner>
    <Banner {...args} severity="warning">
      {messages.warning}
    </Banner>
    <Banner {...args} severity="error">
      {messages.error}
    </Banner>
  </Container>
);

export const Severity = SeverityTemplate.bind({});

export const SeverityClose = SeverityTemplate.bind({});
SeverityClose.args = {
  onClose: () => {
    return;
  },
};

export const SeverityCloseFocus = SeverityTemplate.bind({});
SeverityCloseFocus.args = {
  onClose: () => {
    return;
  },
};
SeverityCloseFocus.parameters = { pseudo: { focus: true } };

export const SeverityDetails = SeverityTemplate.bind({});
SeverityDetails.args = {
  onDetails: () => {
    return;
  },
};

export const SeverityDetailsFocus = SeverityTemplate.bind({});
SeverityDetailsFocus.args = {
  onDetails: () => {
    return;
  },
};
SeverityDetailsFocus.parameters = { pseudo: { focus: true } };

const BannerDocTemplate = (args) => <DocTemplate {...args} />;

export const Documentation: Story = BannerDocTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'Alert',
    href: 'https://v4.mui.com/components/alert/#alert',
  },
  props: {
    extends: {
      href: 'https://v4.mui.com/api/alert/#props',
    },
    omits: [
      {
        name: 'variant',
        defaultValue: "'filled'",
      },
    ],
    adds: [
      {
        name: 'detailsText',
        type: 'string',
        defaultValue: 'undefined',
      },
      {
        name: 'onDetails',
        type: 'Function',
        defaultValue: 'undefined',
      },
    ],
  },
  css: {
    extends: {
      href: 'https://v4.mui.com/api/alert/#css',
    },
  },
};

const BannerChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = BannerChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.12.0',
      versionDate: '2021-09-28',
      changes: ['Feat: Initial implementation.'],
    },
  ],
};
