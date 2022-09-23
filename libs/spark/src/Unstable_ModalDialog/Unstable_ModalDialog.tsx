import MuiDialog from '@material-ui/core/Dialog';
import React, { forwardRef } from 'react';
import { Unstable_Cross } from '../internal';
import Unstable_IconButton, {
  Unstable_IconButtonProps,
} from '../Unstable_IconButton';
import {
  Unstable_ModalDialogClassKey,
  Unstable_ModalDialogProps,
} from './Unstable_ModalDialogProps';
import Unstable_Paper from '../Unstable_Paper';
import withStyles, { Styles } from '../withStyles';

const styles: Styles<Unstable_ModalDialogClassKey> = {
  root: {},
  closeButton: {
    position: 'absolute',
    top: 19,
    right: 24,
  },
  container: {},
  scrollPaper: {},
  scrollBody: {},
  paper: {
    position: 'relative',
  },
  paperScrollPaper: {},
  paperScrollBody: {},
  paperWidthFalse: {},
  paperWidthXs: {},
  paperWidthSm: {},
  paperWidthMd: {},
  paperWidthLg: {},
  paperWidthXl: {},
  paperFullWidth: {},
  paperFullScreen: {},
};

const Unstable_ModalDialog = forwardRef<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  Unstable_ModalDialogProps
>(function Unstable_ModalDialog(props, ref) {
  const { children, classes, closeable, onClose, ...other } = props;

  const { closeButton: closeButtonClass, ...muiClasses } = classes;

  const handleCloseClick: Unstable_IconButtonProps['onClick'] = (event) => {
    if (onClose) {
      onClose(event, 'closeClick');
    }
  };

  return (
    <MuiDialog
      classes={muiClasses}
      onClose={onClose}
      PaperComponent={Unstable_Paper}
      PaperProps={{ elevation: 3 }}
      ref={ref}
      {...other}
    >
      {closeable ? (
        <Unstable_IconButton
          aria-label="Close"
          className={closeButtonClass}
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
