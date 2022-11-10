import React, {
  createContext,
  MouseEvent,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useUniqueId } from '../utils';

// This file is an adaption of Mui's TabContext.
// See https://github.com/mui-org/material-ui/blob/cd8aeb64a9038ae9cb8ecf1cd7fd8a2bfea2d6b6/packages/material-ui-lab/src/TabContext/TabContext.js

export interface DropdownContextValue {
  id: string;
  anchorEl: null | HTMLElement;
  openDropdown: (event: MouseEvent<HTMLElement>) => void;
  closeDropdown: () => void;
  isOpen: boolean;
}

const Context = createContext<DropdownContextValue | null>(null);

if (process.env.NODE_ENV !== 'production') {
  Context.displayName = 'DropdownContext';
}

export interface DropdownContextProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
}

export default function DropdownContext(
  props: DropdownContextProps
): JSX.Element {
  const id = useUniqueId();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openDropdown = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeDropdown = () => {
    setAnchorEl(null);
  };

  const value = useMemo(
    () => ({ id, anchorEl, isOpen: !!anchorEl, openDropdown, closeDropdown }),
    [id, anchorEl]
  );

  return <Context.Provider value={value} {...props} />;
}

export function useDropdownContext(): DropdownContextValue | null {
  return useContext(Context);
}
