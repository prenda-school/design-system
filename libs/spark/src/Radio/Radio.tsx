import * as React from 'react';
import {
  default as MuiRadio,
  RadioClassKey as MuiRadioClassKey,
  RadioProps as MuiRadioProps,
} from '@material-ui/core/Radio';
import RadioIcon from './RadioIcon';
import makeStyles from '../makeStyles';
import { StandardProps, useMergeClasses } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RadioProps
  extends StandardProps<
    MuiRadioProps,
    RadioClassKey,
    | 'color'
    | 'checkedIcon'
    | 'icon'
    | 'size'
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'disableFocusRipple'
    | 'focusRipple'
    | 'centerRipple'
    | 'TouchRippleProps'
  > {}

export type RadioClassKey = Exclude<
  MuiRadioClassKey,
  'colorPrimary' | 'colorSecondary' | 'input'
>;

const useStyles = makeStyles<RadioClassKey>(
  ({ palette }) => ({
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
        '& .RadioIcon-root': {
          '& [class*=MuiSvgIcon-root]': {
            color: palette.grey.dark,
          },
          '& .RadioIcon-circle': {
            backgroundColor: palette.grey.medium,
          },
          '& .RadioIcon-dot': {
            color: palette.grey[400],
          },
        },
      },
    },
    checked: {},
    disabled: {},
  }),
  { name: 'MuiSparkRadio' }
);

const Radio = React.forwardRef(function Radio(
  props: RadioProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.ForwardedRef<any>
) {
  const { classes: classesProp, ...other } = props;

  const classes = useMergeClasses({
    baseClasses: useStyles(),
    classesProp,
  });

  return (
    <MuiRadio
      checkedIcon={<RadioIcon checked />}
      classes={classes}
      color="default"
      icon={<RadioIcon />}
      ref={ref}
      {...other}
    />
  );
});

export default Radio;
