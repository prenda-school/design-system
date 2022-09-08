import React, { forwardRef, Ref } from 'react';
import clsx from 'clsx';
import {
  default as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import makeStyles from '../makeStyles';
import Unstable_CheckboxIcon from './Unstable_CheckboxIcon';
import { StyledComponentProps } from '../withStyles';

export interface Unstable_CheckboxProps
  extends Omit<
      MuiCheckboxProps,
      | 'checkedIcon'
      | 'classes'
      | 'color'
      | 'centerRipple'
      | 'disableRipple'
      | 'disableFocusRipple'
      | 'disableTouchRipple'
      | 'edge'
      | 'focusRipple'
      | 'icon'
      | 'indeterminateIcon'
      | 'size'
      | 'TouchRippleProps'
    >,
    StyledComponentProps<Unstable_CheckboxClassKey> {
  /**
   * If `true`, the component should be displayed in an error state.
   */
  error?: boolean;
}

export type Unstable_CheckboxClassKey = 'root' | 'error';

const useStyles = makeStyles<Unstable_CheckboxClassKey>(
  {
    /* Styles applied to the root element. */
    root: {
      // unset Mui internal IconButton default
      padding: 0,
      backgroundColor: 'unset',
      color: 'unset',
      '&:hover': {
        backgroundColor: 'unset',
        color: 'unset',
      },
    },
    error: {},
  },
  { name: 'MuiSparkUnstable_Checkbox' }
);

const Unstable_Checkbox = forwardRef<unknown, Unstable_CheckboxProps>(
  function Unstable_Checkbox(props, ref) {
    const { classes: classesProp, className, error, ...other } = props;

    const classes = useStyles();

    return (
      <MuiCheckbox
        checkedIcon={<Unstable_CheckboxIcon checked />}
        color="default"
        className={clsx(className, { [classes.error]: error })}
        classes={{
          root: clsx(classes.root, classesProp?.root),
        }}
        disableFocusRipple
        disableRipple
        disableTouchRipple
        focusRipple={false}
        icon={<Unstable_CheckboxIcon />}
        indeterminateIcon={<Unstable_CheckboxIcon indeterminate />}
        ref={ref as Ref<HTMLButtonElement>}
        {...other}
      />
    );
  }
);

export default Unstable_Checkbox;
