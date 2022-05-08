import styled from '@emotion/styled';
import { Button, ButtonProps } from '@material-ui/core';

const DynamicEmotionStyledMuiButton = styled(Button)((props: ButtonProps) => ({
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

export default DynamicEmotionStyledMuiButton;
