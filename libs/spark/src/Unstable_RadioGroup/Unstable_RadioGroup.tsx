import React, { forwardRef } from 'react';
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@material-ui/core/RadioGroup';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';

export interface Unstable_RadioGroupProps
  extends Omit<MuiRadioGroupProps, 'classes'>,
    StyledComponentProps<Unstable_RadioGroupClassKey> {}

export type Unstable_RadioGroupClassKey = 'root';

const useStyles = makeStyles<Unstable_RadioGroupClassKey>(
  {
    /** Styles applied to the root element. */
    root: {
      gap: 16,
      width: 'fit-content',
    },
  },
  { name: 'MuiSparkUnstable_RadioGroup' }
);

const Unstable_RadioGroup = forwardRef<
  HTMLDivElement,
  Unstable_RadioGroupProps
>(function Unstable_RadioGroup(props, ref) {
  const { classes: classesProp, ...other } = props;

  const classes = useStyles();

  return (
    <MuiRadioGroup
      classes={{ root: clsx(classes.root, classesProp?.root) }}
      ref={ref}
      {...other}
    />
  );
});

export default Unstable_RadioGroup;
