import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core/Typography';
import { OverridableComponent, OverrideProps } from '../utils';
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

export type Unstable_TypographyClassKey = 'root';

type PrivateClassKey =
  | 'private-color-inherit'
  | 'private-color-normal'
  | 'private-color-inverse'
  | 'private-variant-display'
  | 'private-variant-T32'
  | 'private-variant-T28'
  | 'private-variant-T22'
  | 'private-variant-T18'
  | 'private-variant-T14'
  | 'private-variant-body'
  | 'private-variant-label'
  | 'private-variant-description'
  | 'private-variant-code'
  | 'private-color-normal-variant-display'
  | 'private-color-normal-variant-T32'
  | 'private-color-normal-variant-T28'
  | 'private-color-normal-variant-T22'
  | 'private-color-normal-variant-T18'
  | 'private-color-normal-variant-T14'
  | 'private-color-normal-variant-body'
  | 'private-color-normal-variant-label'
  | 'private-color-normal-variant-description'
  | 'private-color-normal-variant-code'
  | 'private-color-inverse-variant-display'
  | 'private-color-inverse-variant-T32'
  | 'private-color-inverse-variant-T28'
  | 'private-color-inverse-variant-T22'
  | 'private-color-inverse-variant-T18'
  | 'private-color-inverse-variant-T14'
  | 'private-color-inverse-variant-body'
  | 'private-color-inverse-variant-label'
  | 'private-color-inverse-variant-description'
  | 'private-color-inverse-variant-code';

const withClasses = withStyles<Unstable_TypographyClassKey | PrivateClassKey>(
  (theme) => ({
    root: {},
    'private-color-normal': {},
    'private-color-inverse': {},
    'private-color-inherit': {
      color: 'inherit',
    },
    'private-variant-display': {
      ...theme.unstable_typography.display,
    },
    'private-variant-T32': {
      ...theme.unstable_typography['T32'],
    },
    'private-variant-T28': {
      ...theme.unstable_typography['T28'],
    },
    'private-variant-T22': {
      ...theme.unstable_typography['T22'],
    },
    'private-variant-T18': {
      ...theme.unstable_typography['T18'],
    },
    'private-variant-T14': {
      ...theme.unstable_typography['T14'],
    },
    'private-variant-body': {
      ...theme.unstable_typography['body'],
      '& strong, b': {
        fontWeight: 600,
      },
    },
    'private-variant-label': {
      ...theme.unstable_typography['label'],
    },
    'private-variant-description': {
      ...theme.unstable_typography['description'],
      '& strong, b': {
        fontWeight: 700,
      },
    },
    'private-variant-code': {
      ...theme.unstable_typography['code'],
    },
    'private-color-normal-variant-display': {
      color: theme.unstable_palette.text.heading,
    },
    'private-color-normal-variant-T32': {
      color: theme.unstable_palette.text.heading,
    },
    'private-color-normal-variant-T28': {
      color: theme.unstable_palette.text.heading,
    },
    'private-color-normal-variant-T22': {
      color: theme.unstable_palette.text.heading,
    },
    'private-color-normal-variant-T18': {
      color: theme.unstable_palette.text.heading,
    },
    'private-color-normal-variant-T14': {
      color: theme.unstable_palette.text.heading,
    },
    'private-color-normal-variant-body': {
      color: theme.unstable_palette.text.body,
    },
    'private-color-normal-variant-label': {
      color: theme.unstable_palette.text.body,
    },
    'private-color-normal-variant-description': {
      color: theme.unstable_palette.text.body,
    },
    'private-color-normal-variant-code': {
      color: theme.unstable_palette.text.body,
    },
    'private-color-inverse-variant-display': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'private-color-inverse-variant-T32': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'private-color-inverse-variant-T28': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'private-color-inverse-variant-T22': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'private-color-inverse-variant-T18': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'private-color-inverse-variant-T14': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'private-color-inverse-variant-body': {
      color: theme.unstable_palette.text.inverseBody,
    },
    'private-color-inverse-variant-label': {
      color: theme.unstable_palette.text.inverseBody,
    },
    'private-color-inverse-variant-description': {
      color: theme.unstable_palette.text.inverseBody,
    },
    'private-color-inverse-variant-code': {
      color: theme.unstable_palette.text.inverseBody,
    },
  }),
  { name: 'MuiSparkUnstable_Typography' }
);

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
          root: clsx(
            classes.root,
            classes[`private-color-${color}`],
            classes[`private-variant-${variant}`],
            classes[`private-color-${color}-variant-${variant}`]
          ),
        }}
        component={component || variantToComponent[variant]}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withClasses(Unstable_Typography) as typeof Unstable_Typography;
