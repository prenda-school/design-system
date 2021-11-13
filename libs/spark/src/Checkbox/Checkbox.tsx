import * as React from 'react';
import clsx from 'clsx';
import {
  default as SwitchBase,
  SwitchBaseClassKey,
  SwitchBaseProps,
} from '@material-ui/core/internal/SwitchBase';
import CheckboxIcon from './CheckboxIcon';
import makeStyles from '../makeStyles';
import { StandardProps, useMergeClasses } from '../utils';

// File is adapted from MUI's interface.
// Permalink: https://github.com/mui-org/material-ui/blob/b3e794791441fa8e6da50ca8545c40d566081f81/packages/material-ui/src/Checkbox/Checkbox.js
// Removed props
//  `checkedIcon`
//  `color`
//  `disableRipple`
//  `icon`
//  `indeterminateIcon`
//  `size`
// Remove logic around `color`, `size`.

export interface CheckboxProps
  extends StandardProps<
    SwitchBaseProps,
    CheckboxClassKey,
    'icon' | 'checkedIcon' | 'color' | 'type'
  > {
  /**
   * If `true`, the component is checked.
   */
  checked?: SwitchBaseProps['checked'];
  /**
   * If `true`, the checkbox will be disabled.
   */
  disabled?: SwitchBaseProps['disabled'];
  /**
   * The id of the `input` element.
   */
  id?: SwitchBaseProps['id'];
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the input.
   */
  indeterminate?: boolean;
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: SwitchBaseProps['inputProps'];
  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: SwitchBaseProps['onChange'];
  /**
   * If `true`, the `input` element will be required.
   */
  required?: SwitchBaseProps['required'];
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value?: SwitchBaseProps['value'];
}

export type CheckboxClassKey = SwitchBaseClassKey | 'indeterminate';

const useStyles = makeStyles<CheckboxClassKey>(
  ({ palette }) => ({
    /* Styles applied to the root element. */
    root: {
      padding: 8,
      backgroundColor: 'unset',
      color: palette.grey.dark,
      '&:hover': {
        color: palette.text.dark,
        backgroundColor: 'unset',
      },
      '&$checked': {
        color: palette.blue[3],
      },
      '&$disabled': {
        '& [class*="SparkCheckboxIcon-root"]': {
          color: palette.grey.dark,
          '& [class*="SparkCheckboxIcon-box"]': {
            backgroundColor: palette.grey.medium,
          },
          '& [class*="SparkCheckboxIcon-check"], & [class*="SparkCheckboxIcon-dash"]': {
            color: palette.grey[400],
          },
        },
      },
    },
    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Pseudo-class applied to the root element if `indeterminate={true}`. */
    indeterminate: {
      color: palette.blue[3],
    },
    /* Styles applied to the `input` element. */
    input: {},
  }),
  { name: 'MuiSparkCheckbox' }
);

const Checkbox = React.forwardRef(function Checkbox(
  { classes: classesProp, indeterminate, inputProps, ...other }: CheckboxProps,

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any
) {
  const baseClasses = useStyles();

  const classes = useMergeClasses({
    baseClasses,
    classesProp,
  });

  const icon = indeterminate ? (
    <CheckboxIcon indeterminate />
  ) : (
    <CheckboxIcon />
  );
  const checkedIcon = indeterminate ? (
    <CheckboxIcon indeterminate />
  ) : (
    <CheckboxIcon checked />
  );

  return (
    <SwitchBase
      type="checkbox"
      classes={{
        root: clsx(classes.root, {
          [classes.indeterminate]: indeterminate,
        }),
        checked: classes.checked,
        disabled: classes.disabled,
      }}
      color="default"
      disableRipple
      inputProps={{
        // @ts-expect-error 'data-indeterminate'' does not exist in type 'InputHTMLAttributes<HTMLInputElement>
        'data-indeterminate': indeterminate,
        ...inputProps,
      }}
      icon={icon}
      checkedIcon={checkedIcon}
      ref={ref}
      {...other}
    />
  );
});

export default Checkbox;
