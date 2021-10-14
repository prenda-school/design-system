import type { IconButtonProps } from './IconButton';

// omit size because the customization is incompatible
export const MuiIconButtonDefaultProps: Partial<
  Omit<IconButtonProps, 'size'>
> = {
  disableFocusRipple: true,
  disableRipple: true,
};
