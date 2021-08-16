import { InputBase, InputBaseClassKey, StyleRules } from '@material-ui/core';
import { palette } from './styles/palette';
import { typography } from './styles/typography';

export { InputBase };

export const MuiInputBaseStyleOverrides: Partial<
  StyleRules<InputBaseClassKey>
> = {
  root: {
    ...typography['label-lg'],
    boxSizing: 'border-box' as const,
    backgroundColor: palette.grey.lighter,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: palette.grey.medium,
    borderRadius: 8,
    width: '20rem', // 320px
    margin: 4, // potential box-shadow width
    '&$focused, &:focus': {
      borderColor: palette.blue[3],
      boxShadow: `0 0 0 4px ${palette.blue[1]}`,
      backgroundColor: palette.common.white,
    },
    '&.Spark-success, .MuiTextField-root.Spark-success > &': {
      borderColor: palette.green[3],
      boxShadow: `0 0 0 4px ${palette.green[1]}`,
    },
    '&$error': {
      borderColor: palette.red[3],
      boxShadow: `0 0 0 4px ${palette.red[1]}`,
    },
    '&$disabled': {
      borderColor: palette.grey.dark,
      backgroundColor: palette.grey.medium,
    },
  },
  input: {
    padding: '.75rem 1rem',
    borderRadius: 8,
    color: palette.text.onLight,
    '&::placeholder': {
      color: palette.text.onLightLowContrast,
      opacity: 1,
    },
    '&$disabled': {
      opacity: 0.42,
      '&::placeholder': {
        opacity: 0.42,
      },
    },
  },
  multiline: {
    padding: '.75rem 1rem',
  },
  formControl: {
    // needs high specificity to override default !important
    'label[data-shrink="false"] + &$root > $input::placeholder': {
      opacity: '1 !important',
    },
    'label[data-shrink="false"] + &$root$disabled > $input::placeholder': {
      opacity: '0.42 !important',
    },
  },
};
