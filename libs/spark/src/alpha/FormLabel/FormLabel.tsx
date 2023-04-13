import React, { ElementType, forwardRef } from 'react';
import MuiFormLabel, {
  FormLabelProps as MuiFormLabelProps,
} from '@material-ui/core/FormLabel';
import { OverridableComponent, OverrideProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';
import clsx from 'clsx';
import { buildVariant } from '../theme/typography';
import useFormControl, { FormControlProperties } from '../useFormControl';

export interface FormLabelTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'label'
> {
  props: P &
    Omit<
      MuiFormLabelProps,
      | 'classes'
      | 'color'
      | 'disabled'
      | 'error'
      | 'filled'
      | 'focused'
      | 'required'
    > &
    Partial<
      Pick<
        FormControlProperties,
        'disabled' | 'error' | 'filled' | 'focused' | 'required' | 'size'
      >
    >;
  defaultComponent: D;
  classKey: FormLabelClassKey;
}

export type FormLabelProps<
  D extends ElementType = FormLabelTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<FormLabelTypeMap<P, D>, D>;

export type FormLabelClassKey = 'root' | 'asterisk';

type PrivateClassKey = 'private-root-size-medium' | 'private-root-size-small';

const sizeSmallVariant = buildVariant(
  600,
  14,
  16,
  undefined,
  undefined,
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);

const styles: Styles<FormLabelClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    color: theme.palette_alpha.text.heading,
    display: 'inline-block',
    margin: 0,
    /* focused -- can get from internal context => can't condition on prop */
    '&.Mui-focused': {
      // override Mui default
      color: theme.palette_alpha.text.heading,
    },
    /* error -- can get from internal context => can't condition on prop */
    '&.Mui-error': {
      color: theme.palette_alpha.text.heading,
    },
    /* disabled -- can get from internal context => can't condition on prop */
    '&.Mui-disabled': {
      color: theme.palette_alpha.text.disabled,
    },
  },
  /* Styles applied to the asterisk element. */
  asterisk: {
    '&.Mui-error': {
      color: theme.palette_alpha.red[600],
    },
    '.Mui-disabled > &': {
      color: theme.palette_alpha.text.disabled,
    },
  },
  /* Private */
  'private-root-size-medium': {
    ...theme.typography_alpha.label,
  },
  'private-root-size-small': {
    ...sizeSmallVariant,
  },
});

const FormLabel: OverridableComponent<FormLabelTypeMap> = forwardRef(
  function FormLabel(props, ref) {
    const {
      classes,
      color: _color,
      // form control
      disabled: disabledProp,
      error: errorProp,
      filled: filledProp,
      focused: focusedProp,
      htmlFor: htmlForProp,
      id: idProp,
      required: requiredProp,
      size: sizeProp,
      ...other
    } = props;

    const formControl = useFormControl({
      disabled: disabledProp,
      error: errorProp,
      filled: filledProp,
      focused: focusedProp,
      inputId: htmlForProp,
      labelId: idProp,
      required: requiredProp,
      size: sizeProp,
    });

    return (
      <MuiFormLabel
        classes={{
          root: clsx(
            classes.root,
            classes[`private-root-size-${formControl.size}`]
          ),
          asterisk: classes.asterisk,
        }}
        disabled={formControl.disabled}
        error={formControl.error}
        filled={formControl.filled}
        focused={formControl.focused}
        htmlFor={formControl.inputId}
        id={formControl.labelId}
        required={formControl.required}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withStyles(styles, { name: 'MuiSpark_alpha_FormLabel' })(
  FormLabel
) as typeof FormLabel;
