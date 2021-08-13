import * as React from 'react';
import PropTypes from 'prop-types';
import {
  WithStyles,
  withStyles,
  createStyles,
  Theme,
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core';
import clsx from 'clsx';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      '& strong, b': {
        fontWeight: 600,
      },
    },
    initial: {}, // to satisfy TS
    inherit: {
      color: 'inherit',
    },
    textOnDark: {
      color: theme.palette.text.onDark,
    },
    textOnDarkLowContrast: {
      color: theme.palette.text.onDarkLowContrast,
    },
    textOnLight: {
      color: theme.palette.text.onLight,
    },
    textOnLightLowContrast: {
      color: theme.palette.text.onLightLowContrast,
    },
    tertiaryBlue2: {
      color: theme.palette.blue[2],
    },
    'display-lg': {
      fontSize: theme.typography.pxToRem(64),
      lineHeight: theme.typography.pxToRem(72),
      fontWeight: 800,
    },
    'display-md': {
      fontSize: theme.typography.pxToRem(56),
      lineHeight: theme.typography.pxToRem(64),
      fontWeight: 800,
    },
    'display-sm': {
      fontSize: theme.typography.pxToRem(48),
      lineHeight: theme.typography.pxToRem(56),
      fontWeight: 800,
    },
    'heading-xl': {
      fontSize: theme.typography.pxToRem(34),
      lineHeight: theme.typography.pxToRem(48),
      fontWeight: 700,
    },
    'heading-lg': {
      fontSize: theme.typography.pxToRem(28),
      lineHeight: theme.typography.pxToRem(40),
      fontWeight: 700,
    },
    'heading-md': {
      fontSize: theme.typography.pxToRem(24),
      lineHeight: theme.typography.pxToRem(32),
      fontWeight: 700,
    },
    'heading-sm': {
      fontSize: theme.typography.pxToRem(20),
      lineHeight: theme.typography.pxToRem(32),
      fontWeight: 700,
    },
    'uppercase-lg': {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(16),
      letterSpacing: '.1em',
      fontWeight: 800,
      textTransform: 'uppercase',
    },
    'uppercase-md': {
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(14),
      letterSpacing: '.1em',
      fontWeight: 800,
      textTransform: 'uppercase',
    },
    'uppercase-sm': {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(12),
      letterSpacing: '.1em',
      fontWeight: 800,
      textTransform: 'uppercase',
    },
    'label-xl': {
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(20),
      fontWeight: 600,
    },
    'label-lg': {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(20),
      fontWeight: 600,
    },
    'label-md': {
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(18),
      fontWeight: 600,
    },
    'label-sm': {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(14),
      fontWeight: 600,
    },
    'paragraph-xl': {
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(28),
      fontWeight: 400,
    },
    'paragraph-lg': {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: 400,
    },
    'paragraph-md': {
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(20),
      fontWeight: 400,
    },
    'paragraph-sm': {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(20),
      fontWeight: 400,
    },
    'code-lg': {
      fontFamily:
        '"Source Code Pro", Consolas, "Andale Mono WT", "Lucida Console", Courier, monospace',
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(28),
      fontWeight: 400,
    },
    'code-md': {
      fontFamily:
        '"Source Code Pro", Consolas, "Andale Mono WT", "Lucida Console", Courier, monospace',
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: 400,
    },
    'code-sm': {
      fontFamily:
        '"Source Code Pro", Consolas, "Andale Mono WT", "Lucida Console", Courier, monospace',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(20),
      fontWeight: 400,
    },
  });

export type Variant =
  | 'inherit'
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'uppercase-lg'
  | 'uppercase-md'
  | 'uppercase-sm'
  | 'label-xl'
  | 'label-lg'
  | 'label-md'
  | 'label-sm'
  | 'paragraph-xl'
  | 'paragraph-lg'
  | 'paragraph-md'
  | 'paragraph-sm'
  | 'code-lg'
  | 'code-md'
  | 'code-sm';

export type Color =
  | 'initial'
  | 'inherit'
  | 'textOnDark'
  | 'textOnDarkLowContrast'
  | 'textOnLight'
  | 'textOnLightLowContrast'
  | 'tertiaryBlue2';

type ClassKey = Variant | Color;

const defaultVariantMapping: Partial<Record<Variant, string>> = {
  'display-lg': 'h1',
  'display-md': 'h1',
  'display-sm': 'h1',
  'heading-xl': 'h3',
  'heading-lg': 'h4',
  'heading-md': 'h5',
  'heading-sm': 'h6',
  'uppercase-lg': 'span',
  'uppercase-md': 'span',
  'uppercase-sm': 'span',
  'label-xl': 'span',
  'label-lg': 'span',
  'label-md': 'span',
  'label-sm': 'span',
  'paragraph-xl': 'p',
  'paragraph-lg': 'p',
  'paragraph-md': 'p',
  'paragraph-sm': 'p',
  'code-lg': 'pre',
  'code-md': 'pre',
  'code-sm': 'pre',
};

export interface TypographyProps
  extends Omit<MuiTypographyProps, 'variant' | 'classes' | 'color'>,
    WithStyles<typeof styles> {
  variant?: Variant;
  color?: Color;
}

function Typography({
  classes,
  className,
  variant = 'paragraph-lg' as Variant,
  color = 'textOnLight' as Color,
  ...other
}: TypographyProps) {
  return (
    <MuiTypography
      className={clsx(
        classes.root,
        {
          [classes[variant as ClassKey]]: variant !== 'inherit',
          [classes[color as ClassKey]]: color !== 'initial',
        },
        className
      )}
      {...other}
      // @ts-expect-error: Property 'component' does not exist on type
      component={other.component || defaultVariantMapping[variant]}
    />
  );
}

Typography.propTypes = {
  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf<Variant>([
    'display-lg',
    'display-md',
    'display-sm',
    'heading-xl',
    'heading-lg',
    'heading-md',
    'heading-sm',
    'uppercase-lg',
    'uppercase-md',
    'uppercase-sm',
    'label-xl',
    'label-lg',
    'label-md',
    'label-sm',
    'paragraph-xl',
    'paragraph-lg',
    'paragraph-md',
    'paragraph-sm',
    'code-lg',
    'code-md',
    'code-sm',
  ]),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf<Color>([
    'initial',
    'inherit',
    'textOnDark',
    'textOnDarkLowContrast',
    'textOnLight',
    'textOnLightLowContrast',
    'tertiaryBlue2',
  ]),
};

const SparkTypography = withStyles(styles, {
  name: 'SparkTypography',
})(Typography);

export { SparkTypography as Typography };
