import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { ChevronDown } from '@prenda/spark-icons';
import { Box, IconButton, IconButtonProps } from '..';
import {
  ChangelogTemplate,
  DocumentationTemplate,
} from '../../stories/templates';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SbIconButtonProps
  extends Omit<
    IconButtonProps,
    | 'disableFocusRipple'
    | 'tabIndex'
    | 'color'
    | 'centerRipple'
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'TouchRippleProps'
  > {}

export const SbIconButton = (props: SbIconButtonProps) => (
  <IconButton {...props} />
);

export default {
  title: '@ps/IconButton',
  component: SbIconButton,
  excludeStories: ['SbIconButton'],
  argTypes: {
    children: {
      control: 'select',
      options: ['ChevronDown'],
      mapping: {
        ChevronDown: <ChevronDown />,
      },
    },
  },
  args: {
    children: 'ChevronDown',
  },
} as Meta;

const Template = (args) => <IconButton {...args} />;

export const Configurable: Story = Template.bind({});

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

const VariantAndSizeTemplate = (args) => (
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

export const VariantAndSize: Story = VariantAndSizeTemplate.bind({});

export const VariantAndSizeDisabled: Story = VariantAndSizeTemplate.bind({});
VariantAndSizeDisabled.args = { disabled: true };

export const VariantAndSizeHover: Story = VariantAndSizeTemplate.bind({});
VariantAndSizeHover.parameters = { pseudo: { hover: true } };

export const VariantAndSizeFocus: Story = VariantAndSizeTemplate.bind({});
VariantAndSizeFocus.parameters = { pseudo: { focusVisible: true } };

export const VariantAndSizeActive: Story = VariantAndSizeTemplate.bind({});
VariantAndSizeActive.parameters = { pseudo: { active: true } };

export const Documentation: Story = DocumentationTemplate.bind({});
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

export const Changelog: Story = ChangelogTemplate.bind({});
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
