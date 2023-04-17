import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { SideBarContextValue } from '../SideBarContext';
import SideBarContext from '../SideBarContext';
import useMediaQuery from '../useMediaQuery';
import type { StandardProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface SideBarProviderProps
  extends StandardProps<
      HTMLAttributes<HTMLDivElement>,
      SideBarProviderClassKey,
      'children'
    >,
    Partial<SideBarContextValue> {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Whether the side bar drawer is open.
   */
  isOpen?: boolean;
  /**
   * Callback fired when the side bar is opened.
   */
  onOpen?: () => void;
  /**
   * Callback fired when the side bar is closed.
   */
  onClose?: () => void;
}

export type SideBarProviderClassKey = 'root';

const styles: Styles<SideBarProviderClassKey> = (theme) => ({
  root: {
    backgroundColor: theme.palette_alpha.background.default,
    display: 'flex',
  },
});

const UnstyledSideBarProvider = forwardRef<
  HTMLDivElement,
  SideBarProviderProps
>(function SideBarProvider(props, ref) {
  const {
    classes: classesProp,
    className,
    isOpen: isOpenProp,
    onOpen,
    onClose,
    ...other
  } = props;

  const classes = classesProp as Exclude<typeof classesProp, undefined>;

  // media query returns `false` initially, even when the query is true. see https://github.com/mui/material-ui/issues/21142
  // ~ >= tablet
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'), {
    noSsr: true, // prevent inaccurate initial value
  });
  // ~ <= mobile
  const isXsDown = useMediaQuery(
    (theme) => theme.breakpoints.down('xs'),
    { noSsr: true } // prevent inaccurate initial value
  );

  // start closed on mobile, unless consumer says otherwise
  const [isOpenState, setIsOpenState] = useState(
    isOpenProp !== undefined ? isOpenProp : !isXsDown
  );
  // if prop is provided, always use it, otherwise use state (i.e. controlled vs uncontrolled)
  const isOpen = isOpenProp !== undefined ? isOpenProp : isOpenState;

  const open = useCallback(() => {
    setIsOpenState(true);
    onOpen?.();
  }, [setIsOpenState, onOpen]);

  const close = useCallback(() => {
    setIsOpenState(false);
    onClose?.();
  }, [setIsOpenState, onClose]);

  // close when transitioning to mobile
  useEffect(() => {
    if (!isXsDown) {
      return;
    }

    close();
  }, [isXsDown, close, open]);

  // open when transitioning to tablet/desktop
  useEffect(() => {
    if (!isMdUp) {
      return;
    }

    open();
  }, [isMdUp, open]);

  const value = useMemo(() => ({ close, open, isOpen }), [close, open, isOpen]);

  return (
    <SideBarContext.Provider value={value}>
      <div className={clsx(classes.root, className)} {...other} ref={ref} />
    </SideBarContext.Provider>
  );
});

const SideBarProvider = withStyles(styles, {
  name: 'MuiSpark_alpha_SideBarProvider',
})(UnstyledSideBarProvider) as typeof UnstyledSideBarProvider;

export default SideBarProvider;
