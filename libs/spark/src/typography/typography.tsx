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
      '& strong, b': {
        fontWeight: 500,
      },
    },
    initial: {}, // to satisfy TS
    inherit: {
      color: 'inherit',
    },
    textOnDark: {
      color: theme.palette.background.darkContrastText,
    },
    textOnDarkLowContrast: {
      color: theme.palette.background.darkLowContrastText,
    },
    textOnLight: {
      color: theme.palette.background.lightContrastText,
    },
    textOnLightLowContrast: {
      color: theme.palette.background.lightLowContrastText,
    },
    tertiaryBlue2: {
      color: theme.palette.tertiary.blue[2],
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
      fontSize: '1rem',
      lineHeight: '1rem',
      letterSpacing: '.1em',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    'smallcaps-md': {
      fontSize: '0.875rem',
      lineHeight: '0.875rem',
      letterSpacing: '.1em',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    'smallcaps-sm': {
      fontSize: '0.75rem',
      lineHeight: '0.75rem',
      letterSpacing: '.1em',
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
    'code-lg': {
      fontFamily:
        '"Source Code Pro", Consolas, "Andale Mono WT", "Lucida Console", Courier, monospace',
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontWeight: 400,
    },
    'code-md': {
      fontFamily:
        '"Source Code Pro", Consolas, "Andale Mono WT", "Lucida Console", Courier, monospace',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 400,
    },
    'code-sm': {
      fontFamily:
        '"Source Code Pro", Consolas, "Andale Mono WT", "Lucida Console", Courier, monospace',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: 400,
    },
  });

export type Variant =
  | 'inherit'
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
  | 'paragraph-sm'
  | 'code-lg'
  | 'code-md'
  | 'code-sm';

export type Color =
  | 'initial'
  | 'inherit'
  | 'textOnDark'
  | 'textOnDarkLowContrast'
  | 'textOnLight'
  | 'textOnLightLowContrast'
  | 'tertiaryBlue2';

type ClassKey = Variant | Color;

const defaultVariantMapping: Partial<Record<Variant, string>> = {
  'display-lg': 'h1',
  'display-md': 'h1',
  'display-sm': 'h1',
  'heading-xxl': 'h2',
  'heading-xl': 'h3',
  'heading-lg': 'h4',
  'heading-md': 'h5',
  'heading-sm': 'h6',
  'smallcaps-lg': 'span',
  'smallcaps-md': 'span',
  'smallcaps-sm': 'span',
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
  variant?: Variant;
  color?: Color;
}

const Typography: React.FC<TypographyProps> = ({
  classes,
  className,
  variant = 'paragraph-lg' as Variant,
  color = 'textOnLight' as Color,
  ...other
}) => {
  return (
    <MuiTypography
      className={clsx(
        classes.root,
        {
          [classes[variant as ClassKey]]: variant !== 'inherit',
          [classes[color as ClassKey]]: color !== 'initial',
        },
        className
      )}
      {...other}
      // @ts-expect-error: Property 'component' does not exist on type
      component={other.component || defaultVariantMapping[variant]}
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
    'code-lg',
    'code-md',
    'code-sm',
  ]),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf<Color>([
    'initial',
    'inherit',
    'textOnDark',
    'textOnDarkLowContrast',
    'textOnLight',
    'textOnLightLowContrast',
    'tertiaryBlue2',
  ]),
};

export default withStyles(styles, {
  name: 'SparkTypography',
})(Typography);
