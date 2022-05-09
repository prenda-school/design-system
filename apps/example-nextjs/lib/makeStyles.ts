import { useTheme } from '@material-ui/core/styles';
import { createMakeAndWithStyles } from 'tss-react';

export const { makeStyles, useStyles, withStyles } = createMakeAndWithStyles({
  useTheme,
});
