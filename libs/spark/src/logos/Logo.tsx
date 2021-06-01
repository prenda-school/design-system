import React, { FC } from 'react';
import { SvgIcon } from '@material-ui/core';

interface logoProps {
  viewBox: string;
  fontSize: string;
  color: string;
  children: JSX.Element;
}

export const Logo: FC<logoProps> = ({ viewBox, fontSize, color, children }) => {
  return (
    <SvgIcon viewBox={viewBox} style={{ fontSize, color }}>
      {children}
    </SvgIcon>
  );
};
