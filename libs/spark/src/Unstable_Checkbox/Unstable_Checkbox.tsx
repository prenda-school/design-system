import * as React from 'react';
import clsx from 'clsx';
import {
  default as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';
import Unstable_CheckboxIcon from './Unstable_CheckboxIcon';

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
    StyledComponentProps<Unstable_CheckboxClassKey> {}

export type Unstable_CheckboxClassKey = 'root';

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
  },
  { name: 'MuiSparkUnstable_Checkbox' }
);

const Unstable_Checkbox = React.forwardRef<
  HTMLButtonElement,
  Unstable_CheckboxProps
>(function Unstable_Checkbox(props, ref) {
  const { classes: classesProp, ...other } = props;

  const classes = useStyles();

  return (
    <MuiCheckbox
      checkedIcon={<Unstable_CheckboxIcon checked />}
      color="default"
      classes={{
        root: clsx(classes.root, classesProp?.root),
      }}
      disableFocusRipple
      disableRipple
      disableTouchRipple
      focusRipple={false}
      icon={<Unstable_CheckboxIcon />}
      indeterminateIcon={<Unstable_CheckboxIcon indeterminate />}
      ref={ref}
      {...other}
    />
  );
});

export default Unstable_Checkbox;
