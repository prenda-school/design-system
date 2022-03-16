import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { ChevronDown } from '@prenda/spark-icons';
import { Box, ButtonProps } from '..';
import Button from './__next__Button';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SbButtonProps
  extends Omit<
    ButtonProps,
    | 'disableElevation'
    | 'disableFocusRipple'
    | 'centerRipple'
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'tabIndex'
    | 'TouchRippleProps'
  > {}

export const SbButton = (props: SbButtonProps) => <Button {...props} />;

export default {
  title: '@ps/Button',
  component: SbButton,
  excludeStories: ['SbButton'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    startIcon: {
      control: 'select',
      options: ['undefined', 'ChevronDown'],
      mapping: {
        undefined: undefined,
        ChevronDown: <ChevronDown />,
      },
    },
    endIcon: {
      control: 'select',
      options: ['undefined', 'ChevronDown'],
      mapping: {
        undefined: undefined,
        ChevronDown: <ChevronDown />,
      },
    },
  },
  args: {
    children: 'Label',
  },
} as Meta;

const Template = (args) => <Button {...args} />;

export const Configurable: Story = Template.bind({});

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

    <span>Contained</span>
    <span>
      <Button {...args} variant="contained" size="large">
        Label
      </Button>
    </span>
    <span>
      <Button {...args} variant="contained" size="medium">
        Label
      </Button>
    </span>
    <span>
      <Button {...args} variant="contained" size="small">
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

    <span>Text</span>
    <span>
      <Button {...args} variant="text" size="large">
        Label
      </Button>
    </span>
    <span>
      <Button {...args} variant="text" size="medium">
        Label
      </Button>
    </span>
    <span>
      <Button {...args} variant="text" size="small">
        Label
      </Button>
    </span>

    <span>Destructive</span>
    <span>
      <Button {...args} variant="destructive" size="large">
        Label
      </Button>
    </span>
    <span>
      <Button {...args} variant="destructive" size="medium">
        Label
      </Button>
    </span>
    <span>
      <Button {...args} variant="destructive" size="small">
        Label
      </Button>
    </span>
  </GridContainer>
);

export const VariantAndSize: Story = VariantAndSizeTemplate.bind({});

export const VariantAndSizeDisabled: Story = VariantAndSizeTemplate.bind({});
VariantAndSizeDisabled.args = { disabled: true };

export const VariantAndSizeHover: Story = VariantAndSizeTemplate.bind({});
VariantAndSizeHover.parameters = { pseudo: { hover: true } };

export const VariantAndSizeFocus: Story = VariantAndSizeTemplate.bind({});
VariantAndSizeFocus.parameters = { pseudo: { focus: true } };

export const VariantAndSizeActive: Story = VariantAndSizeTemplate.bind({});
VariantAndSizeActive.parameters = { pseudo: { active: true } };

export const StartIconVariantAndSize: Story = VariantAndSizeTemplate.bind({});
StartIconVariantAndSize.args = { startIcon: 'ChevronDown' };

export const StartIconVariantAndSizeDisabled: Story = VariantAndSizeTemplate.bind(
  {}
);
StartIconVariantAndSizeDisabled.args = {
  disabled: true,
  startIcon: 'ChevronDown',
};

export const StartIconVariantAndSizeHover: Story = VariantAndSizeTemplate.bind(
  {}
);
StartIconVariantAndSizeHover.args = { startIcon: 'ChevronDown' };
StartIconVariantAndSizeHover.parameters = { pseudo: { hover: true } };

export const StartIconVariantAndSizeFocus: Story = VariantAndSizeTemplate.bind(
  {}
);
StartIconVariantAndSizeFocus.args = { startIcon: 'ChevronDown' };
StartIconVariantAndSizeFocus.parameters = { pseudo: { focus: true } };

export const StartIconVariantAndSizeActive: Story = VariantAndSizeTemplate.bind(
  {}
);
StartIconVariantAndSizeActive.args = { startIcon: 'ChevronDown' };
StartIconVariantAndSizeActive.parameters = { pseudo: { active: true } };

export const EndIconVariantAndSize: Story = VariantAndSizeTemplate.bind({});
EndIconVariantAndSize.args = { endIcon: 'ChevronDown' };

export const EndIconVariantAndSizeDisabled: Story = VariantAndSizeTemplate.bind(
  {}
);
EndIconVariantAndSizeDisabled.args = {
  disabled: true,
  endIcon: 'ChevronDown',
};

export const EndIconVariantAndSizeHover: Story = VariantAndSizeTemplate.bind(
  {}
);
EndIconVariantAndSizeHover.args = { endIcon: 'ChevronDown' };
EndIconVariantAndSizeHover.parameters = { pseudo: { hover: true } };

export const EndIconVariantAndSizeFocus: Story = VariantAndSizeTemplate.bind(
  {}
);
EndIconVariantAndSizeFocus.args = { endIcon: 'ChevronDown' };
EndIconVariantAndSizeFocus.parameters = { pseudo: { focus: true } };

export const EndIconVariantAndSizeActive: Story = VariantAndSizeTemplate.bind(
  {}
);
EndIconVariantAndSizeActive.args = { endIcon: 'ChevronDown' };
EndIconVariantAndSizeActive.parameters = { pseudo: { active: true } };
