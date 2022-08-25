import React, { forwardRef, ReactNode, RefObject } from 'react';
import FormControl, { FormControlProps } from '../FormControl';
import FormHelperText, { FormHelperTextProps } from '../FormHelperText';
import FormLabel, { FormLabelProps } from '../FormLabel';
import RadioGroup, { RadioGroupProps } from '../RadioGroup';
import { useId } from '../utils';

export interface RadioGroupFieldProps
  extends Omit<FormControlProps, 'onChange'> {
  /**
   * @ignore
   */
  children: ReactNode;
  /**
   * The default value of the `RadioGroup` element.
   */
  defaultValue?: RadioGroupProps['defaultValue'];
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
   * If `true`, the label, control, and helper text will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * The helper text content.
   */
  helperText?: ReactNode;
  /**
   * The `id` attribute of the `RadioGroup` element.
   */
  id?: string;
  /**
   * The label content.
   */
  label?: ReactNode;
  /**
   * The `name` attribute passed to the controls.
   */
  name?: string;
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: RadioGroupProps['onChange'];
  /**
   * Props applied to the `RadioGroup` element.
   */
  RadioGroupProps?: Partial<RadioGroupProps>;
  /**
   * If `true`, the label is displayed as required and the controls will be required.
   */
  required?: boolean;
  /**
   * Display the `RadioGroup` in a row.
   */
  row?: boolean;
  /**
   * The value of the `RadioGroup` element; required for a controlled component.
   */
  value?: unknown;
}

const RadioGroupField = forwardRef<unknown, RadioGroupFieldProps>(
  function RadioGroupField(props, ref) {
    const {
      children,
      defaultValue,
      disabled = false,
      error = false,
      FormHelperTextProps,
      FormLabelProps,
      fullWidth = false,
      helperText,
      id: idProp,
      label,
      name,
      onChange,
      RadioGroupProps,
      required = false,
      row,
      value,
      ...other
    } = props;

    const id = useId(idProp);

    const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
    const labelId = label && id ? `${id}-label` : undefined;

    return (
      <FormControl
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        ref={(ref as unknown) as RefObject<HTMLDivElement>}
        required={required}
        {...other}
      >
        {label ? (
          <FormLabel htmlFor={id} id={labelId} {...FormLabelProps}>
            {label}
          </FormLabel>
        ) : null}

        <RadioGroup
          aria-describedby={helperTextId}
          aria-labelledby={labelId}
          defaultValue={defaultValue}
          id={id}
          onChange={onChange}
          row={row}
          value={value}
          {...RadioGroupProps}
        >
          {children}
        </RadioGroup>

        {helperText ? (
          <FormHelperText id={helperTextId} {...FormHelperTextProps}>
            {helperText}
          </FormHelperText>
        ) : null}
      </FormControl>
    );
  }
);

export default RadioGroupField;
