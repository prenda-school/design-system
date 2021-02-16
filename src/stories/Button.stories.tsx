import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Button, } from '../Actions/button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default {
  title: 'prenda-spark/Button',
  component: Button,
} as Meta;

// Figma: https://www.figma.com/file/y6Ca8BdJtQEd3Of1saRieF/Prenda-Design-System---Web?node-id=29%3A0

export const Small = () => <Button size="small">PizzaTaco</Button>
export const Medium = () => <Button size="medium">PizzaTaco</Button>
export const Large = () => <Button size="large">PizzaTaco</Button>

export const SmallDisabled = () => <Button size="small" disabled={true}>PizzaTaco</Button>
export const MediumDisabled = () => <Button size="medium" disabled={true}>PizzaTaco</Button>
export const LargeDisabled = () => <Button size="large" disabled={true}>PizzaTaco</Button>

export const SmallOutlined = () => <Button size="small" outlined={true}>PizzaTaco</Button>
export const MediumOutlined = () => <Button size="medium" outlined={true}>PizzaTaco</Button>
export const LargeOutlined = () => <Button size="large" outlined={true}>PizzaTaco</Button>

export const SmallDisabledOutlined = () => <Button size="small" disabled={true} outlined={true}>PizzaTaco</Button>
export const MediumDisabledOutlined = () => <Button size="medium" disabled={true} outlined={true}>PizzaTaco</Button>
export const LargeDisabledOutlined = () => <Button size="large" disabled={true} outlined={true}>PizzaTaco</Button>

export const SmallIcon = () => <Button size="small"><ExpandMoreIcon /></Button>
export const MediumIcon = () => <Button size="medium"><ExpandMoreIcon /></Button>
export const LargeIcon = () => <Button size="large"><ExpandMoreIcon /></Button>
