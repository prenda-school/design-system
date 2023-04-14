import React, { forwardRef } from 'react';
import type {
  MenuProps as MuiMenuProps,
  MenuClassKey as MuiMenuClassKey,
} from '@material-ui/core/Menu';
import MuiMenu from '@material-ui/core/Menu';
import ListSubheader from '../ListSubheader';
import type { ListProps } from '../List';
import type { StandardProps} from '../../utils';
import { useId } from '../../utils';
import type { PaperProps} from '../Paper';
import { usePaperStyles } from '../Paper';
import clsx from 'clsx';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

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

const styles: Styles<MenuClassKey> = (theme) => ({
  paper: {},
  list: {
    border: 'unset', // reset v1
    borderRadius: 'unset', // reset v1
  },
});

const UnstyledMenu = forwardRef<unknown, MenuProps>(function Menu(props, ref) {
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

const Menu = withStyles(styles, { name: 'MuiSpark_alpha_Menu' })(UnstyledMenu);

export default Menu;
