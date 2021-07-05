import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PaginationItem } from '@material-ui/lab';

export default {
  title: 'prenda-spark/Pagination Item',
  component: PaginationItem,
  argTypes: {
    type: {
      control: 'select',
      options: [
        'page',
        'first',
        'last',
        'next',
        'previous',
        'start-ellipsis',
        'end-ellipsis'
      ]
    },
    page: { control: 'number' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: {
    type: 'page',
    page: 1
  }
} as Meta;

const Template = args => (
  <div style={{ margin: '1rem', height: '3rem', aspectRatio: '1' }}>
    <PaginationItem {...args} />
  </div>
);

export const Configurable = Template.bind({});

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

export const Default = DefaultTemplate.bind({});

const PseudoTemplate = () => (
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

const SelectedTemplate = () => (
  <div style={{ margin: '1rem', display: 'flex', gap: '1rem' }}>
    <PaginationItem type="page" page={1} selected />
  </div>
);

export const Selected = SelectedTemplate.bind({});

export const SelectedHover = SelectedTemplate.bind({});
SelectedHover.parameters = { pseudo: { hover: true } };

export const SelectedFocus = SelectedTemplate.bind({});
SelectedFocus.parameters = { pseudo: { focus: true } };
