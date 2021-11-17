import * as React from 'react';
import clsx from 'clsx';
import {
  default as MuiLink,
  LinkProps as MuiLinkProps,
} from '@material-ui/core/Link';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps, useMergeClasses } from '../utils';

export interface LinkTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'a'
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

export type LinkProps<
  D extends React.ElementType = LinkTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<LinkTypeMap<P, D>, D>;

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

const Link: OverridableComponent<LinkTypeMap> = React.forwardRef(function Link(
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
