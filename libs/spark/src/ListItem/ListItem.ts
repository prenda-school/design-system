import type { Theme } from '../theme';

export { default } from '@material-ui/core/ListItem';
export * from '@material-ui/core/ListItem';

export const MuiListItemStyleOverrides = ({ palette, transitions }: Theme) => ({
  root: {
    '&$disabled': {
      color: palette.grey.dark,
    },
  },
  button: {
    transition: transitions.create(['background-color', 'border-color'], {
      duration: transitions.duration.shortest,
    }),
  },
});
