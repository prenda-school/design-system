import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import Unstable_FormControlLabel, {
  Unstable_FormControlLabelProps,
} from '../Unstable_FormControlLabel';
import Unstable_FormHelperText, {
  Unstable_FormHelperTextProps,
} from '../Unstable_FormHelperText';
import Unstable_Switch from '../Unstable_Switch/Unstable_Switch';
import { useId } from '../utils';

export interface Unstable_SwitchFieldProps
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

const useStyles = makeStyles(
  {
    /** Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 4,
    },
    /** Styles applied to the root element when `fullWidth={true}`. */
    fullWidth: {
      width: '100%',
    },
    /** Styles applied to the form control element. */
    formControl: {
      justifyContent: 'space-between',
    },
    /** Styles applied to the helper text element. */
    helperText: {},
  },
  { name: 'MuiSparkUnstable_SwitchField' }
);

const Unstable_SwitchField = forwardRef<unknown, Unstable_SwitchFieldProps>(
  function Unstable_SwitchField(props, ref) {
    const {
      className,
      disabled,
      error,
      FormHelperTextProps,
      fullWidth = false,
      helperText,
      id: idProp,
      ...other
    } = props;

    const classes = useStyles();

    const id = useId(idProp);

    const helperTextId = helperText && id ? `${id}-helper-text` : undefined;

    return (
      <div
        className={clsx(
          classes.root,
          {
            [classes.fullWidth]: fullWidth,
          },
          className
        )}
      >
        <Unstable_FormControlLabel
          className={clsx(classes.formControl)}
          control={
            <Unstable_Switch
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

export default Unstable_SwitchField;
