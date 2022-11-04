import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import Unstable_FormControlLabel, {
  Unstable_FormControlLabelProps,
} from '../Unstable_FormControlLabel';
import Unstable_FormHelperText, {
  Unstable_FormHelperTextProps,
} from '../Unstable_FormHelperText';
import Unstable_Radio from '../Unstable_Radio/Unstable_Radio';
import { useId } from '../utils';
import withStyles, { StyledComponentProps, Styles } from '../withStyles';

export interface Unstable_RadioFieldProps
  extends Omit<Unstable_FormControlLabelProps, 'classes' | 'control'>,
    StyledComponentProps<Unstable_RadioFieldClassKey> {
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

type Unstable_RadioFieldClassKey = 'root' | 'helperText';

const styles: Styles<Unstable_RadioFieldClassKey> = {
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

const Unstable_RadioField = forwardRef<unknown, Unstable_RadioFieldProps>(
  function Unstable_RadioField(props, ref) {
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

export default withStyles(styles, { name: 'MuiSparkUnstable_RadioField' })(
  Unstable_RadioField
) as typeof Unstable_RadioField;
