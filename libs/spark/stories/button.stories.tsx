import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../src';
import { ChevronDownIconLine } from '../src/icons';

export default {
  title: 'prenda-spark/Button',
  component: Button,
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
        options: ['large', 'medium', 'small'],
      },
    },
    disabled: { control: 'boolean' },
    startIcon: {
      control: {
        type: 'select',
        options: [undefined, 'caret-down'],
      },
    },
    endIcon: {
      control: {
        type: 'select',
        options: [undefined, 'caret-down'],
      },
    },
  },
  args: {
    variant: 'solid',
    size: 'medium',
  },
} as Meta;

interface TemplateButtonProps
  extends Omit<ButtonProps, 'startIcon' | 'endIcon'> {
  startIcon?: typeof ChevronDownIconLine;
  endIcon?: typeof ChevronDownIconLine;
}

const Template = (args: TemplateButtonProps) => (
  <Button
    {...args}
    startIcon={args.startIcon ? <ChevronDownIconLine /> : undefined}
    endIcon={args.endIcon ? <ChevronDownIconLine /> : undefined}
  >
    Label
  </Button>
);
export const ConfigurableInput = Template.bind({});
