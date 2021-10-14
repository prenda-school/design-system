import type { MenuClassKey, MenuProps } from './Menu';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiMenuDefaultProps: Partial<MenuProps> = {
  elevation: 4, // E400
};

export const MuiMenuStyleOverrides = ({
  palette,
}: Theme): Partial<StyleRules<MenuClassKey>> => ({
  paper: {
    borderRadius: 8,
    // This is a poor hack. The internal calculations of a Menu's Popover
    // for determining the Paper's absolute positioning on the screen
    // rely on measurements of the anchor's "client" positioning that
    // don't include margin. So, when the `anchorOrigin.vertical === 'bottom'`
    // and `transformOrigin.vertical === 'top'`, the stars align so margin can
    // have the desired affect, but other combos do not work.
    // TODO: open issue and submit PR for a new prop that gets factored into
    // the absolute positioning of the Paper, like `additionalContentOffset`.
    '&[class*=MuiSparkMenu-offsetTop]': {
      marginTop: 8,
    },
  },
  list: {
    border: `2px solid ${palette.grey.medium}`,
    borderRadius: 8,
  },
});
