import React, { FC } from 'react';
import { SvgIcon } from '@material-ui/core';

export interface LogoProps {
  viewBox: string;
  fontSize: string;
  color: string;
  children: JSX.Element;
}

export const Logo: FC<LogoProps> = ({ viewBox, fontSize, color, children }) => {
  return (
    <SvgIcon viewBox={viewBox} style={{ fontSize, color }}>
      {children}
    </SvgIcon>
  );
};
