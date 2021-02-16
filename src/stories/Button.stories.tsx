import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Button } from '../Actions/button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default {
  title: 'prenda-spark/Button',
  component: Button,
} as Meta;

const buttonText = "PizzaTaco"

export const Small = () => <Button size="small">{buttonText}</Button>
export const Medium = () => <Button size="medium">{buttonText}</Button>
export const Large = () => <Button size="large">{buttonText}</Button>

export const OutlinedSmall = () => <Button size="small" outlinedStyle={true}>{buttonText}</Button>
export const OutlinedMedium = () => <Button size="medium" outlinedStyle={true}>{buttonText}</Button>
export const OutlinedLarge = () => <Button size="large" outlinedStyle={true}>{buttonText}</Button>

export const DisabledSmall = () => <Button size="small" disabled={true}>{buttonText}</Button>
export const DisabledMedium = () => <Button size="medium" disabled={true}>{buttonText}</Button>
export const DisabledLarge = () => <Button size="large" disabled={true}>{buttonText}</Button>

export const DisabledOutlinedSmall = () => <Button size="small" outlinedStyle={true} disabled={true}>{buttonText}</Button>
export const DisabledOutlinedMedium = () => <Button size="medium" outlinedStyle={true} disabled={true}>{buttonText}</Button>
export const DisabledOutlinedLarge = () => <Button size="large" outlinedStyle={true} disabled={true}>{buttonText}</Button>

export const SmallIcon = () => <Button size="small" icon={<ExpandMoreIcon />}></Button>
export const MediumIcon = () => <Button size="medium" icon={<ExpandMoreIcon />}></Button>
export const LargeIcon = () => <Button size="large" icon={<ExpandMoreIcon />}></Button>