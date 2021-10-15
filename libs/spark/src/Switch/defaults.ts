import type { SwitchClassKey } from './Switch';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

// :NOTE: the focus styling is implemented with a box-shadow. To prevent layout
// shifts when that is applied, a padding of equal width is applied to the root
// element. Property value calculations with "... + 8" or "... + 4" are explicitly
// taking that into account where the "..." value is more reflective of the design
// measurement than the raw sum would be.
export const MuiSwitchStyleOverrides = ({
  palette,
}: Theme): Partial<StyleRules<SwitchClassKey>> => ({
  edgeEnd: {
    marginRight: -4,
  },
  edgeStart: {
    marginLeft: -4,
  },
  root: {
    height: 32 + 8,
    width: 56 + 8,
    padding: 4,
    '& + [class*=MuiFormControlLabel-label]': {
      marginLeft: 4,
      '[class*=MuiFormControlLabel-labelPlacementStart] &': {
        marginLeft: 0,
        marginRight: 4,
      },
    },
  },
  sizeSmall: {
    height: 24 + 8,
    width: 48 + 8,
    padding: 4,
    '& $switchBase': {
      padding: 3 + 4,
      '&$checked': {
        transform: 'translateX(24px)',
      },
    },
    '& $thumb': {
      width: 18,
      height: 18,
    },
    '& $track': {
      borderRadius: 14,
    },
  },
  switchBase: {
    padding: 4 + 4,
    '&$checked': {
      transform: 'translateX(24px)',
      '& + $track': {
        backgroundColor: palette.blue[3],
        opacity: 1,
      },
    },
    '&$disabled': {
      '& + $track, &$checked + $track': {
        opacity: 1,
        backgroundColor: palette.grey.medium,
      },
      '& $thumb': {
        backgroundColor: palette.grey.dark,
        boxShadow: 'none',
      },
    },
    '&:hover': {
      backgroundColor: 'unset',
      '& + $track': {
        backgroundColor: palette.grey.dark,
      },
      '&$checked + $track': {
        backgroundColor: palette.blue[2],
      },
    },
    '&:focus, &.Mui-focusVisible': {
      '& + $track': {
        boxShadow: `0px 0px 0px 4px ${palette.blue[1]}`,
      },
    },
  },
  thumb: {
    width: 24,
    height: 24,
    boxShadow:
      '0px 0px 2px rgba(7, 46, 68, 0.16), 0px 2px 2px rgba(7, 46, 68, 0.16)',
  },
  track: {
    backgroundColor: palette.grey.medium,
    borderRadius: 16,
    opacity: 1,
  },
});
