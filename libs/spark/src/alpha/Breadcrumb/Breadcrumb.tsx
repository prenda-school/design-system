import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import { OverridableComponent, OverrideProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';
import Link, { LinkClassKey, LinkProps, LinkTypeMap } from '../Link';

export interface BreadcrumbTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = LinkTypeMap['defaultComponent']
> {
  props: P &
    Omit<LinkProps, 'standalone'> & {
      /**
       * Whether the link is displayed alone (not inline with other text). Removes "underline" text-decoration of the link.
       */
      standalone?: boolean;
    };
  defaultComponent: D;
  classKey: BreadcrumbClassKey;
}

export type BreadcrumbProps<
  D extends ElementType = BreadcrumbTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<BreadcrumbTypeMap<P, D>, D>;

export type BreadcrumbClassKey = LinkClassKey;

type PrivateClassKey =
  | 'private-root-color-inverse'
  | 'private-root-color-standard';

const styles: Styles<BreadcrumbClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  'private-root-color-inverse': {
    color: theme.palette_alpha.neutral[0],
    '&:hover': {
      color: theme.palette_alpha.neutral[80],
      textDecoration: 'underline',
    },
    '&:visited': {
      color: theme.palette_alpha.neutral[0],
      '&:hover': {
        color: theme.palette_alpha.neutral[80],
      },
    },
    '&[aria-current="page"]': {
      color: theme.palette_alpha.neutral[0],
      '&:hover': {
        color: theme.palette_alpha.neutral[80],
      },
      '&:visited': {
        color: theme.palette_alpha.neutral[0],
      },
      '&:visited:hover': {
        color: theme.palette_alpha.neutral[80],
      },
    },
  },
  'private-root-color-standard': {
    color: theme.palette_alpha.blue[600],
    '&:visited': {
      color: theme.palette_alpha.blue[600],
      '&:hover': {
        color: theme.palette_alpha.blue[500],
      },
    },
    '&[aria-current="page"]': {
      color: theme.palette_alpha.neutral[600],
      '&:hover': {
        color: theme.palette_alpha.neutral[500],
      },
      '&:visited': {
        color: theme.palette_alpha.neutral[600],
      },
      '&:visited:hover': {
        color: theme.palette_alpha.neutral[500],
      },
    },
  },
});

const UnstyledBreadcrumb: OverridableComponent<BreadcrumbTypeMap> = forwardRef(
  function Breadcrumb(props, ref) {
    const { classes, color = 'standard', ...other } = props;

    return (
      <Link
        classes={{
          root: clsx(classes.root, {
            [classes['private-root-color-inverse']]: color === 'inverse',
            [classes['private-root-color-standard']]: color === 'standard',
          }),
        }}
        underline="none"
        {...other}
        // @ts-expect-error dunno
        ref={ref}
      />
    );
  }
);

const Breadcrumb = withStyles(styles, { name: 'MuiSpark_alpha_Breadcrumb' })(
  UnstyledBreadcrumb
) as typeof UnstyledBreadcrumb;

export default Breadcrumb;
