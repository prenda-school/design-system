import styled from '@emotion/styled';
import { Button, Typography } from '@material-ui/core';
import { useState } from 'react';
import {
  DynamicEmotionCssMuiButton,
  DynamicEmotionStyledMuiButton,
  DynamicMuiMakeStylesMuiButton,
  DynamicMuiStyledMuiButton,
  DynamicTssReactMakeStylesMuiButton,
  StaticEmotionCssMuiButton,
  StaticEmotionStyledMuiButton,
  StaticMuiMakeStylesMuiButton,
  StaticMuiStyledMuiButton,
  StaticTssReactMakeStylesMuiButton,
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
  const [count, setCount] = useState(0);

  const props = {
    children: count.toString(),
    onClick: () => setCount((prev) => prev + 1),
  };

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
        <Button variant="contained" {...props} />
        <Button variant="outlined" {...props} />
        <Button variant="text" {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - static - styled
      </Typography>
      <ButtonsContainer>
        <StaticMuiStyledMuiButton variant="contained" {...props} />
        <StaticMuiStyledMuiButton variant="outlined" {...props} />
        <StaticMuiStyledMuiButton variant="text" {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - static - makeStyles
      </Typography>
      <ButtonsContainer>
        <StaticMuiMakeStylesMuiButton variant="contained" {...props} />
        <StaticMuiMakeStylesMuiButton variant="outlined" {...props} />
        <StaticMuiMakeStylesMuiButton variant="text" {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/styled - static - styled
      </Typography>
      <ButtonsContainer>
        <StaticEmotionStyledMuiButton variant="contained" {...props} />
        <StaticEmotionStyledMuiButton variant="outlined" {...props} />
        <StaticEmotionStyledMuiButton variant="text" {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/css - static - css
      </Typography>
      <ButtonsContainer>
        <StaticEmotionCssMuiButton variant="contained" {...props} />
        <StaticEmotionCssMuiButton variant="outlined" {...props} />
        <StaticEmotionCssMuiButton variant="text" {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        tss-react - static - makeStyles
      </Typography>
      <ButtonsContainer>
        <StaticTssReactMakeStylesMuiButton variant="contained" {...props} />
        <StaticTssReactMakeStylesMuiButton variant="outlined" {...props} />
        <StaticTssReactMakeStylesMuiButton variant="text" {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - dynamic - styled
      </Typography>
      <ButtonsContainer>
        <DynamicMuiStyledMuiButton variant="contained" {...props} />
        <DynamicMuiStyledMuiButton variant="outlined" {...props} />
        <DynamicMuiStyledMuiButton variant="text" {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - dynamic - makeStyles
      </Typography>
      <ButtonsContainer>
        <DynamicMuiMakeStylesMuiButton variant="contained" {...props} />
        <DynamicMuiMakeStylesMuiButton variant="outlined" {...props} />
        <DynamicMuiMakeStylesMuiButton variant="text" {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/styled - dynamic - styled
      </Typography>
      <ButtonsContainer>
        <DynamicEmotionStyledMuiButton variant="contained" {...props} />
        <DynamicEmotionStyledMuiButton variant="outlined" {...props} />
        <DynamicEmotionStyledMuiButton variant="text" {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/css - dynamic - css
      </Typography>
      <ButtonsContainer>
        <DynamicEmotionCssMuiButton variant="contained" {...props} />
        <DynamicEmotionCssMuiButton variant="outlined" {...props} />
        <DynamicEmotionCssMuiButton variant="text" {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        tss-react - dynamic - makeStyles
      </Typography>
      <ButtonsContainer>
        <DynamicTssReactMakeStylesMuiButton variant="contained" {...props} />
        <DynamicTssReactMakeStylesMuiButton variant="outlined" {...props} />
        <DynamicTssReactMakeStylesMuiButton variant="text" {...props} />
      </ButtonsContainer>
    </Container>
  );
}

export default Index;
