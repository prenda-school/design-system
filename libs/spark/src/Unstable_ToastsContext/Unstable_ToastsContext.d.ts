import {
  OptionsObject as NotistackOptionsObject,
  SnackbarKey as NotistackSnackbarKey,
} from 'notistack';
import { ReactNode } from 'react';
import { Unstable_ToastProps } from '../Unstable_Toast/Unstable_Toast';

export type Unstable_ToastId = NotistackSnackbarKey;

export interface Unstable_ToastsContextValue {
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
  enqueue: ConvenienceEnqueue;
}

export type _Enqueue = (
  children: ReactNode,
  options?: EnqueueOptions
) => Unstable_ToastId;

type ConvenienceEnqueue = {
  (children: ReactNode, options?: EnqueueOptions): Unstable_ToastId;
  error: _Enqueue;
  info: _Enqueue;
  success: _Enqueue;
  warning: _Enqueue;
};

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

export type Unstable_ToastsContextEnqueueOptions = EnqueueOptions;
