import { PopoverProps } from '@material-ui/core/Popover';
import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';
import Unstable_Menu, { Unstable_MenuProps } from '../Unstable_Menu';
import useDropdown_unstable from '../useDropdown_unstable';

type Placement = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

export interface Unstable_DropdownMenuTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = typeof Unstable_Menu
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

export type Unstable_DropdownMenuProps<
  D extends ElementType = Unstable_DropdownMenuTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_DropdownMenuTypeMap<P, D>, D>;

type Origins = Pick<Unstable_MenuProps, 'anchorOrigin' | 'transformOrigin'>;

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

const UnstyledUnstable_DropdownMenu: OverridableComponent<Unstable_DropdownMenuTypeMap> =
  forwardRef(function Unstable_DropdownMenu(props, ref) {
    const {
      classes,
      // @ts-expect-error TS can't recognize component prop
      component = Unstable_Menu,
      placement = 'bottom-left',
      onClose,
      PaperProps,
      anchorOrigin,
      transformOrigin,
      ...other
    } = props as Unstable_DropdownMenuProps;

    const Component = component as ElementType;

    const { anchorEl, id, isOpen, close } = useDropdown_unstable();

    const handleClose: Unstable_MenuProps['onClose'] = (event, reason) => {
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

const Unstable_DropdownMenu = withStyles(styles, {
  name: 'MuiSparkUnstable_DropdownMenu',
})(UnstyledUnstable_DropdownMenu) as typeof UnstyledUnstable_DropdownMenu;

export default Unstable_DropdownMenu;
