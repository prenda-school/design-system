import React, { ElementType, forwardRef } from 'react';
import MuiFormLabel, {
  FormLabelProps as MuiFormLabelProps,
} from '@material-ui/core/FormLabel';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';

export interface Unstable_FormLabelTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'label'
> {
  props: P & Omit<MuiFormLabelProps, 'classes' | 'color' | 'filled'>;
  defaultComponent: D;
  classKey: Unstable_FormLabelClassKey;
}

export type Unstable_FormLabelProps<
  D extends ElementType = Unstable_FormLabelTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_FormLabelTypeMap<P, D>, D>;

export type Unstable_FormLabelClassKey = 'root' | 'asterisk';

const useStyles = makeStyles<Unstable_FormLabelClassKey>(
  (theme) => ({
    /** Styles applied to the root element. */
    root: {
      ...theme.unstable_typography.label,
      color: theme.unstable_palette.text.heading,
      margin: 0,
      /* focused -- can get from internal context => can't condition on prop */
      '&.Mui-focused': {
        // override Mui default
        color: theme.unstable_palette.text.heading,
      },
      /* error -- can get from internal context => can't condition on prop */
      '&.Mui-error': {
        color: theme.unstable_palette.text.heading,
      },
      /* disabled -- can get from internal context => can't condition on prop */
      '&.Mui-disabled': {
        color: theme.unstable_palette.text.disabled,
      },
    },
    /** Styles applied to the asterisk element. */
    asterisk: {
      '&.Mui-error': {
        color: theme.unstable_palette.red[600],
      },
      '.Mui-disabled > &': {
        color: theme.unstable_palette.text.disabled,
      },
    },
  }),
  { name: 'MuiSparkUnstable_FormLabel' }
);

const Unstable_FormLabel: OverridableComponent<Unstable_FormLabelTypeMap> = forwardRef(
  function Unstable_FormLabel(props, ref) {
    const { classes: classesProp, color: _color, ...other } = props;

    const classes = useStyles();

    return (
      <MuiFormLabel
        classes={{
          root: clsx(classes.root, classesProp?.root),
          asterisk: clsx(classes.asterisk, classesProp?.asterisk),
        }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_FormLabel;
