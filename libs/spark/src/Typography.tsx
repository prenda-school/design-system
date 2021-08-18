import * as React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  Theme,
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  TypographyClassKey as MuiTypographyClassKey,
} from '@material-ui/core';
import {
  OverrideProps,
  OverridableComponent,
} from '@material-ui/core/OverridableComponent';
import { SparkVariant } from './styles/typography';
import { capitalize, ClassNameMap } from './utils';

export interface TypographyTypeMap<
  P = Record<string, unknown>,
  D extends React.ElementType = 'span'
> {
  props: P &
    Omit<MuiTypographyProps, 'classes' | 'variant' | 'color'> & {
      variant?: SparkVariant | 'inherit';
      color?:
        | 'initial'
        | 'inherit'
        | 'onDark'
        | 'onDarkLowContrast'
        | 'onLight'
        | 'onLightLowContrast';
    };
  defaultComponent: D;
  classKey: TypographyClassKey;
}

export type TypographyProps<
  D extends React.ElementType = TypographyTypeMap['defaultComponent'],
  P = Record<string, unknown>
> = OverrideProps<TypographyTypeMap<P, D>, D>;

type CustomClassKey =
  | SparkVariant
  | 'colorInitial'
  | 'colorInherit'
  | 'colorOnLight'
  | 'colorOnLightLowContrast'
  | 'colorOnDark'
  | 'colorOnDarkLowContrast';

export type TypographyClassKey = MuiTypographyClassKey | CustomClassKey;

export const MuiTypographyStyleOverrides = {
  root: {
    '& strong, b': {
      fontWeight: 700,
    },
  },
};

const useStyles = makeStyles(
  (theme: Theme) => ({
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
    'heading-xl': theme.typography['heading-xl'],
    'heading-lg': theme.typography['heading-lg'],
    'heading-md': theme.typography['heading-md'],
    'heading-sm': theme.typography['heading-sm'],
    'uppercase-lg': theme.typography['uppercase-lg'],
    'uppercase-md': theme.typography['uppercase-md'],
    'uppercase-sm': theme.typography['uppercase-sm'],
    'label-xl': theme.typography['label-xl'],
    'label-xl-strong': theme.typography['label-xl-strong'],
    'label-lg': theme.typography['label-lg'],
    'label-lg-strong': theme.typography['label-lg-strong'],
    'label-md': theme.typography['label-md'],
    'label-md-strong': theme.typography['label-md-strong'],
    'label-sm': theme.typography['label-sm'],
    'label-sm-strong': theme.typography['label-sm-strong'],
    'paragraph-xl': theme.typography['paragraph-xl'],
    'paragraph-lg': theme.typography['paragraph-lg'],
    'paragraph-md': theme.typography['paragraph-md'],
    'paragraph-sm': theme.typography['paragraph-sm'],
    'code-lg': theme.typography['code-lg'],
    'code-md': theme.typography['code-md'],
    'code-sm': theme.typography['code-sm'],
  }),
  { name: 'SparkTypography' }
);

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
  'label-xl-strong': 'span',
  'label-lg': 'span',
  'label-lg-strong': 'span',
  'label-md': 'span',
  'label-md-strong': 'span',
  'label-sm': 'span',
  'label-sm-strong': 'span',
  'paragraph-xl': 'p',
  'paragraph-lg': 'p',
  'paragraph-md': 'p',
  'paragraph-sm': 'p',
  'code-lg': 'pre',
  'code-md': 'pre',
  'code-sm': 'pre',
};

const Typography: OverridableComponent<TypographyTypeMap> = React.forwardRef(
  function Typography(props, ref) {
    const {
      classes: passedClasses = {},
      variant = 'paragraph-lg',
      color = 'onLight',
      component,
      ...other
    } = props;

    const baseCustomClasses = useStyles();

    // extract custom class keys from passed classes
    //  => produce union of customClasses and extraction
    //     & produce intersection of passed classes and complement of custom classes
    // TODO: once WET, extract to common utility func / hook
    const underlyingClasses: Partial<ClassNameMap<MuiTypographyClassKey>> = {};
    const customClasses: Partial<ClassNameMap<CustomClassKey>> = {
      ...baseCustomClasses,
    };

    for (const [key, value] of Object.entries(passedClasses)) {
      const customValue = customClasses[key];
      if (customValue) {
        customClasses[key] = `${customValue} ${value}`;
      } else {
        underlyingClasses[key] = value;
      }
    }

    return (
      <MuiTypography
        classes={{
          ...underlyingClasses,
          root: clsx(underlyingClasses.root, {
            [customClasses[variant]]: variant !== 'inherit',
            [customClasses[`color${capitalize(color)}`]]: color !== 'initial',
          }),
        }}
        component={component || defaultVariantMapping[variant]}
        ref={ref}
        {...other}
      />
    );
  }
);

export { Typography };
