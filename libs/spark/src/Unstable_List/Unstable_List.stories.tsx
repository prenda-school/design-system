import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_CheckboxListItem,
  Unstable_Divider,
  Unstable_IconButton,
  Unstable_Link,
  Unstable_List,
  Unstable_ListItem,
} from '..';
import {
  CheckCircleDuotone,
  CommentText,
  CrossCircleDuotone,
  FileHeartDuotone,
  PinCheckDuotone,
  ShieldCheckDuotone,
} from '../../stories';
import {
  EnrollmentDetail,
  MicroschoolThumbnailTemplate as MicroschoolThumbnail,
} from '../Unstable_ListItem/Unstable_ListItem.stories';

export const _retyped = Unstable_List as typeof Unstable_List;

export default {
  title: '@ps/Unstable_List',
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
          <Unstable_ListItem key={i}>Line item {i}</Unstable_ListItem>
        )),
        '(ListItem button x4)': Array.from(Array(4)).map((_v, i) => (
          <Unstable_ListItem button key={i}>
            Line item {i}
          </Unstable_ListItem>
        )),
        '(CheckboxListItem secondaryAction x4)': Array.from(Array(4)).map(
          (_v, i) => (
            <Unstable_CheckboxListItem
              key={i}
              value={`value-${i}`}
              secondaryAction={
                <Unstable_IconButton
                  aria-label="Comment"
                  size="small"
                  variant="ghost"
                >
                  <CommentText />
                </Unstable_IconButton>
              }
            >
              Line item {i}
            </Unstable_CheckboxListItem>
          )
        ),
      },
    },
  },
} as Meta;

const Template = (args) => <Unstable_List {...args} />;

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
  <Unstable_List
    aria-label="Enrollment details"
    disablePadding
    {...args}
    style={{}}
  >
    <EnrollmentDetail primary="School year" secondary="2022-2023" />
    <EnrollmentDetail primary="Prenda program" secondary="Prenda Microschool" />
    <EnrollmentDetail
      primary="Partner/Funding source"
      secondary="Sequoia Choice Distance Learning"
    />
    <EnrollmentDetail primary="State of residence" secondary="AZ" />
  </Unstable_List>
);

const MicroschoolGuaranteesTemplate = (args) => (
  <Unstable_List aria-label="Microschool guarantees" {...args} style={{}}>
    <Unstable_ListItem
      alignItems="flex-start"
      leadingEl={<ShieldCheckDuotone fontSize="large" />}
      primary="Background checked"
      secondary={
        <>
          Any adult present in the microschool facility must pass a detailed{' '}
          <Unstable_Link href="#">background check</Unstable_Link>.
        </>
      }
    />
    <Unstable_ListItem
      alignItems="flex-start"
      leadingEl={<FileHeartDuotone fontSize="large" />}
      primary="First aid certified"
      secondary="Jane Doe is trained to administer first aid."
    />
    <Unstable_ListItem
      alignItems="flex-start"
      leadingEl={<PinCheckDuotone fontSize="large" />}
      primary="Site inspected"
      secondary="Prenda microschools are inspected to ensure your child's safety."
    />
  </Unstable_List>
);

export const MicroschoolGuarantees: Story = MicroschoolGuaranteesTemplate.bind(
  {}
);

export const MicroschoolGuaranteesSmallMobile: Story = MicroschoolGuaranteesTemplate.bind(
  {}
);
MicroschoolGuaranteesSmallMobile.parameters = {
  viewport: { defaultViewport: 'mobile1' },
};
MicroschoolGuaranteesSmallMobile.storyName =
  'Microschool Guarantees (small mobile)';

const MicroschoolInformationTemplate = (args) => (
  <Unstable_List
    aria-label="Microschool information"
    {...args}
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 600,
    }}
  >
    <Unstable_ListItem
      alignItems="flex-start"
      leadingEl={<CheckCircleDuotone />}
      primary="Swimming pool"
      secondary="Yes"
      style={{ flexBasis: 200 }}
    />
    <Unstable_ListItem
      alignItems="flex-start"
      leadingEl={<CrossCircleDuotone />}
      primary="Backyard"
      secondary="No"
      style={{ flexBasis: 200 }}
    />
    <Unstable_ListItem
      alignItems="flex-start"
      leadingEl={<CheckCircleDuotone />}
      primary="Non-smoking"
      secondary="Yes"
      style={{ flexBasis: 200 }}
    />
    <Unstable_ListItem
      alignItems="flex-start"
      leadingEl={<CheckCircleDuotone />}
      primary="Recess"
      secondary="Yes"
      style={{ flexBasis: 200 }}
    />
    <Unstable_ListItem
      alignItems="flex-start"
      leadingEl={<CheckCircleDuotone />}
      primary="Pets"
      secondary="Yes"
      style={{ flexBasis: 200 }}
    />
    <Unstable_ListItem
      alignItems="flex-start"
      leadingEl={<CrossCircleDuotone />}
      primary="Nearby park"
      secondary="No"
      style={{ flexBasis: 200 }}
    />
    <Unstable_ListItem
      alignItems="flex-start"
      leadingEl={<CheckCircleDuotone />}
      primary="Field trips"
      secondary="Yes"
      style={{ flexBasis: 200 }}
    />
  </Unstable_List>
);

export const MicroschoolInformation: Story = MicroschoolInformationTemplate.bind(
  {}
);

export const MicroschoolInformationSmallMobile: Story = MicroschoolInformationTemplate.bind(
  {}
);
MicroschoolInformationSmallMobile.parameters = {
  viewport: { defaultViewport: 'mobile1' },
};
MicroschoolInformationSmallMobile.storyName =
  'Microschool Information (small mobile)';

const MicroschoolThumbnailsTemplate = (args) => (
  <Unstable_List
    aria-label="Find a microschool"
    {...args}
    style={{ maxWidth: 580 }}
  >
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
    <Unstable_Divider component="span" darker />
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
    <Unstable_Divider component="span" darker />
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
    <Unstable_Divider component="span" darker />
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
  </Unstable_List>
);

export const MicroschoolThumbnails: Story = MicroschoolThumbnailsTemplate.bind(
  {}
);

export const MicroschoolThumbnailsSmallMobile: Story = MicroschoolThumbnailsTemplate.bind(
  {}
);
MicroschoolThumbnailsSmallMobile.parameters = {
  viewport: { defaultViewport: 'mobile1' },
};
MicroschoolThumbnailsSmallMobile.storyName =
  'Microschool Thumbnails (small mobile)';
