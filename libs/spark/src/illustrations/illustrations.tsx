import React, { FC } from 'react';
import { Illustration } from './Illustration';
import {
  BookSvgPath,
  CollaborateSvgPath,
  ConquerSvgPath,
  CreateSvgPath,
} from './svgpath';

interface illustrationProps {
  fontSize: string;
}

export const BookIllustration: FC<illustrationProps> = ({ fontSize }) => {
  return (
    <Illustration fontSize={fontSize}>
      <BookSvgPath />
    </Illustration>
  );
};

export const CollaborateIllustration: FC<illustrationProps> = ({
  fontSize,
}) => {
  return (
    <Illustration fontSize={fontSize}>
      <CollaborateSvgPath />
    </Illustration>
  );
};

export const ConquerIllustration: FC<illustrationProps> = ({ fontSize }) => {
  return (
    <Illustration fontSize={fontSize}>
      <ConquerSvgPath />
    </Illustration>
  );
};

export const CreateIllustration: FC<illustrationProps> = ({ fontSize }) => {
  return (
    <Illustration fontSize={fontSize}>
      <CreateSvgPath />
    </Illustration>
  );
};
