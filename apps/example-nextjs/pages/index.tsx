import styled from '@emotion/styled';
import { Box, Typography } from '@material-ui/core';

const Container = styled.div({
  color: '#091e42',
});

export function Index() {
  return (
    <Container>
      <Box my={4}>
        <Typography component="h1" color="inherit" gutterBottom>
          Example with Next.js, TypeScript, Emotion
        </Typography>
      </Box>
    </Container>
  );
}

export default Index;
