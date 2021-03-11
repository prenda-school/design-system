import React, { FC } from 'react';
import { IllustrationWrapper } from "./illustrationwrapper"
import { BookSvgPath, CollaborateSvgPath, ConquerSvgPath, CreateSvgPath } from "./svgpath"

interface illustrationProps {
  fontSize: string;
}

export const BookIllustration: FC<illustrationProps> = ({ fontSize }) => {
  return (
    <>
      <IllustrationWrapper fontSize={fontSize}>
        <BookSvgPath />
      </IllustrationWrapper>
    </>
  )
}

export const CollaborateIllustration: FC<illustrationProps> = ({ fontSize }) => {
  return (
    <IllustrationWrapper fontSize={fontSize}>
      <CollaborateSvgPath />
    </IllustrationWrapper>
  )
}

export const ConquerIllustration: FC<illustrationProps> = ({ fontSize }) => {
  return (
    <IllustrationWrapper fontSize={fontSize}>
      <ConquerSvgPath />
    </IllustrationWrapper>
  )
}

export const CreateIllustration: FC<illustrationProps> = ({ fontSize }) => {
  return (
    <IllustrationWrapper fontSize={fontSize}>
      <CreateSvgPath />
    </IllustrationWrapper>
  )
}