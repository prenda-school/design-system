import React, { ElementType, forwardRef } from 'react';
import MuiFormControl, {
  FormControlProps as MuiFormControlProps,
} from '@material-ui/core/FormControl';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';
import clsx from 'clsx';

export interface Unstable_FormControlTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P &
    Omit<
      MuiFormControlProps,
      'classes' | 'color' | 'hiddenLabel' | 'margin' | 'size' | 'variant'
    > & {
      /**
       * The size of the form control.
       */
      size?: 'medium' | 'small';
    };
  defaultComponent: D;
  classKey: Unstable_FormControlClassKey;
}

export type Unstable_FormControlProps<
  D extends ElementType = Unstable_FormControlTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_FormControlTypeMap<P, D>, D>;

export type Unstable_FormControlClassKey = 'root';

type PrivateClassKey = 'private-root-size-medium' | 'private-root-size-small';

const styles: Styles<Unstable_FormControlClassKey | PrivateClassKey> = {
  /** Styles applied to the root element. */
  root: {},
  /* Private */
  'private-root-size-medium': {
    gap: 8,
  },
  'private-root-size-small': {
    gap: 4,
  },
};

const Unstable_FormControl: OverridableComponent<Unstable_FormControlTypeMap> = forwardRef(
  function Unstable_FormControl(props, ref) {
    const { classes, color: _color, size = 'medium', ...other } = props;

    return (
      <MuiFormControl
        classes={{
          root: clsx(classes.root, classes[`private-root-size-${size}`]),
        }}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withStyles(styles, { name: 'MuiSparkUnstable_FormControl' })(
  Unstable_FormControl
) as typeof Unstable_FormControl;
