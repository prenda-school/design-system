import React, { FC } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import {
  Input,
  InputLabel,
  FormHelperText,
  InputProps as MuiInputProps,
  InputLabelProps as MuiInputLabelProps,
  Theme,
} from '@material-ui/core/';
import { FormHelperTextProps as MuiFormHelperTextProps } from '@material-ui/core/FormHelperText';
import { palette } from './theme/palette';
export interface InputProps extends MuiInputProps {
  success?: boolean;
  label?: string;
  InputLabelProps?: MuiInputLabelProps;
  helperText?: string;
  FormHelperTextProps?: MuiFormHelperTextProps;
}

export const MuiInputPropOverrides = {
  disableUnderline: true,
};

export const MuiInputStyleOverrides = {
  root: {
    boxSizing: 'border-box' as const,
    backgroundColor: palette.grey.lighter,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: palette.grey.medium,
    borderRadius: 8,
    width: '20rem', // 320px
    padding: '.75rem 1rem',
    fontSize: '1rem', // 16px
    lineHeight: '1.125rem', // 18px
    '&.SparkInput-success': {
      borderColor: palette.green[3],
      boxShadow: `0 0 0 4px ${palette.green[1]}`,
    },
    '&$focused': {
      borderColor: palette.blue[3],
      boxShadow: `0 0 0 4px ${palette.blue[1]}`,
      backgroundColor: palette.common.white,
      '& .MuiInput-input': {
        color: palette.text.onLight,
      },
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
    padding: 0,
    '&::placeholder': {
      opacity: 1,
      color: palette.text.onLightLowContrast,
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
