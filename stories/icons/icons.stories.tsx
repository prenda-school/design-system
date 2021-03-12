import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { CaretUpIcon, CaretDownIcon } from '../../src';

export default {
  title: 'prenda-spark/Icon',
  component: CaretUpIcon,
} as Meta;

export const CaretUpIconSmallNavyHi = () => (
  <CaretUpIcon fontSize="small" color="navy" contrast="high" />
);

export const CaretUpIconSmallGreyHi = () => (
  <CaretUpIcon fontSize="large" color="grey" contrast="high" />
);

export const CaretDownIconSmallGreyHi = () => (
  <CaretDownIcon fontSize="large" color="grey" contrast="high" />
);
