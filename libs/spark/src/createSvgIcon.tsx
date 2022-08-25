// Original credit to https://github.com/mui-org/material-ui/blob/1c5beec4be20eae30e75c69ab513bbfec3e9baaf/packages/material-ui/src/utils/createSvgIcon.js
//  Changes made since

import React, { forwardRef, memo, ReactNode } from 'react';
import SvgIcon, { SvgIconProps } from './SvgIcon';

const createSvgIcon = (
  path: ReactNode,
  displayName: string,
  viewBox?: string,
  width?: string,
  height?: string
): typeof SvgIcon => {
  const Component = (
    props: SvgIconProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any
  ) => (
    <SvgIcon
      data-testid={`${displayName}Icon`}
      ref={ref}
      viewBox={viewBox}
      width={width}
      height={height}
      {...props}
    >
      {path}
    </SvgIcon>
  );

  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for `memo`.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }

  Component.muiName = 'SvgIcon';

  return memo(forwardRef(Component)) as typeof SvgIcon;
};

export default createSvgIcon;
