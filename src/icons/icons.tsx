import React, { FC } from 'react';
import Icon from './icon';
import { CaretUp } from './svgpath';

interface iconProps {
  fontSize: string;
  color: string;
  contrast: string;
}

export const CaretUpIcon: FC<iconProps> = ({ fontSize, color, contrast }) => {
  return (
    <Icon fontSize={fontSize} color={color} contrast={contrast}>
      <CaretUp />
    </Icon>
  );
};
