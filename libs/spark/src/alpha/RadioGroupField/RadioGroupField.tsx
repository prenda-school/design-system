import React, { forwardRef, ReactNode, RefObject } from 'react';
import FormControl, { FormControlProps } from '../FormControl';
import FormHelperText, { FormHelperTextProps } from '../FormHelperText';
import FormLabel, { FormLabelProps } from '../FormLabel';
import RadioGroup, { RadioGroupProps } from '../RadioGroup';
import { useId } from '../../utils';

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
      FormHelperTextProps,
      FormLabelProps,
      helperText,
      id: idProp,
      label,
      name,
      onChange,
      RadioGroupProps,
      row,
      value,
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
        role="radiogroup"
        // @ts-expect-error not identical types
        ref={ref as unknown as RefObject<HTMLFieldSetElement>}
        {...(helperTextId && { 'aria-describedby': helperTextId })}
        {...(labelId && { 'aria-labelledby': labelId })}
        {...other}
      >
        {label ? <FormLabel {...FormLabelProps}>{label}</FormLabel> : null}

        <RadioGroup
          defaultValue={defaultValue}
          onChange={onChange}
          role={undefined}
          row={row}
          value={value}
          {...RadioGroupProps}
        >
          {children}
        </RadioGroup>

        {helperText ? (
          <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>
        ) : null}
      </FormControl>
    );
  }
);

export default RadioGroupField;
