import type { ListSubheaderClassKey } from '@material-ui/core/ListSubheader';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export { default } from '@material-ui/core/ListSubheader';
export * from '@material-ui/core/ListSubheader';

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
