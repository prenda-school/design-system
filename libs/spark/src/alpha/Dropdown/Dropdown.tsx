import React, {
  MouseEvent,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import DropdownContext from '../DropdownContext/DropdownContext';
import { useUniqueId } from '../../utils';

export interface DropdownProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
}

const Dropdown = (props: DropdownProps): JSX.Element => {
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

  return <DropdownContext.Provider value={value} {...props} />;
};

export default Dropdown;
