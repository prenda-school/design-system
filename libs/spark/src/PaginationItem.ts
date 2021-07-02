import { palette } from './styles/palette';

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
    backgroundColor: palette.common.white,
    border: `solid 2px ${palette.grey.medium}`,
    borderRadius: 0,
    color: palette.text.onLight,
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: '1.25rem',
    '&:hover': {
      backgroundColor: palette.grey.light,
      border: `solid 2px ${palette.grey.medium}`,
    },
    '&$focusVisible': {
      backgroundColor: palette.grey.light,
    },
    '&:focus': {
      backgroundColor: palette.grey.light,
      border: `solid 2px ${palette.blue[4]}`,
    },
    '&$selected': {
      color: palette.common.white,
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
    backgroundColor: palette.common.white,
    border: `solid 2px ${palette.grey.medium}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 900,
    fontSize: '1.25rem',
    color: palette.text.onLightLowContrast,
  },
};
