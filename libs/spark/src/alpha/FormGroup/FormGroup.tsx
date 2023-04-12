import React, { forwardRef } from 'react';
import MuiFormGroup, {
  FormGroupProps as MuiFormGroupProps,
} from '@material-ui/core/FormGroup';
import withStyles, { StyledComponentProps, Styles } from '../../withStyles';

export interface FormGroupProps
  extends Omit<MuiFormGroupProps, 'classes'>,
    StyledComponentProps<FormGroupClassKey> {}

export type FormGroupClassKey = 'root';

const styles: Styles<FormGroupClassKey> = {
  /** Styles applied to the root element. */
  root: {
    columnGap: 32,
    rowGap: 16,
  },
};

const FormGroup = forwardRef<unknown, FormGroupProps>(function FormGroup(
  props,
  ref
) {
  return <MuiFormGroup ref={ref} {...props} />;
});

export default withStyles(styles, { name: 'MuiSpark_alpha_FormGroup' })(
  FormGroup
) as typeof FormGroup;
