import React from 'react';
import { BarScaleChildProps, BarScaleProps } from './BarScaleProps';

export const BarScale = (props: BarScaleProps) => {
  const {
    children: childrenProp,
    lengthMax,
    lengthMin,
    valueMax,
    valueMin,
  } = props;

  const ctx = {
    barScale: {
      lengthMax,
      lengthMin,
      valueMax,
      valueMin,
    },
  };

  const children = React.Children.map(childrenProp, (child) => {
    if (React.isValidElement<BarScaleChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? ctx,
      });
    }

    return child;
  });

  return <>{children}</>;
};
