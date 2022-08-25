import React, { forwardRef, ReactNode, RefObject } from 'react';
import FormControl, { FormControlProps } from '../FormControl';
import FormHelperText, { FormHelperTextProps } from '../FormHelperText';
import FormLabel, { FormLabelProps } from '../FormLabel';
import FormGroup, { FormGroupProps } from '../FormGroup';
import { useId } from '../utils';

export interface CheckboxGroupFieldProps
  extends Omit<FormControlProps, 'onChange'> {
  /**
   * @ignore
   */
  children: ReactNode;
  /**
   * If `true`, the label, control, and helper text will be disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the label, control, and helper text will be displayed in an error state.
   */
  error?: boolean;
  /**
   * Props applied to the `FormHelperText` element.
   */
  FormHelperTextProps?: Partial<FormHelperTextProps>;
  /**
   * Props applied to the `FormLabel` element.
   */
  FormLabelProps?: Partial<FormLabelProps>;
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * The helper text content.
   */
  helperText?: ReactNode;
  /**
   * The label content.
   */
  label?: ReactNode;
  /**
   * The `name` attribute passed to the controls.
   */
  name?: string;
  /**
   * Props applied to the `FormGroup` element.
   */
  FormGroupProps?: Partial<FormGroupProps>;
  /**
   * If `true`, the label is displayed as required and the controls will be required.
   */
  required?: boolean;
  /**
   * Display the `FormGroup` in a row.
   */
  row?: boolean;
}

const CheckboxGroupField = forwardRef<unknown, CheckboxGroupFieldProps>(
  function CheckboxGroupField(props, ref) {
    const {
      children,
      disabled = false,
      error = false,
      FormHelperTextProps,
      FormLabelProps,
      fullWidth = false,
      helperText,
      id: idProp,
      label,
      name,
      FormGroupProps,
      required = false,
      row,
      ...other
    } = props;

    const id = useId(idProp);

    const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
    const labelId = label && id ? `${id}-label` : undefined;

    return (
      <FormControl
        aria-describedby={helperTextId}
        aria-labelledby={labelId}
        component="fieldset"
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        id={id}
        // @ts-expect-error not identical types
        ref={(ref as unknown) as RefObject<HTMLFieldSetElement>}
        required={required}
        role="group"
        {...other}
      >
        {label ? (
          // wrap `legend` tag in `span` to position appropriately (impossible to override some HTML / browser defaults)
          <span>
            <FormLabel
              component="legend"
              id={labelId}
              // @ts-expect-error not identical types
              ref={
                (FormLabelProps?.ref as unknown) as RefObject<HTMLLegendElement>
              }
              {...FormLabelProps}
            >
              {label}
            </FormLabel>
          </span>
        ) : null}

        <FormGroup row={row} {...FormGroupProps}>
          {children}
        </FormGroup>

        {helperText ? (
          <FormHelperText id={helperTextId} {...FormHelperTextProps}>
            {helperText}
          </FormHelperText>
        ) : null}
      </FormControl>
    );
  }
);

export default CheckboxGroupField;
