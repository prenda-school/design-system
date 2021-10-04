import type {
  InputBaseClassKey,
  InputBaseProps,
  StyleRules,
  Theme,
} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

export default InputBase;

export type { InputBaseProps };

export const MuiInputBaseStyleOverrides = ({
  palette,
  typography,
}: Theme): Partial<StyleRules<InputBaseClassKey>> => ({
  root: {
    ...typography['label-lg'],
    color: palette.text.onLightLowContrast,
    lineHeight: 24 / 16,
    boxSizing: 'border-box' as const,
    backgroundColor: palette.common.white,
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
    '&.Spark-success, [class*=MuiTextField-root].Spark-success > &': {
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
    // -2px to account for border-width
    padding: '10px 16px',
    // override weird default `em` height
    height: 'unset',
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
    padding: '0px',
  },
  inputMultiline: {
    // -2px to account for border-width
    padding: '10px 16px',
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
  adornedStart: {
    paddingLeft: 14,
    '$multiline&': {
      paddingLeft: 14,
    },
  },
  adornedEnd: {
    paddingRight: 14,
    '$multiline&': {
      paddingRight: 14,
    },
  },
  inputAdornedStart: {
    paddingLeft: 8,
  },
  inputAdornedEnd: {
    paddingRight: 8,
  },
});
