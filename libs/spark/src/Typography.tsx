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
import { capitalize } from './utils';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      '& strong, b': {
        fontWeight: 700,
      },
    },
    colorInherit: {
      color: 'inherit',
    },
    colorOnDark: {
      color: theme.palette.text.onDark,
    },
    colorOnDarkLowContrast: {
      color: theme.palette.text.onDarkLowContrast,
    },
    colorOnLight: {
      color: theme.palette.text.onLight,
    },
    colorOnLightLowContrast: {
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
    // copy keys from Mui internal to preserve consumer overriding and
    // keep TS happy
    alignLeft: {},
    alignCenter: {},
    alignRight: {},
    alignJustify: {},
    noWrap: {},
    gutterBottom: {},
    paragraph: {},
    displayInline: {},
    displayBlock: {},
  });

export type Color =
  | 'initial'
  | 'inherit'
  | 'onDark'
  | 'onDarkLowContrast'
  | 'onLight'
  | 'onLightLowContrast';

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
  color = 'onLight',
  ...other
}: TypographyProps) {
  return (
    <MuiTypography
      className={clsx(
        classes.root,
        {
          [classes[variant]]: variant !== 'inherit',
          [classes[`color${capitalize(color)}`]]: color !== 'initial',
          // copy from Mui internal
          // (permalink: https://github.com/mui-org/material-ui/blob/5cc1d0fc8756534f181d55af02a5a0d65b486603/packages/material-ui/src/Typography/Typography.js)
          // prevents swallowing of classes
          [classes.noWrap]: other.noWrap,
          [classes.gutterBottom]: other.gutterBottom,
          [classes.paragraph]: other.paragraph,
          [classes[`align${capitalize(other.align || '')}`]]:
            other.align !== 'inherit',
          [classes[`display${capitalize(other.display || '')}`]]:
            other.display !== 'initial',
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
