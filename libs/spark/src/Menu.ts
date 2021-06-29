import { colors } from './theme/colors';

export const MuiMenuPropOverrides = {
  elevation: 3,
};

export const MuiMenuStyleOverrides = {
  paper: {
    borderRadius: 8,
  },
  list: {
    border: `2px solid ${colors.colorsPrendaMediumGrey}`,
    borderRadius: 8,
  },
};
