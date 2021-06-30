import * as React from 'react';
import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  MenuItemProps as MuiMenuItemProps,
  Divider as MuiDivider,
  Theme,
} from '@material-ui/core';
import { Button, ButtonProps } from './Button';
import styled from 'styled-components';
import { MenuItem } from './MenuItem';

type DropdownContextType = {
  id: string;
  anchorEl: null | HTMLElement;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
};
const Context = React.createContext<DropdownContextType>({
  id: 'dropdown',
  anchorEl: null,
  handleClick: () => false,
  handleClose: () => false,
});

export interface DropdownContextProps {
  children?: React.ReactNode;
  id?: string;
}
export type DropdownButtonProps = ButtonProps;
export interface DropdownMenuProps extends Omit<MuiMenuProps, 'open'> {
  open?: boolean | undefined;
}
export interface DropdownMenuItemProps
  extends Omit<
    MuiMenuItemProps,
    'button' | 'disableRipple' | 'disableTouchRipple'
  > {
  startIcon?: React.ReactNode;
  // Fix mismatch from MUI
  button?: true | undefined;
}

const StyledMenu = styled(MuiMenu)`
  ${({ theme }: { theme: Theme }) => `
    inset: 8px 0 0 0 !important;
  `}
`;

const SparkDropdownDivider = styled(MuiDivider)`
  height: 2px;
  // margin collapses with items
  margin: 4px 0;
`;

// FROM-MUI Lab/TabContext
function useUniqueId() {
  const [id, setId] = React.useState<string>('');
  React.useEffect(() => {
    setId(`spark-d-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
}

const SparkDropdownContext: React.FC<DropdownContextProps> = (props) => {
  const id = useUniqueId();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const value = React.useMemo(
    () => ({ id, anchorEl, handleClick, handleClose }),
    [id, anchorEl]
  );

  return <Context.Provider value={value} {...props} />;
};

const SparkDropdownButton: React.FC<DropdownButtonProps> = (props) => {
  const { id, handleClick } = React.useContext(Context);
  return (
    <Button
      aria-controls={id}
      aria-haspopup="true"
      onClick={handleClick}
      {...props}
    />
  );
};

const SparkDropdownMenu = React.forwardRef<HTMLUListElement, DropdownMenuProps>(
  (props, ref) => {
    const { id, anchorEl, handleClose } = React.useContext(Context);

    return (
      <StyledMenu
        id={id}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        keepMounted
        onClose={handleClose}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        ref={ref}
        {...props}
      />
    );
  }
);

const SparkDropdownMenuItem = React.forwardRef<
  HTMLLIElement,
  DropdownMenuItemProps
>((props, ref) => {
  return <MenuItem {...props} />;
});

export {
  SparkDropdownContext as DropdownContext,
  SparkDropdownButton as DropdownButton,
  SparkDropdownMenu as DropdownMenu,
  SparkDropdownMenuItem as DropdownMenuItem,
  SparkDropdownDivider as DropdownDivider,
};
