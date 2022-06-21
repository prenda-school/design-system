import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import Unstable_FormControlLabel, {
  Unstable_FormControlLabelProps,
} from '../Unstable_FormControlLabel';
import Unstable_FormHelperText, {
  Unstable_FormHelperTextProps,
} from '../Unstable_FormHelperText';
import Unstable_Checkbox from '../Unstable_Checkbox';
import { useId } from '../utils';

export interface Unstable_CheckboxFieldProps
  extends Omit<Unstable_FormControlLabelProps, 'control'> {
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error?: boolean;
  /**
   * Props applied to the `FormHelperText` element.
   */
  FormHelperTextProps?: Partial<Unstable_FormHelperTextProps>;
  /**
   * The helper text content.
   */
  helperText?: ReactNode;
  /**
   * The `id` attribute of the `FormControlLabel` element.
   */
  id?: string;
  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate?: boolean;
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
  { name: 'MuiSparkUnstable_CheckboxField' }
);

const Unstable_CheckboxField = forwardRef<unknown, Unstable_CheckboxFieldProps>(
  function Unstable_CheckboxField(props, ref) {
    const {
      className,
      disabled,
      error,
      FormHelperTextProps,
      helperText,
      id: idProp,
      indeterminate,
      ...other
    } = props;

    const classes = useStyles();

    const id = useId(idProp);

    const helperTextId = helperText && id ? `${id}-helper-text` : undefined;

    return (
      <div className={clsx(className, classes.root)}>
        <Unstable_FormControlLabel
          control={
            <Unstable_Checkbox
              indeterminate={indeterminate}
              inputProps={{ 'aria-describedby': helperTextId }}
            />
          }
          disabled={disabled}
          error={error}
          ref={ref}
          {...other}
        />

        {helperText ? (
          <Unstable_FormHelperText
            disabled={disabled}
            error={error}
            id={helperTextId}
            {...FormHelperTextProps}
            className={clsx(classes.helperText, FormHelperTextProps?.className)}
          >
            {helperText}
          </Unstable_FormHelperText>
        ) : null}
      </div>
    );
  }
);

export default Unstable_CheckboxField;
