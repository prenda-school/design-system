import React, { ElementType, forwardRef } from 'react';
import MuiFormControl, {
  FormControlProps as MuiFormControlProps,
} from '@material-ui/core/FormControl';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';

export interface FormControlTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P &
    Omit<
      MuiFormControlProps,
      'classes' | 'color' | 'hiddenLabel' | 'margin' | 'size' | 'variant'
    >;
  defaultComponent: D;
  classKey: FormControlClassKey;
}

export type FormControlProps<
  D extends ElementType = FormControlTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<FormControlTypeMap<P, D>, D>;

export type FormControlClassKey = 'root';

const useStyles = makeStyles<FormControlClassKey>(
  {
    /** Styles applied to the root element. */
    root: {
      gap: 8,
    },
  },
  { name: 'MuiPDSFormControl' }
);

const FormControl: OverridableComponent<FormControlTypeMap> = forwardRef(
  function FormControl(props, ref) {
    const { classes: classesProp, color: _color, ...other } = props;

    const classes = useStyles();

    return (
      <MuiFormControl
        classes={{ root: clsx(classes.root, classesProp?.root) }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default FormControl;
