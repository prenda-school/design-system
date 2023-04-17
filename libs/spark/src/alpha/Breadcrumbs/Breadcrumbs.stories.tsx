import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Breadcrumb, Breadcrumbs, BreadcrumbsProps } from '..';

export const _retyped = Breadcrumbs as typeof Breadcrumbs;

export default {
  title: '@ps/Breadcrumbs',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    children: [
      <Breadcrumb key="0" href="#">
        Link
      </Breadcrumb>,
      <Breadcrumb key="1" href="#">
        Link
      </Breadcrumb>,
      <Breadcrumb key="2" href="#">
        Link
      </Breadcrumb>,
      <Breadcrumb key="3" href="#" aria-current="page">
        Link
      </Breadcrumb>,
    ],
  },
} as Meta;

const Template = (args) => <Breadcrumbs {...args} />;

type Story = DefaultStory<BreadcrumbsProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';
