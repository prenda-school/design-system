import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core/Typography';
import { OverridableComponent, OverrideProps } from '../../utils';
import { TypographyVariant } from '../theme/typography';
import withStyles, { Styles } from '../../withStyles';

export interface TypographyTypeMap<
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
  classKey: TypographyClassKey;
}

export type TypographyProps<
  D extends ElementType = TypographyTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<TypographyTypeMap<P, D>, D>;

export type TypographyClassKey = 'root';

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

const styles: Styles<TypographyClassKey | PrivateClassKey> = (theme) => ({
  root: {},
  'private-color-normal': {},
  'private-color-inverse': {},
  'private-color-inherit': {
    color: 'inherit',
  },
  'private-variant-display': {
    ...theme.typography_alpha.display,
  },
  'private-variant-T32': {
    ...theme.typography_alpha['T32'],
  },
  'private-variant-T28': {
    ...theme.typography_alpha['T28'],
  },
  'private-variant-T22': {
    ...theme.typography_alpha['T22'],
  },
  'private-variant-T18': {
    ...theme.typography_alpha['T18'],
  },
  'private-variant-T14': {
    ...theme.typography_alpha['T14'],
  },
  'private-variant-body': {
    ...theme.typography_alpha['body'],
    '& strong, b': {
      fontWeight: 600,
    },
  },
  'private-variant-label': {
    ...theme.typography_alpha['label'],
  },
  'private-variant-description': {
    ...theme.typography_alpha['description'],
    '& strong, b': {
      fontWeight: 700,
    },
  },
  'private-variant-code': {
    ...theme.typography_alpha['code'],
  },
  'private-color-normal-variant-display': {
    color: theme.palette_alpha.text.heading,
  },
  'private-color-normal-variant-T32': {
    color: theme.palette_alpha.text.heading,
  },
  'private-color-normal-variant-T28': {
    color: theme.palette_alpha.text.heading,
  },
  'private-color-normal-variant-T22': {
    color: theme.palette_alpha.text.heading,
  },
  'private-color-normal-variant-T18': {
    color: theme.palette_alpha.text.heading,
  },
  'private-color-normal-variant-T14': {
    color: theme.palette_alpha.text.heading,
  },
  'private-color-normal-variant-body': {
    color: theme.palette_alpha.text.body,
  },
  'private-color-normal-variant-label': {
    color: theme.palette_alpha.text.body,
  },
  'private-color-normal-variant-description': {
    color: theme.palette_alpha.text.body,
  },
  'private-color-normal-variant-code': {
    color: theme.palette_alpha.text.body,
  },
  'private-color-inverse-variant-display': {
    color: theme.palette_alpha.text.inverseHeading,
  },
  'private-color-inverse-variant-T32': {
    color: theme.palette_alpha.text.inverseHeading,
  },
  'private-color-inverse-variant-T28': {
    color: theme.palette_alpha.text.inverseHeading,
  },
  'private-color-inverse-variant-T22': {
    color: theme.palette_alpha.text.inverseHeading,
  },
  'private-color-inverse-variant-T18': {
    color: theme.palette_alpha.text.inverseHeading,
  },
  'private-color-inverse-variant-T14': {
    color: theme.palette_alpha.text.inverseHeading,
  },
  'private-color-inverse-variant-body': {
    color: theme.palette_alpha.text.inverseBody,
  },
  'private-color-inverse-variant-label': {
    color: theme.palette_alpha.text.inverseBody,
  },
  'private-color-inverse-variant-description': {
    color: theme.palette_alpha.text.inverseBody,
  },
  'private-color-inverse-variant-code': {
    color: theme.palette_alpha.text.inverseBody,
  },
});

const variantToComponent: Record<TypographyVariant, string> = {
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

const Typography: OverridableComponent<TypographyTypeMap> = forwardRef(
  function Typography(props, ref) {
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

export default withStyles(styles, { name: 'MuiSpark_alpha_Typography' })(
  Typography
) as typeof Typography;
