import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { theme, IconButton, IconButtonProps } from '..';
import { ChevronDown, containFocusIndicator, Info, Plus } from '../../stories';

export const _retyped = IconButton as typeof IconButton;

export default {
  title: '@ps/IconButton',
  component: _retyped,
  excludeStories: ['_retyped'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [containFocusIndicator],
  argTypes: {
    children: {
      control: 'select',
      options: ['<ChevronDown />', '<Info />', '<Plus />'],
      mapping: {
        '<ChevronDown />': <ChevronDown />,
        '<Info />': <Info />,
        '<Plus />': <Plus />,
      },
    },
  },
  args: {
    children: '<ChevronDown />',
  },
} as Meta;

const Template = (args) => <IconButton {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

const variants: Array<IconButtonProps['variant']> = [
  'primary',
  'stroked',
  'ghost',
];
const sizes: Array<IconButtonProps['size']> = ['medium', 'small'];

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
          <IconButton key={variant} {...args} variant={variant} size={size} />
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
          backgroundColor: theme.palette.background.inverse,
          margin: -4,
          padding: 4,
        }}
      >
        {['ghost'].map((variant) => (
          <IconButton
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

export const SizeByVariantHover: Story = SizeByVariantTemplate.bind({});
SizeByVariantHover.parameters = { pseudo: { hover: true } };
SizeByVariantHover.storyName = 'size ⨯ variant :hover';

export const SizeByVariantActive: Story = SizeByVariantTemplate.bind({});
SizeByVariantActive.parameters = { pseudo: { active: true } };
SizeByVariantActive.storyName = 'size ⨯ variant :active';

export const SizeByVariantExpanded: Story = SizeByVariantTemplate.bind({});
SizeByVariantExpanded.args = { 'aria-expanded': true };
SizeByVariantExpanded.storyName = 'size ⨯ variant aria-expanded';

export const SizeByVariantFocusVisible: Story = SizeByVariantTemplate.bind({});
SizeByVariantFocusVisible.parameters = { pseudo: { focusVisible: true } };
SizeByVariantFocusVisible.storyName = 'size ⨯ variant :focus-visible';

export const SizeByVariantDisabled: Story = SizeByVariantTemplate.bind({});
SizeByVariantDisabled.args = { disabled: true };
SizeByVariantDisabled.storyName = 'size ⨯ variant disabled';
