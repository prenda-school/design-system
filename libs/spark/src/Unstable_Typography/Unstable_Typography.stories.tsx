import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_Typography } from '..';
import { inverseBackground, sparkThemeProvider } from '../../stories';

export const _retyped = Unstable_Typography as typeof Unstable_Typography;

export default {
  title: '@ps/Typography',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    children: <>typography</>,
  },
} as Meta;

const Template = (args) => <Unstable_Typography {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const STP: Story = Template.bind({});
STP.decorators = [sparkThemeProvider];
STP.storyName = '(STP)';

export const VariantDisplay: Story = Template.bind({});
VariantDisplay.args = { variant: 'display' };
VariantDisplay.storyName = 'variant=display';

export const VariantT32: Story = Template.bind({});
VariantT32.args = { variant: 'T32' };
VariantT32.storyName = 'variant=T32';

export const VariantT28: Story = Template.bind({});
VariantT28.args = { variant: 'T28' };
VariantT28.storyName = 'variant=T28';

export const VariantT22: Story = Template.bind({});
VariantT22.args = { variant: 'T22' };
VariantT22.storyName = 'variant=T22';

export const VariantT18: Story = Template.bind({});
VariantT18.args = { variant: 'T18' };
VariantT18.storyName = 'variant=T18';

export const VariantT14: Story = Template.bind({});
VariantT14.args = { variant: 'T14' };
VariantT14.storyName = 'variant=T14';

export const VariantLabel: Story = Template.bind({});
VariantLabel.args = { variant: 'label' };
VariantLabel.storyName = 'variant=label';

export const VariantBody: Story = Template.bind({});
VariantBody.args = { variant: 'body' };
VariantBody.storyName = 'variant=body';

export const VariantBodyStrong: Story = Template.bind({});
VariantBodyStrong.args = {
  variant: 'body',
  children: <strong>typography</strong>,
};
VariantBodyStrong.storyName = 'variant=body children=<strong>';

export const VariantDescription: Story = Template.bind({});
VariantDescription.args = { variant: 'description' };
VariantDescription.storyName = 'variant=description';

export const VariantDescriptionStrong: Story = Template.bind({});
VariantDescriptionStrong.args = {
  variant: 'description',
  children: <strong>typography</strong>,
};
VariantDescriptionStrong.storyName = 'variant=description children=<strong>';

export const VariantCode: Story = Template.bind({});
VariantCode.args = { variant: 'code' };
VariantCode.storyName = 'variant=code';

export const ColorInverse: Story = Template.bind({});
ColorInverse.args = { color: 'inverse' };
ColorInverse.decorators = [inverseBackground];
ColorInverse.storyName = 'color=inverse';
