import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import {
  PrendaWordmark,
  PrendaMonogram,
  SparkMonogram,
} from '@prenda/spark-icons';
import { styled } from '@material-ui/core';

export default {
  title: 'prenda-spark/Logos',
} as Meta;

const GridContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  '& > div:first-child': {
    backgroundColor: theme.palette.background.lightGrey,
  },
  '& > div:last-child': {
    backgroundColor: theme.palette.background.navy,
  },
}));
const ColumnContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  '& > div:last-child': {
    justifyContent: 'center',
  },
});
const CellContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const BluePrendaWordmark = styled(PrendaWordmark)(({ theme }) => ({
  fontSize: '88px',
  fill: theme.palette.brand.blue,
}));
const BluePrendaMonogram = styled(PrendaMonogram)(({ theme }) => ({
  fontSize: '88px',
  fill: theme.palette.brand.blue,
}));
const BlueSparkMonogram = styled(SparkMonogram)(({ theme }) => ({
  fontSize: '80px',
  fill: theme.palette.brand.blue,
}));
const LightBluePrendaWordmark = styled(PrendaWordmark)(({ theme }) => ({
  fontSize: '88px',
  fill: theme.palette.blue[1],
}));
const LightBluePrendaMonogram = styled(PrendaMonogram)(({ theme }) => ({
  fontSize: '88px',
  fill: theme.palette.blue[1],
}));
const LightBlueSparkMonogram = styled(SparkMonogram)(({ theme }) => ({
  fontSize: '80px',
  fill: theme.palette.blue[1],
}));

export const Logos = () => (
  <GridContainer>
    <ColumnContainer>
      <CellContainer>
        <BluePrendaWordmark />
        <BluePrendaMonogram />
      </CellContainer>
      <CellContainer>
        <BlueSparkMonogram />
      </CellContainer>
    </ColumnContainer>
    <ColumnContainer>
      <CellContainer>
        <LightBluePrendaWordmark />
        <LightBluePrendaMonogram />
      </CellContainer>
      <CellContainer>
        <LightBlueSparkMonogram />
      </CellContainer>
    </ColumnContainer>
  </GridContainer>
);
