import { makeStyles } from '../lib';
import { Button, ButtonProps } from '@material-ui/core';

const useStyles = makeStyles<ButtonProps, 'root'>()(() => ({
  root: {
    borderWidth: '3px',
    borderStyle: 'solid',
    '&.MuiButton-contained': {
      borderColor: 'red',
      color: 'red',
    },
    '&.MuiButton-outlined': {
      borderColor: 'blue',
      color: 'blue',
    },
    '&.MuiButton-text': {
      borderColor: 'purple',
      color: 'purple',
    },
  },
}));

const StaticTssReactMakeStylesMuiButton = (props: ButtonProps) => {
  const { classes } = useStyles(props);

  return <Button classes={classes} {...props} />;
};

export default StaticTssReactMakeStylesMuiButton;
