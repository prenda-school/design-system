import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { default as Pagination, PaginationProps } from './Pagination';

export const TypedPagination = (props: PaginationProps) => (
  <Pagination {...props} />
);

export default {
  title: 'PDS/@ps/Pagination',
  component: TypedPagination,
  excludeStories: ['TypedPagination'],
  // Doesn't pick up props
  argTypes: {
    count: { control: 'number' },
    defaultPage: { control: 'number' },
    siblingCount: { control: 'number' },
    boundaryCount: { control: 'number' },
    showFirstButton: { control: 'boolean' },
    showLastButton: { control: 'boolean' },
    hideNextButton: { control: 'boolean' },
    hidePrevButton: { control: 'boolean' },
  },
  args: {
    count: 10,
    defaultPage: 2,
  },
} as Meta;

export const ConfigurablePagination = (args) => <Pagination {...args} />;
