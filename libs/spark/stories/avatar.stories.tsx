import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { UserDuotone } from '@prenda/spark-icons';
import { Avatar, Box, Typography, withStyles } from '../src';
import { DocTemplate } from './documentation-template';
import { ChangelogTemplate } from './changelog-template';

export default {
  title: 'pds/@ps/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'medium', 'small', 'xsmall'],
    },
    src: {
      control: 'select',
      options: [
        '/img/guide-1.png',
        '/img/guide-2.png',
        '/img/guide-3.png',
        '/img/student-boy-1.png',
        '/img/student-boy-2.png',
        '/img/student-boy-3.png',
        '/img/student-girl-1.png',
        '/img/student-girl-2.png',
        '/img/student-girl-3.png',
      ],
    },
    alt: { type: 'text' },
  },
  args: {
    size: 'medium',
    src: '/img/guide-1.png',
    alt: 'Jane Doe',
  },
} as Meta;

const Template = ({ src, alt, ...other }) => (
  <Box display="flex" p={1} style={{ gap: '16px' }}>
    <Avatar src={src} alt={alt} {...other} />
    <Avatar {...other}>
      <UserDuotone />
    </Avatar>
    <Avatar {...other}>AC</Avatar>
  </Box>
);

export const Configurable: Story = Template.bind({});

const GridContainer = (props) => (
  <Box
    m={1}
    display="grid"
    gridTemplateColumns="repeat(4, 100px)"
    gridGap="16px"
    alignItems="center"
    justifyItems="center"
    {...props}
  />
);

const ContentAndSizeTemplate = ({ src, alt, ...other }) => (
  <GridContainer>
    <span>Size / Content</span>
    <span>Image</span>
    <span>Icon</span>
    <span>Letter(s)</span>
    <span>large</span>
    <span>
      <Avatar src={src} alt={alt} size="large" />
    </span>
    <span>
      <Avatar size="large">
        <UserDuotone />
      </Avatar>
    </span>
    <span>
      <Avatar size="large">AC</Avatar>
    </span>
    <span>medium</span>
    <span>
      <Avatar src={src} alt={alt} size="medium" />
    </span>
    <span>
      <Avatar size="medium">
        <UserDuotone />
      </Avatar>
    </span>
    <span>
      <Avatar size="medium">AC</Avatar>
    </span>
    <span>small</span>
    <span>
      <Avatar src={src} alt={alt} size="small" />
    </span>
    <span>
      <Avatar size="small">
        <UserDuotone />
      </Avatar>
    </span>
    <span>
      <Avatar size="small">AC</Avatar>
    </span>
    <span>xsmall</span>
    <span>
      <Avatar src={src} alt={alt} size="xsmall" />
    </span>
    <span>
      <Avatar size="xsmall">
        <UserDuotone />
      </Avatar>
    </span>
    <span>
      <Avatar size="xsmall">AC</Avatar>
    </span>
  </GridContainer>
);

export const ContentAndSize: Story = ContentAndSizeTemplate.bind({});

const AvatarDocTemplate = (args) => <DocTemplate {...args} />;

export const Documentation: Story = AvatarDocTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'Avatar',
    href: 'https://v4.mui.com/components/avatars/#avatar',
  },
  props: {
    extends: {
      href: 'https://v4.mui.com/api/avatar/#props',
    },
    omits: [
      {
        name: 'variant',
        defaultValue: "'circular'",
      },
    ],
    adds: [
      {
        name: 'size',
        type: "'large' | 'medium' | 'small' | 'xsmall'",
        defaultValue: "'medium'",
      },
    ],
  },
  css: {
    extends: {
      href: 'https://v4.mui.com/api/avatar/#css',
    },
    adds: ['sizeLarge', 'sizeMedium', 'sizeSmall', 'sizeXsmall'],
  },
};

const AvatarChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = AvatarChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.12.0',
      versionDate: '2021-09-28',
      changes: ['Fix: custom class names not being global.'],
    },
    {
      version: 'v0.11.0',
      versionDate: '2021-08-21',
      changes: ['Initial implementation'],
    },
  ],
};
