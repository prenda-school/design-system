import { createContext, MouseEvent } from 'react';

export interface DropdownContextValue {
  id: string;
  anchorEl: null | HTMLElement;
  open: (event: MouseEvent<HTMLElement>) => void;
  close: () => void;
  isOpen: boolean;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

if (process.env.NODE_ENV !== 'production') {
  DropdownContext.displayName = 'DropdownContext';
}

export default DropdownContext;
