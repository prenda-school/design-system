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

export const RadiusSwatch = function RadiusSwatch(
  props: React.ComponentProps<typeof Swatch>
) {
  return (
    <div style={{ padding: 4 }}>
      <Swatch
        {...props}
        style={{
          border: '1px solid black',
          ...props.style,
        }}
      />
    </div>
  );
};
