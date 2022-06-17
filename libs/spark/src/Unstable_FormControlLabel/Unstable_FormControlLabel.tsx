import React, { cloneElement, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiFormControlLabel,
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@material-ui/core/FormControlLabel';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';
import { formControlState, useFormControl } from '../Unstable_FormControl';

export interface Unstable_FormControlLabelProps
  extends Omit<MuiFormControlLabelProps, 'classes'>,
    StyledComponentProps<Unstable_FormControlLabelClassKey> {
  /**
   * If `true`, the label and control should be displayed in an error state.
   */
  error?: boolean;
}

export type Unstable_FormControlLabelClassKey = 'root' | 'label' | 'error';

const useStyles = makeStyles<Unstable_FormControlLabelClassKey>(
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
      ...theme.unstable_typography.body,
      color: theme.unstable_palette.text.body,
      'label:hover > &': {
        textDecoration: 'underline',
      },
      /** error -- can condition on prop but don't to mirror below */
      '$root.Mui-error > &': {
        color: theme.unstable_palette.red[700],
      },
      /** disabled -- can get from internal context => can't condition on prop */
      '$root.Mui-disabled > &': {
        color: theme.unstable_palette.text.disabled,
        textDecoration: 'none',
      },
    },
    error: {},
  }),
  { name: 'MuiSparkUnstable_FormControlLabel' }
);

const Unstable_FormControlLabel = forwardRef<
  unknown,
  Unstable_FormControlLabelProps
>(function Unstable_FormControlLabel(props, ref) {
  const { classes: classesProp, className, control, error, ...other } = props;

  const classes = useStyles();

  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ['error'],
  });

  const controlProps = {};
  ['error'].forEach((key) => {
    if (
      typeof control.props[key] === 'undefined' &&
      typeof props[key] !== 'undefined'
    ) {
      controlProps[key] = props[key];
    }
  });

  return (
    <MuiFormControlLabel
      className={clsx(className, { [classes.error]: error || fcs.error })}
      classes={{
        root: clsx(classes.root, classesProp?.root),
        label: clsx(classes.label, classesProp?.label),
      }}
      control={cloneElement(control, controlProps)}
      ref={ref}
      {...other}
    />
  );
});

export default Unstable_FormControlLabel;
