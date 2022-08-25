import React, { forwardRef } from 'react';
import MuiFormGroup, {
  FormGroupProps as MuiFormGroupProps,
} from '@material-ui/core/FormGroup';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';

export interface FormGroupProps
  extends Omit<MuiFormGroupProps, 'classes'>,
    StyledComponentProps<FormGroupClassKey> {}

export type FormGroupClassKey = 'root';

const useStyles = makeStyles<FormGroupClassKey>(
  {
    /** Styles applied to the root element. */
    root: {
      columnGap: 32,
      rowGap: 16,
      width: 'fit-content',
    },
  },
  { name: 'MuiPDSFormGroup' }
);

const FormGroup = forwardRef<unknown, FormGroupProps>(function FormGroup(
  props,
  ref
) {
  const { classes: classesProp, ...other } = props;

  const classes = useStyles();

  return (
    <MuiFormGroup
      classes={{ root: clsx(classes.root, classesProp?.root) }}
      ref={ref}
      {...other}
    />
  );
});

export default FormGroup;
