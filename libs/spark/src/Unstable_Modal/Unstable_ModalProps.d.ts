import { ModalProps as MuiModalProps } from '@material-ui/core/Modal';

export interface Unstable_ModalProps extends Omit<MuiModalProps, 'onClose'> {
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"closeClick"`.
   */
  onClose?: {
    bivarianceHack(
      // eslint-disable-next-line @typescript-eslint/ban-types
      event: {},
      reason: 'backdropClick' | 'escapeKeyDown' | 'closeClick'
    ): void;
  }['bivarianceHack'];
}
