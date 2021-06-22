import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Card, CardContent, CardMedia, CardActions } from '@material-ui/core';
import { Typography } from '../src/Typography';
import { Button } from '../src/Button';
import { HeartIconDuotone } from '../src/icons';
import styled from 'styled-components';

export default {
  title: 'prenda-spark/Card',
  component: Card,
  argTypes: {},
  args: {},
} as Meta;

export const BasicCard = () => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="heading-md" color="textOnLight">
        Heading
      </Typography>
      <Typography variant="paragraph-lg" color="textOnLight">
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

const MyHeadingImg = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  object-position: 50% 10%;
  vertical-align: bottom;
`;

const MyFloatingFavButton = styled(Button)`
  position: absolute;
  right: 24px;
  top: 24px;
`;

export const CardWithImage = () => (
  <Card style={{ maxWidth: 580 }}>
    <CardMedia style={{ position: 'relative' }}>
      <MyHeadingImg
        src="https://placekitten.com/300/200"
        alt="Kitten placeholder"
      />
      <MyFloatingFavButton variant="outlined" size="large">
        <HeartIconDuotone />
      </MyFloatingFavButton>
    </CardMedia>
    <CardContent>
      <Typography gutterBottom variant="heading-md" color="textOnLight">
        Title
      </Typography>
      <Typography variant="paragraph-lg" color="textOnLight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis turpis
        interdum hendrerit massa imperdiet.
      </Typography>
    </CardContent>
  </Card>
);
