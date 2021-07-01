export const MuiPaginationStyleOverrides = {
  ul: {
    '& > li:first-child > button': {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
    },
    '& > li:last-child > button': {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
    },
    '& > li:not(:last-child) > .MuiPaginationItem-root': {
      marginRight: '-1px',
    },
    '& > li:not(:first-child) > .MuiPaginationItem-root': {
      marginLeft: '-1px',
    },
    '& > li > button.Mui-selected': {
      zIndex: 2,
    },
    '& > li > button:hover, button:focus, button.Mui-focusVisible': {
      zIndex: 1,
    },
  },
};

export const MuiPaginationDefaultProps = {
  variant: 'outlined' as const,
  shape: 'rounded' as const,
  size: 'large' as const,
};
