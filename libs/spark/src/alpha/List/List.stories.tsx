import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type {
  ListProps} from '..';
import {
  CheckboxListItem,
  Divider,
  IconButton,
  Link,
  List,
  ListItem
} from '..';
import {
  CheckCircleDuotone,
  CommentText,
  CrossCircleDuotone,
  FileHeartDuotone,
  PinCheckDuotone,
  ShieldCheckDuotone,
} from '../../../stories';
import {
  EnrollmentDetail,
  MicroschoolThumbnailTemplate as MicroschoolThumbnail,
} from '../ListItem/ListItem.stories';

export const _retyped = List as typeof List;

export default {
  title: '@ps/List',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    children: '(ListItem x4)',
    style: { maxWidth: 256 },
  },
  argTypes: {
    children: {
      control: 'select',
      options: [
        '(ListItem x4)',
        '(ListItem button x4)',
        '(CheckboxListItem secondaryAction x4)',
      ],
      mapping: {
        '(ListItem x4)': Array.from(Array(4)).map((_v, i) => (
          <ListItem key={i}>Line item {i}</ListItem>
        )),
        '(ListItem button x4)': Array.from(Array(4)).map((_v, i) => (
          <ListItem button key={i}>
            Line item {i}
          </ListItem>
        )),
        '(CheckboxListItem secondaryAction x4)': Array.from(Array(4)).map(
          (_v, i) => (
            <CheckboxListItem
              key={i}
              value={`value-${i}`}
              secondaryAction={
                <IconButton aria-label="Comment" size="small" variant="ghost">
                  <CommentText />
                </IconButton>
              }
            >
              Line item {i}
            </CheckboxListItem>
          )
        ),
      },
    },
  },
} as Meta;

const Template = (args) => <List {...args} />;

type Story = DefaultStory<ListProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const DisablePadding: Story = Template.bind({});
DisablePadding.args = { disablePadding: true };
DisablePadding.storyName = 'disablePadding';

export const Subheader: Story = Template.bind({});
Subheader.args = { subheader: 'Subheader' };
Subheader.storyName = 'subheader';

// ============
// = Examples =
// ============

export const EnrollmentDetails = (args) => (
  <List aria-label="Enrollment details" disablePadding {...args} style={{}}>
    <EnrollmentDetail
      ContentGroupProps={{
        primary: 'School year',
        secondary: '2022-2023',
      }}
    />
    <EnrollmentDetail
      ContentGroupProps={{
        primary: 'Prenda program',
        secondary: 'Prenda Microschool',
      }}
    />
    <EnrollmentDetail
      ContentGroupProps={{
        primary: 'Partner/Funding source',
        secondary: 'Sequoia Choice Distance Learning',
      }}
    />
    <EnrollmentDetail
      ContentGroupProps={{
        primary: 'State of residence',
        secondary: 'AZ',
      }}
    />
  </List>
);

const MicroschoolGuaranteesTemplate = (args) => (
  <List aria-label="Microschool guarantees" {...args} style={{}}>
    <ListItem
      ContentGroupProps={{
        leadingEl: <ShieldCheckDuotone fontSize="large" />,
        primary: 'Background checked',
        secondary: (
          <>
            Any adult present in the microschool facility must pass a detailed{' '}
            <Link href="#">background check</Link>.
          </>
        ),
      }}
    />
    <ListItem
      ContentGroupProps={{
        leadingEl: <FileHeartDuotone fontSize="large" />,
        primary: 'First aid certified',
        secondary: 'Jane Doe is trained to administer first aid.',
      }}
    />
    <ListItem
      ContentGroupProps={{
        leadingEl: <PinCheckDuotone fontSize="large" />,
        primary: 'Site inspected',
        secondary:
          "Prenda microschools are inspected to ensure your child's safety.",
      }}
    />
  </List>
);

export const MicroschoolGuarantees: Story = MicroschoolGuaranteesTemplate.bind(
  {}
);

