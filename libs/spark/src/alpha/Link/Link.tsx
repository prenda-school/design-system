import type { ElementType } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { LinkProps as MuiLinkProps } from '@material-ui/core/Link';
import { default as MuiLink } from '@material-ui/core/Link';
import type { OverridableComponent, OverrideProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface LinkTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'a'
> {
  props: P &
    Omit<MuiLinkProps, 'color' | 'classes' | 'underline' | 'variant'> & {
      /**
       * Whether the link suppresses line breaks (text wrapping).
       */
      nowrap?: boolean;
      /**
       * Whether the link is displayed alone (not inline with other text). Removes "underline" text-decoration of the link.
       */
      standalone?: boolean;
      /**
       * The color of the link.
       */
      color?: 'standard' | 'inverse' | 'inherit';
      /**
       * The variant of the link.
       */
      variant?: 'standard' | 'alias';
    };
  defaultComponent: D;
  classKey: LinkClassKey;
}

export type LinkProps<
  D extends ElementType = LinkTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<LinkTypeMap<P, D>, D>;

export type LinkClassKey = 'root';

type PrivateClassKey =
  | 'private-root-standalone'
  | 'private-root-color-standard'
  | 'private-root-color-inherit'
  | 'private-root-color-inverse'
  | 'private-root-variant-alias'
  | 'private-root-variant-standard'
  | 'private-root-nowrap';

const styles: Styles<LinkClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    textDecoration: 'underline',
    '&.Mui-focusVisible, &:focus-visible': {
      boxShadow: theme.shadows_alpha.focus,
    },
    // reset browser default
    '&:focus': {
      outline: 'none',
    },
    'button&': {
      verticalAlign: 'baseline',
    },
  },
  'private-root-standalone': {
    textDecoration: 'none',
  },
  'private-root-color-inherit': {
    color: 'inherit',
    '&:hover': {
      color: 'inherit',
    },
    '&:visited': {
      color: 'inherit',
      '&:hover': {
        color: 'inherit',
      },
    },
  },
  'private-root-color-inverse': {
    color: theme.palette_alpha.neutral[0],
    '&:hover': {
      color: theme.palette_alpha.neutral[80],
    },
    '&:visited': {
      color: theme.palette_alpha.purple[200],
      '&:hover': {
        color: theme.palette_alpha.purple[100],
      },
    },
  },
  'private-root-color-standard': {
    color: theme.palette_alpha.blue['600'],
    '&:hover': {
      color: theme.palette_alpha.blue['500'],
    },
    '&:visited': {
      color: theme.palette_alpha.purple[600],
      '&:hover': {
        color: theme.palette_alpha.purple[400],
      },
    },
  },
  'private-root-nowrap': {
    whiteSpace: 'nowrap',
  },
  'private-root-variant-alias': {},
  'private-root-variant-standard': {
    ...theme.typography_alpha.body,
  },
});

const Link: OverridableComponent<LinkTypeMap> = forwardRef(function Link(
  props,
  ref
) {
  const {
    classes,
    color = 'standard',
    variant = 'standard',
    nowrap,
    standalone,
    ...other
  } = props;

  return (
    <MuiLink
      classes={{
        root: clsx(
          classes.root,
          classes[`private-root-color-${color}`],
          classes[`private-root-variant-${variant}`],
          {
            [classes[`private-root-nowrap`]]: nowrap,
            [classes[`private-root-standalone`]]: standalone,
          }
        ),
      }}
      underline="none"
      ref={ref}
      {...other}
    />
  );
});

export default withStyles(styles, { name: 'MuiSpark_alpha_Link' })(
  Link
) as typeof Link;
