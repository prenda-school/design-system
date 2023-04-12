import React, { forwardRef, Ref } from 'react';
import clsx from 'clsx';
import {
  default as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import CheckboxIcon from './CheckboxIcon';
import withStyles, { StyledComponentProps } from '../../withStyles';

export interface CheckboxProps
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
    StyledComponentProps<CheckboxClassKey> {
  /**
   * If `true`, the component should be displayed in an error state.
   */
  error?: boolean;
}

export type CheckboxClassKey = 'root' | 'error';

const withClasses = withStyles<CheckboxClassKey>(
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
  { name: 'MuiSpark_alpha_Checkbox' }
);

const Checkbox = forwardRef<unknown, CheckboxProps>(function Checkbox(
  props,
  ref
) {
  const { classes, className, error, ...other } = props;

  return (
    <MuiCheckbox
      checkedIcon={<CheckboxIcon checked />}
      color="default"
      className={clsx(className, { [classes.error]: error })}
      classes={{ root: classes.root }}
      disableFocusRipple
      disableRipple
      disableTouchRipple
      focusRipple={false}
      icon={<CheckboxIcon />}
      indeterminateIcon={<CheckboxIcon indeterminate />}
      ref={ref as Ref<HTMLButtonElement>}
      {...other}
    />
  );
});

export default withClasses(Checkbox) as typeof Checkbox;
