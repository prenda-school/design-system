import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import React, { forwardRef } from 'react';
import type { StandardProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface ModalDialogActionsProps
  extends StandardProps<
    HTMLAttributes<HTMLDivElement>,
    ModalDialogActionsClassKey
  > {
  /**
   * The content of the component.
   */
  children?: ReactNode;
}

export type ModalDialogActionsClassKey = 'root';

const styles: Styles<ModalDialogActionsClassKey> = {
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

const ModalDialogActions = forwardRef<HTMLDivElement, ModalDialogActionsProps>(
  function ModalDialogActions(props, ref) {
    const { classes, className, ...other } = props;

    return (
      // @ts-expect-error ref??
      <div className={clsx(classes.root, className)} ref={ref} {...other} />
    );
  }
);

export default withStyles(styles, {
  name: 'MuiSpark_alpha_ModalDialogActions',
})(ModalDialogActions) as typeof ModalDialogActions;
