import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { HeartDuotone } from '@prenda/spark-icons';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  styled,
  withStyles,
} from '..';

export default {
  title: '@ps/Card',
  component: Card,
  excludeStories: ['Card'],
} as Meta;

const CustomCard = withStyles({
  root: {
    maxWidth: 400,
    margin: 8,
  },
})(Card);

export const BasicCard: Story = () => (
  <CustomCard>
    <CardContent>
      <Typography
        variant="heading-md"
        color="dark"
        style={{ marginBottom: '1rem' }}
      >
        Heading
      </Typography>
      <Typography variant="paragraph-xl" color="dark">
        This is a sample catalog of all the courses we offer. Browse by topic or
        difficulty. Sign up today and get access to our entire library. This is
        a sample catalog of all the courses we offer.
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="outlined" size="large">
        Action
      </Button>
    </CardActions>
  </CustomCard>
);

const StyledImage = styled('img')({
  width: '100%',
  maxHeight: 300,
  objectFit: 'cover',
  objectPosition: '50% 10%',
  verticalAlign: 'bottom',
});

const FloatingIconButton = withStyles({
  root: {
    position: 'absolute',
    right: 24,
    top: 24,
  },
})(IconButton);

export const CardWithImage: Story = () => (
  <Card style={{ maxWidth: 580 }}>
    <CardMedia style={{ position: 'relative' }}>
      <StyledImage
        src="/img/multicolor-blobs.jpg"
        alt="Multicolor blobs, blurred on light grey background"
      />
      <FloatingIconButton variant="outlined" size="large">
        <HeartDuotone />
      </FloatingIconButton>
    </CardMedia>
    <CardContent>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="16px"
      >
        <Typography variant="heading-md" color="dark">
          Title
        </Typography>
        <Typography variant="uppercase-lg" color="dark" lowContrast>
          Optional Text
        </Typography>
      </Box>
      <Typography variant="paragraph-xl" color="dark" lowContrast>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis turpis
        interdum hendrerit massa imperdiet.
      </Typography>
    </CardContent>
  </Card>
);
