import * as React from 'react';
import {
  default as MuiBreadcrumbs,
  BreadcrumbsClassKey,
  BreadcrumbsProps,
  BreadcrumbsTypeMap,
} from '@material-ui/core/Breadcrumbs';
import makeStyles from '../makeStyles';
import { OverridableComponent, useMergeClasses } from '../utils';
import { ArrowRight } from '../internal';

export type { BreadcrumbsClassKey, BreadcrumbsProps, BreadcrumbsTypeMap };

const useStyles = makeStyles<BreadcrumbsClassKey>(
  ({ palette }) => ({
    root: {},
    ol: {},
    li: {
      '& [class*=MuiSparkLink-root]': {
        textDecoration: 'none',
        '&[aria-current="page"]': {
          color: palette.text.dark,
          fontWeight: 600,
          textDecoration: 'underline',
          '&:hover, &:focus-visible, &.Mui-focusVisible': {
            color: palette.blue[3],
          },
        },
      },
    },
    separator: {
      color: palette.blue[3],
      marginBottom: 2,
      marginLeft: 12,
      marginRight: 12,
    },
  }),
  { name: 'MuiSparkBreadcrumbs' }
);

const Breadcrumbs: OverridableComponent<BreadcrumbsTypeMap> = React.forwardRef(
  function Breadcrumbs(
    { classes: classesProp, separator = <ArrowRight />, ...other },
    ref
  ) {
    const baseClasses = useStyles();

    const classes = useMergeClasses({ baseClasses, classesProp });

    return (
      <MuiBreadcrumbs
        classes={classes}
        separator={separator}
        ref={ref}
        {...other}
      />
    );
  }
);

export default Breadcrumbs;
