import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import Unstable_FormControlLabel, {
  Unstable_FormControlLabelProps,
} from '../Unstable_FormControlLabel';
import Unstable_FormHelperText, {
  Unstable_FormHelperTextProps,
} from '../Unstable_FormHelperText';
import Unstable_Checkbox from '../Unstable_Checkbox';
import { useId } from '../utils';
import withStyles, { StyledComponentProps, Styles } from '../withStyles';

export interface Unstable_CheckboxFieldProps
  extends Omit<Unstable_FormControlLabelProps, 'classes' | 'control'>,
    StyledComponentProps<Unstable_CheckboxFieldClassKey> {
  /**
   * If `true`, the component appears in an error state.
   */
  error?: boolean;
  /**
   * Props applied to the `FormControlLabel` element.
   */
  FormControlLabelProps?: Partial<Unstable_FormControlLabelProps>;
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
   * If `true`, the component appears in an indeterminate state.
   */
  indeterminate?: boolean;
}

export type Unstable_CheckboxFieldClassKey = 'root';

type PrivateClassKey = 'private-helperText';

const styles: Styles<Unstable_CheckboxFieldClassKey | PrivateClassKey> = {
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

const Unstable_CheckboxField = forwardRef<unknown, Unstable_CheckboxFieldProps>(
  function Unstable_CheckboxField(props, ref) {
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
          {...FormControlLabelProps}
        />

        {helperText ? (
          <Unstable_FormHelperText
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
          </Unstable_FormHelperText>
        ) : null}
      </div>
    );
  }
);

export default withStyles(styles, { name: 'MuiSparkUnstable_CheckboxField' })(
  Unstable_CheckboxField
) as typeof Unstable_CheckboxField;
