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

export const BorderRadiusSwatch = function RadiusSwatch(
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

export const BoxShadowSwatch = function ShadowSwatch(
  props: React.ComponentProps<typeof Swatch>
) {
  return (
    <div style={{ padding: 30 }}>
      <Swatch
        {...props}
        style={{
          borderRadius: 8,
          ...props.style,
        }}
      />
    </div>
  );
};

export const BorderSwatch = function BorderSwatch(
  props: React.ComponentProps<typeof Swatch>
) {
  return (
    <div style={{ padding: 4 }}>
      <Swatch
        {...props}
        style={{
          margin: 4,
          ...props.style,
        }}
      />
    </div>
  );
};
