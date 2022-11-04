import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiLink,
  LinkProps as MuiLinkProps,
} from '@material-ui/core/Link';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles from '../withStyles';

export interface Unstable_LinkTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'a'
> {
  props: P &
    Omit<MuiLinkProps, 'color' | 'classes' | 'underline' | 'variant'> & {
      /**
       * Whether the link is displayed alone (not inline with other text). Removes "underline" text-decoration of the link.
       */
      standalone?: boolean;
      /**
       * The color of the link.
       */
      color?: 'standard' | 'inherit';
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
  | 'private-root-color-inherit'
  | 'private-root-color-standard'
  | 'private-root-variant-alias'
  | 'private-root-variant-standard';

const withClasses = withStyles<Unstable_LinkClassKey | PrivateClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      textDecoration: 'underline',
      '&.Mui-focusVisible, &:focus-visible': {
        boxShadow: `0 0 2px 4px ${theme.unstable_palette.teal[200]}`,
      },
      // reset browser default
      '&:focus': {
        outline: 'none',
      },
    },
    'private-root-standalone': {
      textDecoration: 'none',
    },
    'private-root-color-inherit': { color: 'inherit' },
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
    'private-root-variant-alias': {},
    'private-root-variant-standard': {
      ...theme.unstable_typography.body,
    },
  }),
  { name: 'MuiSparkUnstable_Link' }
);

const Unstable_Link: OverridableComponent<Unstable_LinkTypeMap> = forwardRef(
  function Unstable_Link(props, ref) {
    const {
      classes,
      color = 'standard',
      variant = 'standard',
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

export default withClasses(Unstable_Link) as typeof Unstable_Link;
