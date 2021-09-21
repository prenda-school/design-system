import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Tab, styled } from '../src';
import { ChangelogTemplate } from './changelog-template';
import { DocTemplate } from './documentation-template';

export default {
  title: 'prenda-spark/Tab',
  component: Tab,
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

const TabDocTemplate = (args) => <DocTemplate {...args} />;

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
      version: 'vNext',
      versionDate: 'yyyy-mm-dd',
      changes: ['Feat: Initial implementation.'],
    },
  ],
};
