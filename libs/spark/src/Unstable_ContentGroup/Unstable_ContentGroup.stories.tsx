import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import {
  makeStyles,
  Unstable_Avatar,
  Unstable_AvatarProps,
  Unstable_Checkbox,
  Unstable_IconButton,
  Unstable_Link,
  Unstable_ContentGroup,
  Unstable_ContentGroupProps,
  useMediaQuery,
} from '..';
import {
  CheckCircleDuotone,
  containFocusIndicator,
  Cross,
  ExternalLink,
  Heart,
  Home3,
  mediumWidth,
  Microschool,
  PinCheckDuotone,
  Trash,
} from '../../stories';

export const _retyped = Unstable_ContentGroup as typeof Unstable_ContentGroup;

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
    <Unstable_Avatar
      size="small"
      src="/img/student-boy-1.png"
      alt="Boy smiling"
    />
  ),
  '(Avatar 2)': (
    <Unstable_Avatar size="small" src="/img/guide-1.png" alt="Woman smiling" />
  ),
  '(Icon)': <Home3 />,
  '(Icon 2)': <PinCheckDuotone fontSize="large" />,
};

export default {
  title: '@ps/ContentGroup',
  component: _retyped,
  excludeStories: ['_retyped', 'MicroschoolThumbnailTemplate'],
  decorators: [containFocusIndicator],
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
          <Unstable_Checkbox
            inputProps={{ 'aria-labelledby': 'id' }}
            tabIndex={-1}
          />
        ),
      },
    },
    trailingAction: {
      control: 'select',
      options: ['undefined', '(Checkbox)', '(IconButton)'],
      mapping: {
        undefined: undefined,
        '(Checkbox)': (
          <Unstable_Checkbox inputProps={{ 'aria-labelledby': 'id' }} />
        ),
        '(IconButton)': (
          <Unstable_IconButton aria-label="Remove" size="small" variant="ghost">
            <Trash />
          </Unstable_IconButton>
        ),
        '(IconButton 2)': (
          <Unstable_IconButton
            aria-label="Favorite"
            size="small"
            variant="ghost"
          >
            <Heart />
          </Unstable_IconButton>
        ),
      },
    },
  },
} as Meta;

const Template = (args) => <Unstable_ContentGroup {...args} />;

type Story = DefaultStory<Unstable_ContentGroupProps>;

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
  <Unstable_ContentGroup
    leadingEl={<CheckCircleDuotone />}
    primary="Recess"
    secondary="Yes"
    {...args}
  />
);

export const MicroschoolGuarantee = (args) => (
  <Unstable_ContentGroup
    leadingEl={<PinCheckDuotone fontSize="large" />}
    primary="Site inspected"
    secondary="Prenda microschools are inspected to ensure your child's safety."
    {...args}
  />
);

export const EnrollmentResource = (args) => (
  <Unstable_ContentGroup
    leadingEl={<Microschool />}
    primary="Find a microschool"
    secondary={
      <>
        Visit our <Unstable_Link href="#">microschool map</Unstable_Link> to
        discover Prenda Guides in your area.
      </>
    }
    tertiary="For the next school year, check the map in May for the most up-to-date list."
    {...args}
  />
);

const useEnrollmentMicroschoolInformationStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.unstable_radius.sm,
    border: `1px solid ${theme.unstable_palette.neutral[100]}`,
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
    <Unstable_ContentGroup
      classes={classes}
      primary="Jane Doe Microschool"
      secondary="Jane Doe"
      trailingAction={
        <Unstable_IconButton
          aria-label="Microschool details"
          component="a"
          href="#"
          size="small"
          variant="ghost"
        >
          <ExternalLink />
        </Unstable_IconButton>
      }
      tertiary="2022 - 2023 · Grades K - 2nd"
      {...args}
    />
  );
};

const useEnrollmentGuideCodeStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.unstable_radius.sm,
    border: `1px solid ${theme.unstable_palette.neutral[100]}`,
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
    <Unstable_ContentGroup
      classes={classes}
      primary="Guide code"
      secondary="123456"
      trailingAction={
        <Unstable_IconButton aria-label="Close" size="small" variant="ghost">
          <Cross />
        </Unstable_IconButton>
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
    <Unstable_ContentGroup
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
      borderRadius: theme.unstable_radius.md,
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
}: Unstable_ContentGroupProps & {
  acceptingStudents: boolean;
  gradesRange: string;
  guideAvatarProps: Unstable_AvatarProps;
  location: string;
  microschoolName: string;
  siteImgProps: { alt: string; srcSet: string };
}) => {
  const classes = useMicroschoolThumbnailStyles();
  const isSmallMobile = useMediaQuery('(max-width: 320px)');

  const favoriteButtonVariant = isSmallMobile ? 'stroked' : 'ghost';

  return (
    <Unstable_ContentGroup
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
            <Unstable_Avatar {...guideAvatarProps} />
          </span>
        </>
      }
      primary={microschoolName}
      primaryTypographyProps={{
        // @ts-expect-error not recognized
        component: (props) => (
          <Unstable_Link href="#" standalone variant="alias" {...props} />
        ),
      }}
      secondary={location}
      trailingAction={
        // FUTURE: replace with Toggle Button
        <Unstable_IconButton
          aria-label={`Favorite ${microschoolName}`}
          size="small"
          variant={favoriteButtonVariant}
        >
          <Heart />
        </Unstable_IconButton>
      }
      tertiary={`Grades ${gradesRange} · ${
        acceptingStudents ? 'Accepting students' : 'Not accepting students'
      }`}
      {...other}
    />
  );
};

export const MicroschoolThumbnail: DefaultStory = MicroschoolThumbnailTemplate.bind(
  {}
);
MicroschoolThumbnail.args = {
  acceptingStudents: true,
  gradesRange: 'K - 2nd',
  guideAvatarProps: { alt: 'Woman smiling', src: '/img/guide-1.png' },
  location: 'Peoria, AZ',
  microschoolName: 'Jane Doe Microschool',
  siteImgProps: {
    alt:
      'Home interior with crafts table, craft supplies, stools, and wall decorations.',
    srcSet: '/img/microschool-site-1.jpg 480w',
  },
};
