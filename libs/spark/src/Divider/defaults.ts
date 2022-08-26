import type { DividerClassKey } from './Divider';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiDividerStyleOverrides = ({
  palette,
}: Theme): Partial<StyleRules<DividerClassKey>> => ({
  root: {
    height: 2,
    backgroundColor: palette.grey.medium,
  },
});
