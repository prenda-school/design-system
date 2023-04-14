import React, { forwardRef } from 'react';
import type {
  RadioGroupProps as MuiRadioGroupProps,
} from '@material-ui/core/RadioGroup';
import MuiRadioGroup from '@material-ui/core/RadioGroup';
import RadioGroupExtraContext from '../RadioGroupExtraContext';
import { formControlState } from '../FormControl';
import useFormControl from '../useFormControl';
import type { StyledComponentProps, Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface RadioGroupProps
  extends Omit<MuiRadioGroupProps, 'classes'>,
    StyledComponentProps<RadioGroupClassKey> {
  /**
   * If `true`, then descendant controls (i.e. `input` elements) will be required.
   */
  required?: boolean;
}

export type RadioGroupClassKey = 'root';

const styles: Styles<RadioGroupClassKey> = {
  /* Styles applied to the root element. */
  root: {
    gap: 16,
    width: 'fit-content',
  },
};

const RadioGroup = forwardRef<unknown, RadioGroupProps>(function RadioGroup(
  props,
  ref
) {
  const {
    classes,
    // underscored props will be processed directly from `props` by `formControlState` below
    required: _required,
    ...other
  } = props;

  const fc = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl: fc,
    states: ['error', 'required'],
  });

  return (
    <RadioGroupExtraContext.Provider value={{ required: fcs.required }}>
      <MuiRadioGroup classes={{ root: classes.root }} ref={ref} {...other} />
    </RadioGroupExtraContext.Provider>
  );
});

export default withStyles(styles, { name: 'MuiSpark_alpha_RadioGroup' })(
  RadioGroup
) as typeof RadioGroup;
