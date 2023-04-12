import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import FormControlLabel, { FormControlLabelProps } from '../FormControlLabel';
import FormHelperText, { FormHelperTextProps } from '../FormHelperText';
import Switch from '../Switch/Switch';
import { useId } from '../../utils';
import withStyles, { StyledComponentProps, Styles } from '../../withStyles';

export interface SwitchFieldProps
  extends Omit<FormControlLabelProps, 'classes' | 'control'>,
    StyledComponentProps<SwitchFieldClassKey> {
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error?: boolean;
  /**
   * Props applied to the `FormHelperText` element.
   */
  FormHelperTextProps?: Partial<FormHelperTextProps>;
  /**
   * If `true`, the field will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * The helper text content.
   */
  helperText?: ReactNode;
  /**
   * The `id` attribute of the `FormControlLabel` element.
   */
  id?: string;
}

type SwitchFieldClassKey = 'root' | 'formControl' | 'helperText';

type PrivateClassKey = 'private-root-fullWidth' | 'private-formControl-label';

const styles: Styles<SwitchFieldClassKey | PrivateClassKey> = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 4,
  },
  /* Styles applied to the form control element. */
  formControl: {
    justifyContent: 'space-between',
  },
  /* Styles applied to the helper text element. */
  helperText: {},
  /* Private */
  'private-root-fullWidth': {
    width: '100%',
  },
  'private-formControl-label': {
    fontWeight: 600,
  },
};

const SwitchField = forwardRef<unknown, SwitchFieldProps>(function SwitchField(
  props,
  ref
) {
  const {
    className,
    classes,
    disabled,
    error,
    FormHelperTextProps,
    fullWidth,
    helperText,
    id: idProp,
    ...other
  } = props;

  const id = useId(idProp);

  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;

  return (
    <div
      className={clsx(
        classes.root,
        {
          [classes['private-root-fullWidth']]: fullWidth,
        },
        className
      )}
    >
      <FormControlLabel
        className={classes.formControl}
        control={<Switch inputProps={{ 'aria-describedby': helperTextId }} />}
        disabled={disabled}
        error={error}
        ref={ref}
        {...other}
        classes={{ label: classes['private-formControl-label'] }}
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

export default withStyles(styles, { name: 'MuiSparkSwitchField' })(
  SwitchField
) as typeof SwitchField;
