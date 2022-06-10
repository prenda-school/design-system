import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Pagination, PaginationProps } from '..';
import { sparkThemeProvider } from '../../stories';

interface SbPaginationProps extends PaginationProps {
  boundaryCount?: PaginationProps['boundaryCount'];
  count?: PaginationProps['count'];
  defaultPage?: PaginationProps['defaultPage'];
  disabled?: PaginationProps['disabled'];
  hideNextButton?: PaginationProps['hideNextButton'];
  hidePrevButton?: PaginationProps['hidePrevButton'];
  onChange?: PaginationProps['onChange'];
  page?: PaginationProps['page'];
  showFirstButton?: PaginationProps['showFirstButton'];
  showLastButton?: PaginationProps['showLastButton'];
  siblingCount?: PaginationProps['siblingCount'];
}
export const SbPagination = (props: SbPaginationProps) => (
  <Pagination {...props} />
);

export default {
  title: '@ps/Pagination',
  component: SbPagination,
  excludeStories: ['SbPagination'],
  args: {
    count: 10,
    defaultPage: 2,
  },
  decorators: [sparkThemeProvider],
} as Meta;

export const ConfigurablePagination: Story = (args: SbPaginationProps) => (
  <Pagination {...args} />
);
