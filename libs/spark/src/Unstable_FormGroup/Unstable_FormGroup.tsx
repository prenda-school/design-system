import React, { forwardRef } from 'react';
import MuiFormGroup, {
  FormGroupProps as MuiFormGroupProps,
} from '@material-ui/core/FormGroup';
import withStyles, { StyledComponentProps } from '../withStyles';

export interface Unstable_FormGroupProps
  extends Omit<MuiFormGroupProps, 'classes'>,
    StyledComponentProps<Unstable_FormGroupClassKey> {}

export type Unstable_FormGroupClassKey = 'root';

const withClasses = withStyles<Unstable_FormGroupClassKey>(
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
    return <MuiFormGroup ref={ref} {...props} />;
  }
);

export default withClasses(Unstable_FormGroup) as typeof Unstable_FormGroup;
