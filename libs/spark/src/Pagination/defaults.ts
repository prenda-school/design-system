import type { PaginationClassKey, PaginationProps } from './Pagination';
import type { StyleRules } from '../withStyles';

export const MuiPaginationDefaultProps: Partial<PaginationProps> = {
  variant: 'outlined' as const,
  shape: 'rounded' as const,
  size: 'large' as const,
};

export const MuiPaginationStyleOverrides: Partial<
  StyleRules<PaginationClassKey>
> = {
  ul: {
    // TODO: Mui-v5 move to .MuiPaginationItem-previousNext / firstLast
    '& > li:first-child > button': {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
    },
    '& > li:last-child > [class*=MuiPaginationItem-root]': {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
    '& > li:not(:last-child) > [class*=MuiPaginationItem-root]': {
      marginRight: -1,
    },
    '& > li:not(:first-child) > [class*=MuiPaginationItem-root]': {
      marginLeft: -1,
    },
    '& > li > [class*=MuiPaginationItem-root].Mui-selected': {
      zIndex: 2,
    },
    '& > li > [class*=MuiPaginationItem-root]:hover, [class*=MuiPaginationItem-root]:focus-visible, button.Mui-focusVisible': {
      zIndex: 1,
    },
  },
};
