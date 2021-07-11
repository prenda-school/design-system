import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { IconButton, IconButtonProps } from '@material-ui/core';
import { ChevronDownIconLine } from '../src/icons';
import Box from '@material-ui/core/Box';

export default {
  title: 'prenda-spark/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { actions: 'clicked' },
    className: {
      control: 'select',
      options: ['variantPrimary', 'variantSecondary', 'variantGhost'],
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
    },
    children: {
      control: 'select',
      options: ['ChevronDown'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    className: 'variantPrimary',
    size: 'medium',
    children: 'ChevronDown',
  },
} as Meta;

interface TemplateIconButtonProps extends IconButtonProps {
  children?: 'ChevronDown';
}

const Template = (args: TemplateIconButtonProps) => (
  <IconButton {...args}>
    <ChevronDownIconLine />
  </IconButton>
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

const VariantAndSizeTemplate = (args) => (
  <GridContainer>
    <span>Variant / Size</span>
    <span>Medium</span>
    <span>Small</span>

    <span>Contained</span>
    <span>
      <IconButton {...args} size="medium" className="variantPrimary">
        <ChevronDownIconLine />
      </IconButton>
    </span>
    <span>
      <IconButton {...args} size="small" className="variantPrimary">
        <ChevronDownIconLine />
      </IconButton>
    </span>

    <span>Outlined</span>
    <span>
      <IconButton {...args} size="medium" className="variantSecondary">
        <ChevronDownIconLine />
      </IconButton>
    </span>
    <span>
      <IconButton {...args} size="small" className="variantSecondary">
        <ChevronDownIconLine />
      </IconButton>
    </span>

    <span>Text</span>
    <span>
      <IconButton {...args} size="medium" className="variantGhost">
        <ChevronDownIconLine />
      </IconButton>
    </span>
    <span>
      <IconButton {...args} size="small" className="variantGhost">
        <ChevronDownIconLine />
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
