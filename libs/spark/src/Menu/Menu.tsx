import React, { forwardRef } from 'react';
import MuiMenu, {
  MenuProps as MuiMenuProps,
  MenuClassKey as MuiMenuClassKey,
} from '@material-ui/core/Menu';
import ListSubheader from '../ListSubheader';
import { ListProps } from '../List';
import { StandardProps, useId } from '../utils';
import { usePaperStyles } from '../Paper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenuProps
  extends StandardProps<MuiMenuProps, MenuClassKey, 'MenuListProps'> {
  /**
   * Props applied to the `MenuList` element.
   */
  MenuListProps?: Omit<MuiMenuProps['MenuListProps'], 'subheader'> &
    Pick<ListProps, 'ListSubheaderProps' | 'subheader'>;
}

export type MenuClassKey = MuiMenuClassKey;

const Menu = forwardRef<unknown, MenuProps>(function Menu(props, ref) {
  const { MenuListProps, PaperProps, ...other } = props;

  const paperClasses = usePaperStyles();

  const { ListSubheaderProps, subheader, ...otherMenuListProps } =
    MenuListProps || {};

  const subheaderId = useId(ListSubheaderProps?.id);

  return (
    <MuiMenu
      ref={ref}
      PaperProps={{
        elevation: 4,
        ...PaperProps,
        classes: paperClasses,
      }}
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
