import React, { ElementType, forwardRef } from 'react';
import MuiFormControl, {
  FormControlProps as MuiFormControlProps,
} from '@material-ui/core/FormControl';
import { OverridableComponent, OverrideProps, useId } from '../utils';
import withStyles, { Styles } from '../withStyles';
import clsx from 'clsx';
import Unstable_FormControlExtraContext from '../Unstable_FormControlExtraContext';
import { FormControlProperties_Unstable } from '../useFormControl_unstable';

export interface Unstable_FormControlTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P &
    Omit<
      MuiFormControlProps,
      | 'classes'
      | 'color'
      | 'hiddenLabel'
      | 'margin'
      | 'variant'
      // form control
      | 'disabled'
      | 'error'
      | 'focused'
      | 'fullWidth'
      | 'required'
      | 'size'
    > &
    Partial<
      Pick<
        FormControlProperties_Unstable,
        | 'inputId'
        | 'labelId'
        | 'helperTextId'
        | 'disabled'
        | 'error'
        | 'focused'
        | 'fullWidth'
        | 'required'
        | 'size'
        | 'success'
      >
    > & {
      /**
       * The id of the root, wrapper element.
       */
      id?: string;
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

type PrivateClassKey =
  | 'private-root-fullWidth'
  | 'private-root-size-medium'
  | 'private-root-size-small';

const styles: Styles<Unstable_FormControlClassKey | PrivateClassKey> = {
  /** Styles applied to the root element. */
  root: {},
  /* Private */
  'private-root-fullWidth': {
    width: '100%',
  },
  'private-root-size-medium': {
    gap: 8,
  },
  'private-root-size-small': {
    gap: 4,
  },
};

const Unstable_FormControl: OverridableComponent<Unstable_FormControlTypeMap> =
  forwardRef(function Unstable_FormControl(props, ref) {
    const {
      classes,
      color: _color,
      fullWidth,
      inputId: inputIdProp,
      labelId: labelIdProp,
      helperTextId: helperTextIdProp,
      size = 'medium',
      success = false,
      ...other
    } = props;

    const inputId = useId(inputIdProp);

    return (
      <Unstable_FormControlExtraContext.Provider
        value={{
          inputId,
          labelId: labelIdProp,
          helperTextId: helperTextIdProp,
          success,
          size,
        }}
      >
        <MuiFormControl
          classes={{
            root: clsx(classes.root, classes[`private-root-size-${size}`], {
              [classes['private-root-fullWidth']]: fullWidth,
            }),
          }}
          fullWidth={fullWidth}
          ref={ref}
          {...other}
        />
      </Unstable_FormControlExtraContext.Provider>
    );
  });

export default withStyles(styles, { name: 'MuiSparkUnstable_FormControl' })(
  Unstable_FormControl
) as typeof Unstable_FormControl;
