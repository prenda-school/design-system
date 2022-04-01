// Original credit to https://github.com/mui-org/material-ui/blob/1c5beec4be20eae30e75c69ab513bbfec3e9baaf/packages/material-ui/src/utils/createSvgIcon.js
//  Changes made since

import * as React from 'react';
import Unstable_SvgIcon, { Unstable_SvgIconProps } from './Unstable_SvgIcon';

const unstable_createSvgIcon = (
  path: React.ReactNode,
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
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }

  Component.muiName = 'Unstable_SvgIcon';

  return React.memo(React.forwardRef(Component)) as typeof Unstable_SvgIcon;
};

export default unstable_createSvgIcon;
