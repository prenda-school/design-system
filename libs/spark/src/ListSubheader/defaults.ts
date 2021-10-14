import type { ListSubheaderClassKey } from './ListSubheader';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

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
