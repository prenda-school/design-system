import clsx from 'clsx';
import React, {
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import SideBarContext, { SideBarContextValue } from '../SideBarContext';
import useMediaQuery from '../useMediaQuery';
import { StandardProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';

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

  const isTabletOrMobile = useMediaQuery((theme) =>
    theme.breakpoints.down('md')
  );
  const isMobile = useMediaQuery(
    (theme) => theme.breakpoints.down('xs'),
    // prevent media query returning `false` initially, even when the query is true. see https://github.com/mui/material-ui/issues/21142
    { noSsr: true }
  );

  // start closed on mobile, unless consumer says otherwise
  const [isOpen, setIsOpen] = useState(
    isOpenProp !== undefined ? isOpenProp : !isMobile
  );

  const open = useCallback(() => {
    setIsOpen(true);
    onOpen?.();
  }, [setIsOpen, onOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [setIsOpen, onClose]);

  useEffect(() => {
    if (isOpenProp !== undefined) {
      return;
    }

    if (isMobile) {
      close();
    } else {
      open();
    }
  }, [isOpenProp, isMobile, close, open]);

  useEffect(() => {
    if (isOpenProp !== undefined) {
      return;
    }

    if (!isTabletOrMobile) {
      open();
    }
  }, [isOpenProp, isTabletOrMobile, open]);

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
