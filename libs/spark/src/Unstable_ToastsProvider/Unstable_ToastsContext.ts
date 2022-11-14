import {
  OptionsObject as NotistackOptionsObject,
  SnackbarKey as NotistackSnackbarKey,
  useSnackbar as useNotistackSnackbar,
} from 'notistack';
import { ReactNode, useCallback } from 'react';
import { Unstable_ToastProps } from '../Unstable_Toast/Unstable_Toast';

export type Unstable_ToastId = NotistackSnackbarKey;

export interface Unstable_ToastsContext {
  /**
   * Dismiss a specific toast by its `id`, returned from `enqueue`.
   */
  close: (id: Unstable_ToastId) => void;
  /**
   * Dismiss all open toasts.
   */
  closeAll: () => void;
  /**
   * Add a toast to the queue to be displayed to the user.
   * @param children The children of the Toast.
   * @param options The options processed by Toasts and Toast.
   * @returns an id to reference that toast later on (i.e. dismiss it programmatically)
   */
  enqueue: (children: ReactNode, options?: EnqueueOptions) => Unstable_ToastId;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface EnqueueOptions
  extends Omit<
      NotistackOptionsObject,
      | 'action'
      | 'anchorOrigin'
      | 'key'
      | 'variant'
      | 'hideIconVariant'
      | 'content'
    >,
    Pick<Unstable_ToastProps, 'icon' | 'severity'> {
  /**
   * Whether a close button should be shown at the end of the component.
   */
  closeable?: boolean;
  /**
   * Unique identifier to reference a toast.
   */
  id?: Unstable_ToastId;
  /**
   * The placement of toast on the screen.
   * @default 'bottom-left'
   */
  placement?: 'bottom-left' | 'bottom-center' | 'bottom-right';
}

export const useToasts = (): Unstable_ToastsContext => {
  const notistackSnackbar = useNotistackSnackbar();

  const close: Unstable_ToastsContext['close'] = useCallback(
    (id) => {
      notistackSnackbar.closeSnackbar(id);
    },
    [notistackSnackbar]
  );

  const closeAll: Unstable_ToastsContext['closeAll'] = useCallback(() => {
    notistackSnackbar.closeSnackbar();
  }, [notistackSnackbar]);

  const enqueue: Unstable_ToastsContext['enqueue'] = useCallback(
    (children, options = {}) => {
      const { id, placement = 'bottom-left', ...other } = options;

      const anchorOrigin: NotistackOptionsObject['anchorOrigin'] =
        placement === 'bottom-center'
          ? { vertical: 'bottom', horizontal: 'center' }
          : placement === 'bottom-left'
          ? { vertical: 'bottom', horizontal: 'left' }
          : placement === 'bottom-right'
          ? { vertical: 'bottom', horizontal: 'right' }
          : { vertical: 'bottom', horizontal: 'left' };

      return notistackSnackbar.enqueueSnackbar({
        anchorOrigin,
        key: id,
        message: children as string,
        variant: 'default',
        ...other,
        hideIconVariant: true,
      });
    },
    [notistackSnackbar]
  );

  return { close, closeAll, enqueue };
};

export type Unstable_ToastsContextEnqueueOptions = EnqueueOptions;
