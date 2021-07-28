import * as React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import AlertCircleDuotoneIcon from '@prenda/spark-icons/AlertCircleDuotone';

const Wrapper = styled.div`
  vertical-align: middle;
  color: red;
`;

export const ExampleIcon = (props) => <AlertCircleDuotoneIcon />;

export default {
  title: 'prenda-spark/Icons',
  component: ExampleIcon,
} as Meta;
