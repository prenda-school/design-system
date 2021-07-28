import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { AlertCircleDuotone } from '@prenda/spark-icons';

const Wrapper = styled.div`
  vertical-align: middle;
  color: red;
`;

export const ExampleIcon = (props) => <AlertCircleDuotone />;

export default {
  title: 'prenda-spark/Icons',
  component: ExampleIcon,
} as Meta;
