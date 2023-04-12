import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { theme, Link, LinkProps } from '..';
import {
  containBoxShadowInline,
  inverseBackground,
  mediumWidth,
} from '../../../stories';

export const _retyped = Link as typeof Link;

export default {
  title: '@ps/Link',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    children: <>Text</>,
    href: '#',
  },
} as Meta;

const Template = (args) => <Link {...args} />;

type Story = DefaultStory<LinkProps & { component?: 'button' }>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const Hover: Story = Template.bind({});
Hover.parameters = { pseudo: { visited: false, hover: true } };
Hover.storyName = ':hover';

export const FocusVisible: Story = Template.bind({});
FocusVisible.decorators = [containBoxShadowInline];
FocusVisible.parameters = { pseudo: { visited: false, focusVisible: true } };
FocusVisible.storyName = ':focus-visible';

export const Visited: Story = Template.bind({});
Visited.parameters = { pseudo: { visited: true } };
Visited.storyName = ':visited';

export const VisitedHover: Story = Template.bind({});
VisitedHover.parameters = { pseudo: { visited: true, hover: true } };
VisitedHover.storyName = ':visited :hover';

export const VisitedFocusVisible: Story = Template.bind({});
VisitedFocusVisible.decorators = [containBoxShadowInline];
VisitedFocusVisible.parameters = {
  pseudo: { visited: true, focusVisible: true },
};
VisitedFocusVisible.storyName = ':visited :focus-visible';

export const Standalone: Story = Template.bind({});
Standalone.args = { standalone: true };
Standalone.storyName = 'standalone';

export const StandaloneHover: Story = Template.bind({});
StandaloneHover.args = { standalone: true };
StandaloneHover.parameters = { pseudo: { visited: false, hover: true } };
StandaloneHover.storyName = 'standalone :hover';

export const StandaloneFocusVisible: Story = Template.bind({});
StandaloneFocusVisible.args = { standalone: true };
StandaloneFocusVisible.decorators = [containBoxShadowInline];
StandaloneFocusVisible.parameters = {
  pseudo: { visited: false, focusVisible: true },
};
StandaloneFocusVisible.storyName = 'standalone :focus-visible';

export const StandaloneVisited: Story = Template.bind({});
StandaloneVisited.args = { standalone: true };
StandaloneVisited.parameters = { pseudo: { visited: true } };
StandaloneVisited.storyName = 'standalone :visited';

export const StandaloneVisitedHover: Story = Template.bind({});
StandaloneVisitedHover.args = { standalone: true };
StandaloneVisitedHover.parameters = { pseudo: { visited: true, hover: true } };
StandaloneVisitedHover.storyName = 'standalone :visited :hover';

export const StandaloneVisitedFocusVisible: Story = Template.bind({});
StandaloneVisitedFocusVisible.args = { standalone: true };
StandaloneVisitedFocusVisible.decorators = [containBoxShadowInline];
StandaloneVisitedFocusVisible.parameters = {
  pseudo: { visited: true, focusVisible: true },
};
StandaloneVisitedFocusVisible.storyName = 'standalone :visited :focus-visible';

const ColorInverseTemplate = (args) => (
  <span style={{ padding: '0px 4px' }}>
    <Link {...args}>Text</Link>
  </span>
);

export const ColorInverse: Story = ColorInverseTemplate.bind({});
ColorInverse.args = { color: 'inverse' };
ColorInverse.decorators = [inverseBackground];
ColorInverse.storyName = 'color="inverse"';

export const ColorInverseHover: Story = ColorInverseTemplate.bind({});
ColorInverseHover.args = { color: 'inverse' };
ColorInverseHover.decorators = [inverseBackground];
ColorInverseHover.parameters = { pseudo: { visited: false, hover: true } };
ColorInverseHover.storyName = 'color="inverse" :hover';

export const ColorInverseVisited: Story = ColorInverseTemplate.bind({});
ColorInverseVisited.args = { color: 'inverse' };
ColorInverseVisited.decorators = [inverseBackground];
ColorInverseVisited.parameters = { pseudo: { visited: true } };
ColorInverseVisited.storyName = 'color="inverse" :visited';

export const ColorInverseVisitedHover: Story = ColorInverseTemplate.bind({});
ColorInverseVisitedHover.args = { color: 'inverse' };
ColorInverseVisitedHover.decorators = [inverseBackground];
ColorInverseVisitedHover.parameters = {
  pseudo: { visited: true, hover: true },
};
ColorInverseVisitedHover.storyName = 'color="inverse" :visited :hover';

const ColorInheritTemplate = (args) => (
  <span style={{ color: '#a72100' }}>
    <Link {...args}>Text</Link>
  </span>
);

export const ColorInherit: Story = ColorInheritTemplate.bind({});
ColorInherit.args = { color: 'inherit' };
ColorInherit.storyName = 'color=inherit';

const NowrapTemplate = (args) => (
  <span style={{ ...theme.unstable_typography.body, width: 200 }}>
    Other words wrapping in a container but not{' '}
    <Link {...args}>many words of text</Link>
  </span>
);

export const Nowrap: Story = NowrapTemplate.bind({});
Nowrap.args = { nowrap: true };
Nowrap.decorators = [mediumWidth];
Nowrap.storyName = 'nowrap';

const VariantAliasTemplate = (args) => (
  <span style={{ ...theme.unstable_typography.label }}>
    <Link {...args}>Text</Link>
  </span>
);

export const VariantAlias: Story = VariantAliasTemplate.bind({});
VariantAlias.args = { variant: 'alias' };
VariantAlias.storyName = 'variant=alias';

const InlineWithTextTemplate = (args) => (
  <span>
    <Link {...args}>Text</Link> with text
  </span>
);

export const ComponentButton: Story = InlineWithTextTemplate.bind({});
ComponentButton.args = { component: 'button' };
ComponentButton.storyName = 'component=button';
