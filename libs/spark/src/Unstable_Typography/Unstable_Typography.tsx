import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core/Typography';
import { OverridableComponent, OverrideProps } from '../utils';
import makeStyles from '../makeStyles';
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
  | 'color-inherit'
  | 'color-normal'
  | 'color-inverse'
  | 'variant-display'
  | 'variant-T32'
  | 'variant-T28'
  | 'variant-T22'
  | 'variant-T18'
  | 'variant-T14'
  | 'variant-body'
  | 'variant-label'
  | 'variant-description'
  | 'variant-code'
  | 'color-normal-variant-display'
  | 'color-normal-variant-T32'
  | 'color-normal-variant-T28'
  | 'color-normal-variant-T22'
  | 'color-normal-variant-T18'
  | 'color-normal-variant-T14'
  | 'color-normal-variant-body'
  | 'color-normal-variant-label'
  | 'color-normal-variant-description'
  | 'color-normal-variant-code'
  | 'color-inverse-variant-display'
  | 'color-inverse-variant-T32'
  | 'color-inverse-variant-T28'
  | 'color-inverse-variant-T22'
  | 'color-inverse-variant-T18'
  | 'color-inverse-variant-T14'
  | 'color-inverse-variant-body'
  | 'color-inverse-variant-label'
  | 'color-inverse-variant-description'
  | 'color-inverse-variant-code';

const usePrivateStyles = makeStyles<PrivateClassKey>(
  (theme) => ({
    'color-normal': {},
    'color-inverse': {},
    'color-inherit': {
      color: 'inherit',
    },
    'variant-display': {
      ...theme.unstable_typography.display,
    },
    'variant-T32': {
      ...theme.unstable_typography['T32'],
    },
    'variant-T28': {
      ...theme.unstable_typography['T28'],
    },
    'variant-T22': {
      ...theme.unstable_typography['T22'],
    },
    'variant-T18': {
      ...theme.unstable_typography['T18'],
    },
    'variant-T14': {
      ...theme.unstable_typography['T14'],
    },
    'variant-body': {
      ...theme.unstable_typography['body'],
      '& strong, b': {
        fontWeight: 600,
      },
    },
    'variant-label': {
      ...theme.unstable_typography['label'],
    },
    'variant-description': {
      ...theme.unstable_typography['description'],
      '& strong, b': {
        fontWeight: 700,
      },
    },
    'variant-code': {
      ...theme.unstable_typography['code'],
    },
    'color-normal-variant-display': {
      color: theme.unstable_palette.text.heading,
    },
    'color-normal-variant-T32': {
      color: theme.unstable_palette.text.heading,
    },
    'color-normal-variant-T28': {
      color: theme.unstable_palette.text.heading,
    },
    'color-normal-variant-T22': {
      color: theme.unstable_palette.text.heading,
    },
    'color-normal-variant-T18': {
      color: theme.unstable_palette.text.heading,
    },
    'color-normal-variant-T14': {
      color: theme.unstable_palette.text.heading,
    },
    'color-normal-variant-body': {
      color: theme.unstable_palette.text.body,
    },
    'color-normal-variant-label': {
      color: theme.unstable_palette.text.body,
    },
    'color-normal-variant-description': {
      color: theme.unstable_palette.text.body,
    },
    'color-normal-variant-code': {
      color: theme.unstable_palette.text.body,
    },
    'color-inverse-variant-display': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'color-inverse-variant-T32': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'color-inverse-variant-T28': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'color-inverse-variant-T22': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'color-inverse-variant-T18': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'color-inverse-variant-T14': {
      color: theme.unstable_palette.text.inverseHeading,
    },
    'color-inverse-variant-body': {
      color: theme.unstable_palette.text.inverseBody,
    },
    'color-inverse-variant-label': {
      color: theme.unstable_palette.text.inverseBody,
    },
    'color-inverse-variant-description': {
      color: theme.unstable_palette.text.inverseBody,
    },
    'color-inverse-variant-code': {
      color: theme.unstable_palette.text.inverseBody,
    },
  }),
  { name: 'MuiSparkPrivate-Typography' }
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

    const privateClasses = usePrivateStyles();

    return (
      <MuiTypography
        classes={{
          root: clsx(
            classes.root,
            privateClasses[`color-${color}`],
            privateClasses[`variant-${variant}`],
            privateClasses[`color-${color}-variant-${variant}`]
          ),
        }}
        component={component || variantToComponent[variant]}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withStyles<Unstable_TypographyClassKey>(
  { root: {} },
  { name: 'MuiSparkUnstable_Typography' }
)(Unstable_Typography) as typeof Unstable_Typography;
