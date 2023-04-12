import { PopoverProps } from '@material-ui/core/Popover';
import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import { OverridableComponent, OverrideProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';
import Menu, { MenuProps } from '../Menu';
import useDropdown from '../useDropdown';

type Placement = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

export interface DropdownMenuTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = typeof Menu
> {
  props: P & {
    // possible props of override component that are deconstructed
    onClose?: PopoverProps['onClose'];
    PaperProps?: {
      className?: string;
    };
  } & {
    /**
     * If `true`, the menu is visible.
     */
    open?: boolean | undefined;
    /**
     * The placement of the menu `Popover` in relation to its anchor.
     * This is a shortcut for common combinations of `anchorOrigin` and `transformOrigin`.
     */
    placement?: Placement;
  };
  defaultComponent: D;
  classKey: never;
}

export type DropdownMenuProps<
  D extends ElementType = DropdownMenuTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<DropdownMenuTypeMap<P, D>, D>;

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

type PrivateClassKey =
  | 'private-paper-placement-bottom-left'
  | 'private-paper-placement-bottom-right'
  | 'private-paper-placement-top-left'
  | 'private-paper-placement-top-right';

// since the menu is absolutely positioning by top & left, then position adjustments are made through top & left margin changes
const styles: Styles<PrivateClassKey> = {
  'private-paper-placement-bottom-left': {
    marginTop: 8,
  },
  'private-paper-placement-bottom-right': {
    marginTop: 8,
  },
  'private-paper-placement-top-left': {
    marginTop: -8,
  },
  'private-paper-placement-top-right': {
    marginTop: -8,
  },
};

const UnstyledDropdownMenu: OverridableComponent<DropdownMenuTypeMap> =
  forwardRef(function DropdownMenu(props, ref) {
    const {
      classes,
      // @ts-expect-error TS can't recognize component prop
      component = Menu,
      placement = 'bottom-left',
      onClose,
      PaperProps,
      anchorOrigin,
      transformOrigin,
      ...other
    } = props as DropdownMenuProps;

    const Component = component as ElementType;

    const { anchorEl, id, isOpen, close } = useDropdown();

    const handleClose: MenuProps['onClose'] = (event, reason) => {
      onClose?.(event, reason);
      close();
    };

    const origins = getOrigins(placement);

    return (
      <Component
        id={id}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        keepMounted
        onClose={handleClose}
        open={isOpen}
        ref={ref}
        PaperProps={{
          ...PaperProps,
          className: clsx(
            classes[`private-paper-placement-${placement}`],
            PaperProps?.className
          ),
        }}
        {...origins}
        {...other}
      />
    );
  });

const DropdownMenu = withStyles(styles, {
  name: 'MuiSparkDropdownMenu',
})(UnstyledDropdownMenu) as typeof UnstyledDropdownMenu;

export default DropdownMenu;
