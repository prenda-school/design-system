import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { styled, SvgIcon, theme } from '../src';
import {
  AlertCircle,
  AlertCircleFilled,
  AlertCircleDuotone,
} from '@prenda/spark-icons';
import clsx from 'clsx';
import { capitalize } from '../src/utils';

export default {
  title: 'prenda-spark/SvgIcon',
  component: SvgIcon,
  argTypes: {
    color: {
      control: 'select',
      options: ['inherit', 'onLight', 'onDark', 'disabled', 'error'],
    },
    contrast: {
      control: 'select',
      options: ['high', 'low'],
    },
    fontSize: {
      control: 'select',
      options: ['large', 'default', 'small', 'inherit'],
    },
  },
  args: {
    color: 'inherit',
    contrast: 'high',
    fontSize: 'default',
  },
} as Meta;

const Container = styled('div')({
  backgroundColor: theme.palette.background.default,
  '&.bgColorOnDark': {
    backgroundColor: theme.palette.background.blue,
  },
});

const Template: Story = (args) => (
  <Container
    className={clsx({
      [`bgColor${capitalize(args.color)}`]: args.color === 'onDark',
    })}
  >
    <AlertCircle {...args} />
    <AlertCircleFilled {...args} />
    <AlertCircleDuotone {...args} />
  </Container>
);

export const Configurable = Template.bind({});