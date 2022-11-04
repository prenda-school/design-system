import MuiDialog, {
  DialogProps as MuiDialogProps,
} from '@material-ui/core/Dialog';
import React, { forwardRef } from 'react';
import { Unstable_Cross } from '../internal';
import Unstable_IconButton, {
  Unstable_IconButtonProps,
} from '../Unstable_IconButton';
import Unstable_Paper from '../Unstable_Paper';
import withStyles, { Styles } from '../withStyles';
import { StandardProps } from '../utils';
import { Unstable_ModalProps } from '../Unstable_Modal';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_ModalDialogProps
  extends StandardProps<
    MuiDialogProps,
    Unstable_ModalDialogClassKey,
    'classes' | 'onClose'
  > {
  /**
   * Whether a close button should be shown at the top-right of the component.
   */
  closeable?: boolean;
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param event The event source of the callback.
   * @param reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"closeClick"`.
   */
  onClose?: Unstable_ModalProps['onClose'];
}

export type Unstable_ModalDialogClassKey =
  | 'root'
  | 'container'
  | 'paper'
  | 'closeButton';

const styles: Styles<Unstable_ModalDialogClassKey> = {
  root: {},
  closeButton: {
    position: 'absolute',
    top: 19,
    right: 24,
  },
  container: {},
  paper: {
    position: 'relative',
  },
};

const Unstable_ModalDialog = forwardRef<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  Unstable_ModalDialogProps
>(function Unstable_ModalDialog(props, ref) {
  const { children, classes, closeable, onClose, ...other } = props;

  const handleCloseClick: Unstable_IconButtonProps['onClick'] = (event) => {
    if (onClose) {
      onClose(event, 'closeClick');
    }
  };

  return (
    <MuiDialog
      classes={{
        root: classes.root,
        container: classes.container,
        paper: classes.paper,
      }}
      onClose={onClose}
      PaperComponent={Unstable_Paper}
      PaperProps={{ elevation: 300 }}
      ref={ref}
      {...other}
    >
      {closeable ? (
        <Unstable_IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={handleCloseClick}
          size="small"
          variant="ghost"
        >
          <Unstable_Cross />
        </Unstable_IconButton>
      ) : null}

      {children}
    </MuiDialog>
  );
});

export default withStyles(styles, {
  name: 'MuiSparkUnstable_ModalDialog',
})(Unstable_ModalDialog) as typeof Unstable_ModalDialog;
