import React, { ElementType, forwardRef } from 'react';
import MuiFormControl, {
  FormControlProps as MuiFormControlProps,
} from '@material-ui/core/FormControl';
import { OverridableComponent, OverrideProps, useId } from '../../utils';
import withStyles, { Styles } from '../../withStyles';
import clsx from 'clsx';
import FormControlExtraContext from '../FormControlExtraContext';
import { FormControlProperties } from '../useFormControl';

export interface FormControlTypeMap<
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
        FormControlProperties,
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
  classKey: FormControlClassKey;
}

export type FormControlProps<
  D extends ElementType = FormControlTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<FormControlTypeMap<P, D>, D>;

export type FormControlClassKey = 'root';

type PrivateClassKey =
  | 'private-root-fullWidth'
  | 'private-root-size-medium'
  | 'private-root-size-small';

const styles: Styles<FormControlClassKey | PrivateClassKey> = {
  /** Styles applied to the root element. */
  root: {
    display: 'flex',
  },
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

const FormControl: OverridableComponent<FormControlTypeMap> = forwardRef(
  function FormControl(props, ref) {
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
      <FormControlExtraContext.Provider
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
      </FormControlExtraContext.Provider>
    );
  }
);

export default withStyles(styles, { name: 'MuiSpark_alpha_FormControl' })(
  FormControl
) as typeof FormControl;
