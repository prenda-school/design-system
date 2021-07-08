import { ChevronDownIconLine } from './icons';
import { palette } from './styles/palette';

export const MuiSelectDefaultProps = {
  IconComponent: ChevronDownIconLine,
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
    color: ({ value }) =>
      value === '' ? palette.text.onLightLowContrast : palette.text.onLight,
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
