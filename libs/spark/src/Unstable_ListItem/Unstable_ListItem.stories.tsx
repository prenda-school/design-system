import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  makeStyles,
  Unstable_Avatar,
  Unstable_AvatarProps,
  Unstable_Checkbox,
  Unstable_IconButton,
  Unstable_Link,
  Unstable_ListItem,
  Unstable_ListItemProps,
  useMediaQuery,
} from '..';
import {
  CheckCircleDuotone,
  containFocusIndicator,
  Cross,
  ExternalLink,
  Heart,
  Home3,
  Microschool,
  PinCheckDuotone,
  sparkThemeProvider,
  Trash,
} from '../../stories';

export const _retyped = Unstable_ListItem as typeof Unstable_ListItem;

export default {
  title: '@ps/Unstable_ListItem',
  component: _retyped,
  excludeStories: ['_retyped', 'MicroschoolThumbnailTemplate'],
  decorators: [containFocusIndicator],
  argTypes: {
    button: { control: 'boolean' },
    leadingEl: {
      control: 'select',
      options: ['undefined', '(Avatar)', '(Avatar 2)', '(Icon)', '(Icon 2)'],
      mapping: {
        undefined: undefined,
        '(Avatar)': (
          <Unstable_Avatar
            size="small"
            src="/img/student-boy-1.png"
            alt="Boy smiling"
          />
        ),
        '(Avatar 2)': (
          <Unstable_Avatar
            size="small"
            src="/img/guide-1.png"
            alt="Woman smiling"
          />
        ),
        '(Icon)': <Home3 />,
        '(Icon 2)': <PinCheckDuotone fontSize="large" />,
      },
    },
    primaryAction: {
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
    secondaryAction: {
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
  args: {
    id: 'id',
    children: <>Primary text</>,
  },
} as Meta;

const Template = (args) => <Unstable_ListItem {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const STP: Story = Template.bind({});
STP.decorators = [sparkThemeProvider];
STP.storyName = '(STP)';

export const Button: Story = Template.bind({});
Button.args = { button: true };
Button.storyName = 'button';

export const ButtonHover: Story = Template.bind({});
ButtonHover.args = { button: true };
ButtonHover.parameters = { pseudo: { hover: true } };
ButtonHover.storyName = 'button :hover';

export const ButtonActive: Story = Template.bind({});
ButtonActive.args = { button: true };
ButtonActive.parameters = { pseudo: { active: true } };
ButtonActive.storyName = 'button :active';

export const ButtonFocusVisible: Story = Template.bind({});
ButtonFocusVisible.args = { button: true };
ButtonFocusVisible.parameters = { pseudo: { focusVisible: true } };
ButtonFocusVisible.storyName = 'button :focus-visible';

export const ButtonDisabled: Story = Template.bind({});
ButtonDisabled.args = { button: true, disabled: true };
ButtonDisabled.storyName = 'button disabled';

export const ButtonDisabledHover: Story = Template.bind({});
ButtonDisabledHover.args = { button: true, disabled: true };
ButtonDisabledHover.storyName = 'button disabled :hover';

export const ButtonSelected: Story = Template.bind({});
ButtonSelected.args = { button: true, selected: true };
ButtonSelected.storyName = 'button selected';

export const ButtonSelectedHover: Story = Template.bind({});
ButtonSelectedHover.args = { button: true, selected: true };
ButtonSelectedHover.parameters = { pseudo: { hover: true } };
ButtonSelectedHover.storyName = 'button selected :hover';

export const ButtonSelectedActive: Story = Template.bind({});
ButtonSelectedActive.args = { button: true, selected: true };
ButtonSelectedActive.parameters = { pseudo: { active: true } };
ButtonSelectedActive.storyName = 'button selected :active';

export const ButtonSelectedFocusVisible: Story = Template.bind({});
ButtonSelectedFocusVisible.args = { button: true, selected: true };
ButtonSelectedFocusVisible.parameters = { pseudo: { focusVisible: true } };
ButtonSelectedFocusVisible.storyName = 'button selected :focus-visible';

export const ButtonSelectedDisabled: Story = Template.bind({});
ButtonSelectedDisabled.args = { button: true, selected: true, disabled: true };
ButtonSelectedDisabled.storyName = 'button selected disabled';

export const ButtonSelectedDisabledHover: Story = Template.bind({});
ButtonSelectedDisabledHover.args = {
  button: true,
  selected: true,
  disabled: true,
};
ButtonSelectedDisabledHover.parameters = { pseudo: { hover: true } };
ButtonSelectedDisabledHover.storyName = 'button selected disabled :hover';

export const Inset: Story = Template.bind({});
Inset.args = { inset: true };
Inset.storyName = 'inset';

export const LeadingElAvatar: Story = Template.bind({});
LeadingElAvatar.args = { leadingEl: '(Avatar)' };
LeadingElAvatar.storyName = 'leadingEl=(Avatar)';

export const LeadingElIcon: Story = Template.bind({});
LeadingElIcon.args = { leadingEl: '(Icon)' };
LeadingElIcon.storyName = 'leadingEl=(Icon)';

export const LeadingElIconButtonDisabled: Story = Template.bind({});
LeadingElIconButtonDisabled.args = {
  leadingEl: '(Icon)',
  button: true,
  disabled: true,
};
LeadingElIconButtonDisabled.storyName = 'leadingEl=(Icon) button disabled';

export const LeadingElIconButtonSelected: Story = Template.bind({});
LeadingElIconButtonSelected.args = {
  leadingEl: '(Icon)',
  button: true,
  selected: true,
};
LeadingElIconButtonSelected.storyName = 'leadingEl=(Icon) button selected';

export const LeadingElIconButtonSelectedDisabled: Story = Template.bind({});
LeadingElIconButtonSelectedDisabled.args = {
  leadingEl: '(Icon)',
  button: true,
  selected: true,
  disabled: true,
};
LeadingElIconButtonSelectedDisabled.storyName =
  'leadingEl=(Icon) button selected disabled';

export const Primary: Story = Template.bind({});
Primary.args = { children: undefined, primary: 'Primary text' };
Primary.storyName = 'primary';

export const PrimaryAction: Story = Template.bind({});
PrimaryAction.args = { primaryAction: '(Checkbox)' };
PrimaryAction.storyName = 'primaryAction=(Checkbox)';

export const PrimaryActionSecondaryActionButton: Story = Template.bind({});
PrimaryActionSecondaryActionButton.args = {
  primaryAction: '(Checkbox)',
  secondaryAction: '(IconButton)',
  button: true,
};
PrimaryActionSecondaryActionButton.storyName =
  'primaryAction=(Checkbox) secondaryAction=(IconButton) button';

export const Secondary: Story = Template.bind({});
Secondary.args = { secondary: 'Secondary' };
Secondary.storyName = 'secondary';

export const SecondaryLeadingElIcon: Story = Template.bind({});
SecondaryLeadingElIcon.args = {
  secondary: 'Secondary text',
  leadingEl: '(Icon)',
};
SecondaryLeadingElIcon.storyName = 'secondary leadingEl=(Icon)';

export const SecondaryLeadingElIconFlexStart: Story = Template.bind({});
SecondaryLeadingElIconFlexStart.args = {
  secondary: 'Secondary text',
  leadingEl: '(Icon)',
  alignItems: 'flex-start',
};
SecondaryLeadingElIconFlexStart.storyName =
  'secondary leadingEl=(Icon) alignItems=flex-start';

export const SecondarySecondaryAction: Story = Template.bind({});
SecondarySecondaryAction.args = {
  secondary: 'Secondary text',
  secondaryAction: '(IconButton)',
};
SecondarySecondaryAction.storyName = 'secondary secondaryAction=(IconButton)';

export const SecondaryTertiary: Story = Template.bind({});
SecondaryTertiary.args = {
  secondary: 'Secondary text',
  tertiary: 'Tertiary text',
};
SecondaryTertiary.storyName = 'secondary tertiary';

export const SecondaryTertiaryLeadingElSIconSecondaryActionFlexStart: Story = Template.bind(
  {}
);
SecondaryTertiaryLeadingElSIconSecondaryActionFlexStart.args = {
  secondary: 'Secondary text',
  tertiary: 'Tertiary text',
  leadingEl: '(Icon)',
  secondaryAction: '(IconButton)',
  alignItems: 'flex-start',
};
SecondaryTertiaryLeadingElSIconSecondaryActionFlexStart.storyName =
  'secondary tertiary leadingEl=(Icon) secondaryAction=(IconButton) alignItems=flex-start';

export const SecondaryTertiaryRow: Story = Template.bind({});
SecondaryTertiaryRow.args = {
  secondary: 'Secondary text',
  tertiary: 'Tertiary text',
  row: true,
};
SecondaryTertiaryRow.storyName = 'secondary tertiary row';

export const SecondaryTertiaryRowSmallMobile: Story = Template.bind({});
SecondaryTertiaryRowSmallMobile.args = {
  secondary: 'Secondary text',
  tertiary: 'Tertiary text',
  row: true,
};
SecondaryTertiaryRowSmallMobile.parameters = {
  viewport: { defaultViewport: 'mobile1' },
};
SecondaryTertiaryRowSmallMobile.storyName =
  'secondary tertiary row (small mobile)';

export const SecondaryTertiaryRowFlexWrap: Story = Template.bind({});
SecondaryTertiaryRowFlexWrap.args = {
  secondary: 'Secondary text',
  tertiary: 'Tertiary text',
  row: true,
  flexWrap: 'wrap',
};
SecondaryTertiaryRowFlexWrap.storyName = 'secondary tertiary row flexWrap=wrap';

export const SecondaryTertiaryRowFlexWrapSmallMobile: Story = Template.bind({});
SecondaryTertiaryRowFlexWrapSmallMobile.args = {
  secondary: 'Secondary text',
  tertiary: 'Tertiary text',
  row: true,
  flexWrap: 'wrap',
};
SecondaryTertiaryRowFlexWrapSmallMobile.parameters = {
  viewport: { defaultViewport: 'mobile1' },
};
SecondaryTertiaryRowFlexWrapSmallMobile.storyName =
  'secondary tertiary row flexWrap=wrap (small mobile)';

export const SecondaryAction: Story = Template.bind({});
SecondaryAction.args = { secondaryAction: '(IconButton)' };
SecondaryAction.storyName = 'secondaryAction=(IconButton)';

// ============
// = Examples =
// ============

export const MicroschoolInformation = (args) => (
  <Unstable_ListItem
    alignItems="flex-start"
    leadingEl={<CheckCircleDuotone />}
    primary="Recess"
    secondary="Yes"
    {...args}
    children={undefined}
  />
);

export const MicroschoolGuarantee = (args) => (
  <Unstable_ListItem
    alignItems="flex-start"
    leadingEl={<PinCheckDuotone fontSize="large" />}
    primary="Site inspected"
    secondary="Prenda microschools are inspected to ensure your child's safety."
    {...args}
    children={undefined}
  />
);

export const EnrollmentResource = (args) => (
  <Unstable_ListItem
    alignItems="flex-start"
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
    children={undefined}
  />
);

const useEnrollmentMicroschoolInformationStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 4,
    border: `1px solid ${theme.unstable_palette.neutral[100]}`,
    minWidth: 320,
    padding: 16,
    paddingRight: 40 + 16,
  },
  secondaryAction: {
    top: 8,
    right: 8,
  },
}));

