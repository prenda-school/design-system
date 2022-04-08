import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { sparkThemeProvider } from '../../stories';
import { Box, Unstable_Button, Unstable_ButtonProps } from '..';
import { Unstable_ChevronDown, Unstable_AlertOctagon } from '../internal';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Sb_Unstable_ButtonProps
  extends Omit<Unstable_ButtonProps, 'tabIndex'> {}

export const Sb_Unstable_Button = (props: Sb_Unstable_ButtonProps) => (
  <Unstable_Button {...props} />
);

export default {
  title: '@ps/Unstable_Button',
  component: Sb_Unstable_Button,
  excludeStories: ['Sb_Unstable_Button'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    startIcon: {
      control: 'select',
      options: ['undefined', 'Unstable_ChevronDown', 'Unstable_AlertOctagon'],
      mapping: {
        undefined: undefined,
        Unstable_ChevronDown: <Unstable_ChevronDown />,
        Unstable_AlertOctagon: <Unstable_AlertOctagon />,
      },
    },
    endIcon: {
      control: 'select',
      options: ['undefined', 'Unstable_ChevronDown', 'Unstable_AlertOctagon'],
      mapping: {
        undefined: undefined,
        Unstable_ChevronDown: <Unstable_ChevronDown />,
        Unstable_AlertOctagon: <Unstable_AlertOctagon />,
      },
    },
  },
  args: {
    children: 'Label',
  },
} as Meta;

const Template = (args) => <Unstable_Button {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const SparkThemeProvider: Story = Template.bind({});
SparkThemeProvider.decorators = [sparkThemeProvider];
SparkThemeProvider.storyName = '(SparkThemeProvider)';

// export const Configurable: Story = Template.bind({});

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

    <span>Primary</span>
    <span>
      <Unstable_Button {...args} variant="primary" size="large">
        Label
      </Unstable_Button>
    </span>
    <span>
      <Unstable_Button {...args} variant="primary" size="medium">
        Label
      </Unstable_Button>
    </span>
    <span>
      <Unstable_Button {...args} variant="primary" size="small">
        Label
      </Unstable_Button>
    </span>

    <span>Stroked</span>
    <span>
      <Unstable_Button {...args} variant="stroked" size="large">
        Label
      </Unstable_Button>
    </span>
    <span>
      <Unstable_Button {...args} variant="stroked" size="medium">
        Label
      </Unstable_Button>
    </span>
    <span>
      <Unstable_Button {...args} variant="stroked" size="small">
        Label
      </Unstable_Button>
    </span>

    <span>Ghost</span>
    <span>
      <Unstable_Button {...args} variant="ghost" size="large">
        Label
      </Unstable_Button>
    </span>
    <span>
      <Unstable_Button {...args} variant="ghost" size="medium">
        Label
      </Unstable_Button>
    </span>
    <span>
      <Unstable_Button {...args} variant="ghost" size="small">
        Label
      </Unstable_Button>
    </span>
    <span>Destructive</span>
    <span>
      <Unstable_Button {...args} variant="destructive" size="large">
        Label
      </Unstable_Button>
    </span>
    <span>
      <Unstable_Button {...args} variant="destructive" size="medium">
        Label
      </Unstable_Button>
    </span>
    <span>
      <Unstable_Button {...args} variant="destructive" size="small">
        Label
      </Unstable_Button>
    </span>
  </GridContainer>
);

// No Icon
export const VariantAndSize: Story = VariantAndSizeTemplate.bind({});

export const VariantAndSizeHover: Story = VariantAndSizeTemplate.bind({});
VariantAndSizeHover.parameters = { pseudo: { hover: true } };

export const VariantAndSizeActive: Story = VariantAndSizeTemplate.bind({});
VariantAndSizeActive.parameters = { pseudo: { active: true } };

export const VariantAndSizeExpanded: Story = VariantAndSizeTemplate.bind({});
VariantAndSizeExpanded.args = { 'aria-expanded': true };

export const VariantAndSizeDisabled: Story = VariantAndSizeTemplate.bind({});
VariantAndSizeDisabled.args = { disabled: true };

export const VariantAndSizeFocus: Story = VariantAndSizeTemplate.bind({});
VariantAndSizeFocus.parameters = { pseudo: { focusVisible: true } };

// Leading/start Icon variations
export const StartIconVariantAndSize: Story = VariantAndSizeTemplate.bind({});
StartIconVariantAndSize.args = { startIcon: 'Unstable_AlertOctagon' };

export const StartIconVariantAndSizeHover: Story = VariantAndSizeTemplate.bind(
  {}
);
StartIconVariantAndSizeHover.args = { startIcon: 'Unstable_AlertOctagon' };
StartIconVariantAndSizeHover.parameters = { pseudo: { hover: true } };

export const StartIconVariantAndSizeActive: Story = VariantAndSizeTemplate.bind(
  {}
);
StartIconVariantAndSizeActive.args = { startIcon: 'Unstable_AlertOctagon' };
StartIconVariantAndSizeActive.parameters = { pseudo: { active: true } };

export const StartIconVariantAndSizeExpanded: Story = VariantAndSizeTemplate.bind(
  {}
);
StartIconVariantAndSizeExpanded.args = {
  startIcon: 'Unstable_AlertOctagon',
  'aria-expanded': true,
};

export const StartIconVariantAndSizeDisabled: Story = VariantAndSizeTemplate.bind(
  {}
);
StartIconVariantAndSizeDisabled.args = {
  disabled: true,
  startIcon: 'Unstable_AlertOctagon',
};

export const StartIconVariantAndSizeFocus: Story = VariantAndSizeTemplate.bind(
  {}
);
StartIconVariantAndSizeFocus.args = { startIcon: 'Unstable_AlertOctagon' };
StartIconVariantAndSizeFocus.parameters = { pseudo: { focusVisible: true } };

// Trailing/end Icon variations
export const EndIconVariantAndSize: Story = VariantAndSizeTemplate.bind({});
EndIconVariantAndSize.args = { endIcon: 'Unstable_ChevronDown' };

export const EndIconVariantAndSizeExpanded: Story = VariantAndSizeTemplate.bind(
  {}
);
EndIconVariantAndSizeExpanded.args = {
  endIcon: 'Unstable_ChevronDown',
  'aria-expanded': true,
};

export const EndIconVariantAndSizeHover: Story = VariantAndSizeTemplate.bind(
  {}
);
EndIconVariantAndSizeHover.args = { endIcon: 'Unstable_ChevronDown' };
EndIconVariantAndSizeHover.parameters = { pseudo: { hover: true } };

export const EndIconVariantAndSizeActive: Story = VariantAndSizeTemplate.bind(
  {}
);
EndIconVariantAndSizeActive.args = { endIcon: 'Unstable_ChevronDown' };
EndIconVariantAndSizeActive.parameters = { pseudo: { active: true } };

export const EndIconVariantAndSizeDisabled: Story = VariantAndSizeTemplate.bind(
  {}
);
EndIconVariantAndSizeDisabled.args = {
  disabled: true,
  endIcon: 'Unstable_ChevronDown',
};

export const EndIconVariantAndSizeFocus: Story = VariantAndSizeTemplate.bind(
  {}
);
EndIconVariantAndSizeFocus.args = { endIcon: 'Unstable_ChevronDown' };
EndIconVariantAndSizeFocus.parameters = { pseudo: { focusVisible: true } };
