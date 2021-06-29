import React, { FC } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import {
  Input,
  InputLabel as MuiInputLabel,
  FormHelperText as MuiFormHelperText,
  InputProps as MuiInputProps,
  InputLabelProps as MuiInputLabelProps,
  Theme,
} from '@material-ui/core/';
import { FormHelperTextProps as MuiFormHelperTextProps } from '@material-ui/core/FormHelperText';
import { colors } from './theme/colors';

export interface InputProps extends MuiInputProps {
  success?: boolean;
  label?: string;
  InputLabelProps?: MuiInputLabelProps;
  helperText?: string;
  FormHelperTextProps?: MuiFormHelperTextProps;
}

const InputLabel = styled(MuiInputLabel)`
  ${({ theme }: { theme: Theme }) => `
    color: ${theme.palette.background.lightContrastText};
    margin-bottom: 0.5rem; // 8px
    font-weight: 700;
    font-size: 1rem; // 16px
    line-height: 1.125rem; // 18px

    &.Mui-disabled {
      color: ${theme.palette.neutral.darkGrey};
    }
  `}
`;

const FormHelperText = styled(MuiFormHelperText)`
  ${({ theme }: { theme: Theme }) => `
    color: ${theme.palette.background.lightLowContrastText};
    font-size: 1rem; // 16px
    line-height 1.5rem; // 24px
    margin-top: 0.5rem; // 8px
  `}
`;

export const MuiInputPropOverrides = {
  disableUnderline: true,
};

export const MuiInputStyleOverrides = {
  root: {
    boxSizing: 'border-box' as const,
    backgroundColor: colors.colorsPrendaLighterGrey,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.colorsPrendaMediumGrey,
    borderRadius: 8,
    width: '20rem', // 320px
    padding: '.75rem 1rem',
    fontSize: '1rem', // 16px
    lineHeight: '1.125rem', // 18px
    '&.SparkInput-success': {
      borderColor: colors.colorsGreen[3],
      boxShadow: `0 0 0 4px ${colors.colorsGreen[1]}`,
    },
    '&$focused': {
      borderColor: colors.colorsBlue[3],
      boxShadow: `0 0 0 4px ${colors.colorsBlue[1]}`,
      backgroundColor: colors.colorsPrendaWhite,
      '& .MuiInput-input': {
        color: colors.colorsTextIconOnLightHighContrast,
      },
    },
    '&$error': {
      borderColor: colors.colorsRed[3],
      boxShadow: `0 0 0 4px ${colors.colorsRed[1]}`,
    },
    '&$disabled': {
      borderColor: colors.colorsPrendaDarkGrey,
      backgroundColor: colors.colorsPrendaMediumGrey,
    },
  },
  input: {
    padding: 0,
    '&::placeholder': {
      opacity: 1,
      color: colors.colorsTextIconOnLightLowContrast,
    },
  },
};

const SparkInput: FC<InputProps> = (props) => {
  const {
    id,
    label,
    helperText,
    disabled,
    success,
    className,
    InputLabelProps,
    FormHelperTextProps,
    ...other
  } = props;

  // TODO: throw a helpful error when detecting that both error & success props
  // are `true` -- look to MUI's method of throwing errors as an inspiration.
  if (process.env.NODE_ENV !== 'production' && props.error && props.success) {
    console.warn(
      '@prenda/spark SparkInput detected both error and success props as `true`'
    );
  }

  return (
    <>
      {label ? (
        <InputLabel htmlFor={id} {...InputLabelProps}>
          {label}
        </InputLabel>
      ) : null}
      <Input
        id={id}
        className={clsx(className, {
          'SparkInput-success': success,
        })}
        disabled={disabled}
        {...other}
      />
      {helperText ? (
        <FormHelperText disabled={disabled} {...FormHelperTextProps}>
          {helperText}
        </FormHelperText>
      ) : null}
    </>
  );
};

export { SparkInput as Input };
