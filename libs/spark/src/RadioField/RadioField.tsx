import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import FormControlLabel, { FormControlLabelProps } from '../FormControlLabel';
import FormHelperText, { FormHelperTextProps } from '../FormHelperText';
import Radio from '../Radio/Radio';
import { useId } from '../utils';

export interface RadioFieldProps
  extends Omit<FormControlLabelProps, 'control'> {
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error?: boolean;
  /**
   * Props applied to the `FormHelperText` element.
   */
  FormHelperTextProps?: Partial<FormHelperTextProps>;
  /**
   * The helper text content.
   */
  helperText?: ReactNode;
  /**
   * The `id` attribute of the `FormControlLabel` element.
   */
  id?: string;
}

const useStyles = makeStyles(
  {
    /** Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 4,
    },
    /** Styles applied to the helper text element. */
    helperText: {
      marginLeft: 17 + 8, // control + gap
    },
  },
  { name: 'MuiPDSRadioField' }
);

const RadioField = forwardRef<unknown, RadioFieldProps>(function RadioField(
  props,
  ref
) {
  const {
    className,
    disabled,
    error,
    FormHelperTextProps,
    helperText,
    id: idProp,
    ...other
  } = props;

  const classes = useStyles();

  const id = useId(idProp);

  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;

  return (
    <div className={clsx(classes.root, className)}>
      <FormControlLabel
        control={<Radio inputProps={{ 'aria-describedby': helperTextId }} />}
        disabled={disabled}
        error={error}
        ref={ref}
        {...other}
      />

      {helperText ? (
        <FormHelperText
          disabled={disabled}
          error={error}
          id={helperTextId}
          {...FormHelperTextProps}
          className={clsx(classes.helperText, FormHelperTextProps?.className)}
        >
          {helperText}
        </FormHelperText>
      ) : null}
    </div>
  );
});

export default RadioField;
