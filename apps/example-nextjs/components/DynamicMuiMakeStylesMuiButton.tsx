import { Button, ButtonProps, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: (props: ButtonProps) => ({
    borderWidth: '3px',
    borderStyle: 'solid',
    ...(props.variant === 'contained' && {
      borderColor: 'red',
      color: 'red',
    }),
    ...(props.variant === 'outlined' && {
      borderColor: 'blue',
      color: 'blue',
    }),
    ...(props.variant === 'text' && {
      borderColor: 'purple',
      color: 'purple',
    }),
  }),
});

const DynamicMuiMakeStylesMuiButton = (props: ButtonProps) => {
  const classes = useStyles(props);

  return <Button classes={classes} {...props} />;
};

export default DynamicMuiMakeStylesMuiButton;
