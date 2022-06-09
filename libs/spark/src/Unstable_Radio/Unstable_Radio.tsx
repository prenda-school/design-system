import * as React from 'react';
import clsx from 'clsx';
import {
  default as MuiRadio,
  RadioProps as MuiRadioProps,
} from '@material-ui/core/Radio';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';
import Unstable_RadioIcon from './Unstable_RadioIcon';

export interface Unstable_RadioProps
  extends Omit<
      MuiRadioProps,
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
      | 'size'
      | 'TouchRippleProps'
    >,
    StyledComponentProps<Unstable_RadioClassKey> {}

export type Unstable_RadioClassKey = 'root';

const useStyles = makeStyles<Unstable_RadioClassKey>(
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
      // unset PDS v1
      margin: 0,
    },
  },
  { name: 'MuiSparkUnstable_Radio' }
);

const Unstable_Radio = React.forwardRef<HTMLButtonElement, Unstable_RadioProps>(
  function Unstable_Radio(props, ref) {
    const { checked, classes: classesProp, disabled, ...other } = props;

    const classes = useStyles({
      checked,
      disabled,
    });

    return (
      <MuiRadio
        checked={checked}
        checkedIcon={<Unstable_RadioIcon checked />}
        color="default"
        classes={{
          root: clsx(classes.root, classesProp?.root),
        }}
        disabled={disabled}
        disableFocusRipple
        disableRipple
        disableTouchRipple
        focusRipple={false}
        icon={<Unstable_RadioIcon />}
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_Radio;
