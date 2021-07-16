import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { styled } from '@material-ui/core';
import {
  PrendaWordmark,
  PrendaMonogram,
  SparkMonogram,
} from '@prenda/spark-icons';
import { Theme, useTheme } from '@material-ui/core';

export default {
  title: 'prenda-spark/Logos',
} as Meta;

const GridContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});
const ColumnContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});
const CellContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const Art = () => {
  const theme: Theme = useTheme();
  return (
    <GridContainer>
      <ColumnContainer
        style={{ backgroundColor: theme.palette.background.lightGrey }}
      >
        <CellContainer>
          <PrendaWordmark
            style={{ fill: theme.palette.blue[4], fontSize: '88px' }}
          />
          <PrendaMonogram
            style={{ fill: theme.palette.blue[4], fontSize: '88px' }}
          />
        </CellContainer>
        <CellContainer style={{ justifyContent: 'center' }}>
          <SparkMonogram
            style={{ fill: theme.palette.blue[4], fontSize: '80px' }}
          />
        </CellContainer>
      </ColumnContainer>
      <ColumnContainer
        style={{ backgroundColor: theme.palette.background.navy }}
      >
        <CellContainer>
          <PrendaWordmark
            style={{ fill: theme.palette.blue[1], fontSize: '88px' }}
          />
          <PrendaMonogram
            style={{ fill: theme.palette.blue[1], fontSize: '88px' }}
          />
        </CellContainer>
        <CellContainer style={{ justifyContent: 'center' }}>
          <SparkMonogram
            style={{ fill: theme.palette.blue[1], fontSize: '80px' }}
          />
        </CellContainer>
      </ColumnContainer>
    </GridContainer>
  );
};
