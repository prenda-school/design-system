import React, { forwardRef } from 'react';
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@material-ui/core/RadioGroup';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';
import { formControlState, useFormControl } from '../FormControl';
import RadioGroupMoreContext from './RadioGroupMoreContext';

export interface RadioGroupProps
  extends Omit<MuiRadioGroupProps, 'classes'>,
    StyledComponentProps<RadioGroupClassKey> {
  /**
   * If `true`, then descendant controls (i.e. `input` elements) will be required.
   */
  required?: boolean;
}

export type RadioGroupClassKey = 'root';

const useStyles = makeStyles<RadioGroupClassKey>(
  {
    /* Styles applied to the root element. */
    root: {
      gap: 16,
      width: 'fit-content',
    },
  },
  { name: 'MuiPDSRadioGroup' }
);

const RadioGroup = forwardRef<unknown, RadioGroupProps>(function RadioGroup(
  props,
  ref
) {
  const {
    classes: classesProp,
    id: idProp,
    // underscored props will be processed directly from `props` by `formControlState` below
    required: _required,
    ...other
  } = props;

  const classes = useStyles();

  const fc = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl: fc,
    states: ['error', 'required'],
  });

  return (
    <RadioGroupMoreContext.Provider value={{ required: fcs.required }}>
      <MuiRadioGroup
        classes={{ root: clsx(classes.root, classesProp?.root) }}
        ref={ref}
        {...other}
      />
    </RadioGroupMoreContext.Provider>
  );
});

export default RadioGroup;
