import React, { forwardRef, ReactNode, RefObject } from 'react';
import Unstable_FormControl, {
  Unstable_FormControlProps,
} from '../Unstable_FormControl';
import Unstable_FormHelperText, {
  Unstable_FormHelperTextProps,
} from '../Unstable_FormHelperText';
import Unstable_FormLabel, {
  Unstable_FormLabelProps,
} from '../Unstable_FormLabel';
import Unstable_FormGroup, {
  Unstable_FormGroupProps,
} from '../Unstable_FormGroup';
import { useId } from '../utils';

export interface Unstable_CheckboxGroupFieldProps
  extends Omit<Unstable_FormControlProps, 'onChange'> {
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
  FormHelperTextProps?: Partial<Unstable_FormHelperTextProps>;
  /**
   * Props applied to the `FormLabel` element.
   */
  FormLabelProps?: Partial<Unstable_FormLabelProps>;
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
  FormGroupProps?: Partial<Unstable_FormGroupProps>;
  /**
   * If `true`, the label is displayed as required and the controls will be required.
   */
  required?: boolean;
  /**
   * Display the `FormGroup` in a row.
   */
  row?: boolean;
}

const Unstable_CheckboxGroupField = forwardRef<
  unknown,
  Unstable_CheckboxGroupFieldProps
>(function Unstable_CheckboxGroupField(props, ref) {
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
    <Unstable_FormControl
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
          <Unstable_FormLabel
            component="legend"
            id={labelId}
            // @ts-expect-error not identical types
            ref={
              (FormLabelProps?.ref as unknown) as RefObject<HTMLLegendElement>
            }
            {...FormLabelProps}
          >
            {label}
          </Unstable_FormLabel>
        </span>
      ) : null}

      <Unstable_FormGroup row={row} {...FormGroupProps}>
        {children}
      </Unstable_FormGroup>

      {helperText ? (
        <Unstable_FormHelperText id={helperTextId} {...FormHelperTextProps}>
          {helperText}
        </Unstable_FormHelperText>
      ) : null}
    </Unstable_FormControl>
  );
});

export default Unstable_CheckboxGroupField;