const MicroschoolInformationTemplate = (args) => (
  <List
    aria-label="Microschool information"
    {...args}
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 600,
    }}
  >
    <ListItem
      ContentGroupProps={{
        leadingEl: <CheckCircleDuotone />,
        primary: 'Swimming pool',
        secondary: 'Yes',
      }}
      style={{ flexBasis: 200 }}
    />
    <ListItem
      ContentGroupProps={{
        leadingEl: <CrossCircleDuotone />,
        primary: 'Backyard',
        secondary: 'No',
      }}
      style={{ flexBasis: 200 }}
    />
    <ListItem
      ContentGroupProps={{
        leadingEl: <CheckCircleDuotone />,
        primary: 'Non-smoking',
        secondary: 'Yes',
      }}
      style={{ flexBasis: 200 }}
    />
    <ListItem
      ContentGroupProps={{
        leadingEl: <CheckCircleDuotone />,
        primary: 'Recess',
        secondary: 'Yes',
      }}
      style={{ flexBasis: 200 }}
    />
    <ListItem
      ContentGroupProps={{
        leadingEl: <CheckCircleDuotone />,
        primary: 'Pets',
        secondary: 'Yes',
      }}
      style={{ flexBasis: 200 }}
    />
    <ListItem
      ContentGroupProps={{
        leadingEl: <CrossCircleDuotone />,
        primary: 'Nearby park',
        secondary: 'No',
      }}
      style={{ flexBasis: 200 }}
    />
    <ListItem
      ContentGroupProps={{
        leadingEl: <CheckCircleDuotone />,
        primary: 'Field trips',
        secondary: 'Yes',
      }}
      style={{ flexBasis: 200 }}
    />
  </List>
);

export const MicroschoolInformation: Story =
  MicroschoolInformationTemplate.bind({});

const MicroschoolThumbnailsTemplate = (args) => (
  <List aria-label="Find a microschool" {...args} style={{ maxWidth: 580 }}>
    <MicroschoolThumbnail
      acceptingStudents
      gradesRange="1st - 3rd"
      guideAvatarProps={{ children: <>J</>, color: 'green' }}
      location="Phoenix, AZ"
      microschoolName="John Doe Microschool"
      siteImgProps={{
        alt: 'Home interior...',
        srcSet: '/img/microschool-site-2.jpg 480w',
      }}
    />
    <Divider component="span" darker />
    <MicroschoolThumbnail
      acceptingStudents
      gradesRange="K - 5th"
      guideAvatarProps={{ alt: 'Woman smiling', src: '/img/guide-3.png' }}
      location="Peoria, AZ"
      microschoolName="Jane Smith Microschool"
      siteImgProps={{
        alt: 'Home interior...',
        srcSet: '/img/microschool-site-3.jpg 480w',
      }}
    />
    <Divider component="span" darker />
    <MicroschoolThumbnail
      acceptingStudents
      gradesRange="K - 2nd"
      guideAvatarProps={{ alt: 'Woman smiling', src: '/img/guide-1.png' }}
      location="Peoria, AZ"
      microschoolName="Jane Doe Microschool"
      siteImgProps={{
        alt: 'Home interior...',
        srcSet: '/img/microschool-site-1.jpg 480w',
      }}
    />
    <Divider component="span" darker />
    <MicroschoolThumbnail
      acceptingStudents
      gradesRange="K - 2nd"
      guideAvatarProps={{ alt: 'Woman smiling', src: '/img/guide-2.png' }}
      location="Peoria, AZ"
      microschoolName="Jane Appleseed Microschool"
      siteImgProps={{
        alt: 'Home interior...',
        srcSet: '/img/microschool-site-4.jpg 480w',
      }}
    />
  </List>
);

export const MicroschoolThumbnails: Story = MicroschoolThumbnailsTemplate.bind(
  {}
);
