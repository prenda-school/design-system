import React, { forwardRef } from 'react';
import MuiMenu, {
  MenuProps as MuiMenuProps,
  MenuClassKey as MuiMenuClassKey,
} from '@material-ui/core/Menu';
import ListSubheader from '../ListSubheader';
import { ListProps } from '../List';
import { StandardProps, useId } from '../../utils';
import { PaperProps, usePaperStyles } from '../Paper';
import clsx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenuProps
  extends StandardProps<
    Omit<MuiMenuProps, 'open'>,
    MenuClassKey,
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
    Pick<ListProps, 'ListSubheaderProps' | 'subheader'>;
  /**
   * Props applied to the `Paper` element.
   */
  PaperProps?: Partial<PaperProps>;
}

export type MenuClassKey = MuiMenuClassKey;

const Menu = forwardRef<unknown, MenuProps>(function Menu(props, ref) {
  const { MenuListProps, open = false, PaperProps = {}, ...other } = props;

  const {
    bgcolor: bgcolorPaperProp = 'default',
    border: borderPaperProp = 'none',
    className: classNamePaperProp,
    radius: radiusPaperProp = 'sm',
    shadow: shadowPaperProp = 'E400',
    ...otherPaperProps
  } = PaperProps;

  const paperClasses = usePaperStyles();

  const { ListSubheaderProps, subheader, ...otherMenuListProps } =
    MenuListProps || {};

  const subheaderId = useId(ListSubheaderProps?.id);

  return (
    <MuiMenu
      ref={ref}
      PaperProps={{
        ...otherPaperProps,
        className: clsx(
          paperClasses.root,
          paperClasses[`private-root-bgcolor-${bgcolorPaperProp}`],
          paperClasses[`private-root-border-${borderPaperProp}`],
          paperClasses[`private-root-radius-${radiusPaperProp}`],
          paperClasses[`private-root-shadow-${shadowPaperProp}`],
          classNamePaperProp
        ),
      }}
      open={open}
      MenuListProps={{
        subheader: subheader ? (
          <ListSubheader id={subheaderId} {...ListSubheaderProps}>
            {subheader}
          </ListSubheader>
        ) : undefined,
        ...(subheader && { 'aria-labelledby': subheaderId }),
        ...otherMenuListProps,
      }}
      {...other}
    />
  );
});

export default Menu;
