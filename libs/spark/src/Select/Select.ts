import type { Theme } from '../theme';
import { ChevronDown } from '../internal';

export { default } from '@material-ui/core/Select';
export * from '@material-ui/core/Select';

export const MuiSelectDefaultProps = {
  displayEmpty: true,
  IconComponent: ChevronDown,
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

export const MuiSelectStylesOverrides = ({ palette }: Theme) => ({
  root: {
    color: ({ value, defaultValue }) =>
      value || defaultValue
        ? palette.text.onLight
        : palette.text.onLightLowContrast,
  },
  select: {
    borderRadius: 8,
    '&:focus': {
      borderRadius: 8,
      backgroundColor: palette.common.white,
    },
  },
  icon: {
    marginRight: 14,
    transition: 'transform 250ms ease',
  },
});
