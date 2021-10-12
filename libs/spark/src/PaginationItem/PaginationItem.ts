import type { PaginationItemClassKey } from '@material-ui/lab/PaginationItem';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export { default } from '@material-ui/lab/PaginationItem';
export * from '@material-ui/lab/PaginationItem';

export const MuiPaginationItemStyleOverrides = ({
  palette,
  typography,
}: Theme): Partial<StyleRules<PaginationItemClassKey>> => ({
  root: {
    margin: 0,
    borderRadius: 0,
  },
  rounded: {
    borderRadius: 0,
  },
  outlined: {
    ...typography['label-lg-strong'],
    backgroundColor: palette.common.white,
    border: `solid 2px ${palette.grey.medium}`,
    borderRadius: 0,
    color: palette.text.onLight,
    '&:hover': {
      backgroundColor: palette.grey.light,
      border: `solid 2px ${palette.grey.medium}`,
    },
    '&:focus': {
      backgroundColor: palette.grey.light,
      border: `solid 2px ${palette.blue[4]}`,
    },
    '&$focusVisible': {
      backgroundColor: palette.grey.light,
    },
    '&$selected': {
      color: palette.common.white,
      backgroundColor: palette.blue[3],
      border: `solid 2px ${palette.blue[5]}`,
      '&:hover, &:focus, &$focusVisible': {
        backgroundColor: palette.blue[3],
        border: `solid 2px ${palette.blue[5]}`,
      },
      '&$disabled': {
        border: `solid 2px ${palette.grey.dark}`,
      },
    },
  },
  sizeLarge: {
    height: '3rem',
    minWidth: '3rem',
  },
  ellipsis: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // the internal ellipsis is the actual character, but it's
    // "letter spacing" is too small (not actually controlled by letter-spacing
    // because it's a single character), so replace with three periods
    '&::after': {
      height: '3rem',
      borderRadius: 0,
      backgroundColor: palette.common.white,
      border: `solid 2px ${palette.grey.medium}`,
      display: 'flex',
      justifyContent: 'center',
      fontWeight: 900,
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
      color: palette.text.onLightLowContrast,
      // extra to shift it down
      alignItems: 'flex-end',
      paddingBottom: '.375rem',
      // extra for this being ::after
      visibility: 'visible',
      position: 'absolute' as const,
      inset: 'auto',
      content: "'...'",
      letterSpacing: '1px',
      padding: '0 10px',
      minWidth: '3rem',
    },
  },
  icon: {
    color: palette.text.onLightLowContrast,
  },
});

export const MuiPaginationItemDefaultProps = {
  variant: 'outlined' as const,
  shape: 'rounded' as const,
  size: 'large' as const,
};
