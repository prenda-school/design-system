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
import SideBarContext_unstable, {
  SideBarContextValue_unstable,
} from '../SideBarContext_unstable';
import useMediaQuery_unstable from '../useMediaQuery_unstable';
import { StandardProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface SideBarProviderProps_unstable
  extends StandardProps<
      HTMLAttributes<HTMLDivElement>,
      SideBarProviderClassKey_unstable,
      'children'
    >,
    Partial<SideBarContextValue_unstable> {
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

export type SideBarProviderClassKey_unstable = 'root';

const styles: Styles<SideBarProviderClassKey_unstable> = (theme) => ({
  root: {
    backgroundColor: theme.unstable_palette.background.default,
    display: 'flex',
  },
});

const UnstyledSideBarProvider_unstable = forwardRef<
  HTMLDivElement,
  SideBarProviderProps_unstable
>(function SideBarProvider_unstable(props, ref) {
  const {
    classes: classesProp,
    className,
    isOpen: isOpenProp,
    onOpen,
    onClose,
    ...other
  } = props;

  const classes = classesProp as Exclude<typeof classesProp, undefined>;

  const isTabletOrMobile = useMediaQuery_unstable((theme) =>
    theme.breakpoints.down('md')
  );
  const isMobile = useMediaQuery_unstable(
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
    <SideBarContext_unstable.Provider value={value}>
      <div className={clsx(classes.root, className)} {...other} ref={ref} />
    </SideBarContext_unstable.Provider>
  );
});

const SideBarProvider_unstable = withStyles(styles, {
  name: 'MuiSparkSideBarProvider_unstable',
})(UnstyledSideBarProvider_unstable) as typeof UnstyledSideBarProvider_unstable;

export default SideBarProvider_unstable;
