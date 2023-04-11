import { createContext } from 'react';

export interface SideBarContextValue_unstable {
  /**
   * Open the `SideBarDrawer`.
   */
  open: () => void;
  /**
   * Close the `SideBarDrawer`.
   */
  close: () => void;
  /**
   * Whether the `SideBarDrawer` is open.
   */
  isOpen: boolean;
  // /**
  //  * Call `close` when a `SideBarContext`-aware component, like `SideBarListItem` is clicked. Defaults to `true` on mobile, `false` otherwise (responsive).
  //  */
  // autoCloseResponsive: boolean
  // /**
  //  * Whether the `SideBarDrawerCloser` is shown.
  //  * @default `true` on tablet or mobile, `false` otherwise (responsive)
  //  */
  // showCloser: boolean
  // /**
  //  * Whether the `SideBarDrawerOpener` is shown.
  //  * @default `true` on mobile or on tablet when `isOpen={false}`, `false` otherwise (responsive)
  //  */
  // showOpener: boolean
  // /**
  //  * The variant of the descendant `SideBarDrawer`
  //  * @default "temporary" on mobile, "persistent" otherwise (responsive)
  //  */
  // variant: SideBarDrawerProps_unstable["variant"]
}

const SideBarContext_unstable =
  createContext<SideBarContextValue_unstable | null>(null);

if (process.env.NODE_ENV !== 'production') {
  SideBarContext_unstable.displayName = 'SideBarContext_unstable';
}

export default SideBarContext_unstable;
