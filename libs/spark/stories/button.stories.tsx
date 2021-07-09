import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../src';
import { ChevronDown as ChevronDownIcon } from '@prenda/spark-icons-x';

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
  startIcon?: typeof ChevronDownIcon;
  endIcon?: typeof ChevronDownIcon;
}

const Template = (args: TemplateButtonProps) => (
  <Button
    {...args}
    startIcon={args.startIcon ? <ChevronDownIcon /> : undefined}
    endIcon={args.endIcon ? <ChevronDownIcon /> : undefined}
  >
    Label
  </Button>
);
export const ConfigurableInput = Template.bind({});