export const EnrollmentMicroschoolInformation = (args) => {
  const classes = useEnrollmentMicroschoolInformationStyles();
  return (
    <Unstable_ListItem
      alignItems="flex-start"
      classes={classes}
      ContainerComponent="div"
      primary="Jane Doe Microschool"
      secondary="Jane Doe"
      secondaryAction={
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
      tertiary="2022-2023 · Grades: K-2"
      {...args}
      children={undefined}
    />
  );
};

const useEnrollmentGuideCodeStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 4,
    border: `1px solid ${theme.unstable_palette.neutral[100]}`,
    minWidth: 320,
    padding: 16,
    paddingRight: 40 + 16,
  },
  secondary: {
    fontSize: theme.unstable_typography.pxToRem(32),
    letterSpacing: '0.25em',
    lineHeight: 40 / 32,
  },
  secondaryAction: {
    top: 8,
    right: 8,
  },
}));

export const EnrollmentGuideCode = (args) => {
  const classes = useEnrollmentGuideCodeStyles();
  return (
    <Unstable_ListItem
      alignItems="flex-start"
      classes={classes}
      ContainerComponent="div"
      primary="Guide code"
      secondary="123456"
      secondaryAction={
        <Unstable_IconButton aria-label="Close" size="small" variant="ghost">
          <Cross />
        </Unstable_IconButton>
      }
      {...args}
      children={undefined}
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
    <Unstable_ListItem
      classes={classes}
      primary="School year"
      secondary="2022-2023"
      secondaryTypographyProps={{ variant: 'T22' }}
      {...args}
      children={undefined}
    />
  );
};

