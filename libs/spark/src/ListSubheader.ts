import {
  ListSubheader,
  ListSubheaderClassKey,
  StyleRules,
  ListSubheaderProps,
} from '@material-ui/core';
import { palette } from './styles/palette';
import { typography } from './styles/typography';

export default ListSubheader;

export type { ListSubheaderProps };

export const MuiListSubheaderStyleOverrides: Partial<
  StyleRules<ListSubheaderClassKey>
> = {
  root: {
    ...typography['uppercase-sm'],
    // NOTE: divisor should be font size of above, in pixels
    lineHeight: 28 / 12,
    color: palette.text.onLightLowContrast,
  },
};
