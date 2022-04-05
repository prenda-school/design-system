import type { SelectProps, SelectClassKey } from './Select';
import { ChevronDown } from '../internal';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiSelectDefaultProps: Partial<SelectProps> = {
  displayEmpty: true,
  IconComponent: (props) => <ChevronDown fontSize="medium" {...props} />,
  MenuProps: {
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom' as const,
      horizontal: 'right' as const,
    },
    transformOrigin: {
      vertical: 'top' as const,
      horizontal: 'right' as const,
    },
    classes: { paper: 'MuiSparkMenu-offsetTop' },
  },
};

export const MuiSelectStylesOverrides = ({
  palette,
  typography,
}: Theme): Partial<StyleRules<SelectClassKey, SelectProps>> => ({
  root: {
    color: ({ value, defaultValue }) =>
      value || defaultValue ? palette.text.dark : palette.text.darkLowContrast,
  },
  select: {
    borderRadius: 8,
    '&:focus-visible': {
      borderRadius: 8,
      backgroundColor: palette.common.white,
    },
  },
  icon: {
    fontSize: typography.pxToRem(24),
    marginRight: 14,
    transition: 'transform 250ms ease',
  },
});
