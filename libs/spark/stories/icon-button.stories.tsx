import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { IconButton, IconButtonProps } from '../src';
import { ChevronDownIconLine } from '../src/icons';
import Box from '@material-ui/core/Box';

export default {
  title: 'prenda-spark/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { actions: 'clicked' },
    variant: {
      control: 'select',
      options: ['solid', 'outlined', 'flat'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium'],
    },
    children: {
      control: 'select',
      options: ['ChevronDown'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'solid',
    size: 'large',
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
    <span>Large</span>
    <span>Medium</span>

    <span>Solid</span>
    <span>
      <IconButton {...args} variant="solid" size="large">
        <ChevronDownIconLine />
      </IconButton>
    </span>
    <span>
      <IconButton {...args} variant="solid" size="medium">
        <ChevronDownIconLine />
      </IconButton>
    </span>

    <span>Outlined</span>
    <span>
      <IconButton {...args} variant="outlined" size="large">
        <ChevronDownIconLine />
      </IconButton>
    </span>
    <span>
      <IconButton {...args} variant="outlined" size="medium">
        <ChevronDownIconLine />
      </IconButton>
    </span>

    <span>Flat</span>
    <span>
      <IconButton {...args} variant="flat" size="large">
        <ChevronDownIconLine />
      </IconButton>
    </span>
    <span>
      <IconButton {...args} variant="flat" size="medium">
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
