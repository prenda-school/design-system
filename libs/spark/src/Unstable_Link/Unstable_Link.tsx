import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiLink,
  LinkProps as MuiLinkProps,
} from '@material-ui/core/Link';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';

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

const useStyles = makeStyles<Unstable_LinkClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: (props: Unstable_LinkProps) => ({
      textDecoration: 'underline',
      '&.Mui-focusVisible, &:focus-visible': {
        boxShadow: `0 0 2px 4px ${theme.unstable_palette.teal[200]}`,
      },
      /* standalone */
      ...(props.standalone && {
        textDecoration: 'none',
      }),
      /* color */
      ...(props.color === 'standard' && {
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
      }),
      ...(props.color === 'inherit' && { color: 'inherit' }),
      /* variant */
      ...(props.variant === 'standard' && {
        ...theme.unstable_typography.body,
      }),
      // reset browser default
      '&:focus': {
        outline: 'none',
      },
    }),
  }),
  { name: 'MuiSparkUnstable_Link' }
);

const Unstable_Link: OverridableComponent<Unstable_LinkTypeMap> = forwardRef(
  function Unstable_Link(props, ref) {
    const {
      classes: classesProp,
      color = 'standard',
      variant = 'standard',
      standalone,
      ...other
    } = props;

    const classes = useStyles({ color, variant, standalone });

    return (
      <MuiLink
        classes={{
          root: clsx(classes.root, classesProp?.root),
        }}
        underline="none"
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_Link;
