import React, { ElementType, forwardRef } from 'react';
import MuiFormLabel, {
  FormLabelProps as MuiFormLabelProps,
} from '@material-ui/core/FormLabel';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';

export interface FormLabelTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'label'
> {
  props: P & Omit<MuiFormLabelProps, 'classes' | 'color' | 'filled'>;
  defaultComponent: D;
  classKey: FormLabelClassKey;
}

export type FormLabelProps<
  D extends ElementType = FormLabelTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<FormLabelTypeMap<P, D>, D>;

export type FormLabelClassKey = 'root' | 'asterisk';

const useStyles = makeStyles<FormLabelClassKey>(
  (theme) => ({
    /** Styles applied to the root element. */
    root: {
      ...theme.typography.label,
      color: theme.palette.text.heading,
      margin: 0,
      /* focused -- can get from internal context => can't condition on prop */
      '&.Mui-focused': {
        // override Mui default
        color: theme.palette.text.heading,
      },
      /* error -- can get from internal context => can't condition on prop */
      '&.Mui-error': {
        color: theme.palette.text.heading,
      },
      /* disabled -- can get from internal context => can't condition on prop */
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
      },
    },
    /** Styles applied to the asterisk element. */
    asterisk: {
      '&.Mui-error': {
        color: theme.palette.red[600],
      },
      '.Mui-disabled > &': {
        color: theme.palette.text.disabled,
      },
    },
  }),
  { name: 'MuiPDSFormLabel' }
);

const FormLabel: OverridableComponent<FormLabelTypeMap> = forwardRef(
  function FormLabel(props, ref) {
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

export default FormLabel;
