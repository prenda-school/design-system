import * as React from 'react';
import PropTypes from 'prop-types';
import {
  default as SwitchBase,
  SwitchBaseClassKey,
  SwitchBaseProps,
} from '@material-ui/core/internal/SwitchBase';
import createChainedFunction from '@material-ui/core/utils/createChainedFunction';
import { useRadioGroup } from '../RadioGroup';
import RadioIcon from './RadioIcon';
import makeStyles from '../makeStyles';
import { StandardProps, useMergeClasses } from '../utils';

// File is adapted from MUI's interface.
// Permalink: https://github.com/mui-org/material-ui/blob/b3e794791441fa8e6da50ca8545c40d566081f81/packages/material-ui/src/Radio/Radio.js
// Removed props `checkedIcon`, `color`, `disableRipple`, `icon`, `size`.
// Removed logic around `color`, `size`.

export interface RadioProps
  extends StandardProps<
    SwitchBaseProps,
    RadioClassKey,
    'checkedIcon' | 'color' | 'icon' | 'type'
  > {
  /**
   * If `true`, the radio will be disabled.
   */
  disabled?: boolean;
}

export type RadioClassKey = SwitchBaseClassKey;

const useStyles = makeStyles<RadioClassKey>(
  ({ palette }) => ({
    /* Styles applied to the root element. */
    root: {
      // Split 8px of padding / margin so icon can use background-color instead of box-shadow
      padding: '4px',
      margin: '4px',
      // Clear Mui's primary/secondary color bgcolor
      backgroundColor: 'unset',
      color: palette.grey.dark,
      '&:hover': {
        color: palette.text.dark,
        backgroundColor: 'unset',
      },
      '&:focus, &.Mui-focusVisible': {
        color: palette.blue[3],
        backgroundColors: palette.blue[1],
      },
      '&$checked': {
        color: palette.blue[3],
      },
      '&$disabled': {
        '& .SparkRadioIcon-root': {
          '& [class*=MuiSvgIcon-root]': {
            color: palette.grey.dark,
          },
          '& .SparkRadioIcon-circle': {
            backgroundColor: palette.grey.medium,
          },
          '& .SparkRadioIcon-dot': {
            color: palette.grey[400],
          },
        },
      },
    },
    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the `input` element. */
    input: {},
  }),
  { name: 'MuiSparkRadio' }
);

const Radio = React.forwardRef(function Radio(
  props: RadioProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any
) {
  const {
    checked: checkedProp,
    classes: classesProp,
    name: nameProp,
    onChange: onChangeProp,
    ...other
  } = props;

  const baseClasses = useStyles();

  const classes = useMergeClasses({
    baseClasses,
    classesProp,
  });

  const radioGroup = useRadioGroup();

  const onChange = createChainedFunction(
    onChangeProp,
    radioGroup && radioGroup.onChange
  );

  let checked = checkedProp;
  let name = nameProp;

  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = radioGroup.value === props.value;
    }
    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }

  return (
    <SwitchBase
      type="radio"
      icon={<RadioIcon />}
      checkedIcon={<RadioIcon checked />}
      color="default"
      classes={{
        root: classes.root,
        checked: classes.checked,
        disabled: classes.disabled,
      }}
      name={name}
      checked={checked}
      onChange={onChange}
      ref={ref}
      {...other}
    />
  );
});

Radio.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,
  /**
   * If `true`, the radio will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: PropTypes.object,
  // /**
  //  * Pass a ref to the `input` element.
  //  */
  // inputRef: refType,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: PropTypes.func,
  /**
   * If `true`, the `input` element will be required.
   */
  required: PropTypes.bool,
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: PropTypes.any,
};

export default Radio;
