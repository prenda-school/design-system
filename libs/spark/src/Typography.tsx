import * as React from 'react';
import {
  WithStyles,
  withStyles,
  createStyles,
  Theme,
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core';
import clsx from 'clsx';
import { SparkVariant } from './styles/typography';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      '& strong, b': {
        fontWeight: 700,
      },
    },
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
    'display-lg': theme.typography['display-lg'],
    'display-md': theme.typography['display-md'],
    'display-sm': theme.typography['display-sm'],
    'heading-xl': theme.typography['display-xl'],
    'heading-lg': theme.typography['heading-lg'],
    'heading-md': theme.typography['heading-md'],
    'heading-sm': theme.typography['heading-sm'],
    'uppercase-lg': theme.typography['uppercase-lg'],
    'uppercase-md': theme.typography['uppercase-md'],
    'uppercase-sm': theme.typography['uppercase-sm'],
    'label-xl': theme.typography['label-xl'],
    'label-lg': theme.typography['label-lg'],
    'label-md': theme.typography['label-md'],
    'label-sm': theme.typography['label-sm'],
    'paragraph-xl': theme.typography['paragraph-xl'],
    'paragraph-lg': theme.typography['paragraph-lg'],
    'paragraph-md': theme.typography['paragraph-md'],
    'paragraph-sm': theme.typography['paragraph-sm'],
    'code-lg': theme.typography['code-lg'],
    'code-md': theme.typography['code-md'],
    'code-sm': theme.typography['code-sm'],
  });

export type Color =
  | 'initial'
  | 'inherit'
  | 'textOnDark'
  | 'textOnDarkLowContrast'
  | 'textOnLight'
  | 'textOnLightLowContrast';

type ClassKey = 'inherit' | SparkVariant | Color;

const defaultVariantMapping: Record<SparkVariant, string> = {
  'display-lg': 'h1',
  'display-md': 'h1',
  'display-sm': 'h2',
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
  variant?: SparkVariant | 'inherit';
  color?: Color;
}

function Typography({
  classes,
  className,
  variant = 'paragraph-lg',
  color = 'textOnLight',
  ...other
}: TypographyProps) {
  return (
    <MuiTypography
      className={clsx(
        classes.root,
        {
          [classes[variant]]: variant !== 'inherit',
          [classes[color]]: color !== 'initial',
        },
        className
      )}
      {...other}
      // @ts-expect-error: Property 'component' does not exist on type
      component={other.component || defaultVariantMapping[variant]}
    />
  );
}

const SparkTypography = withStyles(styles, {
  name: 'SparkTypography',
})(Typography);

export { SparkTypography as Typography };
