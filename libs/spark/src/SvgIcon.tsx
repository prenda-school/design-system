import React, { FC } from 'react';
import { SvgIcon, SvgIconProps as MuiSvgIconProps } from '@material-ui/core';
import { palette } from './styles/palette';
import clsx from 'clsx';
import { capitalize } from './utils';

export interface SvgIconProps extends MuiSvgIconProps {
  contrast?: 'high' | 'low';
}

export const MuiSvgIconDefaultProps = {
  color: 'primary' as const,
};

export const MuiSvgIconStyleOverrides = {
  root: {
    // fontSizeDefault
    fontSize: '1.5rem', // 24px
    '&.SparkSvgIcon-contrastHigh': {
      opacity: 0.72,
    },
    '&.SparkSvgIcon-contrastLow': {
      opacity: 0.72,
    },
  },
  fontSizeSmall: {
    fontSize: '1rem', // 16px
  },
  fontSizeLarge: {
    fontSize: '2rem', // 32px
  },
  colorPrimary: {
    color: palette.text.onLight,
  },
  colorSecondary: {
    color: palette.text.onDark,
  },
};

const SparkSvgIcon: FC<SvgIconProps> = ({
  contrast = 'high',
  className,
  ...other
}) => {
  return (
    <SvgIcon
      className={clsx(
        className,
        `SparkSvgIcon-contrast${capitalize(contrast)}`
      )}
      {...other}
    />
  );
};

export { SparkSvgIcon as SvgIcon };
