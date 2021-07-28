import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { HeartDuotone } from '@prenda/spark-icons';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  IconButton,
  Typography,
  styled,
  withStyles,
} from '../src';

export default {
  title: 'prenda-spark/Card',
  component: Card,
  argTypes: {},
  args: {},
} as Meta;

export const BasicCard: Story = () => (
  <Card style={{ maxWidth: 400 }}>
    <CardContent>
      <Typography
        variant="heading-md"
        color="textOnLight"
        style={{ marginBottom: '1rem' }}
      >
        Heading
      </Typography>
      <Typography variant="paragraph-xl" color="textOnLight">
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
  </Card>
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
      <Typography
        variant="heading-md"
        color="textOnLight"
        style={{ marginBottom: '1rem' }}
      >
        Title
      </Typography>
      <Typography variant="paragraph-xl" color="textOnLightLowContrast">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis turpis
        interdum hendrerit massa imperdiet.
      </Typography>
    </CardContent>
  </Card>
);
