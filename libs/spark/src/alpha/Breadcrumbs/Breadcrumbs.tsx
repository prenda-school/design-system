import type { ElementType } from 'react';
import React, { forwardRef } from 'react';
import type {
  BreadcrumbsClassKey as MuiBreadcrumbsClassKey,
  BreadcrumbsProps as MuiBreadcrumbsProps,
  BreadcrumbsTypeMap as MuiBreadcrumbsTypeMap,
} from '@material-ui/core/Breadcrumbs';
import { default as MuiBreadcrumbs } from '@material-ui/core/Breadcrumbs';
import type { OverridableComponent, OverrideProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';
import createSvgIcon from '../createSvgIcon/createSvgIcon';

export interface BreadcrumbsTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = MuiBreadcrumbsTypeMap['defaultComponent']
> {
  props: P & MuiBreadcrumbsProps;
  defaultComponent: D;
  classKey: BreadcrumbsClassKey;
}

export type BreadcrumbsProps<
  D extends ElementType = BreadcrumbsTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<BreadcrumbsTypeMap<P, D>, D>;

type BreadcrumbsClassKey = MuiBreadcrumbsClassKey;

const styles: Styles<BreadcrumbsClassKey> = (theme) => ({
  root: {},
  ol: {},
  li: {},
  separator: {
    color: theme.palette_alpha.blue[600],
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
    marginLeft: 12,
    marginRight: 12,
    height: 12,
    width: 12,
  },
});

const UnstyledBreadcrumbs: OverridableComponent<BreadcrumbsTypeMap> =
  forwardRef(function Breadcrumbs(props, ref) {
    const { classes, separator = <Separator />, ...other } = props;

    return (
      <MuiBreadcrumbs
        classes={{
          root: classes.root,
          ol: classes.ol,
          li: classes.li,
          separator: classes.separator,
        }}
        separator={separator}
        ref={ref}
        {...other}
      />
    );
  });

const Breadcrumbs = withStyles(styles, {
  name: 'MuiSpark_alpha_Breadcrumbs',
})(UnstyledBreadcrumbs) as typeof UnstyledBreadcrumbs;

export default Breadcrumbs;

const Separator = createSvgIcon(
  <path d="m6.56 12-1.05-1.145 3.645-4.019H0V5.164h9.155L5.51 1.151 6.56 0 12 6l-5.44 6Z" />,
  '0 0 12 12',
  '12',
  '12'
);
