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

const useStyles = makeStyles(theme => {
  const { blue } = theme.palette.tertiary;
  const { background } = theme.palette;
  return {
    root: {
      '&$root$root:hover': { backgroundColor: 'inherit' }, // Get rid of MaterialUI hover (had to make the selector more specific)
    },
    icon: {
      backgroundColor: background.white,
      border: `2px solid ${theme.palette.neutral.darkGrey}`,
      borderRadius: '2px',
      height: '16px',
      width: '16px',
      'label:hover &': {
        borderColor: theme.palette.brand.blue,
      },
      'input:focus ~ &': {
        boxShadow: `0px 0px 0px 4px ${theme.palette.brand.lightBlue}`,
      },
    },
    checkIcon: {
      fontSize: '16px',
    },
    checkedIconContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: blue[3],
      borderColor: blue[3],
      color: theme.palette.neutral.white,
      'label:hover &': {
        borderColor: blue[3],
      },
    },
    disabledIcon: {
      backgroundColor: theme.palette.neutral.darkGrey,
      'label:hover &': {
        borderColor: theme.palette.neutral.darkGrey,
      },
    },
    label: {
      color: 'rgba(7, 46, 68, 0.72)',
      'label:hover &': { color: theme.palette.neutral.navy },
      '.Mui-disabled:hover &': { color: 'rgba(7, 46, 68, 0.72)' },
    },
  };
});

export const Checkbox: FC<CheckboxProps> = props => {
  const { disabled, label } = props;
  const styles = useStyles();

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
