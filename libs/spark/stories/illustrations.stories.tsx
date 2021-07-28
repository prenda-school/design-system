import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import {
  BookIllustration,
  CollaborateIllustration,
  ConquerIllustration,
  CreateIllustration,
} from '@prenda/spark-icons';
import { styled } from '../src';

export default {
  title: 'prenda-spark/Illustrations',
} as Meta;

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const Art = () => (
  <Container>
    <BookIllustration style={{ fontSize: '120px' }} />
    <CollaborateIllustration style={{ fontSize: '120px' }} />
    <ConquerIllustration style={{ fontSize: '120px' }} />
    <CreateIllustration style={{ fontSize: '120px' }} />
  </Container>
);
