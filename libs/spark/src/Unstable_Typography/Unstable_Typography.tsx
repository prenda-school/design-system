import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core/Typography';
import { capitalize, OverridableComponent, OverrideProps } from '../utils';
import { Unstable_TypographyVariant } from '../theme/unstable_typography';
import withStyles from '../withStyles';

export interface Unstable_TypographyTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'span'
> {
  props: P &
    Omit<
      MuiTypographyProps,
      'classes' | 'variant' | 'variantMapping' | 'color'
    > & {
      variant?:
        | 'display'
        | 'T32'
        | 'T28'
        | 'T22'
        | 'T18'
        | 'T14'
        | 'body'
        | 'label'
        | 'description'
        | 'code';
      color?: 'inherit' | 'normal' | 'inverse';
    };
  defaultComponent: D;
  classKey: Unstable_TypographyClassKey;
}

export type Unstable_TypographyProps<
  D extends ElementType = Unstable_TypographyTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_TypographyTypeMap<P, D>, D>;

export type Unstable_TypographyClassKey =
  | 'root'
  | 'variantDisplay'
  | 'variantT32'
  | 'variantT28'
  | 'variantT22'
  | 'variantT18'
  | 'variantT14'
  | 'variantBody'
  | 'variantLabel'
  | 'variantDescription'
  | 'variantCode'
  | 'colorNormal'
  | 'colorNormal-variantDisplay'
  | 'colorNormal-variantT32'
  | 'colorNormal-variantT28'
  | 'colorNormal-variantT22'
  | 'colorNormal-variantT18'
  | 'colorNormal-variantT14'
  | 'colorNormal-variantBody'
  | 'colorNormal-variantLabel'
  | 'colorNormal-variantDescription'
  | 'colorNormal-variantCode'
  | 'colorInverse'
  | 'colorInverse-variantDisplay'
  | 'colorInverse-variantT32'
  | 'colorInverse-variantT28'
  | 'colorInverse-variantT22'
  | 'colorInverse-variantT18'
  | 'colorInverse-variantT14'
  | 'colorInverse-variantBody'
  | 'colorInverse-variantLabel'
  | 'colorInverse-variantDescription'
  | 'colorInverse-variantCode';

const variantToComponent: Record<Unstable_TypographyVariant, string> = {
  display: 'span',
  T32: 'span',
  T28: 'span',
  T22: 'span',
  T18: 'span',
  T14: 'span',
  body: 'p',
  label: 'span',
  description: 'p',
  code: 'pre',
};

const Unstable_Typography: OverridableComponent<Unstable_TypographyTypeMap> = forwardRef(
  function Unstable_Typography(props, ref) {
    const {
      classes,
      variant = 'body',
      color = 'normal',
      // @ts-expect-error not picked up as a prop from `OverridableComponent`
      component,
      ...other
    } = props;

    return (
      <MuiTypography
        classes={{
          root: clsx(classes.root, classes[`variant${capitalize(variant)}`], {
            [classes[`color${capitalize(color)}`]]: color !== 'inherit',
            [classes[
              `color${capitalize(color)}-variant${capitalize(variant)}`
            ]]: color !== 'inherit',
          }),
        }}
        component={component || variantToComponent[variant]}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withStyles<Unstable_TypographyClassKey>(
  (theme) => ({
    root: {
      color: 'inherit',
    },
    variantDisplay: {
      ...theme.unstable_typography.display,
    },
    variantT32: {
      ...theme.unstable_typography['T32'],
    },
    variantT28: {
      ...theme.unstable_typography['T28'],
    },
    variantT22: {
      ...theme.unstable_typography['T22'],
    },
    variantT18: {
      ...theme.unstable_typography['T18'],
    },
    variantT14: {
      ...theme.unstable_typography['T14'],
    },
    variantBody: {
      ...theme.unstable_typography['body'],
      '& strong, b': {
        fontWeight: 600,
      },
    },
    variantLabel: {
      ...theme.unstable_typography['label'],
    },
    variantDescription: {
      ...theme.unstable_typography['description'],
      '& strong, b': {
        fontWeight: 700,
      },
    },
    variantCode: {
      ...theme.unstable_typography['code'],
    },
    colorNormal: {},
    'colorNormal-variantDisplay': {
      color: theme.unstable_palette.text.heading,
    },
    'colorNormal-variantT32': {
      color: theme.unstable_palette.text.heading,
    },
    'colorNormal-variantT28': {
      color: theme.unstable_palette.text.heading,
    },
    'colorNormal-variantT22': {
      color: theme.unstable_palette.text.heading,
    },
    'colorNormal-variantT18': {
      color: theme.unstable_palette.text.heading,
    },
    'colorNormal-variantT14': {
      color: theme.unstable_palette.text.heading,
    },
    'colorNormal-variantBody': {
      color: theme.unstable_palette.text.body,
    },
    'colorNormal-variantLabel': {
      color: theme.unstable_palette.text.body,
    },
    'colorNormal-variantDescription': {
      color: theme.unstable_palette.text.body,
    },
    'colorNormal-variantCode': {
      color: theme.unstable_palette.text.body,
    },
    colorInverse: {},
    'colorInverse-variantDisplay': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'colorInverse-variantT32': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'colorInverse-variantT28': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'colorInverse-variantT22': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'colorInverse-variantT18': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'colorInverse-variantT14': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'colorInverse-variantBody': {
      color: theme.unstable_palette.text.inverseBody,
    },
    'colorInverse-variantLabel': {
      color: theme.unstable_palette.text.inverseBody,
    },
    'colorInverse-variantDescription': {
      color: theme.unstable_palette.text.inverseBody,
    },
    'colorInverse-variantCode': {
      color: theme.unstable_palette.text.inverseBody,
    },
  }),
  { name: 'MuiSparkUnstable_Typography' }
)(Unstable_Typography) as typeof Unstable_Typography;
