import React from 'react';
import PropTypes from 'prop-types';
import {
  WithStyles,
  withStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core/Typography';
import clsx from 'clsx';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.background.lightContrastText,
      '& strong, b': {
        fontWeight: 500,
      },
    },
    'display-lg': {
      fontSize: '4rem',
      lineHeight: '4rem',
      fontWeight: 700,
    },
    'display-md': {
      fontSize: '3.5rem',
      lineHeight: '3.5rem',
      fontWeight: 700,
    },
    'display-sm': {
      fontSize: '3rem',
      lineHeight: '3rem',
      fontWeight: 700,
    },
    'heading-xxl': {
      fontSize: '2.5rem',
      lineHeight: '2.5rem',
      fontWeight: 500,
    },
    'heading-xl': {
      fontSize: '2.125rem',
      lineHeight: '2.125rem',
      fontWeight: 500,
    },
    'heading-lg': {
      fontSize: '1.75rem',
      lineHeight: '1.875rem',
      fontWeight: 500,
    },
    'heading-md': {
      fontSize: '1.5rem',
      lineHeight: '1.625rem',
      fontWeight: 500,
    },
    'heading-sm': {
      fontSize: '1.25rem',
      lineHeight: '1.375rem',
      fontWeight: 500,
    },
    'smallcaps-lg': {
      fontFamily: '"Founders Grotesk Condensed"',
      fontSize: '1rem',
      lineHeight: '1rem',
      letterSpacing: '.1rem',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    'smallcaps-md': {
      fontFamily: '"Founders Grotesk Condensed"',
      fontSize: '0.875rem',
      lineHeight: '0.875rem',
      letterSpacing: '.1rem',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    'smallcaps-sm': {
      fontFamily: '"Founders Grotesk Condensed"',
      fontSize: '0.75rem',
      lineHeight: '0.75rem',
      letterSpacing: '.1rem',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    'label-xl': {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      fontWeight: 400,
    },
    'label-lg': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 400,
    },
    'label-md': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: 400,
    },
    'label-sm': {
      fontSize: '0.75rem',
      lineHeight: '1.25rem',
      fontWeight: 400,
    },
    'paragraph-xl': {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontWeight: 400,
    },
    'paragraph-lg': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 400,
    },
    'paragraph-md': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: 400,
    },
    'paragraph-sm': {
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      fontWeight: 400,
    },
  });

export type Variant =
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'heading-xxl'
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'smallcaps-lg'
  | 'smallcaps-md'
  | 'smallcaps-sm'
  | 'label-xl'
  | 'label-lg'
  | 'label-md'
  | 'label-sm'
  | 'paragraph-xl'
  | 'paragraph-lg'
  | 'paragraph-md'
  | 'paragraph-sm';

export interface TypographyProps
  extends WithStyles<typeof styles>,
    Omit<MuiTypographyProps, 'variant' | 'classes'> {
  variant?: Variant;
}

const Typography = ({
  classes,
  className,
  variant = 'paragraph-lg' as Variant,
  ...other
}: TypographyProps) => {
  return (
    <MuiTypography
      className={clsx(classes.root, classes[variant], className)}
      {...other}
    />
  );
};

Typography.propTypes = {
  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf<Variant>([
    'display-lg',
    'display-md',
    'display-sm',
    'heading-xxl',
    'heading-xl',
    'heading-lg',
    'heading-md',
    'heading-sm',
    'smallcaps-lg',
    'smallcaps-md',
    'smallcaps-sm',
    'label-xl',
    'label-lg',
    'label-md',
    'label-sm',
    'paragraph-xl',
    'paragraph-lg',
    'paragraph-md',
    'paragraph-sm',
  ]),
};

export default withStyles(styles, {
  name: 'SparkTypography',
})(Typography);
