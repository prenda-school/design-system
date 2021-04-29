import React, { FC } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import {
  Input as MuiInput,
  InputLabel as MuiInputLabel,
  FormHelperText as MuiFormHelperText,
  InputProps as MuiInputProps,
  InputLabelProps as MuiInputLabelProps,
  Theme,
} from '@material-ui/core/';
import { FormHelperTextProps as MuiFormHelperTextProps } from '@material-ui/core/FormHelperText';

export interface InputProps extends MuiInputProps {
  success?: boolean;
  label?: string;
  InputLabelProps?: MuiInputLabelProps;
  helperText?: string;
  FormHelperTextProps: MuiFormHelperTextProps;
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
    font-size: 0.75rem; // 12px
    line-height 1.25rem; // 20px
    margin-top: 0.5rem: // 8px
  `}
`;

const Input = styled(MuiInput)`
  ${({ theme }: { theme: Theme }) => `
    &.MuiInput-root {
      box-sizing: border-box;
      background-color: white;
      border-width: 2px;
      border-style: solid;
      border-color: ${theme.palette.neutral.mediumGrey};
      border-radius: 16px;
      width: 20rem; // 320px
      padding: .75rem 1rem;
      font-size: 1rem; // 16px
      line-height: 1.125rem; // 18px

      // inner input / textarea
      & .MuiInput-input {
        padding: 0;
        &::placeholder {
          opacity: 1;
          color: ${theme.palette.background.lightLowContrastText};
        }
      }

      &.Mui-focused {
        border-color: ${theme.palette.tertiary.blue[3]};
        box-shadow: 0 0 0 4px ${theme.palette.tertiary.blue[1]};
        & .MuiInput-input {
          color: ${theme.palette.background.lightContrastText};
        }
      }
      &.Mui-error {
        border-color: ${theme.palette.tertiary.red[3]};
        box-shadow: 0 0 0 4px ${theme.palette.tertiary.red[1]};
      }
      &.Mui-disabled {
       border-color: ${theme.palette.neutral.darkGrey};
       background-color: ${theme.palette.neutral.mediumGrey};
      }
      &.SparkInput-success {
        border-color: ${theme.palette.tertiary.green[3]};
        box-shadow: 0 0 0 4px ${theme.palette.tertiary.green[1]};
      }
    }
  `}
`;

const SparkInput: FC<InputProps> = props => {
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
        disableUnderline
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
