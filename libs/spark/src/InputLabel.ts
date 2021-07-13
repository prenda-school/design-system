import { palette } from './styles/palette';

export const MuiInputLabelDefaultProps = {
  disableAnimation: true,
};

export const MuiInputLabelStyleOverrides = {
  root: {
    color: palette.text.onLight,
    marginBottom: 4,
    fontWeight: 700,
    fontSize: '1rem', // 16px
    lineHeight: '1.125rem', // 18px
    '&$disabled': {
      color: palette.grey.dark,
    },
  },
  shrink: {
    transform: 'none',
    transformOrigin: 'unset',
  },
  formControl: {
    transform: 'none',
    position: 'relative' as const,
  },
};
