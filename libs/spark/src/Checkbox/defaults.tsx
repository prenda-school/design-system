import * as React from 'react';
import type { CheckboxProps, CheckboxClassKey } from './Checkbox';
import CheckboxIcon from './CheckboxIcon';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiCheckboxDefaultProps: Partial<CheckboxProps> = {
  color: 'default' as const,
  icon: <CheckboxIcon />,
  checkedIcon: <CheckboxIcon checked />,
  indeterminateIcon: <CheckboxIcon indeterminate />,
};

export const MuiCheckboxStyleOverrides = ({
  palette,
}: Theme): Partial<StyleRules<CheckboxClassKey>> => ({
  root: {
    padding: 8,
    backgroundColor: 'unset',
    color: palette.grey.dark,
    '&:hover': {
      color: palette.text.onLight,
      backgroundColor: 'unset',
    },
    '&$checked': {
      color: palette.blue[3],
    },
    '&$disabled': {
      '& .SparkCheckboxIcon-root': {
        '& [class*=MuiSvgIcon-root]': {
          color: palette.grey.dark,
        },
        '& .SparkCheckboxIcon-box': {
          backgroundColor: palette.grey.medium,
        },
        '& .SparkCheckboxIcon-check, & .SparkCheckboxIcon-dash': {
          color: palette.grey[400],
        },
      },
    },
  },
  indeterminate: {
    color: palette.blue[3],
  },
});
