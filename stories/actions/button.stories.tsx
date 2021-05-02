import React from 'react';
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../../src';
import { Icons } from '../../src/actions/button';

export default {
  title: 'prenda-spark/Button',
  component: Button,
  argTypes: {
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
  startIcon?: 'caret-down';
  endIcon?: 'caret-down';
}

const Template = (args: TemplateButtonProps) => (
  <Button
    {...args}
    startIcon={args.startIcon ? Icons[args.startIcon] : undefined}
    endIcon={args.endIcon ? Icons[args.endIcon] : undefined}
  >
    Label
  </Button>
);
export const ConfigurableInput = Template.bind({});
