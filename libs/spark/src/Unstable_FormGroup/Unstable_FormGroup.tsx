import React, { forwardRef } from 'react';
import MuiFormGroup, {
  FormGroupProps as MuiFormGroupProps,
} from '@material-ui/core/FormGroup';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../withStyles';

export interface Unstable_FormGroupProps
  extends Omit<MuiFormGroupProps, 'classes'>,
    StyledComponentProps<Unstable_FormGroupClassKey> {}

export type Unstable_FormGroupClassKey = 'root';

const useStyles = makeStyles<Unstable_FormGroupClassKey>(
  {
    /** Styles applied to the root element. */
    root: {
      columnGap: 32,
      rowGap: 16,
      width: 'fit-content',
    },
  },
  { name: 'MuiSparkUnstable_FormGroup' }
);

const Unstable_FormGroup = forwardRef<unknown, Unstable_FormGroupProps>(
  function Unstable_FormGroup(props, ref) {
    const { classes: classesProp, ...other } = props;

    const classes = useStyles();

    return (
      <MuiFormGroup
        classes={{ root: clsx(classes.root, classesProp?.root) }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_FormGroup;
