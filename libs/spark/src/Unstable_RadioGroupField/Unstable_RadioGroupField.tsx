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
import Unstable_RadioGroup, {
  Unstable_RadioGroupProps,
} from '../Unstable_RadioGroup';
import { useId } from '../utils';

export interface Unstable_RadioGroupFieldProps
  extends Omit<Unstable_FormControlProps, 'onChange'> {
  /**
   * @ignore
   */
  children: ReactNode;
  /**
   * The default value of the `RadioGroup` element.
   */
  defaultValue?: Unstable_RadioGroupProps['defaultValue'];
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
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: Unstable_RadioGroupProps['onChange'];
  /**
   * Props applied to the `RadioGroup` element.
   */
  RadioGroupProps?: Partial<Unstable_RadioGroupProps>;
  /**
   * Display the `RadioGroup` in a row.
   */
  row?: boolean;
  /**
   * The value of the `RadioGroup` element; required for a controlled component.
   */
  value?: unknown;
}

const Unstable_RadioGroupField = forwardRef<
  unknown,
  Unstable_RadioGroupFieldProps
>(function Unstable_RadioGroupField(props, ref) {
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
    <Unstable_FormControl
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
      {label ? (
        <Unstable_FormLabel {...FormLabelProps}>{label}</Unstable_FormLabel>
      ) : null}

      <Unstable_RadioGroup
        defaultValue={defaultValue}
        onChange={onChange}
        role={undefined}
        row={row}
        value={value}
        {...RadioGroupProps}
      >
        {children}
      </Unstable_RadioGroup>

      {helperText ? (
        <Unstable_FormHelperText {...FormHelperTextProps}>
          {helperText}
        </Unstable_FormHelperText>
      ) : null}
    </Unstable_FormControl>
  );
});

export default Unstable_RadioGroupField;
