import type {
  DialogProps as MuiDialogProps,
} from '@material-ui/core/Dialog';
import MuiDialog from '@material-ui/core/Dialog';
import type { ComponentType} from 'react';
import React, { forwardRef } from 'react';
import { Cross } from '../../internal';
import type { IconButtonProps } from '../IconButton';
import IconButton from '../IconButton';
import type { PaperProps } from '../Paper';
import Paper from '../Paper';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';
import type { StandardProps } from '../../utils';
import type { ModalProps } from '../Modal';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ModalDialogProps
  extends StandardProps<
    MuiDialogProps,
    ModalDialogClassKey,
    'classes' | 'onClose' | 'PaperComponent' | 'PaperProps'
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
  onClose?: ModalProps['onClose'];
  PaperComponent?: ComponentType<PaperProps>;
  PaperProps?: Partial<PaperProps>;
}

export type ModalDialogClassKey =
  | 'root'
  | 'container'
  | 'paper'
  | 'closeButton';

const styles: Styles<ModalDialogClassKey> = {
  root: {},
  closeButton: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  container: {},
  paper: {
    position: 'relative',
  },
};

const ModalDialog = forwardRef<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  ModalDialogProps
>(function ModalDialog(props, ref) {
  const { children, classes, closeable, onClose, ...other } = props;

  const handleCloseClick: IconButtonProps['onClick'] = (event) => {
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
      PaperComponent={Paper}
      PaperProps={{
        // @ts-expect-error TS doesn't know that it should be `PaperProps`
        radius: 'sm',
        shadow: 'E300',
      }}
      ref={ref}
      {...other}
    >
      {closeable ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={handleCloseClick}
          size="small"
          variant="ghost"
        >
          <Cross />
        </IconButton>
      ) : null}

      {children}
    </MuiDialog>
  );
});

export default withStyles(styles, {
  name: 'MuiSpark_alpha_ModalDialog',
})(ModalDialog) as typeof ModalDialog;
