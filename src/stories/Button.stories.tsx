import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../Actions/button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default {
  title: 'prenda-spark/Button',
  component: Button,
} as Meta;

const createTemplate = (children: JSX.Element | string) => (args: ButtonProps) => <Button {...args}>{children}</Button>;

const TextTemplate = createTemplate("PizzaTaco")

export const Small = () => <Button size="small">PizzaTaco</Button>

export const Medium = TextTemplate.bind({});
Medium.args = {
  size: "medium"
} as ButtonProps;

export const Large = TextTemplate.bind({});
Large.args = {
  size: 'large'
} as ButtonProps;

export const OutlinedSmall = TextTemplate.bind({});
OutlinedSmall.args = {
  size: 'small',
  outlinedStyle: true,
} as ButtonProps;

export const OutlinedMedium = TextTemplate.bind({});
OutlinedMedium.args = {
  size: "medium",
  outlinedStyle: true,
} as ButtonProps;

export const OutlinedLarge = TextTemplate.bind({});
OutlinedLarge.args = {
  size: 'large',
  outlinedStyle: true,
} as ButtonProps;

export const DisabledMedium = TextTemplate.bind({});
DisabledMedium.args = {
  size: 'medium',
  disabled: true
} as ButtonProps;

export const DisabledOutlinedMedium = TextTemplate.bind({});
DisabledOutlinedMedium.args = {
  size: "medium",
  outlinedStyle: true,
  disabled: true,
} as ButtonProps;

export const SmallIcon = TextTemplate.bind({});
SmallIcon.args = {
  icon: <ExpandMoreIcon />,
  size: 'small'
} as ButtonProps;

export const MediumIcon = TextTemplate.bind({});
MediumIcon.args = {
  icon: <ExpandMoreIcon />,
  size: 'medium'
} as ButtonProps;

export const LargeIcon = TextTemplate.bind({});
LargeIcon.args = {
  icon: <ExpandMoreIcon />,
  size: 'large'
} as ButtonProps;