import React, { ElementType, forwardRef } from 'react';
import MuiFormControl, {
  FormControlProps as MuiFormControlProps,
} from '@material-ui/core/FormControl';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_FormControlTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P &
    Omit<
      MuiFormControlProps,
      'classes' | 'color' | 'hiddenLabel' | 'margin' | 'size' | 'variant'
    >;
  defaultComponent: D;
  classKey: Unstable_FormControlClassKey;
}

export type Unstable_FormControlProps<
  D extends ElementType = Unstable_FormControlTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_FormControlTypeMap<P, D>, D>;

export type Unstable_FormControlClassKey = 'root';

const styles: Styles<Unstable_FormControlClassKey> = {
  /** Styles applied to the root element. */
  root: {
    gap: 8,
  },
};

const Unstable_FormControl: OverridableComponent<Unstable_FormControlTypeMap> = forwardRef(
  function Unstable_FormControl(props, ref) {
    const { color: _color, ...other } = props;

    return <MuiFormControl ref={ref} {...other} />;
  }
);

export default withStyles(styles, { name: 'MuiSparkUnstable_FormControl' })(
  Unstable_FormControl
) as typeof Unstable_FormControl;
