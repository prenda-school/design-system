import React, { ElementType, forwardRef } from 'react';
import MuiFormHelperText, {
  FormHelperTextProps as MuiFormHelperTextProps,
} from '@material-ui/core/FormHelperText';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';

export interface Unstable_FormHelperTextTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'p'
> {
  props: P & Omit<MuiFormHelperTextProps, 'filled' | 'margin' | 'variant'>;
  defaultComponent: D;
  classKey: Unstable_FormHelperTextClassKey;
}

export type Unstable_FormHelperTextClassKey = 'root';

export type Unstable_FormHelperTextProps<
  D extends ElementType = Unstable_FormHelperTextTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_FormHelperTextTypeMap<P, D>, D>;

const useStyles = makeStyles<Unstable_FormHelperTextClassKey>(
  (theme) => ({
    root: (props: Unstable_FormHelperTextProps) => ({
      ...theme.unstable_typography.description,
      alignItems: 'center',
      color: theme.unstable_palette.text.subdued,
      display: 'flex',
      gap: 4,
      letterSpacing: 0,
      marginLeft: 4, // match margin of Input
      marginTop: 4,
      /* Styles applied to the `input` element if `disabled={true}`. */
      ...(props.disabled && {
        color: theme.unstable_palette.text.disabled,
      }),
      // duped because underlying component can set this independently based on form control context
      '&.Mui-disabled': {
        color: theme.unstable_palette.text.disabled,
      },
      /* Styles applied to the `input` element if `disabled={true}`. */
      ...(props.error && {
        color: theme.unstable_palette.red[700],
      }),
      // duped because underlying component can set this independently based on form control context
      '&.Mui-error': {
        color: theme.unstable_palette.red[700],
      },
    }),
  }),
  { name: 'MuiSparkUnstable_FormHelperText' }
);

const Unstable_FormHelperText: OverridableComponent<Unstable_FormHelperTextTypeMap> = forwardRef(
  function Unstable_FormHelperText(props, ref) {
    const { classes: classesProp, disabled, error, ...other } = props;

    const classes = useStyles({ disabled, error });

    return (
      <MuiFormHelperText
        classes={{ root: clsx(classes.root, classesProp?.root) }}
        disabled={disabled}
        error={error}
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_FormHelperText;
