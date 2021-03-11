import React, { FC } from 'react';
import { SvgIcon } from '@material-ui/core';

interface illustrationWrapperProps {
  fontSize: string;
  children: JSX.Element;
}

export const IllustrationWrapper: FC<illustrationWrapperProps> = ({
  fontSize,
  children,
}) => {
  return (
    <SvgIcon viewBox="0 0 640 640" style={{ fontSize: fontSize }}>
      {children}
    </SvgIcon>
  );
};
