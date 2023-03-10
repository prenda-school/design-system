import { createContext, MouseEvent } from 'react';

export interface Unstable_DropdownContextValue {
  id: string;
  anchorEl: null | HTMLElement;
  open: (event: MouseEvent<HTMLElement>) => void;
  close: () => void;
  isOpen: boolean;
}

const Unstable_DropdownContext =
  createContext<Unstable_DropdownContextValue | null>(null);

if (process.env.NODE_ENV !== 'production') {
  Unstable_DropdownContext.displayName = 'DropdownContext';
}

export default Unstable_DropdownContext;
