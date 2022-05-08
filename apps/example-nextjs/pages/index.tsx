import styled from '@emotion/styled';
import { Button, ButtonProps, Typography } from '@material-ui/core';
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
  const [variants, setVariants] = useState<Array<ButtonProps['variant']>>([
    'contained',
    'outlined',
    'text',
  ]);

  const props = {
    children: count.toString(),
    onClick: () => setCount((prev) => prev + 1),
  };

  const cycleVariants = () => {
    setVariants((prev) => prev.slice(1).concat(prev.slice(0, 1)));
  };

  return (
    <Container>
      <Typography component="h1" color="inherit" gutterBottom variant="h4">
        Example with Next.js, TypeScript, Emotion
      </Typography>
      <Typography component="p" color="inherit" gutterBottom variant="h6">
        Initial render validation
      </Typography>
      <button onClick={cycleVariants}>Cycle variant prop</button>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - (control) - (control)
      </Typography>
      <ButtonsContainer>
        <Button variant={variants[0]} {...props} />
        <Button variant={variants[1]} {...props} />
        <Button variant={variants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - static - styled
      </Typography>
      <ButtonsContainer>
        <StaticMuiStyledMuiButton variant={variants[0]} {...props} />
        <StaticMuiStyledMuiButton variant={variants[1]} {...props} />
        <StaticMuiStyledMuiButton variant={variants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - static - makeStyles
      </Typography>
      <ButtonsContainer>
        <StaticMuiMakeStylesMuiButton variant={variants[0]} {...props} />
        <StaticMuiMakeStylesMuiButton variant={variants[1]} {...props} />
        <StaticMuiMakeStylesMuiButton variant={variants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/styled - static - styled
      </Typography>
      <ButtonsContainer>
        <StaticEmotionStyledMuiButton variant={variants[0]} {...props} />
        <StaticEmotionStyledMuiButton variant={variants[1]} {...props} />
        <StaticEmotionStyledMuiButton variant={variants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/css - static - css
      </Typography>
      <ButtonsContainer>
        <StaticEmotionCssMuiButton variant={variants[0]} {...props} />
        <StaticEmotionCssMuiButton variant={variants[1]} {...props} />
        <StaticEmotionCssMuiButton variant={variants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        tss-react - static - makeStyles
      </Typography>
      <ButtonsContainer>
        <StaticTssReactMakeStylesMuiButton variant={variants[0]} {...props} />
        <StaticTssReactMakeStylesMuiButton variant={variants[1]} {...props} />
        <StaticTssReactMakeStylesMuiButton variant={variants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - dynamic - styled
      </Typography>
      <ButtonsContainer>
        <DynamicMuiStyledMuiButton variant={variants[0]} {...props} />
        <DynamicMuiStyledMuiButton variant={variants[1]} {...props} />
        <DynamicMuiStyledMuiButton variant={variants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - dynamic - makeStyles
      </Typography>
      <ButtonsContainer>
        <DynamicMuiMakeStylesMuiButton variant={variants[0]} {...props} />
        <DynamicMuiMakeStylesMuiButton variant={variants[1]} {...props} />
        <DynamicMuiMakeStylesMuiButton variant={variants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/styled - dynamic - styled
      </Typography>
      <ButtonsContainer>
        <DynamicEmotionStyledMuiButton variant={variants[0]} {...props} />
        <DynamicEmotionStyledMuiButton variant={variants[1]} {...props} />
        <DynamicEmotionStyledMuiButton variant={variants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/css - dynamic - css
      </Typography>
      <ButtonsContainer>
        <DynamicEmotionCssMuiButton variant={variants[0]} {...props} />
        <DynamicEmotionCssMuiButton variant={variants[1]} {...props} />
        <DynamicEmotionCssMuiButton variant={variants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        tss-react - dynamic - makeStyles
      </Typography>
      <ButtonsContainer>
        <DynamicTssReactMakeStylesMuiButton variant={variants[0]} {...props} />
        <DynamicTssReactMakeStylesMuiButton variant={variants[1]} {...props} />
        <DynamicTssReactMakeStylesMuiButton variant={variants[2]} {...props} />
      </ButtonsContainer>
    </Container>
  );
}

export default Index;
