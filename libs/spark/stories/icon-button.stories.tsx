import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ChevronDown } from '@prenda/spark-icons';
import { IconButton, IconButtonProps, Box } from '../src';

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

const Template: Story = (args: TemplateIconButtonProps) => (
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

    <span>Solid</span>
    <span>
      <IconButton {...args} variant="solid" size="large">
        <ChevronDown />
      </IconButton>
    </span>
    <span>
      <IconButton {...args} variant="solid" size="medium">
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

    <span>Flat</span>
    <span>
      <IconButton {...args} variant="flat" size="large">
        <ChevronDown />
      </IconButton>
    </span>
    <span>
      <IconButton {...args} variant="flat" size="medium">
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
