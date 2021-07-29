import * as React from 'react';
import { SvgIcon, SvgIconProps as MuiSvgIconProps } from '@material-ui/core';
import { palette } from './styles/palette';
import clsx from 'clsx';
import { capitalize } from './utils';

export interface SvgIconProps extends Omit<MuiSvgIconProps, 'color'> {
  contrast?: 'high' | 'low';
  color?: 'onLight' | 'onDark' | 'disabled' | 'error' | 'inherit';
}

export const MuiSvgIconDefaultProps = {};

export const MuiSvgIconStyleOverrides = {
  root: {
    // fontSizeDefault/Medium
    fontSize: '1.5rem', // 24px
    // contrastHigh is `opacity: 1` which is just the default CSS value
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
    // Duotone fill selector
    '& > *[fill="#F0F1F2"]': {
      opacity: 0.72,
    },
  },
};

const SparkSvgIcon = React.forwardRef(function SparkSvgIcon(
  { contrast = 'high', color = 'inherit', className, ...other }: SvgIconProps,
  ref: React.ForwardedRef<SVGSVGElement>
) {
  let muiColor;
  if (color === 'onLight') muiColor = 'primary';
  else if (color === 'onDark') muiColor = 'secondary';
  else muiColor = color;

  return (
    <SvgIcon
      color={muiColor}
      className={clsx(className, {
        [`SparkSvgIcon-contrast${capitalize(contrast)}`]: contrast !== 'high',
      })}
      {...other}
    />
  );
});

export { SparkSvgIcon as SvgIcon };
