import type {
  StyleRules,
  TabClassKey,
  TabProps,
  Theme,
} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

export default Tab;

export type { TabProps };

// :NOTE: the focus styling is implemented with a border. To prevent layout
// shifts when that is applied, a border is always present on the root element.
// Property value calculations with "... - 2" are explicitly taking that into
// account where the "..." value is more reflective of the design measurement
// than the raw sum would be.
export const MuiTabStyleOverrides = ({
  palette,
  typography,
}: Theme): Partial<StyleRules<TabClassKey>> => ({
  root: {
    ...typography['label-xl-strong'],
    color: palette.text.onLightLowContrast,
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderRadius: 8,
    borderWidth: 2,
    padding: `${16 - 2}px 0`,
    '&:hover': {
      color: palette.text.onLight,
    },
    '&:focus': {
      color: palette.text.onLight,
      borderColor: palette.blue[1],
    },
    '&:active': {
      color: palette.text.onLight,
    },
    '&$selected': {
      color: palette.text.onLight,
    },
    '&$disabled': {
      color: palette.grey.medium,
    },
  },
});
