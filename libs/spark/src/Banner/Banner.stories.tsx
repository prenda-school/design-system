import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Banner, BannerProps, styled } from '..';
import {
  DocumentationTemplate,
  ChangelogTemplate,
} from '../../stories/templates';
import { sparkThemeProvider } from '../../stories';

interface SbBannerProps extends BannerProps {
  closeText?: BannerProps['closeText'];
  onClose?: BannerProps['onClose'];
  severity?: BannerProps['severity'];
}

export const SbBanner = (props: SbBannerProps) => <Banner {...props} />;

export default {
  title: '@ps/Banner',
  component: SbBanner,
  excludeStories: ['SbBanner'],
  args: {
    severity: 'info',
    onDetails: null,
    onClose: null,
  },
  decorators: [sparkThemeProvider],
} as Meta;

const messages: Record<BannerProps['severity'], string> = {
  info: 'Information banner',
  success: 'Successful',
  warning: 'Attention needed',
  error: 'There are two errors with your submission',
};

const Template = (args) => (
  <Banner {...args}>{messages[args.severity || 'success']}</Banner>
);

export const Configurable: Story = Template.bind({});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const SeverityTemplate = (args) => (
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

export const Severity: Story = SeverityTemplate.bind({});

export const SeverityClose: Story = SeverityTemplate.bind({});
SeverityClose.args = {
  onClose: () => {
    return;
  },
};

export const SeverityCloseFocus: Story = SeverityTemplate.bind({});
SeverityCloseFocus.args = {
  onClose: () => {
    return;
  },
};
SeverityCloseFocus.parameters = { pseudo: { focusVisible: true } };

export const SeverityDetails: Story = SeverityTemplate.bind({});
SeverityDetails.args = {
  onDetails: () => {
    return;
  },
};

export const SeverityDetailsFocus: Story = SeverityTemplate.bind({});
SeverityDetailsFocus.args = {
  onDetails: () => {
    return;
  },
};
SeverityDetailsFocus.parameters = { pseudo: { focusVisible: true } };

export const Documentation: Story = DocumentationTemplate.bind({});
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

export const Changelog: Story = ChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.12.0',
      versionDate: '2021-09-28',
      changes: ['Feat: Initial implementation.'],
    },
  ],
};
