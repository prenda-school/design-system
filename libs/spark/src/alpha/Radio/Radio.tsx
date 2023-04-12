import React, { forwardRef, Ref } from 'react';
import clsx from 'clsx';
import {
  default as MuiRadio,
  RadioProps as MuiRadioProps,
} from '@material-ui/core/Radio';
import RadioIcon from './RadioIcon';
import withStyles, { Styles, StyledComponentProps } from '../../withStyles';
import useRadioGroupExtra from '../useRadioGroupExtra/useRadioGroupExtra';

export interface RadioProps
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
    StyledComponentProps<RadioClassKey> {
  /**
   * If `true`, the component should be displayed in an error state.
   */
  error?: boolean;
}

export type RadioClassKey = 'root' | 'error';

const styles: Styles<RadioClassKey> = {
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
  error: {},
};

const Radio = forwardRef<unknown, RadioProps>(function Radio(props, ref) {
  const { classes, className, error, required: requiredProp, ...other } = props;

  const radioGroupExtra = useRadioGroupExtra();

  let required = requiredProp;

  if (radioGroupExtra) {
    if (typeof required === 'undefined') {
      required = radioGroupExtra.required;
    }
  }

  return (
    <MuiRadio
      checkedIcon={<RadioIcon checked />}
      classes={{ root: classes.root }}
      className={clsx({ [classes.error]: error }, className)}
      color="default"
      disableFocusRipple
      disableRipple
      disableTouchRipple
      focusRipple={false}
      icon={<RadioIcon />}
      ref={ref as Ref<HTMLButtonElement>}
      required={required}
      {...other}
    />
  );
});

export default withStyles(styles, { name: 'MuiSpark_alpha_Radio' })(
  Radio
) as typeof Radio;
