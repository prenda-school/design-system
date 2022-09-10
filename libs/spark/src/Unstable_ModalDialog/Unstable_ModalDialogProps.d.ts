import {
  DialogClassKey as MuiDialogClassKey,
  DialogProps as MuiDialogProps,
} from '@material-ui/core/Dialog';
import { Unstable_ModalProps } from '../Unstable_Modal';
import { StandardProps } from '../utils';

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

export type Unstable_ModalDialogClassKey = MuiDialogClassKey | 'closeButton';
