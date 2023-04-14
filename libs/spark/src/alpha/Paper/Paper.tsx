import clsx from 'clsx';
import type { ElementType } from 'react';
import React, { forwardRef } from 'react';
import makeStyles from '../../makeStyles';
import type { Borders } from '../theme/borders';
import type { Palette } from '../theme/palette';
import type { Radii } from '../theme/radii';
import type { Shadows } from '../theme/shadows';
import type { OverridableComponent, OverrideProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface PaperTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P & {
    /**
     * Background color.
     */
    bgcolor?: keyof Palette['background'];
    /**
     * Border styling.
     */
    border?: keyof Borders;
    /**
     * Radius rounding.
     */
    radius?: keyof Radii;
    /**
     * Shadow depth.
     */
    shadow?: keyof Shadows;
  };
  defaultComponent: D;
  classKey: PaperClassKey;
}

export type PaperProps<
  D extends ElementType = PaperTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<PaperTypeMap<P, D>, D>;

export type PaperClassKey = 'root';

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

const styles: Styles<PaperClassKey | PrivateClassKey> = (theme) => ({
  root: {
    color: theme.palette_alpha.text.body,
  },
  /* Private */
  'private-root-bgcolor-default': {
    backgroundColor: theme.palette_alpha.background.default,
  },
  'private-root-bgcolor-alternative': {
    backgroundColor: theme.palette_alpha.background.alternative,
  },
  'private-root-bgcolor-brand': {
    backgroundColor: theme.palette_alpha.background.brand,
  },
  'private-root-bgcolor-inverse': {
    backgroundColor: theme.palette_alpha.background.inverse,
  },
  'private-root-bgcolor-overlay': {
    backgroundColor: theme.palette_alpha.background.overlay,
  },
  'private-root-border-none': {
    border: theme.borders_alpha.none,
  },
  'private-root-border-transparent': {
    border: theme.borders_alpha.transparent,
  },
  'private-root-border-subtle': {
    border: theme.borders_alpha.subtle,
  },
  'private-root-border-standard': {
    border: theme.borders_alpha.standard,
  },
  'private-root-border-bold': {
    border: theme.borders_alpha.bold,
  },
  'private-root-border-selected': {
    border: theme.borders_alpha.selected,
  },
  'private-root-border-active': {
    border: theme.borders_alpha.active,
  },
  'private-root-border-expanded': {
    border: theme.borders_alpha.expanded,
  },
  'private-root-border-hover': {
    border: theme.borders_alpha.hover,
  },
  'private-root-border-focus': {
    border: theme.borders_alpha.focus,
  },
  'private-root-border-error': {
    border: theme.borders_alpha.error,
  },
  'private-root-border-info': {
    border: theme.borders_alpha.info,
  },
  'private-root-border-success': {
    border: theme.borders_alpha.success,
  },
  'private-root-border-warning': {
    border: theme.borders_alpha.warning,
  },
  'private-root-radius-zero': {
    borderRadius: theme.radii_alpha.zero,
  },
  'private-root-radius-xs': {
    borderRadius: theme.radii_alpha.xs,
  },
  'private-root-radius-sm': {
    borderRadius: theme.radii_alpha.sm,
  },
  'private-root-radius-md': {
    borderRadius: theme.radii_alpha.md,
  },
  'private-root-radius-lg': {
    borderRadius: theme.radii_alpha.lg,
  },
  'private-root-radius-xl': {
    borderRadius: theme.radii_alpha.xl,
  },
  'private-root-radius-full': {
    borderRadius: theme.radii_alpha.full,
  },
  'private-root-shadow-none': {
    boxShadow: theme.shadows_alpha.none,
  },
  'private-root-shadow-E100': {
    boxShadow: theme.shadows_alpha.E100,
  },
  'private-root-shadow-E200': {
    boxShadow: theme.shadows_alpha.E200,
  },
  'private-root-shadow-E300': {
    boxShadow: theme.shadows_alpha.E300,
  },
  'private-root-shadow-E400': {
    boxShadow: theme.shadows_alpha.E400,
  },
  'private-root-shadow-E500': {
    boxShadow: theme.shadows_alpha.E500,
  },
  'private-root-shadow-focus': {
    boxShadow: theme.shadows_alpha.focus,
  },
  'private-root-shadow-error': {
    boxShadow: theme.shadows_alpha.error,
  },
  'private-root-shadow-info': {
    boxShadow: theme.shadows_alpha.info,
  },
  'private-root-shadow-success': {
    boxShadow: theme.shadows_alpha.success,
  },
  'private-root-shadow-warning': {
    boxShadow: theme.shadows_alpha.warning,
  },
});

export const usePaperStyles = makeStyles(styles, {
  name: 'MuiSpark_alpha_Paper',
});

const Paper: OverridableComponent<PaperTypeMap> = forwardRef(function Paper(
  props,
  ref
) {
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
});

export default withStyles(styles, {
  name: 'MuiSpark_alpha_Paper',
})(Paper) as typeof Paper;
