import {
  OptionsObject as NotistackOptionsObject,
  useSnackbar as useNotistackSnackbar,
} from 'notistack';
import { useCallback } from 'react';
import { Unstable_ToastsContextValue } from '../Unstable_ToastsContext';

const useToasts_unstable = (): Unstable_ToastsContextValue => {
  const notistackSnackbar = useNotistackSnackbar();

  const close: Unstable_ToastsContextValue['close'] = useCallback(
    (id) => {
      notistackSnackbar.closeSnackbar(id);
    },
    [notistackSnackbar]
  );

  const closeAll: Unstable_ToastsContextValue['closeAll'] = useCallback(() => {
    notistackSnackbar.closeSnackbar();
  }, [notistackSnackbar]);

  const enqueue: Unstable_ToastsContextValue['enqueue'] = useCallback(
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

export default useToasts_unstable;
