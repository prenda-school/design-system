export const MuiPaginationStyleOverrides = {
  ul: {
    '& > li:first-child > .MuiPaginationItem-root': {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px'
    },
    '& > li:last-child > .MuiPaginationItem-root': {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px'
    },
    '& > li:not(:last-child) > .MuiPaginationItem-root': {
      marginRight: '-1px'
    },
    '& > li:not(:first-child) > .MuiPaginationItem-root': {
      marginLeft: '-1px'
    },
    '& > li > .MuiPaginationItem-root.Mui-selected': {
      zIndex: 2
    },
    '& > li > .MuiPaginationItem-root:hover, .MuiPaginationItem-root:focus, button.Mui-focusVisible': {
      zIndex: 1
    }
  }
};

export const MuiPaginationDefaultProps = {
  variant: 'outlined' as const,
  shape: 'rounded' as const,
  size: 'large' as const
};
