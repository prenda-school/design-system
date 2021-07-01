import { palette } from './styles/palette';
export const MuiMenuPropOverrides = {
  elevation: 3,
};

export const MuiMenuStyleOverrides = {
  paper: {
    borderRadius: 8,
  },
  list: {
    border: `2px solid ${palette.grey.medium}`,
    borderRadius: 8,
  },
};
