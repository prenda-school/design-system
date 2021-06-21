import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
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
      <Typography gutterBottom variant="h6" component="h2">
        Card Title
      </Typography>
      <Typography variant="body1" component="p">
        Card body
      </Typography>
    </CardContent>
  </Card>
);

const MyHeadingImg = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  object-position: 50% 10%;
  vertical-align: bottom;
`;

export const CardWithImage = () => (
  <Card>
    <CardMedia>
      <MyHeadingImg
        src="https://placekitten.com/300/200"
        alt="Kitten placeholder"
      />
    </CardMedia>
    <CardContent>
      <Typography gutterBottom variant="h6" component="h2">
        Card Title
      </Typography>
      <Typography variant="body1" component="p">
        Card body
      </Typography>
    </CardContent>
  </Card>
);
