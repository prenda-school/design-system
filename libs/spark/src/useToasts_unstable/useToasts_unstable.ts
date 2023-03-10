import {
  OptionsObject as NotistackOptionsObject,
  useSnackbar as useNotistackSnackbar,
} from 'notistack';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Unstable_ToastsContextValue } from '../Unstable_ToastsContext';
import { _Enqueue } from '../Unstable_ToastsContext/Unstable_ToastsContext';

const useToasts_unstable = (): Unstable_ToastsContextValue => {
  const _notistackSnackbar = useNotistackSnackbar();

  const notistackSnackbarRef = useRef(_notistackSnackbar);
  useEffect(() => {
    notistackSnackbarRef.current = _notistackSnackbar;
  });

  const close: Unstable_ToastsContextValue['close'] = useCallback((id) => {
    notistackSnackbarRef.current.closeSnackbar(id);
  }, []);

  const closeAll: Unstable_ToastsContextValue['closeAll'] = useCallback(() => {
    notistackSnackbarRef.current.closeSnackbar();
  }, []);

  const _enqueue: _Enqueue = useCallback((children, options = {}) => {
    const { id, placement = 'bottom-center', ...other } = options;

    const anchorOrigin: NotistackOptionsObject['anchorOrigin'] =
      placement === 'bottom-center'
        ? { vertical: 'bottom', horizontal: 'center' }
        : placement === 'bottom-left'
        ? { vertical: 'bottom', horizontal: 'left' }
        : placement === 'bottom-right'
        ? { vertical: 'bottom', horizontal: 'right' }
        : { vertical: 'bottom', horizontal: 'center' };

    return notistackSnackbarRef.current.enqueueSnackbar({
      anchorOrigin,
      key: id,
      message: children as string,
      variant: 'default',
      ...other,
      hideIconVariant: true,
    });
  }, []);

  const value = useMemo(() => {
    const enqueue = _enqueue as Unstable_ToastsContextValue['enqueue'];
    enqueue.error = (children, options = {}) =>
      enqueue(children, { severity: 'error', ...options });
    enqueue.info = (children, options = {}) =>
      enqueue(children, { severity: 'info', ...options });
    enqueue.success = (children, options = {}) =>
      enqueue(children, { severity: 'success', ...options });
    enqueue.warning = (children, options = {}) =>
      enqueue(children, { severity: 'warning', ...options });

    return { close, closeAll, enqueue };
  }, [close, closeAll, _enqueue]);

  return value;
};

export default useToasts_unstable;
