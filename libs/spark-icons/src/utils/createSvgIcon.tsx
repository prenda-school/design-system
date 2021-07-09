// Original credit to https://github.com/mui-org/material-ui/blob/1c5beec4be20eae30e75c69ab513bbfec3e9baaf/packages/material-ui/src/utils/createSvgIcon.js
//  Changes made since

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function createSvgIcon(
  path: React.ReactNode,
  displayName: string
): typeof SvgIcon {
  // @ts-expect-error Parameter 'props' implicitly has an 'any' type.
  const Component = (props, ref) => (
    <SvgIcon ref={ref} {...props}>
      {path}
    </SvgIcon>
  );

  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }

  // @ts-expect-error Property 'muiName' does not exist on type 'OverridableComponent<SvgIconTypeMap<{}, "svg">>'.
  Component.muiName = SvgIcon.muiName;

  // @ts-expect-error ype 'MemoExoticComponent<ForwardRefExoticComponent<Pick<any, string | number | symbol> & RefAttributes<SVGSVGElement>>>' is not assignable to type 'OverridableComponent<SvgIconTypeMap<{}, "svg">>'.
  // Type 'ReactElement<any, string | JSXElementConstructor<any>> | null' is not assignable to type 'Element'.
  // Type 'null' is not assignable to type 'ReactElement<any, any>'.
  return React.memo(React.forwardRef(Component));
}
