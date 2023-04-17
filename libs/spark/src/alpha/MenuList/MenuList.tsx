import type { Ref } from 'react';
import React, { forwardRef } from 'react';
import type { MenuListProps as MuiMenuListProps } from '@material-ui/core/MenuList';
import MuiMenuList from '@material-ui/core/MenuList';
import ListSubheader from '../ListSubheader';
import type { StandardProps } from '../../utils';
import { useId } from '../../utils';
import type { ListClassKey, ListProps } from '../List';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenuListProps
  extends StandardProps<MuiMenuListProps, MenuListClassKey, 'subheader'>,
    Pick<ListProps, 'ListSubheaderProps' | 'subheader'> {}

export type MenuListClassKey = ListClassKey;

const MenuList = forwardRef<unknown, MenuListProps>(function MenuList(
  props,
  ref
) {
  const { ListSubheaderProps, subheader, ...other } = props;

  const subheaderId = useId(ListSubheaderProps?.id);

  return (
    <MuiMenuList
      ref={ref as Ref<HTMLUListElement>}
      subheader={
        subheader ? (
          <ListSubheader id={subheaderId} {...ListSubheaderProps}>
            {subheader}
          </ListSubheader>
        ) : undefined
      }
      {...(subheader && { 'aria-labelledby': subheaderId })}
      {...other}
    />
  );
});

export default MenuList;
