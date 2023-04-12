import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import {
  makeStyles,
  Avatar,
  AvatarProps,
  Checkbox,
  IconButton,
  Link,
  ContentGroup,
  ContentGroupProps,
  useMediaQuery,
} from '..';
import {
  CheckCircleDuotone,
  Cross,
  ExternalLink,
  Heart,
  Home3,
  mediumWidth,
  Microschool,
  PinCheckDuotone,
  Trash,
} from '../../../stories';

export const _retyped = ContentGroup as typeof ContentGroup;

const elementOptions = [
  'undefined',
  '(Avatar)',
  '(Avatar 2)',
  '(Icon)',
  '(Icon 2)',
];
const elementMapping = {
  undefined: undefined,
  '(Avatar)': (
    <Avatar size="small" src="/img/student-boy-1.png" alt="Boy smiling" />
  ),
  '(Avatar 2)': (
    <Avatar size="small" src="/img/guide-1.png" alt="Woman smiling" />
  ),
  '(Icon)': <Home3 />,
  '(Icon 2)': <PinCheckDuotone fontSize="large" />,
};

export default {
  title: '@ps/ContentGroup',
  component: _retyped,
  excludeStories: ['_retyped', 'MicroschoolThumbnailTemplate'],
  argTypes: {
    button: { control: 'boolean' },
    leadingEl: {
      control: 'select',
      options: elementOptions,
      mapping: elementMapping,
    },
    trailingEl: {
      control: 'select',
      options: elementOptions,
      mapping: elementMapping,
    },
    leadingAction: {
      control: 'select',
      options: ['undefined', '(Checkbox)'],
      mapping: {
        undefined: undefined,
        '(Checkbox)': (
          <Checkbox inputProps={{ 'aria-labelledby': 'id' }} tabIndex={-1} />
        ),
      },
    },
    trailingAction: {
      control: 'select',
      options: ['undefined', '(Checkbox)', '(IconButton)'],
      mapping: {
        undefined: undefined,
        '(Checkbox)': <Checkbox inputProps={{ 'aria-labelledby': 'id' }} />,
        '(IconButton)': (
          <IconButton aria-label="Remove" size="small" variant="ghost">
            <Trash />
          </IconButton>
        ),
        '(IconButton 2)': (
          <IconButton aria-label="Favorite" size="small" variant="ghost">
            <Heart />
          </IconButton>
        ),
      },
    },
  },
} as Meta;

const Template = (args) => <ContentGroup {...args} />;

type Story = DefaultStory<ContentGroupProps>;

export const Primary: Story = Template.bind({});
Primary.args = { primary: 'Primary' };
Primary.storyName = 'primary';

export const PrimaryDisablePadding: Story = Template.bind({});
PrimaryDisablePadding.args = { primary: 'Primary', disablePadding: true };
PrimaryDisablePadding.storyName = 'primary disablePadding';

export const PrimaryInset: Story = Template.bind({});
PrimaryInset.args = { primary: 'Primary', inset: true };
PrimaryInset.storyName = 'primary inset';

export const PrimaryLeadingEl: Story = Template.bind({});
PrimaryLeadingEl.args = { primary: 'Primary', leadingEl: '(Icon)' };
PrimaryLeadingEl.storyName = 'primary leadingEl';

export const PrimaryTrailingEl: Story = Template.bind({});
PrimaryTrailingEl.args = { primary: 'Primary', trailingEl: '(Icon)' };
PrimaryTrailingEl.storyName = 'primary trailingEl';

export const PrimaryLeadingElTrailingEl: Story = Template.bind({});
PrimaryLeadingElTrailingEl.args = {
  primary: 'Primary',
  leadingEl: '(Avatar)',
  trailingEl: '(Icon)',
};
PrimaryLeadingElTrailingEl.storyName = 'primary leadingEl trailingEl';

export const PrimaryLeadingAction: Story = Template.bind({});
PrimaryLeadingAction.args = { primary: 'Primary', leadingAction: '(Checkbox)' };
PrimaryLeadingAction.storyName = 'primary leadingAction';

export const PrimaryLeadingActionLeadingEl: Story = Template.bind({});
PrimaryLeadingActionLeadingEl.args = {
  primary: 'Primary',
  leadingAction: '(Checkbox)',
  leadingEl: '(Avatar)',
};
PrimaryLeadingActionLeadingEl.storyName = 'primary leadingAction leadingEl';

export const PrimaryTrailingAction: Story = Template.bind({});
PrimaryTrailingAction.args = {
  primary: 'Primary',
  trailingAction: '(IconButton)',
};
PrimaryTrailingAction.storyName = 'primary trailingAction';

export const PrimaryTrailingActionTrailingEl: Story = Template.bind({});
PrimaryTrailingActionTrailingEl.args = {
  primary: 'Primary',
  trailingAction: '(IconButton)',
  trailingEl: '(Icon)',
};
PrimaryTrailingActionTrailingEl.storyName = 'primary trailingAction trailingEl';

