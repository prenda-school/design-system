import { css } from '@emotion/css';
import { Button, ButtonProps } from '@material-ui/core';

const useClasses = (props: ButtonProps) => ({
  root: css({
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

const DynamicEmotionCssMuiButton = (props: ButtonProps) => {
  const classes = useClasses(props);

  return <Button classes={classes} {...props} />;
};

export default DynamicEmotionCssMuiButton;
