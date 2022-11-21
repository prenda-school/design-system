import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
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
  Heart,
  Home3,
  Microschool,
  PinCheckDuotone,
  sparkThemeProvider,
  Trash,
} from '../../stories';

export const _retyped = Unstable_ListItem as typeof Unstable_ListItem;

export default {
  title: '@ps/ListItem',
  component: _retyped,
  excludeStories: ['_retyped', 'MicroschoolThumbnailTemplate'],
  decorators: [containFocusIndicator],
  argTypes: {
    button: { control: 'boolean' },
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

type Story = DefaultStory<Unstable_ListItemProps>;

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

export const Nested: Story = Template.bind({});
Nested.args = { nested: true };
Nested.storyName = 'nested';

export const ButtonPrimaryAction: Story = Template.bind({});
ButtonPrimaryAction.args = { button: true, primaryAction: '(Checkbox)' };
ButtonPrimaryAction.storyName = 'button primaryAction';

export const ButtonNested: Story = Template.bind({});
ButtonNested.args = { button: true, nested: true };
ButtonNested.storyName = 'button nested';

export const ButtonSecondaryAction: Story = Template.bind({});
ButtonSecondaryAction.args = {
  button: true,
  secondaryAction: '(IconButton)',
};
ButtonSecondaryAction.storyName = 'button secondaryAction';

export const ButtonPrimaryActionSecondaryAction: Story = Template.bind({});
ButtonPrimaryActionSecondaryAction.args = {
  button: true,
  primaryAction: '(Checkbox)',
  secondaryAction: '(IconButton)',
};
ButtonPrimaryActionSecondaryAction.storyName =
  'button primaryAction secondaryAction';

export const ButtonPrimaryActionSecondaryActionContentGroupProps: Story = Template.bind(
  {}
);
ButtonPrimaryActionSecondaryActionContentGroupProps.args = {
  button: true,
  ContentGroupProps: {
    secondary: 'Secondary text',
    tertiary: 'Tertiary text',
    leadingEl: <Home3 />,
  },
  primaryAction: '(Checkbox)',
  secondaryAction: '(IconButton)',
};
ButtonPrimaryActionSecondaryActionContentGroupProps.storyName =
  'button primaryAction secondaryAction ContentGroupProps={...}';

// ============
// = Examples =
// ============

export const MicroschoolInformation = (args) => (
  <Unstable_ListItem
    ContentGroupProps={{
      leadingEl: <CheckCircleDuotone />,
      primary: 'Recess',
      secondary: 'Yes',
    }}
    {...args}
    children={undefined}
  />
);

export const MicroschoolGuarantee = (args) => (
  <Unstable_ListItem
    ContentGroupProps={{
      leadingEl: <PinCheckDuotone fontSize="large" />,
      primary: 'Site inspected',
      secondary:
        "Prenda microschools are inspected to ensure your child's safety.",
    }}
    {...args}
    children={undefined}
  />
);

export const EnrollmentResource = (args) => (
  <Unstable_ListItem
    ContentGroupProps={{
      leadingEl: <Microschool />,
      primary: 'Find a microschool',
      secondary: (
        <>
          Visit our <Unstable_Link href="#">microschool map</Unstable_Link> to
          discover Prenda Guides in your area.
        </>
      ),
      tertiary:
        'For the next school year, check the map in May for the most up-to-date list.',
    }}
    {...args}
    children={undefined}
  />
);

const useEnrollmentDetailContentGroupStyles = makeStyles({
  secondary: {
    paddingBlockEnd: 8,
    paddingBlockStart: 4,
  },
});

export const EnrollmentDetail = (args) => {
  const contentGroupClasses = useEnrollmentDetailContentGroupStyles();
  return (
    <Unstable_ListItem
      {...args}
      ContentGroupProps={{
        classes: contentGroupClasses,
        primary: 'School year',
        secondary: '2022-2023',
        secondaryTypographyProps: { variant: 'T22' },
        ...args.ContentGroupProps,
      }}
      children={undefined}
    />
  );
};

const useMicroschoolThumbnailListItemStyles = makeStyles((theme) => ({
  root: {
    paddingBlockStart: 24,
    '@media (max-width: 320px)': {
      paddingInlineEnd: 16,
    },
  },
  secondaryAction: {
    top: 16,
    right: 8,
    '@media (max-width: 320px)': {
      top: 28,
      right: 20,
    },
  },
}));

const useMicroschoolThumbnailContentGroupStyles = makeStyles((theme) => ({
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
  const listItemClasses = useMicroschoolThumbnailListItemStyles();
  const contentGroupClasses = useMicroschoolThumbnailContentGroupStyles();
  const isSmallMobile = useMediaQuery('(max-width: 320px)');

  const favoriteButtonVariant = isSmallMobile ? 'stroked' : 'ghost';

  return (
    <Unstable_ListItem
      // @ts-expect-error lost prop
      button
      disableFocusable
      ContentGroupProps={{
        classes: contentGroupClasses,
        flexWrap: 'wrap',
        leadingEl: (
          <>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img className="site-photo" {...siteImgProps} />
            <span className="guide-photo-border">
              <Unstable_Avatar {...guideAvatarProps} />
            </span>
          </>
        ),
        primary: microschoolName,
        primaryTypographyProps: {
          // @ts-expect-error not recognized
          component: (props) => (
            <Unstable_Link href="#" standalone variant="alias" {...props} />
          ),
        },
        secondary: location,
        tertiary: `Grades ${gradesRange} · ${
          acceptingStudents ? 'Accepting Students' : 'Not Accepting Students'
        }`,
      }}
      classes={listItemClasses}
      onClick={() => {
        window.location.href = '#';
      }}
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
      {...other}
      children={undefined}
    />
  );
};

export const MicroschoolThumbnail: DefaultStory = MicroschoolThumbnailTemplate.bind(
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
