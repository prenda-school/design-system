import * as React from 'react';
import { useDropdownContext } from './DropdownContext';
import { Menu, MenuProps } from './Menu';

export interface DropdownMenuProps extends Omit<MenuProps, 'open'> {
  open?: boolean | undefined;
}

const DropdownMenu = React.forwardRef<HTMLUListElement, DropdownMenuProps>(
  ({ classes, ...other }, ref) => {
    const { id, anchorEl, handleClose } = useDropdownContext();

    return (
      <Menu
        id={id}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        keepMounted
        onClose={handleClose}
        open={Boolean(anchorEl)}
        ref={ref}
        PaperProps={{ className: 'SparkMenu-paperOffsetTop' }}
        {...other}
      />
    );
  }
);

export default DropdownMenu;
