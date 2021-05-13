import React, { FC } from 'react';
import { Logo } from './logo';
import {
  PrendaWordmarkSvgPath,
  PrendaMonogramSvgPath,
  SparkSvgPath,
} from './svgpath';
import { Theme, useTheme } from '@material-ui/core';

interface logoProps {
  fontSize: string;
}

const VIEWBOXSIZE = {
  PrendaWordmark: '0 0 167 88',
  PrendaMonogram: '0 0 65 88',
  Spark: '0 0 64 80',
};

export const PrendaWordmarkDark: FC<logoProps> = ({ fontSize }) => {
  const theme: Theme = useTheme();
  const DarkLogoColor = theme.palette?.brand?.blue
    ? theme.palette.brand.blue
    : '#0A4872';
  return (
    <Logo
      viewBox={VIEWBOXSIZE.PrendaWordmark}
      fontSize={fontSize}
      color={DarkLogoColor}
    >
      <PrendaWordmarkSvgPath />
    </Logo>
  );
};

export const PrendaWordmarkLight: FC<logoProps> = ({ fontSize }) => {
  const theme: Theme = useTheme();
  const LightLogoColor = theme.palette?.brand?.lightBlue
    ? theme.palette.brand.lightBlue
    : '#D7F3FF';
  return (
    <Logo
      viewBox={VIEWBOXSIZE.PrendaWordmark}
      fontSize={fontSize}
      color={LightLogoColor}
    >
      <PrendaWordmarkSvgPath />
    </Logo>
  );
};

export const PrendaMonogramDark: FC<logoProps> = ({ fontSize }) => {
  const theme: Theme = useTheme();
  const DarkLogoColor = theme.palette?.brand?.blue
    ? theme.palette.brand.blue
    : '#0A4872';
  return (
    <Logo
      viewBox={VIEWBOXSIZE.PrendaMonogram}
      fontSize={fontSize}
      color={DarkLogoColor}
    >
      <PrendaMonogramSvgPath />
    </Logo>
  );
};

export const PrendaMonogramLight: FC<logoProps> = ({ fontSize }) => {
  const theme: Theme = useTheme();
  const LightLogoColor = theme.palette?.brand?.lightBlue
    ? theme.palette.brand.lightBlue
    : '#D7F3FF';
  return (
    <Logo
      viewBox={VIEWBOXSIZE.PrendaMonogram}
      fontSize={fontSize}
      color={LightLogoColor}
    >
      <PrendaMonogramSvgPath />
    </Logo>
  );
};

export const SparkLogoDark: FC<logoProps> = ({ fontSize }) => {
  const theme: Theme = useTheme();
  const DarkLogoColor = theme.palette?.brand?.blue
    ? theme.palette.brand.blue
    : '#0A4872';
  return (
    <Logo viewBox={VIEWBOXSIZE.Spark} fontSize={fontSize} color={DarkLogoColor}>
      <SparkSvgPath />
    </Logo>
  );
};

export const SparkLogoLight: FC<logoProps> = ({ fontSize }) => {
  const theme: Theme = useTheme();
  const LightLogoColor = theme.palette?.brand?.lightBlue
    ? theme.palette.brand.lightBlue
    : '#D7F3FF';
  return (
    <Logo
      viewBox={VIEWBOXSIZE.Spark}
      fontSize={fontSize}
      color={LightLogoColor}
    >
      <SparkSvgPath />
    </Logo>
  );
};
