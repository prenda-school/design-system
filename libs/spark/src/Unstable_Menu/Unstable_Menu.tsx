import React, { forwardRef } from 'react';
import MuiMenu, {
  MenuProps as MuiMenuProps,
  MenuClassKey as MuiMenuClassKey,
} from '@material-ui/core/Menu';
import { PaperProps as MuiPaperProps } from '@material-ui/core/Paper';
import Unstable_ListSubheader from '../Unstable_ListSubheader';
import { Unstable_ListProps } from '../Unstable_List';
import { StandardProps, useId } from '../utils';
import {
  Unstable_PaperProps,
  useUnstable_PaperStyles,
} from '../Unstable_Paper';
import clsx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_MenuProps
  extends StandardProps<
    MuiMenuProps,
    Unstable_MenuClassKey,
    'MenuListProps' | 'PaperProps'
  > {
  /**
   * Props applied to the `MenuList` element.
   */
  MenuListProps?: Omit<MuiMenuProps['MenuListProps'], 'subheader'> &
    Pick<Unstable_ListProps, 'ListSubheaderProps' | 'subheader'>;
  /**
   * Props applied to the `Paper` element.
   */
  PaperProps?: Partial<Omit<MuiPaperProps, 'elevation' | 'classes'>> &
    Partial<Pick<Unstable_PaperProps, 'elevation'>>;
}

export type Unstable_MenuClassKey = MuiMenuClassKey;

const Unstable_Menu = forwardRef<unknown, Unstable_MenuProps>(
  function Unstable_Menu(props, ref) {
    const {
      MenuListProps,
      PaperProps: { elevation = 400, ...PaperProps } = {},
      ...other
    } = props;

    const paperClasses = useUnstable_PaperStyles();

    const { ListSubheaderProps, subheader, ...otherMenuListProps } =
      MenuListProps || {};

    const subheaderId = useId(ListSubheaderProps?.id);

    return (
      <MuiMenu
        ref={ref}
        PaperProps={{
          ...PaperProps,
          className: clsx(
            PaperProps.className,
            paperClasses[`private-root-variant-elevation-${elevation}`]
          ),
          elevation: 0,
        }}
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
