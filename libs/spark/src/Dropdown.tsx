import * as React from 'react';
import {
  Menu,
  MenuProps as MuiMenuProps,
  Button,
  ButtonProps,
} from '@material-ui/core';
import { useDropdownContext } from './DropdownContext';

export type DropdownButtonProps = ButtonProps;

export interface DropdownMenuProps extends Omit<MuiMenuProps, 'open'> {
  open?: boolean | undefined;
}

function SparkDropdownButton(props: DropdownButtonProps) {
  const { id, handleClick } = useDropdownContext();
  return (
    <Button
      aria-controls={id}
      aria-haspopup="true"
      onClick={handleClick}
      {...props}
    />
  );
}

const SparkDropdownMenu = React.forwardRef<HTMLUListElement, DropdownMenuProps>(
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

export {
  SparkDropdownButton as DropdownButton,
  SparkDropdownMenu as DropdownMenu,
};
