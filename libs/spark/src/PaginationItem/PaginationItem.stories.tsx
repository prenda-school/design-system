import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  default as PaginationItem,
  PaginationItemTypeMap,
} from './PaginationItem';
import type { OverridableComponent } from '../utils';

export const TypedPaginationItem: OverridableComponent<PaginationItemTypeMap> = (
  props
) => <PaginationItem {...props} />;

export default {
  title: 'PDS/@ps/Pagination Item',
  component: TypedPaginationItem,
  excludeStories: ['TypedPaginationItem'],
  args: {
    type: 'page',
    page: 1,
  },
} as Meta;

const Template: Story = (args) => (
  <div style={{ margin: '1rem', height: '3rem', aspectRatio: '1' }}>
    <PaginationItem {...args} />
  </div>
);

export const Configurable = Template.bind({});

const DefaultTemplate: Story = () => (
  <div style={{ margin: '1rem', display: 'flex', gap: '1rem' }}>
    <PaginationItem type="page" page={1} />
    <PaginationItem type="first" />
    <PaginationItem type="previous" />
    <PaginationItem type="next" />
    <PaginationItem type="last" />
    <PaginationItem type="start-ellipsis" />
    <PaginationItem type="end-ellipsis" />
  </div>
);

export const Default = DefaultTemplate.bind({});

const PseudoTemplate: Story = () => (
  <div style={{ margin: '1rem', display: 'flex', gap: '1rem' }}>
    <PaginationItem type="page" page={1} />
    <PaginationItem type="first" />
    <PaginationItem type="previous" />
    <PaginationItem type="next" />
    <PaginationItem type="last" />
  </div>
);

export const DefaultHover = PseudoTemplate.bind({});
DefaultHover.parameters = { pseudo: { hover: true } };

export const DefaultFocus = PseudoTemplate.bind({});
DefaultFocus.parameters = { pseudo: { focus: true } };

const SelectedTemplate: Story = () => (
  <div style={{ margin: '1rem', display: 'flex', gap: '1rem' }}>
    <PaginationItem type="page" page={1} selected />
  </div>
);

export const Selected = SelectedTemplate.bind({});

export const SelectedHover = SelectedTemplate.bind({});
SelectedHover.parameters = { pseudo: { hover: true } };

export const SelectedFocus = SelectedTemplate.bind({});
SelectedFocus.parameters = { pseudo: { focus: true } };
