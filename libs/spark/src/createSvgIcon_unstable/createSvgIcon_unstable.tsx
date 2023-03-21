import React, { forwardRef, memo, ReactNode } from 'react';
import Unstable_SvgIcon, { Unstable_SvgIconProps } from '../Unstable_SvgIcon';

const createSvgIcon_unstable = (
  path: ReactNode,
  displayName: string,
  viewBox?: string,
  width?: string,
  height?: string
): typeof Unstable_SvgIcon => {
  const Component = (
    props: Unstable_SvgIconProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any
  ) => (
    <Unstable_SvgIcon
      data-testid={`${displayName}Icon`}
      ref={ref}
      viewBox={viewBox}
      width={width}
      height={height}
      {...props}
    >
      {path}
    </Unstable_SvgIcon>
  );

  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for `memo`.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }

  Component.muiName = 'Unstable_SvgIcon';

  return memo(forwardRef(Component)) as typeof Unstable_SvgIcon;
};

export default createSvgIcon_unstable;

// Derived from https://github.com/mui-org/material-ui/blob/1c5beec4be20eae30e75c69ab513bbfec3e9baaf/packages/material-ui/src/utils/createSvgIcon.js
