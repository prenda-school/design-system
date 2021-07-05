export const MuiPaginationStyleOverrides = {
  ul: {
    '& > li:first-child > .MuiPaginationItem-root': {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    '& > li:last-child > .MuiPaginationItem-root': {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
    '& > li:not(:last-child) > .MuiPaginationItem-root': {
      marginRight: -1,
    },
    '& > li:not(:first-child) > .MuiPaginationItem-root': {
      marginLeft: -1,
    },
    '& > li > .MuiPaginationItem-root.Mui-selected': {
      zIndex: 2,
    },
    '& > li > .MuiPaginationItem-root:hover, .MuiPaginationItem-root:focus, button.Mui-focusVisible': {
      zIndex: 1,
    },
  },
};

export const MuiPaginationDefaultProps = {
  variant: 'outlined' as const,
  shape: 'rounded' as const,
  size: 'large' as const,
};