export const PrimaryLeadingActionTrailingAction: Story = Template.bind({});
PrimaryLeadingActionTrailingAction.args = {
  primary: 'Primary',
  leadingAction: '(Checkbox)',
  trailingAction: '(IconButton)',
};
PrimaryLeadingActionTrailingAction.storyName =
  'primary leadingAction trailingAction';

export const PrimaryLeadingActionTrailingActionCenter: Story = Template.bind(
  {}
);
PrimaryLeadingActionTrailingActionCenter.args = {
  alignItems: 'center',
  primary: 'Primary',
  leadingAction: '(Checkbox)',
  trailingAction: '(IconButton)',
};
PrimaryLeadingActionTrailingActionCenter.storyName =
  'primary leadingAction trailingAction alignItems=center';

export const PrimaryTertiary: Story = Template.bind({});
PrimaryTertiary.args = { primary: 'Primary', tertiary: 'Tertiary' };
PrimaryTertiary.storyName = 'primary tertiary';

export const PrimarySecondary: Story = Template.bind({});
PrimarySecondary.args = { primary: 'Primary', secondary: 'Secondary' };
PrimarySecondary.storyName = 'primary secondary';

export const PrimarySecondaryTertiary: Story = Template.bind({});
PrimarySecondaryTertiary.args = {
  primary: 'Primary',
  secondary: 'Secondary',
  tertiary: 'Tertiary',
};
PrimarySecondaryTertiary.storyName = 'primary secondary tertiary';

export const PrimarySecondaryTertiaryRow: Story = Template.bind({});
PrimarySecondaryTertiaryRow.args = {
  primary: 'Primary',
  secondary: 'Secondary',
  tertiary: 'Tertiary',
  row: true,
};
PrimarySecondaryTertiaryRow.storyName = 'primary secondary tertiary row';

export const PrimarySecondaryTertiaryRowWrap: Story = Template.bind({});
PrimarySecondaryTertiaryRowWrap.args = {
  primary: 'Primary',
  secondary: 'Secondary',
  tertiary: "Tertiary that's long enough to wrap",
  row: true,
  flexWrap: 'wrap',
};
PrimarySecondaryTertiaryRowWrap.decorators = [mediumWidth];
PrimarySecondaryTertiaryRowWrap.storyName =
  'primary secondary tertiary row flexWrap=wrap';

export const PrimarySecondaryLeadingEl: Story = Template.bind({});
PrimarySecondaryLeadingEl.args = {
  primary: 'Primary',
  leadingEl: '(Icon)',
  secondary: 'Secondary',
};
PrimarySecondaryLeadingEl.storyName = 'primary secondary leadingEl';

export const PrimarySecondaryTrailingEl: Story = Template.bind({});
PrimarySecondaryTrailingEl.args = {
  primary: 'Primary',
  trailingEl: '(Icon)',
  secondary: 'Secondary',
};
PrimarySecondaryTrailingEl.storyName = 'primary secondary trailingEl secondary';

export const PrimarySecondaryLeadingElTrailingEl: Story = Template.bind({});
PrimarySecondaryLeadingElTrailingEl.args = {
  primary: 'Primary',
  leadingEl: '(Avatar)',
  trailingEl: '(Icon)',
  secondary: 'Secondary',
};
PrimarySecondaryLeadingElTrailingEl.storyName =
  'primary secondary leadingEl trailingEl';

export const PrimarySecondaryLeadingActionTrailingAction: Story = Template.bind(
  {}
);
PrimarySecondaryLeadingActionTrailingAction.args = {
  primary: 'Primary',
  secondary: 'Secondary',
  leadingAction: '(Checkbox)',
  trailingAction: '(IconButton)',
};
PrimarySecondaryLeadingActionTrailingAction.storyName =
  'primary secondary leadingAction trailingAction';

// ============
// = Examples =
// ============

export const MicroschoolInformation = (args) => (
  <ContentGroup
    leadingEl={<CheckCircleDuotone />}
    primary="Recess"
    secondary="Yes"
    {...args}
  />
);

export const MicroschoolGuarantee = (args) => (
  <ContentGroup
    leadingEl={<PinCheckDuotone fontSize="large" />}
    primary="Site inspected"
    secondary="Prenda microschools are inspected to ensure your child's safety."
    {...args}
  />
);

export const EnrollmentResource = (args) => (
  <ContentGroup
    leadingEl={<Microschool />}
    primary="Find a microschool"
    secondary={
      <>
        Visit our <Link href="#">microschool map</Link> to discover Prenda
        Guides in your area.
      </>
    }
    tertiary="For the next school year, check the map in May for the most up-to-date list."
    {...args}
  />
);

const useEnrollmentMicroschoolInformationStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.unstable_radii.sm,
    border: theme.unstable_borders.bold,
    minWidth: 320,
    padding: 16,
  },
  trailingAction: {
    marginLeft: 'auto',
    marginTop: -8,
    marginRight: -8,
  },
}));

