import React, { FC } from 'react';
import { Radio as MatRadio, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export type RadioProps = {
  disabled?: boolean;
  checked?: boolean;
  label: React.ReactNode;
  value: string;
  name: string;
};

const useStyles = makeStyles((theme) => {
  const { blue } = theme.palette.tertiary;
  const { palette } = theme;
  return {
    radioRoot: {
      '&&&:hover': { backgroundColor: 'inherit' }, // Get rid of MaterialUI hover (had to make the selector more specific)
    },
    radio: {
      backgroundColor: palette.background.white,
      border: `2px solid ${palette.neutral.darkGrey}`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '20px',
      height: '20px',
      '.Mui-disabled &': {
        backgroundColor: palette.neutral.mediumGrey,
      },
      'label:hover:not(.Mui-disabled) &': {
        borderColor: palette.brand.blue,
      },
      '.Mui-checked &': {
        borderColor: blue[3],
      },
      'input:focus ~ &': {
        boxShadow: `0px 0px 0px 4px ${palette.brand.lightBlue}`,
      },
    },
    checkedRadioCenter: {
      backgroundColor: blue[3],
      borderRadius: '50%',
      width: '14px',
      height: '14px',
    },
    label: {
      color: 'rgba(7, 46, 68, 0.72)',
      'label:hover &': { color: palette.neutral.navy },
      '.Mui-disabled:hover &': { color: 'rgba(7, 46, 68, 0.72)' },
    },
  };
});

export const Radio: FC<RadioProps> = (props) => {
  const { disabled, checked, label } = props;

  const styles = useStyles();

  const radioButton = <span className={styles.radio}></span>;
  const checkedRadioButton = (
    <span className={styles.radio}>
      <span className={styles.checkedRadioCenter}></span>
    </span>
  );

  return (
    <FormControlLabel
      label={<span className={styles.label}>{label}</span>}
      disabled={disabled}
      checked={checked}
      control={
        <MatRadio
          className={styles.radioRoot}
          icon={radioButton}
          checkedIcon={checkedRadioButton}
          disableRipple={true}
          {...props}
        />
      }
    />
  );
};
