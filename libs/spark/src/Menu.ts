import type { MenuProps, Theme } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';

export default Menu;

export type { MenuProps };

export const MuiMenuDefaultProps = {
  elevation: 4, // E400
};

export const MuiMenuStyleOverrides = ({ palette }: Theme) => ({
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
    '&.MuiSparkMenu-offsetTop': {
      marginTop: 8,
    },
  },
  list: {
    border: `2px solid ${palette.grey.medium}`,
    borderRadius: 8,
  },
});
