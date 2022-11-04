import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import Unstable_FormControlLabel, {
  Unstable_FormControlLabelProps,
} from '../Unstable_FormControlLabel';
import Unstable_FormHelperText, {
  Unstable_FormHelperTextProps,
} from '../Unstable_FormHelperText';
import Unstable_Switch from '../Unstable_Switch/Unstable_Switch';
import { useId } from '../utils';
import withStyles, { StyledComponentProps, Styles } from '../withStyles';

export interface Unstable_SwitchFieldProps
  extends Omit<Unstable_FormControlLabelProps, 'classes' | 'control'>,
    StyledComponentProps<Unstable_SwitchFieldClassKey> {
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

type Unstable_SwitchFieldClassKey = 'root' | 'formControl' | 'helperText';

type PrivateClassKey = 'private-root-fullWidth';

const styles: Styles<Unstable_SwitchFieldClassKey | PrivateClassKey> = {
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
};

const Unstable_SwitchField = forwardRef<unknown, Unstable_SwitchFieldProps>(
  function Unstable_SwitchField(props, ref) {
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
        <Unstable_FormControlLabel
          className={classes.formControl}
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

export default withStyles(styles, { name: 'MuiSparkUnstable_SwitchField' })(
  Unstable_SwitchField
) as typeof Unstable_SwitchField;
