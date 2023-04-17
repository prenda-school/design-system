import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { FormControlLabelProps } from '../FormControlLabel';
import FormControlLabel from '../FormControlLabel';
import type { FormHelperTextProps } from '../FormHelperText';
import FormHelperText from '../FormHelperText';
import Radio from '../Radio/Radio';
import { useId } from '../../utils';
import type { StyledComponentProps, Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface RadioFieldProps
  extends Omit<FormControlLabelProps, 'classes' | 'control'>,
    StyledComponentProps<RadioFieldClassKey> {
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

type RadioFieldClassKey = 'root' | 'helperText';

const styles: Styles<RadioFieldClassKey> = {
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
};

const RadioField = forwardRef<unknown, RadioFieldProps>(function RadioField(
  props,
  ref
) {
  const {
    className,
    classes,
    disabled,
    error,
    FormHelperTextProps,
    helperText,
    id: idProp,
    ...other
  } = props;

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

export default withStyles(styles, { name: 'MuiSpark_alpha_RadioField' })(
  RadioField
) as typeof RadioField;
