import ChevronDownIcon from './internal/ChevronDown';
import { palette } from './styles/palette';

export { Select } from '@material-ui/core';

export const MuiSelectDefaultProps = {
  displayEmpty: true,
  IconComponent: ChevronDownIcon,
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
    classes: { paper: 'Spark-offsetTop' },
  },
};

export const MuiSelectStylesOverrides = {
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
};
