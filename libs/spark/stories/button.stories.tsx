import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../src';
import { ChevronDownIconLine } from '../src/icons';
import Box from '@material-ui/core/Box';

export default {
  title: 'prenda-spark/Button',
  component: Button,
  argTypes: {
    onClick: { actions: 'clicked' },
    variant: {
      control: 'select',
      options: ['solid', 'outlined', 'flat'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    startIcon: {
      control: 'select',
      options: [undefined, 'caret-down'],
    },
    endIcon: {
      control: 'select',
      options: [undefined, 'caret-down'],
    },
    disabled: { control: 'boolean' },
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

export const Configurable = Template.bind({});

const GridContainer = (props) => (
  <Box
    m={1}
    display="grid"
    gridTemplateColumns="1fr 1fr 1fr 1fr"
    gridGap="16px"
    alignItems="end"
    {...props}
  />
);

const VariantAndSizeTemplate = (args) => (
  <GridContainer>
    <span>Variant / Size</span>
    <span>Large</span>
    <span>Medium</span>
    <span>Small</span>

    <span>Solid</span>
    <span>
      <Button {...args} variant="solid" size="large">
        Label
      </Button>
    </span>
    <span>
      <Button {...args} variant="solid" size="medium">
        Label
      </Button>
    </span>
    <span>
      <Button {...args} variant="solid" size="small">
        Label
      </Button>
    </span>

    <span>Outlined</span>
    <span>
      <Button {...args} variant="outlined" size="large">
        Label
      </Button>
    </span>
    <span>
      <Button {...args} variant="outlined" size="medium">
        Label
      </Button>
    </span>
    <span>
      <Button {...args} variant="outlined" size="small">
        Label
      </Button>
    </span>

    <span>Flat</span>
    <span>
      <Button {...args} variant="flat" size="large">
        Label
      </Button>
    </span>
    <span>
      <Button {...args} variant="flat" size="medium">
        Label
      </Button>
    </span>
    <span>
      <Button {...args} variant="flat" size="small">
        Label
      </Button>
    </span>
  </GridContainer>
);

export const VariantAndSize = VariantAndSizeTemplate.bind({});

export const VariantAndSizeDisabled = VariantAndSizeTemplate.bind({});
VariantAndSizeDisabled.args = { disabled: true };

export const VariantAndSizeHover = VariantAndSizeTemplate.bind({});
VariantAndSizeHover.parameters = { pseudo: { hover: true } };

export const VariantAndSizeFocus = VariantAndSizeTemplate.bind({});
VariantAndSizeFocus.parameters = { pseudo: { focus: true } };

export const VariantAndSizeActive = VariantAndSizeTemplate.bind({});
VariantAndSizeActive.parameters = { pseudo: { active: true } };

export const StartIconVariantAndSize = VariantAndSizeTemplate.bind({});
StartIconVariantAndSize.args = { startIcon: <ChevronDownIconLine /> };

export const StartIconVariantAndSizeDisabled = VariantAndSizeTemplate.bind({});
StartIconVariantAndSizeDisabled.args = {
  disabled: true,
  startIcon: <ChevronDownIconLine />,
};

export const StartIconVariantAndSizeHover = VariantAndSizeTemplate.bind({});
StartIconVariantAndSizeHover.args = { startIcon: <ChevronDownIconLine /> };
StartIconVariantAndSizeHover.parameters = { pseudo: { hover: true } };

export const StartIconVariantAndSizeFocus = VariantAndSizeTemplate.bind({});
StartIconVariantAndSizeFocus.args = { startIcon: <ChevronDownIconLine /> };
StartIconVariantAndSizeFocus.parameters = { pseudo: { focus: true } };

export const StartIconVariantAndSizeActive = VariantAndSizeTemplate.bind({});
StartIconVariantAndSizeActive.args = { startIcon: <ChevronDownIconLine /> };
StartIconVariantAndSizeActive.parameters = { pseudo: { active: true } };

export const EndIconVariantAndSize = VariantAndSizeTemplate.bind({});
EndIconVariantAndSize.args = { endIcon: <ChevronDownIconLine /> };

export const EndIconVariantAndSizeDisabled = VariantAndSizeTemplate.bind({});
EndIconVariantAndSizeDisabled.args = {
  disabled: true,
  endIcon: <ChevronDownIconLine />,
};

export const EndIconVariantAndSizeHover = VariantAndSizeTemplate.bind({});
EndIconVariantAndSizeHover.args = { endIcon: <ChevronDownIconLine /> };
EndIconVariantAndSizeHover.parameters = { pseudo: { hover: true } };

export const EndIconVariantAndSizeFocus = VariantAndSizeTemplate.bind({});
EndIconVariantAndSizeFocus.args = { endIcon: <ChevronDownIconLine /> };
EndIconVariantAndSizeFocus.parameters = { pseudo: { focus: true } };

export const EndIconVariantAndSizeActive = VariantAndSizeTemplate.bind({});
EndIconVariantAndSizeActive.args = { endIcon: <ChevronDownIconLine /> };
EndIconVariantAndSizeActive.parameters = { pseudo: { active: true } };
