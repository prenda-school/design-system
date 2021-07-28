import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Pagination } from '../src';

export default {
  title: 'prenda-spark/Pagination',
  component: Pagination,
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
