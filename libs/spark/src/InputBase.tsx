import { palette } from './styles/palette';

export const MuiInputBaseStyleOverrides = {
  root: {
    boxSizing: 'border-box' as const,
    backgroundColor: palette.grey.lighter,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: palette.grey.medium,
    borderRadius: 8,
    width: '20rem', // 320px
    margin: 4, // potential box-shadow width
    fontSize: '1rem', // 16px
    lineHeight: '1.125rem', // 18px
    '&$focused, &:focus': {
      borderColor: palette.blue[3],
      boxShadow: `0 0 0 4px ${palette.blue[1]}`,
      backgroundColor: palette.common.white,
    },
    '&.Spark-success': {
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
};
