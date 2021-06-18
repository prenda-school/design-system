import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Card } from '../src/Card';
import type { CardProps } from '../src/Card';

export default {
  title: 'prenda-spark/Card',
  component: Card,
  argTypes: {},
  args: {},
} as Meta;

export const BasicCard = () => (
  <Card>
    <h2>Card Header</h2>
    <p>Card body</p>
  </Card>
);

export const CardWithImage = () => (
  <Card>
    <img src="https://placekitten.com/400/200" alt="Kitten placeholder" />
    <h2>Card Header</h2>
    <p>Card body</p>
  </Card>
);
