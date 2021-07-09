import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
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
