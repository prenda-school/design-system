import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Tab, TabProps, styled } from '..';
import {
  ChangelogTemplate,
  DocumentationTemplate,
} from '../../stories/templates';

// underlying TabProps lack descriptions
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SbTabProps
  extends Omit<
    TabProps,
    | 'disableRipple'
    | 'disableFocusRipple'
    | 'centerRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'TouchRippleProps'
  > {}

export const SbTab = (props: SbTabProps) => <Tab {...props} />;

export default {
  title: '@ps/Tab',
  component: SbTab,
  excludeStories: ['SbTab'],
  args: {
    label: 'Label',
    value: 'value',
    disabled: false,
    selected: false,
    // not a public prop, but in absense of Tab being a child of Tabs, we
    // should explicitly set it
    textColor: 'primary',
  },
} as Meta;

const Template = (args) => <Tab {...args} />;

export const Configurable: Story = Template.bind({});

const Container = styled('div')({
  display: 'flex',
  gap: '1rem',
  margin: '1rem',
  width: 'min-content',
});

const StatesTemplate = (args) => (
  <Container>
    <Tab {...args} />
    <Tab {...args} selected />
  </Container>
);

export const States: Story = StatesTemplate.bind({});

export const StatesDisabled: Story = StatesTemplate.bind({});
StatesDisabled.args = { disabled: true };

export const StatesHover: Story = StatesTemplate.bind({});
StatesHover.parameters = { pseudo: { hover: true } };

export const StatesFocus: Story = StatesTemplate.bind({});
StatesFocus.parameters = { pseudo: { focusVisible: true } };

export const StatesActive: Story = StatesTemplate.bind({});
StatesActive.parameters = { pseudo: { active: true } };

export const Documentation: Story = DocumentationTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'Tab',
    href: 'https://v4.mui.com/components/tabs',
  },
  props: {
    extends: {
      href: 'https://v4.mui.com/api/tab/#props',
    },
  },
  css: {
    extends: {
      href: 'https://v4.mui.com/api/tab/#css',
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
