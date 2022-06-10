import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core/Typography';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import { Unstable_TypographyVariant } from '../theme/unstable_typography';

export interface Unstable_TypographyTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'span'
> {
  props: P &
    Omit<MuiTypographyProps, 'classes' | 'variant' | 'color'> & {
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
      color?: 'initial' | 'inherit' | 'default' | 'inverse';
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

const useStyles = makeStyles<Unstable_TypographyClassKey>(
  (theme) => ({
    root: (props: Unstable_TypographyProps) => ({
      ...(props.variant === 'display' && {
        ...theme.unstable_typography.display,
        color: theme.unstable_palette.text.heading,
        ...(props.color === 'inverse' && {
          color: theme.unstable_palette.text.inverseHeading,
        }),
      }),
      ...(props.variant === 'T32' && {
        ...theme.unstable_typography['T32'],
        color: theme.unstable_palette.text.heading,
        ...(props.color === 'inverse' && {
          color: theme.unstable_palette.text.inverseHeading,
        }),
      }),
      ...(props.variant === 'T28' && {
        ...theme.unstable_typography['T28'],
        color: theme.unstable_palette.text.heading,
        ...(props.color === 'inverse' && {
          color: theme.unstable_palette.text.inverseHeading,
        }),
      }),
      ...(props.variant === 'T22' && {
        ...theme.unstable_typography['T22'],
        color: theme.unstable_palette.text.heading,
        ...(props.color === 'inverse' && {
          color: theme.unstable_palette.text.inverseHeading,
        }),
      }),
      ...(props.variant === 'T18' && {
        ...theme.unstable_typography['T18'],
        color: theme.unstable_palette.text.heading,
        ...(props.color === 'inverse' && {
          color: theme.unstable_palette.text.inverseHeading,
        }),
      }),
      ...(props.variant === 'T14' && {
        ...theme.unstable_typography['T14'],
        color: theme.unstable_palette.text.heading,
        ...(props.color === 'inverse' && {
          color: theme.unstable_palette.text.inverseHeading,
        }),
      }),
      ...(props.variant === 'body' && {
        ...theme.unstable_typography['body'],
        color: theme.unstable_palette.text.body,
        ...(props.color === 'inverse' && {
          color: theme.unstable_palette.text.inverseBody,
        }),
        '& strong, b': {
          fontWeight: 600,
        },
      }),
      ...(props.variant === 'label' && {
        ...theme.unstable_typography['label'],
        color: theme.unstable_palette.text.body,
        ...(props.color === 'inverse' && {
          color: theme.unstable_palette.text.inverseBody,
        }),
      }),
      ...(props.variant === 'description' && {
        ...theme.unstable_typography['description'],
        color: theme.unstable_palette.text.body,
        ...(props.color === 'inverse' && {
          color: theme.unstable_palette.text.inverseBody,
        }),
        '& strong, b': {
          fontWeight: 700,
        },
      }),
      ...(props.variant === 'code' && {
        ...theme.unstable_typography['code'],
        color: theme.unstable_palette.text.body,
        ...(props.color === 'inverse' && {
          color: theme.unstable_palette.text.inverseBody,
        }),
      }),
      // spread last to override any color above
      ...(props.color === 'inherit' && { color: 'inherit' }),
    }),
  }),
  { name: 'MuiSparkUnstable_Typography' }
);

const defaultVariantMapping: Record<Unstable_TypographyVariant, string> = {
  display: 'h1',
  T32: 'h2',
  T28: 'h3',
  T22: 'h4',
  T18: 'h5',
  T14: 'h6',
  body: 'p',
  label: 'span',
  description: 'p',
  code: 'pre',
};

const Unstable_Typography: OverridableComponent<Unstable_TypographyTypeMap> = forwardRef(
  function Unstable_Typography(props, ref) {
    const {
      classes: classesProp,
      variant = 'body',
      color = 'default',
      // @ts-expect-error not picked up as a prop from `OverridableComponent`
      component,
      ...other
    } = props;

    const classes = useStyles({ variant, color });

    return (
      <MuiTypography
        classes={{
          root: clsx(classes.root, classesProp?.root),
        }}
        component={component || defaultVariantMapping[variant]}
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_Typography;
