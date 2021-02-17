import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Menu, MenuItemOptions } from '../../src';

export default {
  title: 'prenda-spark/Menu',
  component: Menu,
} as Meta;

const menuOptions: MenuItemOptions[] = [
  { displayName: 'Taco', value: 'taco' },
  { displayName: 'Cat', value: 'cat' },
  { displayName: 'Goat', value: 'goat' },
  { displayName: 'Cheese', value: 'cheese' },
  { displayName: 'Pizza', value: 'pizza' },
];

const handleOnChange = (
  evt: React.ChangeEvent<{
    name?: string;
    value: unknown;
  }>
) => {
  console.log(`Handling On Change, ${evt}`);
};

export const BasicMenu = () => (
  <Menu
    menuId="basic-menu-1"
    label="Choose Label"
    menuOptions={menuOptions}
    minWidth={200}
    bottomFormLabel="Types of Food"
    selectPlaceholder="Placeholder"
    onChange={handleOnChange}
  />
);
