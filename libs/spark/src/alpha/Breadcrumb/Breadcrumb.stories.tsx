import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Breadcrumb, BreadcrumbProps } from '..';
import { inverseBackground } from '../../../stories';

export const _retyped = Breadcrumb as typeof Breadcrumb;

export default {
  title: '@ps/Breadcrumb',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    children: <>Text</>,
    href: '#',
  },
} as Meta;

const Template = (args) => <Breadcrumb {...args} />;

type Story = DefaultStory<BreadcrumbProps & { component?: 'button' }>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const Hover: Story = Template.bind({});
Hover.parameters = { pseudo: { visited: false, hover: true } };
Hover.storyName = ':hover';

export const Visited: Story = Template.bind({});
Visited.parameters = { pseudo: { visited: true } };
Visited.storyName = ':visited';

export const VisitedHover: Story = Template.bind({});
VisitedHover.parameters = { pseudo: { visited: true, hover: true } };
VisitedHover.storyName = ':visited :hover';

export const AriaCurrentPage: Story = Template.bind({});
AriaCurrentPage.args = { 'aria-current': 'page' };
AriaCurrentPage.storyName = 'aria-current=page';

export const AriaCurrentPageHover: Story = Template.bind({});
AriaCurrentPageHover.args = { 'aria-current': 'page' };
AriaCurrentPageHover.parameters = { pseudo: { hover: true } };
AriaCurrentPageHover.storyName = 'aria-current=page :hover';

export const AriaCurrentPageVisited: Story = Template.bind({});
AriaCurrentPageVisited.args = { 'aria-current': 'page' };
AriaCurrentPageVisited.parameters = { pseudo: { visited: true } };
AriaCurrentPageVisited.storyName = 'aria-current=page :visited';

export const AriaCurrentPageVisitedHover: Story = Template.bind({});
AriaCurrentPageVisitedHover.args = { 'aria-current': 'page' };
AriaCurrentPageVisitedHover.parameters = {
  pseudo: { visited: true, hover: true },
};
AriaCurrentPageVisitedHover.storyName = 'aria-current=page :visited :hover';

const ColorInverseTemplate = (args) => (
  <span style={{ padding: '0px 4px' }}>
    <Breadcrumb {...args}>Text</Breadcrumb>
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

export const ColorInverseAriaCurrentPage: Story = ColorInverseTemplate.bind({});
ColorInverseAriaCurrentPage.args = { color: 'inverse', 'aria-current': 'page' };
ColorInverseAriaCurrentPage.decorators = [inverseBackground];
ColorInverseAriaCurrentPage.storyName = 'color="inverse" aria-current=page';

export const ColorInverseHoverAriaCurrentPage: Story =
  ColorInverseTemplate.bind({});
ColorInverseHoverAriaCurrentPage.args = {
  color: 'inverse',
  'aria-current': 'page',
};
ColorInverseHoverAriaCurrentPage.decorators = [inverseBackground];
ColorInverseHoverAriaCurrentPage.parameters = {
  pseudo: { visited: false, hover: true },
};
ColorInverseHoverAriaCurrentPage.storyName =
  'color="inverse" aria-current=page :hover';

export const ColorInverseVisitedAriaCurrentPage: Story =
  ColorInverseTemplate.bind({});
ColorInverseVisitedAriaCurrentPage.args = {
  color: 'inverse',
  'aria-current': 'page',
};
ColorInverseVisitedAriaCurrentPage.decorators = [inverseBackground];
ColorInverseVisitedAriaCurrentPage.parameters = { pseudo: { visited: true } };
ColorInverseVisitedAriaCurrentPage.storyName =
  'color="inverse" aria-current=page :visited';

export const ColorInverseVisitedHoverAriaCurrentPage: Story =
  ColorInverseTemplate.bind({});
ColorInverseVisitedHoverAriaCurrentPage.args = {
  color: 'inverse',
  'aria-current': 'page',
};
ColorInverseVisitedHoverAriaCurrentPage.decorators = [inverseBackground];
ColorInverseVisitedHoverAriaCurrentPage.parameters = {
  pseudo: { visited: true, hover: true },
};
ColorInverseVisitedHoverAriaCurrentPage.storyName =
  'color="inverse" aria-current=page :visited :hover';
