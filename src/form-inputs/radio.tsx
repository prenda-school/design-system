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

export const Radio: FC<RadioProps> = props => {
  const { disabled, checked, label } = props;

  const styles = makeStyles({
    radioRoot: {
      '&&&:hover': { backgroundColor: 'inherit' }, // Get rid of MaterialUI hover (had to make the selector more specific)
    },
    radio: {
      backgroundColor: '#FFFFFF',
      border: '2px solid #D2D4D6',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '20px',
      height: '20px',
      '.Mui-disabled &': {
        backgroundColor: '#E1E3E5',
      },
      'label:hover:not(.Mui-disabled) &': {
        borderColor: '#0A4872',
      },
      '.Mui-checked &': {
        borderColor: '#2967A6',
      },
      'input:focus ~ &': {
        boxShadow: '0px 0px 0px 4px #D7F3FF',
      },
    },
    checkedRadioCenter: {
      backgroundColor: '#2967A6',
      borderRadius: '50%',
      width: '14px',
      height: '14px',
    },
    label: {
      color: 'rgba(7, 46, 68, 0.72)',
      'label:hover &': { color: '#072E44' },
      '.Mui-disabled:hover &': { color: 'rgba(7, 46, 68, 0.72)' },
    },
  })();

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
