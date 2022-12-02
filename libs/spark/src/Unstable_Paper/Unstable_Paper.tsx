import clsx from 'clsx';
import React, { ElementType, forwardRef } from 'react';
import makeStyles from '../makeStyles';
import type { Unstable_Borders } from '../theme/unstable_borders';
import type { Unstable_Palette } from '../theme/unstable_palette';
import type { Unstable_Radii } from '../theme/unstable_radii';
import type { Unstable_Shadows } from '../theme/unstable_shadows';
import type { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_PaperTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P & {
    /**
     * Background color.
     */
    bgcolor?: keyof Unstable_Palette['background'];
    /**
     * Border styling.
     */
    border?: keyof Unstable_Borders;
    /**
     * Radius rounding.
     */
    radius?: keyof Unstable_Radii;
    /**
     * Shadow depth.
     */
    shadow?: keyof Unstable_Shadows;
  };
  defaultComponent: D;
  classKey: Unstable_PaperClassKey;
}

export type Unstable_PaperProps<
  D extends ElementType = Unstable_PaperTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_PaperTypeMap<P, D>, D>;

export type Unstable_PaperClassKey = 'root';

type PrivateClassKey =
  | 'private-root-bgcolor-default'
  | 'private-root-bgcolor-alternative'
  | 'private-root-bgcolor-brand'
  | 'private-root-bgcolor-inverse'
  | 'private-root-bgcolor-overlay'
  | 'private-root-border-none'
  | 'private-root-border-transparent'
  | 'private-root-border-subtle'
  | 'private-root-border-standard'
  | 'private-root-border-bold'
  | 'private-root-border-selected'
  | 'private-root-border-active'
  | 'private-root-border-expanded'
  | 'private-root-border-hover'
  | 'private-root-border-focus'
  | 'private-root-border-error'
  | 'private-root-border-info'
  | 'private-root-border-success'
  | 'private-root-border-warning'
  | 'private-root-radius-zero'
  | 'private-root-radius-xs'
  | 'private-root-radius-sm'
  | 'private-root-radius-md'
  | 'private-root-radius-lg'
  | 'private-root-radius-xl'
  | 'private-root-radius-full'
  | 'private-root-shadow-none'
  | 'private-root-shadow-E100'
  | 'private-root-shadow-E200'
  | 'private-root-shadow-E300'
  | 'private-root-shadow-E400'
  | 'private-root-shadow-E500';

const styles: Styles<Unstable_PaperClassKey | PrivateClassKey> = (theme) => ({
  root: {
    color: theme.unstable_palette.text.body,
  },
  /* Private */
  'private-root-bgcolor-default': {
    backgroundColor: theme.unstable_palette.background.default,
  },
  'private-root-bgcolor-alternative': {
    backgroundColor: theme.unstable_palette.background.alternative,
  },
  'private-root-bgcolor-brand': {
    backgroundColor: theme.unstable_palette.background.brand,
  },
  'private-root-bgcolor-inverse': {
    backgroundColor: theme.unstable_palette.background.inverse,
  },
  'private-root-bgcolor-overlay': {
    backgroundColor: theme.unstable_palette.background.overlay,
  },
  'private-root-border-none': {
    border: theme.unstable_borders.none,
  },
  'private-root-border-transparent': {
    border: theme.unstable_borders.transparent,
  },
  'private-root-border-subtle': {
    border: theme.unstable_borders.subtle,
  },
  'private-root-border-standard': {
    border: theme.unstable_borders.standard,
  },
  'private-root-border-bold': {
    border: theme.unstable_borders.bold,
  },
  'private-root-border-selected': {
    border: theme.unstable_borders.selected,
  },
  'private-root-border-active': {
    border: theme.unstable_borders.active,
  },
  'private-root-border-expanded': {
    border: theme.unstable_borders.expanded,
  },
  'private-root-border-hover': {
    border: theme.unstable_borders.hover,
  },
  'private-root-border-focus': {
    border: theme.unstable_borders.focus,
  },
  'private-root-border-error': {
    border: theme.unstable_borders.error,
  },
  'private-root-border-info': {
    border: theme.unstable_borders.info,
  },
  'private-root-border-success': {
    border: theme.unstable_borders.success,
  },
  'private-root-border-warning': {
    border: theme.unstable_borders.warning,
  },
  'private-root-radius-zero': {
    borderRadius: theme.unstable_radii.zero,
  },
  'private-root-radius-xs': {
    borderRadius: theme.unstable_radii.xs,
  },
  'private-root-radius-sm': {
    borderRadius: theme.unstable_radii.sm,
  },
  'private-root-radius-md': {
    borderRadius: theme.unstable_radii.md,
  },
  'private-root-radius-lg': {
    borderRadius: theme.unstable_radii.lg,
  },
  'private-root-radius-xl': {
    borderRadius: theme.unstable_radii.xl,
  },
  'private-root-radius-full': {
    borderRadius: theme.unstable_radii.full,
  },
  'private-root-shadow-none': {
    boxShadow: theme.unstable_shadows.none,
  },
  'private-root-shadow-E100': {
    boxShadow: theme.unstable_shadows.E100,
  },
  'private-root-shadow-E200': {
    boxShadow: theme.unstable_shadows.E200,
  },
  'private-root-shadow-E300': {
    boxShadow: theme.unstable_shadows.E300,
  },
  'private-root-shadow-E400': {
    boxShadow: theme.unstable_shadows.E400,
  },
  'private-root-shadow-E500': {
    boxShadow: theme.unstable_shadows.E500,
  },
  'private-root-shadow-focus': {
    boxShadow: theme.unstable_shadows.focus,
  },
  'private-root-shadow-error': {
    boxShadow: theme.unstable_shadows.error,
  },
  'private-root-shadow-info': {
    boxShadow: theme.unstable_shadows.info,
  },
  'private-root-shadow-success': {
    boxShadow: theme.unstable_shadows.success,
  },
  'private-root-shadow-warning': {
    boxShadow: theme.unstable_shadows.warning,
  },
});

export const usePaperStyles_unstable = makeStyles(styles, {
  name: 'MuiSparkUnstable_Paper',
});

const Unstable_Paper: OverridableComponent<Unstable_PaperTypeMap> = forwardRef(
  function Unstable_Paper(props, ref) {
    const {
      className,
      classes,
      // @ts-expect-error can't be picked up
      component = 'div',
      bgcolor = 'default',
      border = 'none',
      radius = 'zero',
      shadow = 'none',
      // intercept MUI props -- allows supplying as override component to things that expect a MUI paper props signature
      // @ts-expect-error intercept
      elevation,
      // @ts-expect-error intercept
      square,
      // @ts-expect-error intercept
      variant,
      ...other
    } = props;

    const Component = component as ElementType;

    return (
      <Component
        className={clsx(
          classes.root,
          classes[`private-root-bgcolor-${bgcolor}`],
          classes[`private-root-border-${border}`],
          classes[`private-root-radius-${radius}`],
          classes[`private-root-shadow-${shadow}`],
          className
        )}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withStyles(styles, {
  name: 'MuiSparkUnstable_Paper',
})(Unstable_Paper) as typeof Unstable_Paper;
