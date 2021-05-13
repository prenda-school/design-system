import React from 'react';
import styled from 'styled-components';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import {
  PrendaWordmarkDark,
  PrendaWordmarkLight,
  PrendaMonogramDark,
  PrendaMonogramLight,
  SparkLogoDark,
  SparkLogoLight,
} from './';
import { Theme, useTheme } from '@material-ui/core';

export default {
  title: 'prenda-spark/Logos',
  component: PrendaWordmarkDark,
} as Meta;

export const PrendaLogos = () => {
  const theme: Theme = useTheme();
  return (
    <GridContainer>
      <ColumnContainer
        style={{ backgroundColor: theme.palette.background.lightGrey }}
      >
        <CellContainer>
          <PrendaWordmarkDark fontSize={'167'} />
          <PrendaMonogramDark fontSize={'65'} />
        </CellContainer>
        <CellContainer style={{ justifyContent: 'center' }}>
          <SparkLogoDark fontSize={'64'} />
        </CellContainer>
      </ColumnContainer>
      <ColumnContainer
        style={{ backgroundColor: theme.palette.background.navy }}
      >
        <CellContainer>
          <PrendaWordmarkLight fontSize={'84'} />
          <PrendaMonogramLight fontSize={'33'} />
        </CellContainer>
        <CellContainer style={{ justifyContent: 'center' }}>
          <SparkLogoLight fontSize={'32'} />
        </CellContainer>
      </ColumnContainer>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CellContainer = styled.div`
  display: flex;
  align-items: center;
`;
