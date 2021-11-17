import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { PaginationItem, PaginationItemProps } from '..';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SbPaginationItemProps
  extends Omit<PaginationItemProps, 'color' | 'shape' | 'size' | 'variant'> {}

export const SbPaginationItem = (props: SbPaginationItemProps) => (
  <PaginationItem {...props} />
);

export default {
  title: '@ps/Pagination Item',
  component: SbPaginationItem,
  excludeStories: ['SbPaginationItem'],
  args: {
    type: 'page',
    page: 1,
  },
} as Meta;

const Template = (args: PaginationItemProps) => (
  <div style={{ margin: '1rem', height: '3rem', aspectRatio: '1' }}>
    <PaginationItem {...args} />
  </div>
);

export const Configurable: Story<PaginationItemProps> = Template.bind({});

const DefaultTemplate = () => (
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

export const Default: Story = DefaultTemplate.bind({});

const PseudoTemplate = () => (
  <div style={{ margin: '1rem', display: 'flex', gap: '1rem' }}>
    <PaginationItem type="page" page={1} />
    <PaginationItem type="first" />
    <PaginationItem type="previous" />
    <PaginationItem type="next" />
    <PaginationItem type="last" />
  </div>
);

export const DefaultHover: Story = PseudoTemplate.bind({});
DefaultHover.parameters = { pseudo: { hover: true } };

export const DefaultFocus: Story = PseudoTemplate.bind({});
DefaultFocus.parameters = { pseudo: { focus: true } };

const SelectedTemplate = () => (
  <div style={{ margin: '1rem', display: 'flex', gap: '1rem' }}>
    <PaginationItem type="page" page={1} selected />
  </div>
);

export const Selected: Story = SelectedTemplate.bind({});

export const SelectedHover: Story = SelectedTemplate.bind({});
SelectedHover.parameters = { pseudo: { hover: true } };

export const SelectedFocus: Story = SelectedTemplate.bind({});
SelectedFocus.parameters = { pseudo: { focus: true } };
