import React, { forwardRef } from 'react';
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@material-ui/core/RadioGroup';
import Unstable_RadioGroupExtraContext from '../Unstable_RadioGroupExtraContext';
import { formControlState } from '../Unstable_FormControl';
import useFormControl from '../useFormControl';
import withStyles, { StyledComponentProps, Styles } from '../withStyles';

export interface Unstable_RadioGroupProps
  extends Omit<MuiRadioGroupProps, 'classes'>,
    StyledComponentProps<Unstable_RadioGroupClassKey> {
  /**
   * If `true`, then descendant controls (i.e. `input` elements) will be required.
   */
  required?: boolean;
}

export type Unstable_RadioGroupClassKey = 'root';

const styles: Styles<Unstable_RadioGroupClassKey> = {
  /* Styles applied to the root element. */
  root: {
    gap: 16,
    width: 'fit-content',
  },
};

const Unstable_RadioGroup = forwardRef<unknown, Unstable_RadioGroupProps>(
  function Unstable_RadioGroup(props, ref) {
    const {
      classes,
      id: idProp,
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
      <Unstable_RadioGroupExtraContext.Provider
        value={{ required: fcs.required }}
      >
        <MuiRadioGroup classes={{ root: classes.root }} ref={ref} {...other} />
      </Unstable_RadioGroupExtraContext.Provider>
    );
  }
);

export default withStyles(styles, { name: 'MuiSparkUnstable_RadioGroup' })(
  Unstable_RadioGroup
) as typeof Unstable_RadioGroup;
