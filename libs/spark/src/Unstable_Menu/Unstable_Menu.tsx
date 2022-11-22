import React, { forwardRef } from 'react';
import MuiMenu, {
  MenuProps as MuiMenuProps,
  MenuClassKey as MuiMenuClassKey,
} from '@material-ui/core/Menu';
import Unstable_ListSubheader from '../Unstable_ListSubheader';
import { Unstable_ListProps } from '../Unstable_List';
import { StandardProps, useId } from '../utils';
import {
  Unstable_PaperProps,
  usePaperStyles_unstable,
} from '../Unstable_Paper';
import clsx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_MenuProps
  extends StandardProps<
    Omit<MuiMenuProps, 'open'>,
    Unstable_MenuClassKey,
    'MenuListProps' | 'PaperProps'
  > {
  /**
   * Whether the menu is visible.
   */
  open?: boolean;
  /**
   * Props applied to the `MenuList` element.
   */
  MenuListProps?: Omit<MuiMenuProps['MenuListProps'], 'subheader'> &
    Pick<Unstable_ListProps, 'ListSubheaderProps' | 'subheader'>;
  /**
   * Props applied to the `Paper` element.
   */
  PaperProps?: Partial<Unstable_PaperProps>;
}

export type Unstable_MenuClassKey = MuiMenuClassKey;

const Unstable_Menu = forwardRef<unknown, Unstable_MenuProps>(
  function Unstable_Menu(props, ref) {
    const { MenuListProps, open = false, PaperProps = {}, ...other } = props;

    const {
      bgcolor: bgcolorPaperProp = 'default',
      border: borderPaperProp = 'none',
      className: classNamePaperProp,
      radius: radiusPaperProp = 'sm',
      shadow: shadowPaperProp = 'E400',
      ...otherPaperProps
    } = PaperProps;

    const paperClasses_unstable = usePaperStyles_unstable();

    const { ListSubheaderProps, subheader, ...otherMenuListProps } =
      MenuListProps || {};

    const subheaderId = useId(ListSubheaderProps?.id);

    return (
      <MuiMenu
        ref={ref}
        PaperProps={{
          ...otherPaperProps,
          className: clsx(
            paperClasses_unstable.root,
            paperClasses_unstable[`private-root-bgcolor-${bgcolorPaperProp}`],
            paperClasses_unstable[`private-root-border-${borderPaperProp}`],
            paperClasses_unstable[`private-root-radius-${radiusPaperProp}`],
            paperClasses_unstable[`private-root-shadow-${shadowPaperProp}`],
            classNamePaperProp
          ),
        }}
        open={open}
        MenuListProps={{
          subheader: subheader ? (
            <Unstable_ListSubheader id={subheaderId} {...ListSubheaderProps}>
              {subheader}
            </Unstable_ListSubheader>
          ) : undefined,
          ...(subheader && { 'aria-labelledby': subheaderId }),
          ...otherMenuListProps,
        }}
        {...other}
      />
    );
  }
);

export default Unstable_Menu;
