import type { FormControlLabelProps, Theme } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default FormControlLabel;

export type { FormControlLabelProps };

export const MuiFormControlLabelStyleOverrides = ({
  palette,
  typography,
}: Theme) => ({
  root: {
    marginLeft: -8,
    color: palette.text.onLightLowContrast,
    height: 40,
    marginTop: 1,
    marginBottom: 1,
    '&:hover, &:focus': {
      color: palette.text.onLight,
    },
    '&$disabled': {
      color: palette.grey.dark,
    },
  },
  label: typography['label-lg'],
});
