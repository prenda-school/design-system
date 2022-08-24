import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import Unstable_FormControlLabel, {
  Unstable_FormControlLabelProps,
} from '../Unstable_FormControlLabel';
import Unstable_FormHelperText, {
  Unstable_FormHelperTextProps,
} from '../Unstable_FormHelperText';
import Unstable_Radio from '../Unstable_Radio/Unstable_Radio';
import { useId } from '../utils';

export interface Unstable_RadioFieldProps
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
  { name: 'MuiSparkUnstable_RadioField' }
);

const Unstable_RadioField = forwardRef<unknown, Unstable_RadioFieldProps>(
  function Unstable_RadioField(props, ref) {
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
        <Unstable_FormControlLabel
          control={
            <Unstable_Radio inputProps={{ 'aria-describedby': helperTextId }} />
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

export default Unstable_RadioField;
