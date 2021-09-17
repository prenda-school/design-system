import type {
  ListSubheaderClassKey,
  ListSubheaderProps,
  StyleRules,
  Theme,
} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';

export default ListSubheader;

export type { ListSubheaderProps };

export const MuiListSubheaderStyleOverrides = ({
  palette,
  typography,
}: Theme): Partial<StyleRules<ListSubheaderClassKey>> => ({
  root: {
    ...typography['uppercase-sm'],
    // NOTE: divisor should be font size of above, in pixels
    lineHeight: 28 / 12,
    color: palette.text.onLightLowContrast,
  },
});
