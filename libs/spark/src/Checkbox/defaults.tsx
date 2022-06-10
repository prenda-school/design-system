import React from 'react';
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
      color: palette.text.dark,
      backgroundColor: 'unset',
    },
    '&$checked': {
      color: palette.blue[3],
    },
    '&$disabled': {
      '& .CheckboxIcon-root': {
        color: palette.grey.dark,
        '& .CheckboxIcon-box': {
          backgroundColor: palette.grey.medium,
        },
        '& .CheckboxIcon-check, & .CheckboxIcon-dash': {
          color: palette.grey[400],
        },
      },
    },
  },
  indeterminate: {
    color: palette.blue[3],
  },
});
