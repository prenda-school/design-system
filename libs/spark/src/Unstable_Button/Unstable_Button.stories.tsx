import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_Button, Unstable_ButtonProps } from '..';
import { Unstable_ChevronDown, Unstable_AlertOctagon } from '../internal';
import { containFocusIndicator, sparkThemeProvider } from '../../stories';

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
  decorators: [containFocusIndicator],
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

const variants: Array<Unstable_ButtonProps['variant']> = [
  'primary',
  'stroked',
  'ghost',
  'destructive',
];
const sizes: Array<Unstable_ButtonProps['size']> = ['large', 'medium', 'small'];

const SizeByVariantTemplate = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      // space for focus indicator
      gap: 8,
    }}
  >
    {sizes.map((size) => (
      <div
        key={size}
        style={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}
      >
        {variants.map((variant) => (
          <Unstable_Button
            key={variant}
            {...args}
            variant={variant}
            size={size}
          />
        ))}
      </div>
    ))}
  </div>
);

export const SizeByVariant: Story = SizeByVariantTemplate.bind({});
SizeByVariant.storyName = 'size ⨯ variant';

export const SizeByVariantSTP: Story = SizeByVariantTemplate.bind({});
SizeByVariantSTP.decorators = [sparkThemeProvider];
SizeByVariantSTP.storyName = 'size ⨯ variant (STP)';

export const SizeByVariantHover: Story = SizeByVariantTemplate.bind({});
SizeByVariantHover.parameters = { pseudo: { hover: true } };
SizeByVariantHover.storyName = 'size ⨯ variant :hover';

export const SizeByVariantHoverSTP: Story = SizeByVariantTemplate.bind({});
SizeByVariantHoverSTP.decorators = [sparkThemeProvider];
SizeByVariantHoverSTP.parameters = { pseudo: { hover: true } };
SizeByVariantHoverSTP.storyName = 'size ⨯ variant :hover (STP)';

export const SizeByVariantActive: Story = SizeByVariantTemplate.bind({});
SizeByVariantActive.parameters = { pseudo: { active: true } };
SizeByVariantActive.storyName = 'size ⨯ variant :active';

export const SizeByVariantActiveSTP: Story = SizeByVariantTemplate.bind({});
SizeByVariantActiveSTP.decorators = [sparkThemeProvider];
SizeByVariantActiveSTP.parameters = { pseudo: { active: true } };
SizeByVariantActiveSTP.storyName = 'size ⨯ variant :active (STP)';

export const SizeByVariantExpanded: Story = SizeByVariantTemplate.bind({});
SizeByVariantExpanded.args = { 'aria-expanded': true };
SizeByVariantExpanded.storyName = 'size ⨯ variant aria-expanded';

export const SizeByVariantExpandedSTP: Story = SizeByVariantTemplate.bind({});
SizeByVariantExpandedSTP.args = { 'aria-expanded': true };
SizeByVariantExpandedSTP.decorators = [sparkThemeProvider];
SizeByVariantExpandedSTP.storyName = 'size ⨯ variant aria-expanded (STP)';

export const SizeByVariantFocusVisible: Story = SizeByVariantTemplate.bind({});
SizeByVariantFocusVisible.parameters = { pseudo: { focusVisible: true } };
SizeByVariantFocusVisible.storyName = 'size ⨯ variant :focus-visible';

export const SizeByVariantFocusVisibleSTP: Story = SizeByVariantTemplate.bind(
  {}
);
SizeByVariantFocusVisibleSTP.decorators = [sparkThemeProvider];
SizeByVariantFocusVisibleSTP.parameters = { pseudo: { focusVisible: true } };
SizeByVariantFocusVisibleSTP.storyName = 'size ⨯ variant :focus-visible (STP)';

export const SizeByVariantDisabled: Story = SizeByVariantTemplate.bind({});
SizeByVariantDisabled.args = { disabled: true };
SizeByVariantDisabled.storyName = 'size ⨯ variant disabled';

export const SizeByVariantDisabledSTP: Story = SizeByVariantTemplate.bind({});
SizeByVariantDisabledSTP.args = { disabled: true };
SizeByVariantDisabledSTP.decorators = [sparkThemeProvider];
SizeByVariantDisabledSTP.storyName = 'size ⨯ variant disabled (STP)';

export const SizeByVariantStartIcon: Story = SizeByVariantTemplate.bind({});
SizeByVariantStartIcon.args = { startIcon: 'Unstable_AlertOctagon' };
SizeByVariantStartIcon.storyName = 'size ⨯ variant startIcon';

export const SizeByVariantStartIconSTP: Story = SizeByVariantTemplate.bind({});
SizeByVariantStartIconSTP.args = { startIcon: 'Unstable_AlertOctagon' };
SizeByVariantStartIconSTP.decorators = [sparkThemeProvider];
SizeByVariantStartIconSTP.storyName = 'size ⨯ variant startIcon (STP)';

export const SizeByVariantStartIconDisabled: Story = SizeByVariantTemplate.bind(
  {}
);
SizeByVariantStartIconDisabled.args = {
  startIcon: 'Unstable_AlertOctagon',
  disabled: true,
};
SizeByVariantStartIconDisabled.storyName = 'size ⨯ variant startIcon disabled';

export const SizeByVariantStartIconDisabledSTP: Story = SizeByVariantTemplate.bind(
  {}
);
SizeByVariantStartIconDisabledSTP.args = {
  startIcon: 'Unstable_AlertOctagon',
  disabled: true,
};
SizeByVariantStartIconDisabledSTP.decorators = [sparkThemeProvider];
SizeByVariantStartIconDisabledSTP.storyName =
  'size ⨯ variant startIcon disabled (STP)';

export const SizeByVariantEndIcon: Story = SizeByVariantTemplate.bind({});
SizeByVariantEndIcon.args = { endIcon: 'Unstable_AlertOctagon' };
SizeByVariantEndIcon.storyName = 'size ⨯ variant endIcon';

export const SizeByVariantEndIconSTP: Story = SizeByVariantTemplate.bind({});
SizeByVariantEndIconSTP.args = { endIcon: 'Unstable_AlertOctagon' };
SizeByVariantEndIconSTP.decorators = [sparkThemeProvider];
SizeByVariantEndIconSTP.storyName = 'size ⨯ variant endIcon (STP)';

export const SizeByVariantEndIconDisabled: Story = SizeByVariantTemplate.bind(
  {}
);
SizeByVariantEndIconDisabled.args = {
  endIcon: 'Unstable_AlertOctagon',
  disabled: true,
};
SizeByVariantEndIconDisabled.storyName = 'size ⨯ variant endIcon disabled';

export const SizeByVariantEndIconDisabledSTP: Story = SizeByVariantTemplate.bind(
  {}
);
SizeByVariantEndIconDisabledSTP.args = {
  endIcon: 'Unstable_AlertOctagon',
  disabled: true,
};
SizeByVariantEndIconDisabledSTP.decorators = [sparkThemeProvider];
SizeByVariantEndIconDisabledSTP.storyName =
  'size ⨯ variant endIcon disabled (STP)';
