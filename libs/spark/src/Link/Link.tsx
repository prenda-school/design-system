import type { ElementType } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { LinkProps as MuiLinkProps } from '@material-ui/core/Link';
import { default as MuiLink } from '@material-ui/core/Link';
import makeStyles from '../makeStyles';
import type { OverridableComponent, OverrideProps } from '../utils';
import { useMergeClasses } from '../utils';

/** @deprecated */
export interface LinkTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'a'
> {
  props: P &
    Omit<MuiLinkProps, 'classes' | 'underline'> & {
      /**
       * Whether the link is displayed alone (not inline with other text). Removes "underline" text-decoration of the link.
       */
      standalone?: boolean;
    };
  defaultComponent: D;
  classKey: LinkClassKey;
}

/** @deprecated */
export type LinkProps<
  D extends ElementType = LinkTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<LinkTypeMap<P, D>, D>;

/** @deprecated */
export type LinkClassKey = 'root' | 'standalone' | 'focusVisible';

const useStyles = makeStyles<LinkClassKey>(
  ({ palette }) => ({
    /* Styles applied to the root element. */
    root: {
      textDecoration: 'underline',
      color: palette.blue[3],
      '&:hover': {
        color: palette.blue[2],
      },
      // reset browser default
      '&:focus': {
        outline: 'none',
      },
      '&$focusVisible, &:focus-visible': {
        color: palette.blue[2],
        boxShadow: `0 0 0 4px ${palette.blue[1]}`,
      },
      '&:visited': {
        color: palette.purple[3],
        '&:hover': {
          color: palette.purple[2],
        },
      },
    },
    /* Styles applied to the root element if `standalone={true}`. */
    standalone: {
      textDecoration: 'none',
    },
    /* Pseudo-class applied to the root element if the link is keyboard focused. */
    focusVisible: {},
  }),
  { name: 'MuiSparkLink' }
);

/** @deprecated */
const Link: OverridableComponent<LinkTypeMap> = forwardRef(function Link(
  {
    classes: classesProp,
    // reset MuiLink default prop to match our Typography default
    color = 'inherit',
    standalone,
    ...other
  },
  ref
) {
  const baseClasses = useStyles();

  // Should use classes capture, but this extra work is menial.
  const { standalone: standaloneClass, ...otherClasses } = useMergeClasses({
    baseClasses,
    classesProp,
  });

  return (
    <MuiLink
      classes={{
        ...otherClasses,
        root: clsx(otherClasses.root, { [standaloneClass]: standalone }),
      }}
      color={color}
      underline="none"
      ref={ref}
      {...other}
    />
  );
});

export default Link;
