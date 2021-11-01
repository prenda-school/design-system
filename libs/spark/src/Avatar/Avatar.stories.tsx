import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { UserDuotone } from '@prenda/spark-icons';
import Avatar from './Avatar';
import Box from '../Box';
import {
  DocumentationTemplate,
  ChangelogTemplate,
} from '../../stories/templates';

export const TypedAvatar = Avatar;

export default {
  title: '@ps/Avatar',
  component: TypedAvatar,
  excludeStories: ['TypedAvatar'],
  args: {
    src: '/img/guide-1.png',
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

const AvatarDocTemplate = (args) => <DocumentationTemplate {...args} />;

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
