import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { FormControlLabelProps } from '../FormControlLabel';
import FormControlLabel from '../FormControlLabel';
import type { FormHelperTextProps } from '../FormHelperText';
import FormHelperText from '../FormHelperText';
import Checkbox from '../Checkbox';
import { useId } from '../../utils';
import type { StyledComponentProps, Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface CheckboxFieldProps
  extends Omit<FormControlLabelProps, 'classes' | 'control'>,
    StyledComponentProps<CheckboxFieldClassKey> {
  /**
   * If `true`, the component appears in an error state.
   */
  error?: boolean;
  /**
   * Props applied to the `FormControlLabel` element.
   */
  FormControlLabelProps?: Partial<FormControlLabelProps>;
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
  /**
   * If `true`, the component appears in an indeterminate state.
   */
  indeterminate?: boolean;
}

export type CheckboxFieldClassKey = 'root';

type PrivateClassKey = 'private-helperText';

const styles: Styles<CheckboxFieldClassKey | PrivateClassKey> = {
  /** Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 4,
  },
  /** Styles applied to the helper text element. */
  'private-helperText': {
    marginLeft: 17 + 8, // control + gap
  },
};

const CheckboxField = forwardRef<unknown, CheckboxFieldProps>(
  function CheckboxField(props, ref) {
    const {
      className,
      classes,
      disabled,
      error,
      FormControlLabelProps,
      FormHelperTextProps,
      helperText,
      id: idProp,
      indeterminate,
      ...other
    } = props;

    const id = useId(idProp);

    const helperTextId = helperText && id ? `${id}-helper-text` : undefined;

    return (
      <div className={clsx(classes.root, className)}>
        <FormControlLabel
          control={
            <Checkbox
              indeterminate={indeterminate}
              inputProps={{ 'aria-describedby': helperTextId }}
            />
          }
          disabled={disabled}
          error={error}
          ref={ref}
          {...other}
          {...FormControlLabelProps}
        />

        {helperText ? (
          <FormHelperText
            disabled={disabled}
            error={error}
            id={helperTextId}
            {...FormHelperTextProps}
            className={clsx(
              classes['private-helperText'],
              FormHelperTextProps?.className
            )}
          >
            {helperText}
          </FormHelperText>
        ) : null}
      </div>
    );
  }
);

export default withStyles(styles, { name: 'MuiSpark_alpha_CheckboxField' })(
  CheckboxField
) as typeof CheckboxField;
