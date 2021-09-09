import * as React from 'react';
import { useUniqueId } from './utils';

// This file is an adaption of Mui's TabContext.
// See https://github.com/mui-org/material-ui/blob/cd8aeb64a9038ae9cb8ecf1cd7fd8a2bfea2d6b6/packages/material-ui-lab/src/TabContext/TabContext.js

export interface DropdownContextValue {
  id: string;
  anchorEl: null | HTMLElement;
  openDropdown: (event: React.MouseEvent<HTMLElement>) => void;
  closeDropdown: () => void;
}

const Context = React.createContext<DropdownContextValue | null>(null);

if (process.env.NODE_ENV !== 'production') {
  Context.displayName = 'DropdownContext';
}

export interface DropdownContextProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
}

export default function DropdownContext(
  props: DropdownContextProps
): JSX.Element {
  const id = useUniqueId();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeDropdown = () => {
    setAnchorEl(null);
  };

  const value = React.useMemo(
    () => ({ id, anchorEl, openDropdown, closeDropdown }),
    [id, anchorEl]
  );

  return <Context.Provider value={value} {...props} />;
}

export function useDropdownContext(): DropdownContextValue | null {
  return React.useContext(Context);
}
