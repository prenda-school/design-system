import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ChevronDown } from '@prenda/spark-icons';
import Box from '../Box';
import IconButton from './IconButton';
import {
  ChangelogTemplate,
  DocumentationTemplate,
} from '../../stories/templates';

export const TypedIconButton = IconButton;

export default {
  title: 'Packages/@ps/IconButton',
  component: TypedIconButton,
  excludeStories: ['TypedIconButton'],
  argTypes: {
    children: {
      control: 'select',
      options: ['ChevronDown'],
    },
  },
  args: {
    children: 'ChevronDown',
  },
} as Meta;

const Template: Story = (args) => (
  <IconButton {...args}>{<ChevronDown />}</IconButton>
);

export const Configurable = Template.bind({});

const GridContainer = (props) => (
  <Box
    m={1}
    display="grid"
    gridTemplateColumns="1fr 1fr 1fr"
    gridGap="16px"
    alignItems="end"
    {...props}
  />
);

const VariantAndSizeTemplate: Story = (args) => (
  <GridContainer>
    <span>Variant / Size</span>
    <span>Large</span>
    <span>Medium</span>

    <span>Contained</span>
    <span>
      <IconButton {...args} variant="contained" size="large">
        <ChevronDown />
      </IconButton>
    </span>
    <span>
      <IconButton {...args} variant="contained" size="medium">
        <ChevronDown />
      </IconButton>
    </span>

    <span>Outlined</span>
    <span>
      <IconButton {...args} variant="outlined" size="large">
        <ChevronDown />
      </IconButton>
    </span>
    <span>
      <IconButton {...args} variant="outlined" size="medium">
        <ChevronDown />
      </IconButton>
    </span>

    <span>Text</span>
    <span>
      <IconButton {...args} variant="text" size="large">
        <ChevronDown />
      </IconButton>
    </span>
    <span>
      <IconButton {...args} variant="text" size="medium">
        <ChevronDown />
      </IconButton>
    </span>
  </GridContainer>
);

export const VariantAndSize = VariantAndSizeTemplate.bind({});

export const VariantAndSizeDisabled = VariantAndSizeTemplate.bind({});
VariantAndSizeDisabled.args = { disabled: true };

export const VariantAndSizeHover = VariantAndSizeTemplate.bind({});
VariantAndSizeHover.parameters = { pseudo: { hover: true } };

export const VariantAndSizeFocus = VariantAndSizeTemplate.bind({});
VariantAndSizeFocus.parameters = { pseudo: { focus: true } };

export const VariantAndSizeActive = VariantAndSizeTemplate.bind({});
VariantAndSizeActive.parameters = { pseudo: { active: true } };

const IconButtonDocTemplate = (args) => <DocumentationTemplate {...args} />;

export const Documentation: Story = IconButtonDocTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'IconButton',
    href: 'https://v4.mui.com/components/buttons/#icon-buttons',
  },
  props: {
    extends: {
      href: 'https://v4.mui.com/api/icon-button/#props',
    },
    omits: [
      {
        name: 'size',
        defaultValue: 'medium',
      },
    ],
    adds: [
      {
        name: 'size',
        type: "'medium' | 'large'",
        defaultValue: "'large'",
      },
      {
        name: 'variant',
        type: "'contained' | 'outlined' | 'text'",
        defaultValue: "'contained'",
      },
    ],
  },
  css: {
    extends: {
      href: 'https://v4.mui.com/api/icon-button/#css',
    },
    adds: ['contained', 'outlined', 'text', 'sizeLarge', 'sizeMedium'],
    omits: ['sizeSmall'],
  },
};

const IconButtonChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = IconButtonChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.12.0',
      versionDate: '2021-09-28',
      changes: [
        'Feat: Forwards ref.',
        'Fix: Custom classes not being global or part of classes signature.',
      ],
    },
    {
      version: 'vPrevious',
      versionDate: 'unknown',
      changes: ['Missing.'],
    },
  ],
};
