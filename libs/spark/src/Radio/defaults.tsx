import * as React from 'react';
import type { RadioProps, RadioClassKey } from './Radio';
import RadioIcon from './RadioIcon';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiRadioDefaultProps: Partial<RadioProps> = {
  color: 'default' as const,
  icon: <RadioIcon />,
  checkedIcon: <RadioIcon checked />,
};

export const MuiRadioStyleOverrides = ({
  palette,
}: Theme): Partial<StyleRules<RadioClassKey>> => ({
  root: {
    // Split 8px of padding / margin so icon can use background-color instead of box-shadow
    padding: '4px',
    margin: '4px',
    // Clear Mui's primary/secondary color bgcolor
    backgroundColor: 'unset',
    color: palette.grey.dark,
    '&:hover': {
      color: palette.text.onLight,
      backgroundColor: 'unset',
    },
    '&:focus, &.Mui-focusVisible': {
      color: palette.blue[3],
      backgroundColors: palette.blue[1],
    },
    '&$checked': {
      color: palette.blue[3],
    },
    '&$disabled': {
      '& .SparkRadioIcon-root': {
        '& [class*=MuiSvgIcon-root]': {
          color: palette.grey.dark,
        },
        '& .SparkRadioIcon-circle': {
          backgroundColor: palette.grey.medium,
        },
        '& .SparkRadioIcon-dot': {
          color: palette.grey[400],
        },
      },
    },
  },
});
