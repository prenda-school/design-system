import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Breadcrumbs, BreadcrumbsProps, Link } from '..';
import { sparkThemeProvider } from '../../stories';

export const SbBreadcrumbs = (props: BreadcrumbsProps) => (
  <Breadcrumbs {...props} />
);

export default {
  title: '@ps/Breadcrumbs',
  component: SbBreadcrumbs,
  excludeStories: ['SbBreadcrumbs'],
  decorators: [sparkThemeProvider],
} as Meta;

const Template = (args) => (
  <Breadcrumbs {...args}>
    <Link href="#">Link</Link>
    <Link href="#">Link</Link>
    <Link href="#">Link</Link>
    <Link href="#" aria-current="page">
      Link
    </Link>
  </Breadcrumbs>
);

export const Configurable: Story = Template.bind({});
