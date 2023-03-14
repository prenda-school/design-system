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
   * Props applied to the `FormHelperText` element.
   */
  FormHelperTextProps?: Partial<Unstable_FormHelperTextProps>;
  /**
   * Props applied to the `FormLabel` element.
   */
  FormLabelProps?: Partial<Unstable_FormLabelProps>;
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
    <Unstable_FormControl
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
          <Unstable_FormLabel
            component="legend"
            // @ts-expect-error not identical types
            ref={FormLabelProps?.ref as unknown as RefObject<HTMLLegendElement>}
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
        <Unstable_FormHelperText {...FormHelperTextProps}>
          {helperText}
        </Unstable_FormHelperText>
      ) : null}
    </Unstable_FormControl>
  );
});

export default Unstable_CheckboxGroupField;
