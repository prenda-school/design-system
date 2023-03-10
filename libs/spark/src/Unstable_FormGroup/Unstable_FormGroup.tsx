import React, { forwardRef } from 'react';
import MuiFormGroup, {
  FormGroupProps as MuiFormGroupProps,
} from '@material-ui/core/FormGroup';
import withStyles, { StyledComponentProps, Styles } from '../withStyles';

export interface Unstable_FormGroupProps
  extends Omit<MuiFormGroupProps, 'classes'>,
    StyledComponentProps<Unstable_FormGroupClassKey> {}

export type Unstable_FormGroupClassKey = 'root';

const styles: Styles<Unstable_FormGroupClassKey> = {
  /** Styles applied to the root element. */
  root: {
    columnGap: 32,
    rowGap: 16,
  },
};

const Unstable_FormGroup = forwardRef<unknown, Unstable_FormGroupProps>(
  function Unstable_FormGroup(props, ref) {
    return <MuiFormGroup ref={ref} {...props} />;
  }
);

export default withStyles(styles, { name: 'MuiSparkUnstable_FormGroup' })(
  Unstable_FormGroup
) as typeof Unstable_FormGroup;
