import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core/Typography';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import { TypographyVariant } from '../theme/typography';

export interface TypographyTypeMap<
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
  classKey: TypographyClassKey;
}

export type TypographyProps<
  D extends ElementType = TypographyTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<TypographyTypeMap<P, D>, D>;

export type TypographyClassKey = 'root';

const useStyles = makeStyles<TypographyClassKey>(
  (theme) => ({
    root: (props: TypographyProps) => ({
      /* variant & color */
      ...(props.variant === 'display' && {
        ...theme.typography.display,
        color: theme.palette.text.heading,
        ...(props.color === 'inverse' && {
          color: theme.palette.text.inverseHeading,
        }),
      }),
      ...(props.variant === 'T32' && {
        ...theme.typography['T32'],
        color: theme.palette.text.heading,
        ...(props.color === 'inverse' && {
          color: theme.palette.text.inverseHeading,
        }),
      }),
      ...(props.variant === 'T28' && {
        ...theme.typography['T28'],
        color: theme.palette.text.heading,
        ...(props.color === 'inverse' && {
          color: theme.palette.text.inverseHeading,
        }),
      }),
      ...(props.variant === 'T22' && {
        ...theme.typography['T22'],
        color: theme.palette.text.heading,
        ...(props.color === 'inverse' && {
          color: theme.palette.text.inverseHeading,
        }),
      }),
      ...(props.variant === 'T18' && {
        ...theme.typography['T18'],
        color: theme.palette.text.heading,
        ...(props.color === 'inverse' && {
          color: theme.palette.text.inverseHeading,
        }),
      }),
      ...(props.variant === 'T14' && {
        ...theme.typography['T14'],
        color: theme.palette.text.heading,
        ...(props.color === 'inverse' && {
          color: theme.palette.text.inverseHeading,
        }),
      }),
      ...(props.variant === 'body' && {
        ...theme.typography['body'],
        color: theme.palette.text.body,
        ...(props.color === 'inverse' && {
          color: theme.palette.text.inverseBody,
        }),
        '& strong, b': {
          fontWeight: 600,
        },
      }),
      ...(props.variant === 'label' && {
        ...theme.typography['label'],
        color: theme.palette.text.body,
        ...(props.color === 'inverse' && {
          color: theme.palette.text.inverseBody,
        }),
      }),
      ...(props.variant === 'description' && {
        ...theme.typography['description'],
        color: theme.palette.text.body,
        ...(props.color === 'inverse' && {
          color: theme.palette.text.inverseBody,
        }),
        '& strong, b': {
          fontWeight: 700,
        },
      }),
      ...(props.variant === 'code' && {
        ...theme.typography['code'],
        color: theme.palette.text.body,
        ...(props.color === 'inverse' && {
          color: theme.palette.text.inverseBody,
        }),
      }),
      // spread last to override any color above
      ...(props.color === 'inherit' && { color: 'inherit' }),
    }),
  }),
  { name: 'MuiPDSTypography' }
);

const defaultVariantMapping: Record<TypographyVariant, string> = {
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

const Typography: OverridableComponent<TypographyTypeMap> = forwardRef(
  function Typography(props, ref) {
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

export default Typography;
