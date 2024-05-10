import React from 'react';

export const Swatch = function Swatch(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      {...props}
      style={{
        width: 128,
        height: 128,
        ...props.style,
      }}
    />
  );
};

export const Palette = function Palette(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      {...props}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        ...props.style,
      }}
    />
  );
};
