import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { theme, Unstable_IconButton, Unstable_IconButtonProps } from '..';
import {
  Unstable_ChevronDown,
  Unstable_Filter,
  Unstable_Info,
} from '../internal';
import { containFocusIndicator, sparkThemeProvider } from '../../stories';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Sb_Unstable_IconButtonProps
  extends Omit<Unstable_IconButtonProps, 'tabIndex'> {}

export const Sb_Unstable_IconButton = (props: Sb_Unstable_IconButtonProps) => (
  <Unstable_IconButton {...props} />
);

export default {
  title: '@ps/Unstable_IconButton',
  component: Sb_Unstable_IconButton,
  excludeStories: ['Sb_Unstable_IconButton'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [containFocusIndicator],
  argTypes: {
    children: {
      control: 'select',
      options: ['Unstable_ChevronDown', 'Unstable_Filter', 'Unstable_Info'],
      mapping: {
        Unstable_ChevronDown: <Unstable_ChevronDown />,
        Unstable_Filter: <Unstable_Filter />,
        Unstable_Info: <Unstable_Info />,
      },
    },
  },
  args: {
    children: 'Unstable_ChevronDown',
  },
} as Meta;

const Template = (args) => <Unstable_IconButton {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const SparkThemeProvider: Story = Template.bind({});
SparkThemeProvider.decorators = [sparkThemeProvider];
SparkThemeProvider.storyName = '(SparkThemeProvider)';

const variants: Array<Unstable_IconButtonProps['variant']> = [
  'primary',
  'stroked',
  'ghost',
];
const sizes: Array<Unstable_IconButtonProps['size']> = ['medium', 'small'];

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
        style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}
      >
        {variants.map((variant) => (
          <Unstable_IconButton
            key={variant}
            {...args}
            variant={variant}
            size={size}
          />
        ))}
      </div>
    ))}
    {sizes.map((size) => (
      <div
        key={size}
        style={{
          display: 'flex',
          gap: 8,
          alignItems: 'flex-start',
          backgroundColor: theme.unstable_palette.background.inverse,
          margin: -4,
          padding: 4,
        }}
      >
        {['ghost'].map((variant) => (
          <Unstable_IconButton
            key={variant}
            {...args}
            variant={variant}
            size={size}
            color="inverse"
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
