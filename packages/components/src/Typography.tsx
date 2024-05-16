import { textColor, typography } from '@prenda/tokens';
import React from 'react';

export interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant: keyof typeof typography;
}

export type TypographyRef = HTMLSpanElement;

export const Typography = React.forwardRef<TypographyRef, TypographyProps>(
  (props, ref) => {
    const { variant, ...other } = props;

    return (
      <span
        ref={ref}
        {...other}
        style={{
          ...typography[variant],
          color: textColor.heading,
          ...other.style,
        }}
      />
    );
  }
);
