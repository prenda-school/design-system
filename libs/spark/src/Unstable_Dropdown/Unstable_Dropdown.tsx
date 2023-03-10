import React, {
  MouseEvent,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import Unstable_DropdownContext from '../Unstable_DropdownContext/Unstable_DropdownContext';
import { useUniqueId } from '../utils';

export interface Unstable_DropdownProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
}

export const Unstable_Dropdown = (
  props: Unstable_DropdownProps
): JSX.Element => {
  const id = useUniqueId();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const close = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const value = useMemo(
    () => ({
      id,
      anchorEl,
      isOpen: !!anchorEl,
      open,
      close,
    }),
    [id, anchorEl, open, close]
  );

  return <Unstable_DropdownContext.Provider value={value} {...props} />;
};

export default Unstable_Dropdown;
