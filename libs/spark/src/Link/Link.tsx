import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiLink,
  LinkProps as MuiLinkProps,
} from '@material-ui/core/Link';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';

export interface LinkTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'a'
> {
  props: P &
    Omit<MuiLinkProps, 'color' | 'classes' | 'underline'> & {
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
  classKey: LinkClassKey;
}

export type LinkProps<
  D extends ElementType = LinkTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<LinkTypeMap<P, D>, D>;

export type LinkClassKey = 'root';

const useStyles = makeStyles<LinkClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: (props: LinkProps) => ({
      textDecoration: 'underline',
      '&.Mui-focusVisible, &:focus-visible': {
        boxShadow: `0 0 2px 4px ${theme.palette.teal[200]}`,
      },
      /* standalone */
      ...(props.standalone && {
        textDecoration: 'none',
      }),
      /* color */
      ...(props.color === 'standard' && {
        color: theme.palette.blue['600'],
        '&:hover': {
          color: theme.palette.blue['500'],
        },
        '&:visited': {
          color: theme.palette.purple[600],
          '&:hover': {
            color: theme.palette.purple[400],
          },
        },
      }),
      ...(props.color === 'inherit' && { color: 'inherit' }),
      /* variant */
      ...(props.variant === 'standard' && {
        ...theme.typography.body,
      }),
      // reset browser default
      '&:focus': {
        outline: 'none',
      },
    }),
  }),
  { name: 'MuiPDSLink' }
);

const Link: OverridableComponent<LinkTypeMap> = forwardRef(function Link(
  props,
  ref
) {
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
});

export default Link;