export const EnrollmentMicroschoolInformation = (args) => {
  const classes = useEnrollmentMicroschoolInformationStyles();
  return (
    <ContentGroup
      classes={classes}
      primary="Jane Doe Microschool"
      secondary="Jane Doe"
      trailingAction={
        <IconButton
          aria-label="Microschool details"
          component="a"
          href="#"
          size="small"
          variant="ghost"
        >
          <ExternalLink />
        </IconButton>
      }
      tertiary="2022 - 2023 · Grades K - 2nd"
      {...args}
    />
  );
};

const useEnrollmentGuideCodeStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.unstable_radii.sm,
    border: theme.unstable_borders.bold,
    minWidth: 320,
    padding: 16,
  },
  secondary: {
    fontSize: theme.unstable_typography.pxToRem(32),
    letterSpacing: '0.25em',
    lineHeight: 40 / 32,
  },
  trailingAction: {
    marginLeft: 'auto',
    marginTop: -8,
    marginRight: -8,
  },
}));

export const EnrollmentGuideCode = (args) => {
  const classes = useEnrollmentGuideCodeStyles();
  return (
    <ContentGroup
      classes={classes}
      primary="Guide code"
      secondary="123456"
      trailingAction={
        <IconButton aria-label="Close" size="small" variant="ghost">
          <Cross />
        </IconButton>
      }
      {...args}
    />
  );
};

const useEnrollmentDetailStyles = makeStyles({
  secondary: {
    paddingBlockEnd: 8,
    paddingBlockStart: 4,
  },
});

export const EnrollmentDetail = (args) => {
  const classes = useEnrollmentDetailStyles();
  return (
    <ContentGroup
      classes={classes}
      primary="School year"
      secondary="2022-2023"
      secondaryTypographyProps={{ variant: 'T22' }}
      {...args}
    />
  );
};

const useMicroschoolThumbnailStyles = makeStyles((theme) => ({
  root: {
    paddingBlockStart: 24,
  },
  primary: {
    color: theme.unstable_palette.text.body,
    '&:visited': {
      color: theme.unstable_palette.text.body,
    },
  },
  leadingEl: {
    paddingBlockEnd: 8,
    paddingInlineStart: 16,
    position: 'relative',
    '& .site-photo': {
      borderRadius: theme.unstable_radii.md,
      width: 210,
      '@media (max-width: 320px)': {
        width: '100%',
      },
      // fallback styles
      minHeight: 140,
      backgroundColor: theme.unstable_palette.neutral[80],
    },
    '& .guide-photo-border': {
      backgroundColor: 'white',
      borderRadius: 10,
      bottom: 0,
      left: 0,
      padding: 2,
      position: 'absolute',
      '@media (max-width: 320px)': {
        left: -8,
      },
    },
    '@media (max-width: 320px)': {
      paddingInlineStart: 0,
    },
  },
  trailingAction: {
    '@media (max-width: 320px)': {
      position: 'absolute',
      top: 28,
      right: 20,
    },
  },
}));

// tested with NVDA on Windows
export const MicroschoolThumbnailTemplate = ({
  acceptingStudents,
  gradesRange,
  guideAvatarProps,
  location,
  microschoolName,
  siteImgProps,
  ...other
}: ContentGroupProps & {
  acceptingStudents: boolean;
  gradesRange: string;
  guideAvatarProps: AvatarProps;
  location: string;
  microschoolName: string;
  siteImgProps: { alt: string; srcSet: string };
}) => {
  const classes = useMicroschoolThumbnailStyles();
  const isSmallMobile = useMediaQuery('(max-width: 320px)');

  const favoriteButtonVariant = isSmallMobile ? 'stroked' : 'ghost';

  return (
    <ContentGroup
      classes={classes}
      onClick={() => {
        window.location.href = '#';
      }}
      flexWrap="wrap"
      leadingEl={
        <>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img className="site-photo" {...siteImgProps} />
          <span className="guide-photo-border">
            <Avatar {...guideAvatarProps} />
          </span>
        </>
      }
      primary={microschoolName}
      primaryTypographyProps={{
        // @ts-expect-error not recognized
        component: (props) => (
          <Link href="#" standalone variant="alias" {...props} />
        ),
      }}
      secondary={location}
      trailingAction={
        // FUTURE: replace with Toggle Button
        <IconButton
          aria-label={`Favorite ${microschoolName}`}
          size="small"
          variant={favoriteButtonVariant}
        >
          <Heart />
        </IconButton>
      }
      tertiary={`Grades ${gradesRange} · ${
        acceptingStudents ? 'Accepting students' : 'Not accepting students'
      }`}
      {...other}
    />
  );
};

export const MicroschoolThumbnail: DefaultStory =
  MicroschoolThumbnailTemplate.bind({});
MicroschoolThumbnail.args = {
  acceptingStudents: true,
  gradesRange: 'K - 2nd',
  guideAvatarProps: { alt: 'Woman smiling', src: '/img/guide-1.png' },
  location: 'Peoria, AZ',
  microschoolName: 'Jane Doe Microschool',
  siteImgProps: {
    alt: 'Home interior with crafts table, craft supplies, stools, and wall decorations.',
    srcSet: '/img/microschool-site-1.jpg 480w',
  },
};
