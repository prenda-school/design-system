import clsx from 'clsx';
import React, { forwardRef } from 'react';
import withStyles, { Styles } from '../withStyles';
import {
  Unstable_ModalDialogActionsClassKey,
  Unstable_ModalDialogActionsProps,
} from './Unstable_ModalDialogActionsProps';

const styles: Styles<Unstable_ModalDialogActionsClassKey> = {
  /* Styles applied to the root element. */
  root: {
    alignItems: 'center',
    display: 'flex',
    flex: '0 0 auto',
    gap: 8,
    justifyContent: 'flex-end',
    padding: '8px 24px 24px 24px',
  },
};

const Unstable_ModalDialogActions = forwardRef<
  HTMLDivElement,
  Unstable_ModalDialogActionsProps
>(function Unstable_ModalDialogActions(props, ref) {
  const { classes, className, ...other } = props;

  return (
    // @ts-expect-error ref??
    <div className={clsx(classes.root, className)} ref={ref} {...other} />
  );
});

export default withStyles(styles, {
  name: 'MuiSparkUnstable_ModalDialogActions',
})(Unstable_ModalDialogActions) as typeof Unstable_ModalDialogActions;
