import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Menu } from '../../src';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default {
  title: 'prenda-spark/Menu',
  component: Menu,
} as Meta;

const menuOptions = [
  <option value="taco">Taco</option>,
  <option value="cat">Cat</option>,
  <option value="goat">Goat</option>,
  <option value="cheese">Cheese</option>,
  <option value="pizza">Pizza</option>,
];

export const BasicMenu = () => (
  <Menu menuId="basic-menu-1" label="Choose Label">
    {menuOptions}
  </Menu>
);
