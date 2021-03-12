import React, { FC } from 'react';
import { SvgIcon } from '@material-ui/core';
import { School } from './svgpath';

export const IconTest: FC = () => {
  return (
    <SvgIcon viewBox="0 0 24 24" color="error">
      <School />
    </SvgIcon>
  );
};
