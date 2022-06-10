import React, { forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as MuiFormControlLabel,
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@material-ui/core/FormControlLabel';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';

export interface Unstable_FormControlLabelProps
  extends Omit<MuiFormControlLabelProps, 'classes'>,
    StyledComponentProps<Unstable_FormControlLabelClassKey> {}

export type Unstable_FormControlLabelClassKey = 'root' | 'label';

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
    label: (props: Unstable_FormControlLabelProps) => ({
      ...theme.unstable_typography.body,
      color: theme.unstable_palette.neutral[500],
      'label:hover > &': {
        textDecoration: 'underline',
      },
      // triple-specificity to override Mui default and above hover selector,
      '&&&': {
        ...(props.disabled && {
          color: theme.unstable_palette.neutral[100],
          textDecoration: 'none',
        }),
      },
    }),
  }),
  { name: 'MuiSparkUnstable_FormControlLabel' }
);

const Unstable_FormControlLabel = forwardRef<
  HTMLLabelElement,
  Unstable_FormControlLabelProps
>(function Unstable_FormControlLabel(props, ref) {
  const { classes: classesProp, disabled, ...other } = props;

  const classes = useStyles({ disabled });

  return (
    <MuiFormControlLabel
      classes={{
        root: clsx(classes.root, classesProp?.root),
        label: clsx(classes.label, classesProp?.label),
      }}
      disabled={disabled}
      ref={ref}
      {...other}
    />
  );
});

export default Unstable_FormControlLabel;
