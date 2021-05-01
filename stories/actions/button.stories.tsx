import React from 'react';
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../../src';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default {
  title: 'prenda-spark/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outlined', 'flat'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'solid',
    size: 'medium',
  },
} as Meta;

const Template = (args: ButtonProps) => <Button {...args}>Label</Button>;
export const ConfigurableInput = Template.bind({});
