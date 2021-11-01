import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ExtendButtonBase } from '../ButtonBase';
import { default as Tab, TabTypeMap } from './Tab';
import styled from '../styled';
import {
  ChangelogTemplate,
  DocumentationTemplate,
} from '../../stories/templates';

export const TypedTab: ExtendButtonBase<TabTypeMap> = Tab;

export default {
  title: '@ps/Tab',
  component: TypedTab,
  excludeStories: ['TypedTab'],
  // Doesn't pick up any props
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onClick: { actions: 'clicked' },
    selected: { control: 'boolean' },
    value: { control: 'text' },
  },
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

const Template: Story = (args) => <Tab {...args} />;

export const Configurable = Template.bind({});

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

export const States = StatesTemplate.bind({});

export const StatesDisabled = StatesTemplate.bind({});
StatesDisabled.args = { disabled: true };

export const StatesHover = StatesTemplate.bind({});
StatesHover.parameters = { pseudo: { hover: true } };

export const StatesFocus = StatesTemplate.bind({});
StatesFocus.parameters = { pseudo: { focus: true } };

export const StatesActive = StatesTemplate.bind({});
StatesActive.parameters = { pseudo: { active: true } };

const TabDocTemplate = (args) => <DocumentationTemplate {...args} />;

export const Documentation: Story = TabDocTemplate.bind({});
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

const TabChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = TabChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.12.0',
      versionDate: '2021-09-28',
      changes: ['Feat: Initial implementation.'],
    },
  ],
};
