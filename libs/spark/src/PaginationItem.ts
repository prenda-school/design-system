import { palette } from './theme/palette';

export const MuiPaginationItemStyleOverrides = {
  root: {
    margin: 0,
    borderRadius: 0,
  },
  page: {},
  rounded: {
    borderRadius: 0,
  },
  outlined: {
    backgroundColor: palette.neutral.white,
    border: `solid 2px ${palette.neutral.mediumGrey}`,
    borderRadius: 0,
    color: palette.text.onLight,
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: '1.25rem',
    '&:hover': {
      backgroundColor: palette.neutral.lightGrey,
      border: `solid 2px ${palette.neutral.mediumGrey}`,
    },
    '&$focusVisible': {
      backgroundColor: palette.neutral.lightGrey,
    },
    '&:focus': {
      backgroundColor: palette.neutral.lightGrey,
      border: `solid 2px ${palette.blue[4]}`,
    },
    '&$selected': {
      color: palette.neutral.white,
      backgroundColor: palette.blue[3],
      border: `solid 2px ${palette.blue[5]}`,
      '&:hover, &:focus, &$focusVisible': {
        backgroundColor: palette.blue[3],
        border: `solid 2px ${palette.blue[5]}`,
      },
    },
  },
  sizeLarge: {
    height: '3rem',
    minWidth: '3rem',
  },
  ellipsis: {
    height: '3rem',
    borderRadius: 0,
    backgroundColor: palette.neutral.white,
    border: `solid 2px ${palette.neutral.mediumGrey}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 900,
    fontSize: '1.25rem',
    color: palette.text.onLightLowContrast,
  },
};