const useMicroschoolThumbnailStyles = makeStyles((theme) => ({
  root: {
    paddingBlockStart: 24,
  },
  leadingEl: {
    paddingBlockEnd: 8,
    paddingInlineStart: 16,
    position: 'relative',
    '& .site-photo': {
      borderRadius: 8,
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
  rootWithSecondaryAction: {
    '@media (max-width: 320px)': {
      paddingRight: 16,
    },
  },
  secondaryAction: {
    top: 16,
    '@media (max-width: 320px)': {
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
}: Unstable_ListItemProps & {
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
    <Unstable_ListItem
      alignItems="flex-start"
      // @ts-expect-error ???
      button
      focusableButton={false}
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
      secondaryAction={
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
        acceptingStudents ? 'Accepting Students' : 'Not Accepting Students'
      }`}
      {...other}
      children={undefined}
    />
  );
};

export const MicroschoolThumbnail: Story = MicroschoolThumbnailTemplate.bind(
  {}
);
MicroschoolThumbnail.args = {
  acceptingStudents: true,
  children: undefined,
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

export const MicroschoolThumbnailLargeMobile: Story = MicroschoolThumbnailTemplate.bind(
  {}
);
MicroschoolThumbnailLargeMobile.args = MicroschoolThumbnail.args;
MicroschoolThumbnailLargeMobile.parameters = {
  viewport: { defaultViewport: 'mobile2' },
};
MicroschoolThumbnailLargeMobile.storyName =
  'Microschool Thumbnail (large mobile)';

export const MicroschoolThumbnailSmallMobile: Story = MicroschoolThumbnailTemplate.bind(
  {}
);
MicroschoolThumbnailSmallMobile.args = MicroschoolThumbnail.args;
MicroschoolThumbnailSmallMobile.parameters = {
  viewport: { defaultViewport: 'mobile1' },
};
MicroschoolThumbnailSmallMobile.storyName =
  'Microschool Thumbnail (small mobile)';
