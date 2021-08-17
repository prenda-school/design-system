import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { UserDuotone } from '@prenda/spark-icons';
import { Avatar, Box, Typography, withStyles } from '../src';

export default {
  title: 'prenda-spark/Avatar',
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

// TODO: extract these to reusable decorator/template?

const H1 = (props) => (
  <Typography variant="heading-md" component="h1" gutterBottom {...props} />
);

const H2 = withStyles({
  root: { marginLeft: 8 },
})((props) => <Typography variant="heading-sm" component="h2" {...props} />);

const SmCode = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.lightGrey,
    padding: '0 2px',
  },
}))((props) => <Typography variant="code-sm" display="inline" {...props} />);

const Li = (props) => (
  <Typography variant="paragraph-lg" component="li" {...props} />
);

const LiCode = (props) => (
  <Li>
    <SmCode {...props} />
  </Li>
);

const DocumentationTemplate = () => (
  <>
    <H1>Underlying Component</H1>
    <ul>
      <Li>
        Avatar,{' '}
        <a href="https://material-ui.com/components/avatars/#avatar">
          https://material-ui.com/components/avatars/#avatar
        </a>
      </Li>
    </ul>
    <Box m={1} />
    <H1>API</H1>
    <H2>Prop Names</H2>
    <ul>
      <Li>
        Extends{' '}
        <a href="https://material-ui.com/api/avatar/#props">
          https://material-ui.com/api/avatar/#props
        </a>
      </Li>
      <Li>Omits:</Li>
      <ul>
        <Li>
          <SmCode>variant</SmCode>
          <ul>
            <Li>
              underlying default value: <SmCode>'circular'</SmCode>
            </Li>
          </ul>
        </Li>
      </ul>
      <Li>
        Adds:
        <ul>
          <LiCode>size</LiCode>
          <ul>
            <Li>
              type: <SmCode>'large' | 'medium' | 'small' | 'xsmall'</SmCode>
            </Li>
            <Li>
              default: <SmCode>'medium'</SmCode>
            </Li>
          </ul>
        </ul>
      </Li>
    </ul>
    <H2>CSS Rule Names</H2>
    <ul>
      <Li>
        Extends{' '}
        <a href="https://material-ui.com/api/avatar/#css">
          https://material-ui.com/api/avatar/#css
        </a>
      </Li>
      <Li>
        Adds:
        <ul>
          <LiCode>sizeLarge</LiCode>
          <LiCode>sizeMedium</LiCode>
          <LiCode>sizeSmall</LiCode>
          <LiCode>sizeXsmall</LiCode>
        </ul>
      </Li>
    </ul>
  </>
);

export const Documentation: Story = DocumentationTemplate.bind({});

const ChangelogTemplate = () => (
  <ul>
    <Li>
      <SmCode>vNext (yyyy-mm-dd)</SmCode>: initial implementation
    </Li>
  </ul>
);

export const Changelog: Story = ChangelogTemplate.bind({});
