import styled from '@emotion/styled';
import { Button, Typography } from '@material-ui/core';
import {
  DynamicEmotionStyledMuiButton,
  DynamicMuiMakeStylesMuiButton,
  DynamicMuiStyledMuiButton,
  StaticEmotionStyledMuiButton,
  StaticMuiMakeStylesMuiButton,
  StaticMuiStyledMuiButton,
} from '../components';

const Container = styled.div({
  color: '#091e42',
  padding: 8,
});

const ButtonsContainer = styled.div({
  display: 'flex',
  gap: 8,
  padding: 8,
});

export function Index() {
  return (
    <Container>
      <Typography component="h1" color="inherit" gutterBottom variant="h4">
        Example with Next.js, TypeScript, Emotion
      </Typography>
      <Typography component="p" color="inherit" gutterBottom variant="h6">
        Initial render validation
      </Typography>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - (control) - (control)
      </Typography>
      <ButtonsContainer>
        <Button variant="contained">one</Button>
        <Button variant="outlined">two</Button>
        <Button variant="text">three</Button>
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - static - styled
      </Typography>
      <ButtonsContainer>
        <StaticMuiStyledMuiButton variant="contained">
          one
        </StaticMuiStyledMuiButton>
        <StaticMuiStyledMuiButton variant="outlined">
          two
        </StaticMuiStyledMuiButton>
        <StaticMuiStyledMuiButton variant="text">
          three
        </StaticMuiStyledMuiButton>
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - static - makeStyles
      </Typography>
      <ButtonsContainer>
        <StaticMuiMakeStylesMuiButton variant="contained">
          one
        </StaticMuiMakeStylesMuiButton>
        <StaticMuiMakeStylesMuiButton variant="outlined">
          two
        </StaticMuiMakeStylesMuiButton>
        <StaticMuiMakeStylesMuiButton variant="text">
          three
        </StaticMuiMakeStylesMuiButton>
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/styled - static - styled
      </Typography>
      <ButtonsContainer>
        <StaticEmotionStyledMuiButton variant="contained">
          one
        </StaticEmotionStyledMuiButton>
        <StaticEmotionStyledMuiButton variant="outlined">
          two
        </StaticEmotionStyledMuiButton>
        <StaticEmotionStyledMuiButton variant="text">
          three
        </StaticEmotionStyledMuiButton>
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - dynamic - styled
      </Typography>
      <ButtonsContainer>
        <DynamicMuiStyledMuiButton variant="contained">
          one
        </DynamicMuiStyledMuiButton>
        <DynamicMuiStyledMuiButton variant="outlined">
          two
        </DynamicMuiStyledMuiButton>
        <DynamicMuiStyledMuiButton variant="text">
          three
        </DynamicMuiStyledMuiButton>
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - dynamic - makeStyles
      </Typography>
      <ButtonsContainer>
        <DynamicMuiMakeStylesMuiButton variant="contained">
          one
        </DynamicMuiMakeStylesMuiButton>
        <DynamicMuiMakeStylesMuiButton variant="outlined">
          two
        </DynamicMuiMakeStylesMuiButton>
        <DynamicMuiMakeStylesMuiButton variant="text">
          three
        </DynamicMuiMakeStylesMuiButton>
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/styled - dynamic - styled
      </Typography>
      <ButtonsContainer>
        <DynamicEmotionStyledMuiButton variant="contained">
          one
        </DynamicEmotionStyledMuiButton>
        <DynamicEmotionStyledMuiButton variant="outlined">
          two
        </DynamicEmotionStyledMuiButton>
        <DynamicEmotionStyledMuiButton variant="text">
          three
        </DynamicEmotionStyledMuiButton>
      </ButtonsContainer>
    </Container>
  );
}

export default Index;
