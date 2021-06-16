import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { IconButton, IconButtonProps } from '../src';
import { ChevronDownIconLine } from '../src/icons';

export default {
  title: 'prenda-spark/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { actions: 'clicked' },
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outlined', 'flat'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium'],
      },
    },
    disabled: { control: 'boolean' },
    children: {
      control: {
        type: 'select',
        options: ['caret-down'],
      },
    },
  },
  args: {
    variant: 'solid',
    size: 'medium',
    children: 'caret-down',
  },
} as Meta;

interface TemplateIconButtonProps extends IconButtonProps {
  children?: 'caret-down';
}

const Template = (args: TemplateIconButtonProps) => (
  <IconButton {...args}>{<ChevronDownIconLine />}</IconButton>
);
export const ConfigurableInput = Template.bind({});
