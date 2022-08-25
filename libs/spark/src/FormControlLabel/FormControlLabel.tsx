import React, { cloneElement, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiFormControlLabel,
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@material-ui/core/FormControlLabel';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';
import { formControlState, useFormControl } from '../FormControl';

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

const useStyles = makeStyles<FormControlLabelClassKey>(
  (theme) => ({
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
      ...theme.typography.body,
      color: theme.palette.text.body,
      'label:hover > &': {
        textDecoration: 'underline',
      },
      /** error -- can condition on prop but don't to mirror below */
      '$root.Mui-error > &': {
        color: theme.palette.red[700],
      },
      /** disabled -- can get from internal context => can't condition on prop */
      '$root.Mui-disabled > &': {
        color: theme.palette.text.disabled,
        textDecoration: 'none',
      },
    },
    error: {},
  }),
  { name: 'MuiPDSFormControlLabel' }
);

const FormControlLabel = forwardRef<unknown, FormControlLabelProps>(
  function FormControlLabel(props, ref) {
    const {
      classes: classesProp,
      className,
      control,
      // underscored props will be processed directly from `props` by `formControlState` below
      error: _error,
      required: _required,
      ...other
    } = props;

    const classes = useStyles();

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
          root: clsx(classes.root, classesProp?.root),
          label: clsx(classes.label, classesProp?.label),
        }}
        control={cloneElement(control, controlProps)}
        ref={ref}
        {...other}
      />
    );
  }
);

export default FormControlLabel;
