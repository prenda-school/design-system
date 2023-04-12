import { createContext } from 'react';

export interface SideBarContextValue {
  /**
   * Open the side bar drawer.
   */
  open: () => void;
  /**
   * Close the side bar drawer.
   */
  close: () => void;
  /**
   * Whether the side bar drawer is open.
   */
  isOpen: boolean;
}

const SideBarContext = createContext<SideBarContextValue | null>(null);

if (process.env.NODE_ENV !== 'production') {
  SideBarContext.displayName = 'SideBarContext';
}

export default SideBarContext;
