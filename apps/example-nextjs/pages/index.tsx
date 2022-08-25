import styled from '@emotion/styled';
import {
  Box,
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  Typography,
} from '@material-ui/core';
import { Button, ButtonProps } from '@prenda/spark';
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

const SubtitleContainer = styled.div({
  display: 'flex',
  gap: 8,
  paddingBottom: 8,
});

export function Index() {
  const [count, setCount] = useState(0);
  const [muiVariants, setMuiVariants] = useState<
    Array<MuiButtonProps['variant']>
  >(['contained', 'outlined', 'text']);
  const [variants, setVariants] = useState<Array<ButtonProps['variant']>>([
    'primary',
    'stroked',
    'ghost',
    'destructive',
  ]);

  const props = {
    children: count.toString(),
    onClick: () => setCount((prev) => prev + 1),
  };

  const cycleVariants = () => {
    setMuiVariants((prev) => prev.slice(1).concat(prev.slice(0, 1)));
    setVariants((prev) => prev.slice(1).concat(prev.slice(0, 1)));
  };

  return (
    <Container>
      <Typography component="h1" color="inherit" gutterBottom variant="h4">
        Example with Next.js, TypeScript, Emotion
      </Typography>
      <SubtitleContainer>
        <Typography component="p" color="inherit" gutterBottom variant="h6">
          Initial render validation
        </Typography>
        <button onClick={cycleVariants}>Cycle variant prop</button>
      </SubtitleContainer>
      <Typography color="inherit" gutterBottom>
        Initial Box
      </Typography>
      <ButtonsContainer>
        <Box>Initial Box</Box>
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - (control) - (control)
      </Typography>
      <ButtonsContainer>
        <MuiButton variant={muiVariants[0]} {...props} />
        <MuiButton variant={muiVariants[1]} {...props} />
        <MuiButton variant={muiVariants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - static - styled
      </Typography>
      <ButtonsContainer>
        <StaticMuiStyledMuiButton variant={muiVariants[0]} {...props} />
        <StaticMuiStyledMuiButton variant={muiVariants[1]} {...props} />
        <StaticMuiStyledMuiButton variant={muiVariants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - static - makeStyles
      </Typography>
      <ButtonsContainer>
        <StaticMuiMakeStylesMuiButton variant={muiVariants[0]} {...props} />
        <StaticMuiMakeStylesMuiButton variant={muiVariants[1]} {...props} />
        <StaticMuiMakeStylesMuiButton variant={muiVariants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/styled - static - styled
      </Typography>
      <ButtonsContainer>
        <StaticEmotionStyledMuiButton variant={muiVariants[0]} {...props} />
        <StaticEmotionStyledMuiButton variant={muiVariants[1]} {...props} />
        <StaticEmotionStyledMuiButton variant={muiVariants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/css - static - css
      </Typography>
      <ButtonsContainer>
        <StaticEmotionCssMuiButton variant={muiVariants[0]} {...props} />
        <StaticEmotionCssMuiButton variant={muiVariants[1]} {...props} />
        <StaticEmotionCssMuiButton variant={muiVariants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        tss-react - static - makeStyles
      </Typography>
      <ButtonsContainer>
        <StaticTssReactMakeStylesMuiButton
          variant={muiVariants[0]}
          {...props}
        />
        <StaticTssReactMakeStylesMuiButton
          variant={muiVariants[1]}
          {...props}
        />
        <StaticTssReactMakeStylesMuiButton
          variant={muiVariants[2]}
          {...props}
        />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - dynamic - styled
      </Typography>
      <ButtonsContainer>
        <DynamicMuiStyledMuiButton variant={muiVariants[0]} {...props} />
        <DynamicMuiStyledMuiButton variant={muiVariants[1]} {...props} />
        <DynamicMuiStyledMuiButton variant={muiVariants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @material-ui/core - dynamic - makeStyles
      </Typography>
      <ButtonsContainer>
        <DynamicMuiMakeStylesMuiButton variant={muiVariants[0]} {...props} />
        <DynamicMuiMakeStylesMuiButton variant={muiVariants[1]} {...props} />
        <DynamicMuiMakeStylesMuiButton variant={muiVariants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/styled - dynamic - styled
      </Typography>
      <ButtonsContainer>
        <DynamicEmotionStyledMuiButton variant={muiVariants[0]} {...props} />
        <DynamicEmotionStyledMuiButton variant={muiVariants[1]} {...props} />
        <DynamicEmotionStyledMuiButton variant={muiVariants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @emotion/css - dynamic - css
      </Typography>
      <ButtonsContainer>
        <DynamicEmotionCssMuiButton variant={muiVariants[0]} {...props} />
        <DynamicEmotionCssMuiButton variant={muiVariants[1]} {...props} />
        <DynamicEmotionCssMuiButton variant={muiVariants[2]} {...props} />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        tss-react - dynamic - makeStyles
      </Typography>
      <ButtonsContainer>
        <DynamicTssReactMakeStylesMuiButton
          variant={muiVariants[0]}
          {...props}
        />
        <DynamicTssReactMakeStylesMuiButton
          variant={muiVariants[1]}
          {...props}
        />
        <DynamicTssReactMakeStylesMuiButton
          variant={muiVariants[2]}
          {...props}
        />
      </ButtonsContainer>
      <Typography color="inherit" gutterBottom>
        @prenda/spark - dynamic - makeStyles
      </Typography>
      <ButtonsContainer>
        <Button variant={variants[0]} {...props} />
        <Button variant={variants[1]} {...props} />
        <Button variant={variants[2]} {...props} />
        <Button variant={variants[3]} {...props} />
      </ButtonsContainer>
    </Container>
  );
}

export default Index;
