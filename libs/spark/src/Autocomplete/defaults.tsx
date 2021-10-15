import * as React from 'react';
import type { AutocompleteClassKey } from './Autocomplete';
import { ChevronDown } from '../internal';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiAutocompleteStyleOverrides = ({
  palette,
  typography,
}: Theme): Partial<StyleRules<AutocompleteClassKey>> => ({
  input: {
    padding: '10px 16px',
  },
  inputRoot: {
    backgroundColor: palette.common.white,
    '&[class*="MuiInput-root"]': {
      paddingBottom: 0,
      '& $input': {
        padding: '10px 8px',
      },
      '& $input:first-child': {
        padding: '10px 16px',
      },
    },
    '&[class*="MuiInputBase-adornedStart"]': {
      paddingLeft: 8,
    },
    '&[class*="MuiInputBase-adornedEnd"]': {
      paddingRight: 42,
    },
  },
  endAdornment: {
    right: 16,
  },
  popupIndicator: {
    transition: 'transform 250ms ease',
  },
  // largely a copy of MenuItem's style overrides
  option: {
    ...typography['label-lg'],
    boxSizing: 'border-box' as const,
    color: palette.text.onLight,
    minWidth: 228,
    minHeight: '2.125rem', // 34px
    border: '2px solid transparent',
    // have to separate to override
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 14,
    paddingLeft: 14,
    margin: 0,
    '&:first-child': {
      marginTop: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
    // won't receive true hover or focus, just data-focus
    '&[data-focus="true"]': {
      backgroundColor: palette.grey.light,
      borderColor: palette.grey.light,
    },
    '&:active': {
      backgroundColor: palette.grey.medium,
      borderColor: palette.blue[4],
    },

    '&[aria-selected="true"][data-focus="true"]': {
      backgroundColor: palette.blue[3],
      borderColor: palette.blue[3],
      color: palette.common.white,
    },
    // won't receive true focus
    '&[aria-selected="true"]:active': {
      backgroundColor: palette.blue[4],
      borderColor: palette.blue[5],
      color: palette.common.white,
    },
  },
});

// can't type because AutocompleteProps requires 4 generics we don't want to specify
export const MuiAutocompleteDefaultProps = {
  popupIcon: <ChevronDown />,
};
