import { Button, ButtonProps, styled } from '@material-ui/core';

const DynamicMuiStyledMuiButton = styled(Button)((props: ButtonProps) => ({
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
}));

export default DynamicMuiStyledMuiButton;
