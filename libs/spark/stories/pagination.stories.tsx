import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Pagination } from '@material-ui/lab';

export default {
  title: 'prenda-spark/Pagination',
  component: Pagination,
  argTypes: {},
  args: {},
} as Meta;

export const BasicPagination = () => <Pagination count={10} />;
