import React, { forwardRef, Ref } from 'react';
import MuiMenuList, {
  MenuListProps as MuiMenuListProps,
} from '@material-ui/core/MenuList';
import ListSubheader from '../ListSubheader';
import { StandardProps, useId } from '../utils';
import { ListClassKey, ListProps } from '../List';

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
