import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

const StaticEmotionStyledMuiButton = styled(Button)({
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
});

export default StaticEmotionStyledMuiButton;
