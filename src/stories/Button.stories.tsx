import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../Actions/button';
import { ArrowForward } from '@material-ui/icons';

export default {
  title: 'prenda-spark/Button',
  component: Button,
} as Meta;

const createTemplate = (children: JSX.Element | string) => (args: ButtonProps) => <Button {...args}>{children}</Button>;

const TextTemplate = createTemplate("Pizza")
const IconTemplate = createTemplate(<ArrowForward />)

export const Small = TextTemplate.bind({});
Small.args = {
  size: 'small'
};

export const Medium = TextTemplate.bind({});
Medium.args = {
  size: "medium"
};

export const Large = TextTemplate.bind({});
Large.args = {
  size: 'large'
};

export const Disabled = TextTemplate.bind({});
Disabled.args = {
  disabled: true
};

export const Icon = IconTemplate.bind({});
Icon.args = {
  children: <ArrowForward />
};