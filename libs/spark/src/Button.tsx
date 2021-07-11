import React, { FC } from 'react';
import {
  ButtonBase,
  ButtonBaseProps as MuiButtonBaseProps,
  Theme,
} from '@material-ui/core';
import styled from 'styled-components';
import clsx from 'clsx';
import { capitalize } from './utils';

export interface ButtonProps extends MuiButtonBaseProps {
  variant?: 'solid' | 'outlined' | 'flat';
  size?: 'large' | 'medium' | 'small';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const SparkButton: FC<ButtonProps> = ({
  className,
  variant = 'solid',
  size = 'medium',
  children,
  startIcon,
  endIcon,
  ...other
}) => {
  return (
    <ButtonBase
      className={clsx(
        className,
        'SparkButton-root',
        `SparkButton-variant${capitalize(variant)}`,
        `SparkButton-size${capitalize(size)}`
      )}
      {...other}
    >
      {startIcon ? (
        <span
          className={clsx(
            'SparkButton-startIcon',
            `SparkButton-iconSize${capitalize(size)}`
          )}
        >
          {startIcon}
        </span>
      ) : null}
      {children}
      {endIcon ? (
        <span
          className={clsx(
            'SparkButton-endIcon',
            `SparkButton-iconSize${capitalize(size)}`
          )}
        >
          {endIcon}
        </span>
      ) : null}
    </ButtonBase>
  );
};

export { SparkButton as Button };
