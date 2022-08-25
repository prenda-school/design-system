import React, { forwardRef, Ref } from 'react';
import clsx from 'clsx';
import {
  default as MuiRadio,
  RadioProps as MuiRadioProps,
} from '@material-ui/core/Radio';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';
import RadioIcon from './RadioIcon';
import { useRadioGroupMore } from '../RadioGroup';

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

const useStyles = makeStyles<RadioClassKey>(
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
    error: {},
  },
  { name: 'MuiPDSRadio' }
);

const Radio = forwardRef<unknown, RadioProps>(function Radio(props, ref) {
  const {
    classes: classesProp,
    className,
    error,
    required: requiredProp,
    ...other
  } = props;

  const classes = useStyles();

  const radioGroup = useRadioGroupMore();

  let required = requiredProp;

  if (radioGroup) {
    if (typeof required === 'undefined') {
      required = radioGroup.required;
    }
  }

  return (
    <MuiRadio
      checkedIcon={<RadioIcon checked />}
      classes={{ root: clsx(classes.root, classesProp?.root) }}
      className={clsx(className, { [classes.error]: error })}
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

export default Radio;
