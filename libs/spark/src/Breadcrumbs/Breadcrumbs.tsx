import * as React from 'react';
import {
  default as MuiBreadcrumbs,
  BreadcrumbsClassKey,
  BreadcrumbsProps,
  BreadcrumbsTypeMap,
} from '@material-ui/core/Breadcrumbs';
import makeStyles from '../makeStyles';
import { OverridableComponent, useMergeClasses } from '../utils';
import { ChevronRight } from '../internal';

export type { BreadcrumbsClassKey, BreadcrumbsProps, BreadcrumbsTypeMap };

const useStyles = makeStyles<BreadcrumbsClassKey>(
  ({ palette }) => ({
    root: {},
    ol: {},
    li: {
      '& [class*=MuiSparkLink-root]': {
        fontWeight: 700,
        textDecoration: 'none',
        '&[aria-current="page"]': {
          color: palette.text.dark,
          '&:hover, &:focus-visible, &.Mui-focusVisible': {
            color: palette.blue[3],
          },
        },
      },
    },
    separator: {
      color: palette.text.darkLowContrast,
      fontSize: 24,
      marginLeft: 16,
      marginRight: 16,
    },
  }),
  { name: 'MuiSparkBreadcrumbs' }
);

const Breadcrumbs: OverridableComponent<BreadcrumbsTypeMap> = React.forwardRef(
  function Breadcrumbs(
    { classes: classesProp, separator = <ChevronRight />, ...other },
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
