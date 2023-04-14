import React, { cloneElement, forwardRef } from 'react';
import clsx from 'clsx';
import type {
  FormControlLabelProps as MuiFormControlLabelProps} from '@material-ui/core/FormControlLabel';
import {
  default as MuiFormControlLabel
} from '@material-ui/core/FormControlLabel';
import { formControlState } from '../FormControl';
import useFormControl from '../useFormControl';
import type { StyledComponentProps, Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface FormControlLabelProps
  extends Omit<MuiFormControlLabelProps, 'classes'>,
    StyledComponentProps<FormControlLabelClassKey> {
  /**
   * If `true`, the label and control should be displayed in an error state.
   */
  error?: boolean;
  /**
   * If `true`, the control element will be required.
   */
  required?: boolean;
}

export type FormControlLabelClassKey = 'root' | 'label' | 'error';

const styles: Styles<FormControlLabelClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    gap: 8,
    marginLeft: 0,
    marginRight: 0,
    // Reset PDS v1
    height: 'unset',
    marginTop: 0,
    marginBottom: 0,
  },
  /* Styles applied to the label element. */
  label: {
    ...theme.typography_alpha.body,
    color: theme.palette_alpha.text.body,
    'label:hover > &': {
      textDecoration: 'underline',
    },
    /* error */
    '$root.Mui-error > &': {
      color: theme.palette_alpha.red[700],
    },
    /* disabled -- can get from internal context => can't condition on prop */
    '$root.Mui-disabled > &': {
      color: theme.palette_alpha.text.disabled,
      textDecoration: 'none',
    },
  },
  error: {},
});

const FormControlLabel = forwardRef<unknown, FormControlLabelProps>(
  function FormControlLabel(props, ref) {
    const {
      classes,
      className,
      control,
      // underscored props will be processed directly from `props` by `formControlState` below
      error: _error,
      required: _required,
      ...other
    } = props;

    const fc = useFormControl();
    const fcs = formControlState({
      props,
      muiFormControl: fc,
      states: ['error', 'required'],
    });

    const controlProps = {};
    ['error', 'required'].forEach((key) => {
      if (
        typeof control.props[key] === 'undefined' &&
        typeof fcs[key] !== 'undefined'
      ) {
        controlProps[key] = fcs[key];
      }
    });

    return (
      <MuiFormControlLabel
        className={clsx({ [classes.error]: fcs.error }, className)}
        classes={{
          root: classes.root,
          label: classes.label,
        }}
        control={cloneElement(control, controlProps)}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withStyles(styles, {
  name: 'MuiSpark_alpha_FormControlLabel',
})(FormControlLabel) as typeof FormControlLabel;
