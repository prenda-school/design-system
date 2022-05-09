import { Button, ButtonProps, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
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
});

const StaticMuiMakeStylesMuiButton = (props: ButtonProps) => {
  const classes = useStyles(props);

  return <Button classes={classes} {...props} />;
};

export default StaticMuiMakeStylesMuiButton;
