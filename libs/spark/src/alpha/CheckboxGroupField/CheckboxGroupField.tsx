import React, { forwardRef, ReactNode, RefObject } from 'react';
import FormControl, { FormControlProps } from '../FormControl';
import FormHelperText, { FormHelperTextProps } from '../FormHelperText';
import FormLabel, { FormLabelProps } from '../FormLabel';
import FormGroup, { FormGroupProps } from '../FormGroup';
import { useId } from '../../utils';

export interface CheckboxGroupFieldProps
  extends Omit<FormControlProps, 'onChange'> {
  /**
   * @ignore
   */
  children: ReactNode;
  /**
   * Props applied to the `FormHelperText` element.
   */
  FormHelperTextProps?: Partial<FormHelperTextProps>;
  /**
   * Props applied to the `FormLabel` element.
   */
  FormLabelProps?: Partial<FormLabelProps>;
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
   * Display the `FormGroup` in a row.
   */
  row?: boolean;
}

const CheckboxGroupField = forwardRef<unknown, CheckboxGroupFieldProps>(
  function CheckboxGroupField(props, ref) {
    const {
      children,
      FormHelperTextProps,
      FormLabelProps,
      helperText,
      id: idProp,
      label,
      name,
      FormGroupProps,
      row,
      ...other
    } = props;

    const id = useId(idProp);

    const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
    const labelId = label && id ? `${id}-label` : undefined;

    return (
      <FormControl
        component="fieldset"
        id={id}
        inputId={id}
        labelId={labelId}
        helperTextId={helperTextId}
        role="group"
        // @ts-expect-error not identical types
        ref={ref as unknown as RefObject<HTMLFieldSetElement>}
        {...(helperTextId && { 'aria-describedby': helperTextId })}
        {...(labelId && { 'aria-labelledby': labelId })}
        {...other}
      >
        {label ? (
          // wrap `legend` tag in `span` to position appropriately (impossible to override some HTML / browser defaults)
          <span>
            <FormLabel
              component="legend"
              // @ts-expect-error not identical types
              ref={
                FormLabelProps?.ref as unknown as RefObject<HTMLLegendElement>
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
          <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>
        ) : null}
      </FormControl>
    );
  }
);

export default CheckboxGroupField;
