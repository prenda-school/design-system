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
    root: {
      ...theme.unstable_typography.description,
      alignItems: 'center',
      color: theme.unstable_palette.text.subdued,
      display: 'flex',
      gap: 4,
      letterSpacing: 0,
      width: 'fit-content',
      /* error -- can get from internal context => can't condition on prop */
      '&.Mui-error': {
        color: theme.unstable_palette.red[700],
      },
      /* disabled -- can get from internal context => can't condition on prop */
      '&.Mui-disabled': {
        color: theme.unstable_palette.text.disabled,
      },
      // double-specificity to override PDS v1
      '&&': {
        marginTop: 0,
      },
    },
  }),
  { name: 'MuiSparkUnstable_FormHelperText' }
);

const Unstable_FormHelperText: OverridableComponent<Unstable_FormHelperTextTypeMap> = forwardRef(
  function Unstable_FormHelperText(props, ref) {
    const { classes: classesProp, ...other } = props;

    const classes = useStyles();

    return (
      <MuiFormHelperText
        classes={{ root: clsx(classes.root, classesProp?.root) }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_FormHelperText;
