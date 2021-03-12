import React, { FC } from 'react';
import { SvgIcon } from '@material-ui/core';

interface illustrationProps {
  fontSize: string;
  children: JSX.Element;
}

export const Illustration: FC<illustrationProps> = ({
  fontSize,
  children,
}) => {
  return (
    <SvgIcon viewBox="0 0 640 640" style={{ fontSize: fontSize }}>
      {children}
    </SvgIcon>
  );
};
