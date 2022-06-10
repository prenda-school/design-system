import React, { forwardRef, RefObject } from 'react';
import MuiInputLabel, {
  InputLabelProps as MuiInputLabelProps,
} from '@material-ui/core/InputLabel';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_InputLabelProps
  extends Omit<
      MuiInputLabelProps,
      | 'classes'
      | 'color'
      | 'disableAnimation'
      | 'filled'
      | 'margin'
      | 'shrink'
      | 'variant'
    >,
    StyledComponentProps<Unstable_InputLabelClassKey> {}

export type Unstable_InputLabelClassKey = 'root';

const useStyles = makeStyles<Unstable_InputLabelClassKey>(
  (theme) => ({
    root: {
      ...theme.unstable_typography.label,
      color: theme.unstable_palette.neutral[600],
      marginBottom: 4,
      marginLeft: 4, // match margin of Input
      '&.Mui-disabled': {
        color: theme.unstable_palette.neutral[100],
      },
      '&.Mui-error': {
        color: theme.unstable_palette.neutral[600],
      },
      '&.Mui-focused': {
        color: theme.unstable_palette.neutral[600],
      },
      // underlying class
      '&.MuiInputLabel-formControl': {
        transform: 'none',
        position: 'relative',
      },
    },
  }),
  { name: 'MuiSparkUnstable_InputLabel' }
);

const Unstable_InputLabel = forwardRef(function Unstable_InputLabel(
  props: Unstable_InputLabelProps,
  ref: RefObject<HTMLLabelElement>
) {
  const { classes: classesProp, ...other } = props;

  const classes = useStyles();

  return (
    <MuiInputLabel
      classes={{ root: clsx(classes.root, classesProp?.root) }}
      disableAnimation
      ref={ref}
      {...other}
      shrink={false}
    />
  );
});

export default Unstable_InputLabel;
