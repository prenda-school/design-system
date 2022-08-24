import React, { forwardRef, Ref } from 'react';
import MuiMenuList, {
  MenuListProps as MuiMenuListProps,
} from '@material-ui/core/MenuList';
import Unstable_ListSubheader from '../Unstable_ListSubheader';
import { StandardProps, useId } from '../utils';
import { Unstable_ListClassKey, Unstable_ListProps } from '../Unstable_List';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Unstable_MenuListProps
  extends StandardProps<
      MuiMenuListProps,
      Unstable_MenuListClassKey,
      'subheader'
    >,
    Pick<Unstable_ListProps, 'ListSubheaderProps' | 'subheader'> {}

export type Unstable_MenuListClassKey = Unstable_ListClassKey;

const Unstable_MenuList = forwardRef<unknown, Unstable_MenuListProps>(
  function Unstable_MenuList(props, ref) {
    const { ListSubheaderProps, subheader, ...other } = props;

    const subheaderId = useId(ListSubheaderProps?.id);

    return (
      <MuiMenuList
        ref={ref as Ref<HTMLUListElement>}
        subheader={
          subheader ? (
            <Unstable_ListSubheader id={subheaderId} {...ListSubheaderProps}>
              {subheader}
            </Unstable_ListSubheader>
          ) : undefined
        }
        {...(subheader && { 'aria-labelledby': subheaderId })}
        {...other}
      />
    );
  }
);

export default Unstable_MenuList;
