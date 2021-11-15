import * as React from 'react';
import {
  default as MuiCheckbox,
  CheckboxClassKey as MuiCheckboxClassKey,
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import CheckboxIcon from './CheckboxIcon';
import makeStyles from '../makeStyles';
import { StandardProps, useMergeClasses } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxProps
  extends StandardProps<
    MuiCheckboxProps,
    CheckboxClassKey,
    | 'color'
    | 'checkedIcon'
    | 'icon'
    | 'indeterminateIcon'
    | 'size'
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'disableFocusRipple'
    | 'focusRipple'
    | 'centerRipple'
    | 'TouchRippleProps'
  > {}

export type CheckboxClassKey = Exclude<
  MuiCheckboxClassKey,
  'colorPrimary' | 'colorSecondary' | 'input'
>;

const useStyles = makeStyles<CheckboxClassKey>(
  ({ palette }) => ({
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
        '& .CheckboxIcon-root': {
          color: palette.grey.dark,
          '& .CheckboxIcon-box': {
            backgroundColor: palette.grey.medium,
          },
          '& .CheckboxIcon-check, & .CheckboxIcon-dash': {
            color: palette.grey[400],
          },
        },
      },
    },
    indeterminate: {
      color: palette.blue[3],
    },
    checked: {},
    disabled: {},
  }),
  { name: 'MuiSparkCheckbox' }
);

const Checkbox = React.forwardRef(function Checkbox(
  props: CheckboxProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.ForwardedRef<any>
) {
  const { classes: classesProp, ...other } = props;

  const classes = useMergeClasses({
    baseClasses: useStyles(),
    classesProp,
  });

  return (
    <MuiCheckbox
      checkedIcon={<CheckboxIcon checked />}
      classes={classes}
      color="default"
      icon={<CheckboxIcon />}
      indeterminateIcon={<CheckboxIcon indeterminate />}
      ref={ref}
      {...other}
    />
  );
});

export default Checkbox;
