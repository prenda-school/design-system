import * as React from 'react';
import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  Divider as MuiDivider,
  Theme,
} from '@material-ui/core';
import { Button, ButtonProps } from './button';
import styled from 'styled-components';

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
export interface DropdownButtonProps extends ButtonProps {}
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

    & .MuiMenu-paper {
      box-shadow: 0px 8px 16px 0px #072E4414;
      border-radius: 8px;
    }

    & .MuiMenu-list {
      border: 2px solid ${theme.palette.neutral.mediumGrey};
      border-radius: 8px;
    }
  `}
`;

const StyledMenuItem = styled(MuiMenuItem)`
  ${({ theme }) => `
    box-sizing: border-box;
    color: ${theme.palette.background.lightContrastText};
    min-width: 228px;
    height: 2.125rem; // 34px;
    min-height: 2.125rem;
    // TODO: Figma says 600 but that appears too heavy
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.125rem;
    // margins collapse with other menu items
    margin: 4px 0;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      background-color: ${theme.palette.neutral.lightGrey};

      .SparkDropdownMenuItem-startIcon {
        color: ${theme.palette.background.lightContrastText};
      }
    }

    &.Mui-focusVisible {
      background-color: ${theme.palette.tertiary.blue[1]};

      .SparkDropdownMenuItem-startIcon {
        color: ${theme.palette.background.lightContrastText};
      }
    }

    &.Mui-disabled {
      color: ${theme.palette.neutral.darkGrey};
    }

    & .SparkDropdownMenuItem-startIcon {
      display: inherit;
      margin-right: .5rem; // 8px
      color: ${theme.palette.background.lightLowContrastText};
    }

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

const SparkDropdownContext: React.FC<DropdownContextProps> = props => {
  const id = useUniqueId();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const value = React.useMemo(
    () => ({ id, open, anchorEl, handleClick, handleClose }),
    [id, anchorEl, open]
  );

  return <Context.Provider value={value} {...props} />;
};

const SparkDropdownButton: React.FC<DropdownButtonProps> = props => {
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
        // TODO: look into overriding MUI elevation presets with Spark effects definitions
        elevation={0}
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
>(({ startIcon, children, ...other }, ref) => {
  return (
    <StyledMenuItem disableRipple disableTouchRipple ref={ref} {...other}>
      {startIcon ? (
        <span className="SparkDropdownMenuItem-startIcon">{startIcon}</span>
      ) : null}
      {children}
    </StyledMenuItem>
  );
});

export {
  SparkDropdownContext as DropdownContext,
  SparkDropdownButton as DropdownButton,
  SparkDropdownMenu as DropdownMenu,
  SparkDropdownMenuItem as DropdownMenuItem,
  SparkDropdownDivider as DropdownDivider,
};
