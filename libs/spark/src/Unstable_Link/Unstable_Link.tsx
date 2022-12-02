import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiLink,
  LinkProps as MuiLinkProps,
} from '@material-ui/core/Link';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_LinkTypeMap<
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
  classKey: Unstable_LinkClassKey;
}

export type Unstable_LinkProps<
  D extends ElementType = Unstable_LinkTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_LinkTypeMap<P, D>, D>;

export type Unstable_LinkClassKey = 'root';

type PrivateClassKey =
  | 'private-root-standalone'
  | 'private-root-color-standard'
  | 'private-root-color-inherit'
  | 'private-root-color-inverse'
  | 'private-root-variant-alias'
  | 'private-root-variant-standard'
  | 'private-root-nowrap';

const styles: Styles<Unstable_LinkClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    textDecoration: 'underline',
    '&.Mui-focusVisible, &:focus-visible': {
      boxShadow: theme.unstable_shadows.focus,
    },
    // reset browser default
    '&:focus': {
      outline: 'none',
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
    color: theme.unstable_palette.neutral[0],
    '&:hover': {
      color: theme.unstable_palette.neutral[80],
    },
    '&:visited': {
      color: theme.unstable_palette.purple[200],
      '&:hover': {
        color: theme.unstable_palette.purple[100],
      },
    },
  },
  'private-root-color-standard': {
    color: theme.unstable_palette.blue['600'],
    '&:hover': {
      color: theme.unstable_palette.blue['500'],
    },
    '&:visited': {
      color: theme.unstable_palette.purple[600],
      '&:hover': {
        color: theme.unstable_palette.purple[400],
      },
    },
  },
  'private-root-nowrap': {
    whiteSpace: 'nowrap',
  },
  'private-root-variant-alias': {},
  'private-root-variant-standard': {
    ...theme.unstable_typography.body,
  },
});

const Unstable_Link: OverridableComponent<Unstable_LinkTypeMap> = forwardRef(
  function Unstable_Link(props, ref) {
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
  }
);

export default withStyles(styles, { name: 'MuiSparkUnstable_Link' })(
  Unstable_Link
) as typeof Unstable_Link;
