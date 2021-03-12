import React, { FC } from 'react';
import { Checkbox as MatCheckbox, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';

export type CheckboxProps = {
  disabled?: boolean;
  checked?: boolean;
  label: React.ReactNode;
  value: string | number;
  name: string;
};

const useStyles = makeStyles({
  root: {
    '&$root$root:hover': { backgroundColor: 'inherit' }, // Get rid of MaterialUI hover (had to make the selector more specific)
  },
  icon: {
    backgroundColor: '#FFFFFF',
    border: '2px solid #D2D4D6',
    borderRadius: '2px',
    height: '16px',
    width: '16px',
    'label:hover &': {
      borderColor: '#0A4872',
    },
    'input:focus ~ &': {
      boxShadow: '0px 0px 0px 4px #D7F3FF',
    },
  },
  checkIcon: {
    fontSize: '16px',
  },
  checkedIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2967A6',
    borderColor: '#2967A6',
    color: '#FFFFFF',
    'label:hover &': {
      borderColor: '#2967A6',
    },
  },
  disabledIcon: {
    backgroundColor: '#D2D4D6',
    'label:hover &': {
      borderColor: '#D2D4D6',
    },
  },
  label: {
    color: 'rgba(7, 46, 68, 0.72)',
    'label:hover &': { color: '#072E44' },
    '.Mui-disabled:hover &': { color: 'rgba(7, 46, 68, 0.72)' },
  },
})

export const Checkbox: FC<CheckboxProps> = props => {
  const { disabled, label } = props;
  const styles = useStyles()

  const disabledIconClass = disabled ? styles.disabledIcon : '';

  const icon = <span className={`${styles.icon} ${disabledIconClass}`}></span>;
  const checkedIcon = (
    <span className={`${styles.icon} ${styles.checkedIconContainer}`}>
      <Check className={styles.checkIcon} />
    </span>
  );

  return (
    <FormControlLabel
      label={<span className={styles.label}>{label}</span>}
      disabled={disabled}
      control={
        <MatCheckbox
          className={styles.root}
          icon={icon}
          checkedIcon={checkedIcon}
          disableRipple={true}
          {...props}
        />
      }
    />
  );
};
