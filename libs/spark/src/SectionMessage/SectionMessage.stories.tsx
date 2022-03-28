import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  SectionMessage,
  SectionMessageProps,
  SectionMessageTitle,
  styled,
} from '..';
import {
  ChangelogTemplate,
  DocumentationTemplate,
} from '../../stories/templates';

interface SbSectionMessageProps extends SectionMessageProps {
  severity?: SectionMessageProps['severity'];
}

export const SbSectionMessage = (props: SbSectionMessageProps) => (
  <SectionMessage {...props} />
);

export default {
  title: '@ps/SectionMessage',
  component: SbSectionMessage,
  excludeStories: ['SbSectionMessage'],
  args: {
    severity: 'info',
  },
} as Meta;

const Template = (args) => (
  <SectionMessage {...args}>
    <SectionMessageTitle>Section Message</SectionMessageTitle>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </SectionMessage>
);

export const Configurable: Story = Template.bind({});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const SeverityTemplate = (args) => (
  <Container>
    <SectionMessage {...args} severity="info">
      <SectionMessageTitle>Section Message</SectionMessageTitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </SectionMessage>
    <SectionMessage {...args} severity="success">
      <SectionMessageTitle>Section Message</SectionMessageTitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </SectionMessage>
    <SectionMessage {...args} severity="warning">
      <SectionMessageTitle>Section Message</SectionMessageTitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </SectionMessage>
    <SectionMessage {...args} severity="error">
      <SectionMessageTitle>Section Message</SectionMessageTitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </SectionMessage>
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
        defaultValue: "'standard'",
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
