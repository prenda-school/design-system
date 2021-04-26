import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../../dist';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default {
  title: 'prenda-spark/Button',
  component: Button,
} as Meta;

const buttonText = 'PizzaTaco';

const Template = (args: ButtonProps) => <Button {...args}>{buttonText}</Button>;
export const ConfigurableButton = Template.bind({ size: 'medium' });

export const Small = () => <Button size="small">{buttonText}</Button>;
export const Medium = () => <Button size="medium">{buttonText}</Button>;
export const Large = () => <Button size="large">{buttonText}</Button>;

export const OutlinedSmall = () => (
  <Button size="small" outlined={true}>
    {buttonText}
  </Button>
);
export const OutlinedMedium = () => (
  <Button size="medium" outlined={true}>
    {buttonText}
  </Button>
);
export const OutlinedLarge = () => (
  <Button size="large" outlined={true}>
    {buttonText}
  </Button>
);

export const DisabledSmall = () => (
  <Button size="small" disabled={true}>
    {buttonText}
  </Button>
);
export const DisabledMedium = () => (
  <Button size="medium" disabled={true}>
    {buttonText}
  </Button>
);
export const DisabledLarge = () => (
  <Button size="large" disabled={true}>
    {buttonText}
  </Button>
);

export const DisabledOutlinedSmall = () => (
  <Button size="small" outlined={true} disabled={true}>
    {buttonText}
  </Button>
);
export const DisabledOutlinedMedium = () => (
  <Button size="medium" outlined={true} disabled={true}>
    {buttonText}
  </Button>
);
export const DisabledOutlinedLarge = () => (
  <Button size="large" outlined={true} disabled={true}>
    {buttonText}
  </Button>
);

export const DisabledLabelOnlySmall = () => (
  <Button size="small" labelOnly={true} disabled={true}>
    {buttonText}
  </Button>
);
export const DisabledLabelOnlyMedium = () => (
  <Button size="medium" labelOnly={true} disabled={true}>
    {buttonText}
  </Button>
);
export const DisabledLabelOnlyLarge = () => (
  <Button size="large" labelOnly={true} disabled={true}>
    {buttonText}
  </Button>
);

export const SmallIcon = () => (
  <Button size="small" icon={<ExpandMoreIcon />}></Button>
);
export const MediumIcon = () => (
  <Button size="medium" icon={<ExpandMoreIcon />}></Button>
);
export const LargeIcon = () => (
  <Button size="large" icon={<ExpandMoreIcon />}></Button>
);

export const SmallLabelOnly = () => (
  <Button size="small" labelOnly={true}>
    {buttonText}
  </Button>
);
export const MediumLabelOnly = () => (
  <Button size="medium" labelOnly={true}>
    {buttonText}
  </Button>
);
export const LargeLabelOnly = () => (
  <Button size="large" labelOnly={true}>
    {buttonText}
  </Button>
);

// example of event handling
function handleOnClick() {
  console.log('You clicked me!');
}
export const LargeLabelOnlyOnClick = () => (
  <Button size="large" labelOnly={true} onClick={handleOnClick}>
    {buttonText}
  </Button>
);
