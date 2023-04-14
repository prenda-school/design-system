import type { ElementType, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type {
  TypographyClassKey as MuiTypographyClassKey,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core/Typography';
import { default as MuiTypography } from '@material-ui/core/Typography';
import makeStyles from '../makeStyles';
import type { SparkVariant } from '../theme/typography';
import type { OverrideProps } from '../utils';
import { capitalize, useClassesCapture } from '../utils';

export interface TypographyTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'span'
> {
  props: P &
    Omit<MuiTypographyProps, 'classes' | 'variant' | 'color'> & {
      variant?: SparkVariant | 'inherit';
      color?: 'initial' | 'inherit' | 'dark' | 'light';
      lowContrast?: boolean;
    };
  defaultComponent: D;
  classKey: TypographyClassKey;
}

export type TypographyProps<
  D extends ElementType = TypographyTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<TypographyTypeMap<P, D>, D>;

export type TypographyClassKey = MuiTypographyClassKey | CustomClassKey;

type CustomClassKey =
  // from underlying
  | 'root'
  | 'colorInitial'
  | 'colorInherit'
  // custom
  | SparkVariant
  | 'colorLight'
  | 'colorDark'
  | 'lowContrast';

const useCustomStyles = makeStyles<CustomClassKey>(
  ({ palette, typography }) => ({
    root: {
      '& strong, b': {
        fontWeight: 700,
      },
    },
    colorInitial: {},
    colorInherit: {
      color: 'inherit',
    },
    colorDark: {
      color: palette.text.dark,
    },
    colorLight: {
      color: palette.text.light,
    },
    lowContrast: {
      '&$colorDark': {
        color: palette.text.darkLowContrast,
      },
      '&$colorLight': {
        color: palette.text.lightLowContrast,
      },
    },
    'display-lg': typography['display-lg'],
    'display-md': typography['display-md'],
    'display-sm': typography['display-sm'],
    'heading-xl': typography['heading-xl'],
    'heading-lg': typography['heading-lg'],
    'heading-md': typography['heading-md'],
    'heading-sm': typography['heading-sm'],
    'uppercase-lg': typography['uppercase-lg'],
    'uppercase-md': typography['uppercase-md'],
    'uppercase-sm': typography['uppercase-sm'],
    'label-xl': typography['label-xl'],
    'label-xl-strong': typography['label-xl-strong'],
    'label-lg': typography['label-lg'],
    'label-lg-strong': typography['label-lg-strong'],
    'label-md': typography['label-md'],
    'label-md-strong': typography['label-md-strong'],
    'label-sm': typography['label-sm'],
    'label-sm-strong': typography['label-sm-strong'],
    'paragraph-xl': typography['paragraph-xl'],
    'paragraph-lg': typography['paragraph-lg'],
    'paragraph-md': typography['paragraph-md'],
    'paragraph-sm': typography['paragraph-sm'],
    'code-lg': typography['code-lg'],
    'code-md': typography['code-md'],
    'code-sm': typography['code-sm'],
  }),
  { name: 'MuiSparkTypography' }
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

const Typography = forwardRef(function Typography<
  D extends ElementType = TypographyTypeMap['defaultComponent']
>(
  {
    classes,
    variant = 'paragraph-lg',
    color = 'inherit',
    lowContrast,
    component,
    ...other
  }: TypographyProps<D>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: ForwardedRef<any>
) {
  const baseCustomClasses = useCustomStyles();

  const { otherClasses, customClasses } = useClassesCapture<
    TypographyClassKey,
    CustomClassKey
  >({
    baseCustomClasses,
    classes,
  });

  return (
    <MuiTypography
      classes={{
        ...otherClasses,
        root: clsx(customClasses.root, {
          [customClasses[variant]]: variant !== 'inherit',
          [customClasses[`color${capitalize(color)}`]]: color !== 'initial',
          [customClasses.lowContrast]: lowContrast,
        }),
      }}
      component={component || defaultVariantMapping[variant]}
      ref={ref}
      {...other}
    />
  );
});

export default Typography;
