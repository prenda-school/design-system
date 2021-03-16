import React, { FC } from 'react';
import {
  TextField as MatTextField,
  InputLabel as MatInputLabel,
  FormHelperText as MatFormHelperText,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

export type InputProps = {
  inputId: string;
  label?: string;
  bottomInputLabel?: string;
  multiline?: boolean;
  rows?: number;
  value: string;
  hasError?: (val: string) => boolean;
  onChange: (val: string) => void;
};

const InputLabel = withStyles(theme => ({
  root: {
    color: theme.palette.background.lightContrastText,
    'margin-bottom': '0.2rem',
    'font-weight': 700,
    'font-size': '16px',
    'line-height': '18px',
    '&.Mui-focused': {
      color: theme.palette.background.lightContrastText,
    },
  },
}))(MatInputLabel);

const InputHelperText = withStyles(theme => ({
  root: {
    color: theme.palette.background.lightLowContrastText,
    'font-size': '10px',
    'line-height': '18px',
  },
}))(MatFormHelperText);

const matTextAreaUseStyles = makeStyles(theme => {
  const { palette } = theme;
  const { green, blue, red } = theme.palette.tertiary;
  return {
    textarea: (props: { isSuccess: boolean }) => ({
      border: `1px solid ${palette.neutral.darkGrey}`,
      'box-sizing': 'border-box',
      'border-radius': '8px',
      minWidth: '320px',
      '& .MuiInput-root': props.isSuccess
        ? {
            border: `1px solid ${green[2]}`,
            'box-sizing': 'border-box',
            'box-shadow': `0px 0px 0px 4px ${green[1]}`,
            'border-radius': '8px',
          }
        : {},
      '& .MuiInputBase-input': {
        color: 'rgba(7, 46, 68, 0.72)',
        'padding-left': '16px',
      },
      '& .Mui-error': {
        border: `1px solid ${red[2]}`,
        'box-sizing': 'border-box',
        'box-shadow': `0px 0px 0px 4px ${red[1]}`,
        'border-radius': '8px',
      },
      '& .Mui-focused': {
        border: `1px solid ${blue[2]}`,
        'box-sizing': 'border-box',
        'box-shadow': `0px 0px 0px 4px ${blue[1]}`,
        'border-radius': '8px',
        '& .MuiInputBase-input': {
          color: blue[5],
        },
      },
    }),
    textAreaResize: {
      resize: 'both',
    },
  };
});

export const Input: FC<InputProps> = props => {
  const [inputVal, setInputVal] = React.useState('');
  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const handleOnChange = (
    evt: React.ChangeEvent<{
      name?: string;
      value: unknown;
    }>
  ) => {
    const newInputVal = evt.target.value as string;

    setInputVal(newInputVal);

    props.onChange && props.onChange(newInputVal);

    if (newInputVal.length > 0) {
      if (props.hasError) {
        const newIsError = props.hasError(newInputVal);
        setIsError(newIsError);
        setIsSuccess(!newIsError);
      }
    } else {
      setIsError(false);
      setIsSuccess(false);
    }
  };

  const styleProps = { isSuccess };
  const matTextAreaStyles = matTextAreaUseStyles(styleProps);

  return (
    <>
      <InputLabel shrink>{props.label}</InputLabel>
      <MatTextField
        autoFocus
        className={matTextAreaStyles.textarea}
        error={isError}
        id={props.inputId}
        InputProps={{ disableUnderline: true }}
        inputProps={{ className: matTextAreaStyles.textAreaResize }}
        multiline={props.multiline}
        rows={props.rows}
        onChange={handleOnChange}
        value={inputVal}
      />
      <InputHelperText>{props.bottomInputLabel}</InputHelperText>
    </>
  );
};
