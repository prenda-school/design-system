import {
  CustomContentProps as NotistackCustomContentProps,
  SnackbarProvider as NotistackSnackbarProvider,
  SnackbarProviderProps as NotistackSnackbarProviderProps,
} from 'notistack';
import React, { forwardRef, JSXElementConstructor } from 'react';
import Toast, { ToastProps } from '../Toast';
import useToasts from '../useToasts';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToastsProviderProps
  extends Omit<
    NotistackSnackbarProviderProps,
    'Components' | 'dense' | 'iconVariant' | 'maxSnack'
  > {
  /**
   * Mapping between a variant and custom component.
   */
  Components?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: JSXElementConstructor<any>;
  };
  /**
   * The limit of toasts that can be stacked on top of one another.
   * @default 3
   */
  limit?: number;
}

const Default = forwardRef<
  unknown,
  NotistackCustomContentProps & {
    closeable?: boolean;
  }
>((props, ref) => {
  const {
    action,
    anchorOrigin,
    autoHideDuration,
    closeable,
    hideIconVariant,
    id,
    iconVariant,
    message,
    persist,
    variant,
    ...other
  } = props;

  const toasts = useToasts();

  const onClose: ToastProps['onClose'] = closeable
    ? () => {
        toasts.close(id);
      }
    : undefined;

  return (
    <Toast ref={ref} onClose={onClose} {...other}>
      {message}
    </Toast>
  );
});

function ToastsProvider(props: ToastsProviderProps) {
  const { Components, limit, ...other } = props;

  return (
    <NotistackSnackbarProvider
      Components={{ default: Default, ...Components }}
      maxSnack={limit}
      {...other}
    />
  );
}

export default ToastsProvider;
