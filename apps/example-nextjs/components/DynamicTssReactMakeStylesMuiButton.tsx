import { makeStyles } from '../lib';
import { Button, ButtonProps } from '@material-ui/core';

const useStyles = makeStyles<ButtonProps, 'root'>()((_theme, props) => ({
  root: {
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
  },
}));

const DynamicTssReactMakeStylesMuiButton = (props: ButtonProps) => {
  const { classes } = useStyles(props);

  return <Button classes={classes} {...props} />;
};

export default DynamicTssReactMakeStylesMuiButton;
