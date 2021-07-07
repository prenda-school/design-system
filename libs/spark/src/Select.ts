import { ChevronDownIconLine } from './icons';
import { palette } from './styles/palette';

export const MuiSelectDefaultProps = {
  IconComponent: ChevronDownIconLine,
  MenuProps: {
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right',
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
