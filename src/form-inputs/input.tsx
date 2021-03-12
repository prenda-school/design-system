import React, { FC } from 'react';
import {
  TextField as MatTextField,
  InputLabel as MatInputLabel,
  FormHelperText as MatFormHelperText,
} from '@material-ui/core/';
import { Theme, withStyles } from '@material-ui/core/styles';
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

const InputLabel = withStyles((theme: Theme) => ({
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

const matTextAreaUseStyles = makeStyles({
  textarea: (props: { isSuccess: boolean }) => ({
    border: '1px solid #D2D4D6',
    'box-sizing': 'border-box',
    'border-radius': '8px',
    minWidth: '320px',
    '& .MuiInput-root': props.isSuccess
      ? {
          border: '1px solid #4AA784',
          'box-sizing': 'border-box',
          'box-shadow': '0px 0px 0px 4px #B8F0D4',
          'border-radius': '8px',
        }
      : {},
    '& .MuiInputBase-input': {
      color: 'rgba(7, 46, 68, 0.72)',
      'padding-left': '16px',
    },
    '& .Mui-error': {
      border: '1px solid #DE5160',
      'box-sizing': 'border-box',
      'box-shadow': '0px 0px 0px 4px #F7D2DA',
      'border-radius': '8px',
    },
    '& .Mui-focused': {
      border: `1px solid #498DCC`,
      'box-sizing': 'border-box',
      'box-shadow': `0px 0px 0px 4px #D7F3FF`,
      'border-radius': '8px',
      '& .MuiInputBase-input': {
        color: '#072E44',
      },
    },
  }),
  textAreaResize: {
    resize: 'both',
  },
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
