import * as React from 'react';
import clsx from 'clsx';
import { useDropdownContext } from '../DropdownContext';
import type { MenuProps } from '../Menu';
import Menu from '../Menu';

type Placement = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

export interface DropdownMenuProps extends Omit<MenuProps, 'open'> {
  open?: boolean | undefined;
  placement?: Placement;
}

const DropdownMenu = React.forwardRef<HTMLUListElement, DropdownMenuProps>(
  (
    {
      placement = 'bottom-left',
      onClose,
      PaperProps,
      anchorOrigin,
      transformOrigin,
      ...other
    },
    ref
  ) => {
    const { id, anchorEl, closeDropdown } = useDropdownContext();

    const origins = getOrigins(placement);

    const finalAnchorOrigin = anchorOrigin ?? origins.anchorOrigin;
    const finalTransformOrigin = transformOrigin ?? origins.transformOrigin;

    let paperClassName;
    if (
      finalAnchorOrigin.vertical === 'bottom' &&
      finalTransformOrigin.vertical === 'top'
    ) {
      paperClassName = 'MuiSparkMenu-offsetTop';
    }

    return (
      <Menu
        id={id}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        keepMounted
        onClose={(event, reason) => {
          onClose?.(event, reason);
          closeDropdown();
        }}
        open={Boolean(anchorEl)}
        ref={ref}
        PaperProps={{
          ...PaperProps,
          className: clsx(PaperProps?.className, paperClassName),
        }}
        {...origins}
        {...other}
      />
    );
  }
);

export default DropdownMenu;

type Origins = Pick<MenuProps, 'anchorOrigin' | 'transformOrigin'>;

function getOrigins(placement: Placement): Origins {
  let anchorOrigin;
  let transformOrigin;

  if (placement === 'bottom-left') {
    anchorOrigin = { vertical: 'bottom', horizontal: 'left' };
    transformOrigin = { vertical: 'top', horizontal: 'left' };
  } else if (placement === 'bottom-right') {
    anchorOrigin = { vertical: 'bottom', horizontal: 'right' };
    transformOrigin = { vertical: 'top', horizontal: 'right' };
  } else if (placement === 'top-left') {
    anchorOrigin = { vertical: 'top', horizontal: 'left' };
    transformOrigin = { vertical: 'bottom', horizontal: 'left' };
  } else if (placement === 'top-right') {
    anchorOrigin = { vertical: 'top', horizontal: 'right' };
    transformOrigin = { vertical: 'bottom', horizontal: 'right' };
  }

  return { anchorOrigin, transformOrigin };
}
