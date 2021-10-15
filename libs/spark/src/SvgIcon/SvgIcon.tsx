import * as React from 'react';
import clsx from 'clsx';
import {
  default as MuiSvgIcon,
  SvgIconProps as MuiSvgIconProps,
  SvgIconClassKey,
} from '@material-ui/core/SvgIcon';
import { capitalize } from '../utils';

export type { SvgIconClassKey };

export interface SvgIconProps extends Omit<MuiSvgIconProps, 'color'> {
  contrast?: 'high' | 'low';
  color?:
    | 'inherit'
    | 'dark'
    | 'light'
    | 'disabled'
    | 'error'
    | 'success'
    | 'warning'
    | 'info'
    | 'white';
}

export default React.forwardRef<SVGSVGElement, SvgIconProps>(function SvgIcon(
  { contrast = 'high', color = 'inherit', className, ...other },
  ref
) {
  let muiColor;
  let sparkColor = 'inherit';
  if (color === 'dark') {
    muiColor = 'primary';
  } else if (color === 'light') {
    muiColor = 'secondary';
  } else if (color === 'success') {
    sparkColor = 'success';
    muiColor = 'inherit';
  } else if (color === 'warning') {
    sparkColor = 'warning';
    muiColor = 'inherit';
  } else if (color === 'info') {
    sparkColor = 'info';
    muiColor = 'inherit';
  } else if (color === 'white') {
    sparkColor = 'white';
    muiColor = 'inherit';
  } else {
    muiColor = color;
  }

  return (
    <MuiSvgIcon
      color={muiColor}
      className={clsx(className, {
        [`SparkSvgIcon-contrast${capitalize(contrast)}`]: contrast !== 'high',
        [`SparkSvgIcon-color${capitalize(sparkColor)}`]:
          sparkColor !== 'inherit',
      })}
      ref={ref}
      {...other}
    />
  );
});
