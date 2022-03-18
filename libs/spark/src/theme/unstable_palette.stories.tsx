import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { styled, useTheme, Theme } from '..';

export default {
  title: '@ps/theme/unstable_palette',
} as Meta;

/**
 * Get theme value of given chain.case field.
 * @example
 *  getValue(theme, 'brand.blue'); // returns '#0a4872'
 *  getValue(theme, 'tones.warm.400'); // returns '#733f2a'
 */
function getValue(theme: Theme, field: string): string {
  const fields = field.split('.');

  let walk = theme.unstable_palette;
  let value;
  for (let i = 0; i < fields.length; i++) {
    if (i === fields.length - 1) {
      value = walk[fields[i]];
    } else {
      walk = walk[fields[i]];
    }
  }

  return value;
}

/**
 * @example
 *  getDisplayField('neutral.600'); // returns 'neutral[600]'
 *  getDisplayField('tones.warm.400'); // returns 'tones.warm[400]'
 */
function getDisplayField(field: string): string {
  const fields = field.split('.');

  const prefix = fields.slice(0, -1).join('.');
  let suffix = fields.slice(-1)[0];
  // @ts-expect-error ts(2345) what a silly typing
  suffix = !isNaN(suffix) ? `[${suffix}]` : `.${suffix}`;

  return prefix.concat(suffix);
}

const PaletteColor = styled(function PaletteColor(props: {
  name: string;
  field: string;
}) {
  const { name, field, ...other } = props;

  const theme = useTheme();

  return (
    <div {...other}>
      <div className="color" />
      <div className="name">{name}</div>
      <div className="value">{getValue(theme, field)}</div>
      <div className="field">palette.{getDisplayField(field)}</div>
    </div>
  );
})(
  // @ts-expect-error ts(2339)
  ({ theme, field }) => ({
    '& .color': {
      backgroundColor: getValue(theme, field),
      borderRadius: 16,
      height: 104,
      width: 177,
      marginBottom: 16,
    },
    '& .name': {
      // fontFamily: 'Inter',
      fontSize: theme.typography.pxToRem(16),
      lineHeight: 20 / 16,
      fontWeight: 600,
      color: theme.unstable_palette.text.body,
      marginBottom: 8,
    },
    '& .value': {
      // fontFamily: 'Inter',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: 20 / 14,
      fontWeight: 400,
      color: theme.unstable_palette.text.subdued,
    },
    '& .field': {
      // fontFamily: 'Inter',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: 20 / 14,
      fontWeight: 400,
      color: theme.unstable_palette.text.subdued,
    },
  })
);

const PaletteSwatch = styled(function PaletteSwatch(props: {
  colors: Array<{
    name: string;
    field: string;
  }>;
}) {
  const { colors, ...other } = props;

  return (
    <div {...other}>
      {colors.map((color) => (
        <PaletteColor key={color.name} name={color.name} field={color.field} />
      ))}
    </div>
  );
})({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 24,
});

const Root = styled('div')({
  paddingLeft: 8,
});
// :unstable_: replace with unstable_Typography
const H1 = styled('h1')(({ theme }) => ({
  // fontFamily: 'Inter',
  fontSize: theme.typography.pxToRem(28),
  lineHeight: 40 / 28,
  fontWeight: 600,
  color: theme.unstable_palette.text.heading,
  marginBottom: 8,
}));
const H2 = styled('h2')(({ theme }) => ({
  // fontFamily: 'Inter',
  fontSize: theme.typography.pxToRem(24),
  lineHeight: 32 / 24,
  fontWeight: 600,
  color: theme.unstable_palette.text.heading,
  marginBottom: 8,
  marginTop: 8,
}));
const H3 = styled('h3')(({ theme }) => ({
  // fontFamily: 'Inter',
  fontSize: theme.typography.pxToRem(20),
  lineHeight: 32 / 24,
  fontWeight: 600,
  color: theme.unstable_palette.text.heading,
  marginBottom: 8,
  marginTop: 8,
}));
const Body = styled('p')(({ theme }) => ({
  // fontFamily: 'Inter',
  fontSize: theme.typography.pxToRem(16),
  lineHeight: 24 / 16,
  fontWeight: 400,
  color: theme.unstable_palette.text.body,
  marginBottom: 16,
}));
const Spacer = styled('div')({
  height: 48,
});
const SmallSpacer = styled('div')({
  height: 32,
});

export const Primary: Story = () => (
  <Root>
    <H1>Primary palette</H1>
    <Body>
      Color distinguishes our brand and helps us create consistent experiences
      across product.
    </Body>
    <H2>Prenda Brand</H2>
    <Body>Core brand palette that represents Prenda.</Body>
    <PaletteSwatch
      colors={[
        {
          name: 'Prenda Blue',
          field: 'brand.blue',
        },
        {
          name: 'Prenda Light Blue',
          field: 'brand.lightBlue',
        },
        {
          name: 'Prenda Orange',
          field: 'brand.orange',
        },
        {
          name: 'Prenda Light Orange',
          field: 'brand.lightOrange',
        },
      ]}
    />
    <Spacer />
    <H2>Functional palette</H2>
    <Body>
      We use Prenda Blue for primary actions and for buttons indicating progress
      and representing authentication. Neutral (N600) is used primarily for body
      text and headings, and white (N0) is used for backgrounds.
    </Body>
    <PaletteSwatch
      colors={[
        {
          name: 'Prenda Blue',
          field: 'brand.blue',
        },
        {
          name: 'N600',
          field: 'neutral.600',
        },
        {
          name: 'N0',
          field: 'neutral.0',
        },
      ]}
    />
    <SmallSpacer />
    <H3>Background</H3>
    <Body>
      <em>experimental</em>
    </Body>
    <PaletteSwatch
      colors={[
        { name: 'Default', field: 'background.default' },
        { name: 'Alternative', field: 'background.alternative' },
        { name: 'Brand', field: 'background.brand' },
        { name: 'Inverse', field: 'background.inverse' },
      ]}
    />
    <SmallSpacer />
    <H3>Text</H3>
    <Body>
      <em>experimental</em>
    </Body>
    <PaletteSwatch
      colors={[
        { name: 'Heading', field: 'text.heading' },
        { name: 'Body', field: 'text.body' },
        { name: 'Icon', field: 'text.icon' },
        { name: 'Subdued', field: 'text.subdued' },
        { name: 'Secondary Icon', field: 'text.secondaryIcon' },
        { name: 'Disabled', field: 'text.disabled' },
      ]}
    />
    <SmallSpacer />
    <H3>Inverse Text</H3>
    <Body>
      <em>experimental</em>
    </Body>
    <PaletteSwatch
      colors={[
        { name: 'Inverse Heading', field: 'text.inverseHeading' },
        { name: 'Inverse Body', field: 'text.inverseBody' },
        { name: 'Inverse Icon', field: 'text.inverseIcon' },
        { name: 'Inverse Subdued', field: 'text.inverseSubdued' },
        { name: 'Inverse Secondary Icon', field: 'text.inverseSecondaryIcon' },
        { name: 'Inverse Disabled', field: 'text.inverseDisabled' },
      ]}
    />
  </Root>
);

export const Extended: Story = () => (
  <Root>
    <H1>Primary palette</H1>
    <Body>
      The extended palette consists of all the useable tints and shades of each
      color in the palette. They are all numbered for easy reference. Usage of
      these colors varies depending on the touch point, but they come in handy
      for illustrations and components in product.
    </Body>
    <H2>Neutrals</H2>
    <Body>
      Neutrals have varying degrees of saturation that allow for the appropriate
      level of warmth across marketing and product. Typically they are used for
      text and subtle backgrounds when we don't want to draw too much attention
      to a particular touchpoint or convey information such as "to do" or
      "disabled".
    </Body>
    <H3>Dark Neutrals</H3>
    <Body>
      Dark neutrals are very effective for creating contrast and are therefore
      the primary color used for typography. Occasionally the dark neutrals are
      found in illustration but they rarely dominate the palette. Some
      exceptions are dark mode UI elements and illustrations.
    </Body>
    <PaletteSwatch
      colors={[
        { name: 'N600', field: 'neutral.600' },
        { name: 'N500', field: 'neutral.500' },
        { name: 'N400', field: 'neutral.400' },
        { name: 'N300', field: 'neutral.300' },
        { name: 'N200', field: 'neutral.200' },
        { name: 'N100', field: 'neutral.100' },
      ]}
    />
    <SmallSpacer />
    <H3>Light Neutrals</H3>
    <Body>
      We use light neutrals as subtle backgrounds to indicate various
      interactive states such as hover and disabled, or simply to create
      secondary attention towards a component. You'll find light neutrals in
      buttons, text fields, tags, and illustrations. Light neutrals are helpful
      for offsetting content in a primarily white layout without losing warmth
      and cleanliness and are therefore often used as a background color. Their
      subtlety allows for them to be helpful in creating subtle shadows or
      depth.
    </Body>
    <PaletteSwatch
      colors={[
        { name: 'N90', field: 'neutral.90' },
        { name: 'N80', field: 'neutral.80' },
        { name: 'N70', field: 'neutral.70' },
        { name: 'N60', field: 'neutral.60' },
        { name: 'N0', field: 'neutral.0' },
      ]}
    />
    <Spacer />
    <H3>Red - Error</H3>
    <Body>
      Red is mainly used for backgrounds in messages and in error states to draw
      attention to important information or actions that are destructive or
      block workflow. You'll find red used in components such as lozenges,
      banner, flag messages, buttons, illustrations, and typography.
    </Body>
    <PaletteSwatch
      colors={[
        { name: 'R700', field: 'red.700' },
        { name: 'R600', field: 'red.600' },
        { name: 'R500', field: 'red.500' },
        { name: 'R400', field: 'red.400' },
        { name: 'R300', field: 'red.300' },
        { name: 'R200', field: 'red.200' },
        { name: 'R100', field: 'red.100' },
      ]}
    />
    <Spacer />
    <H3>Yellow - Warning</H3>
    <Body>
      Typically used for warning. Yellow feels right at home in components like
      lozenges, banners, flag messages, and illustrations. Can also be used to
      signal success in icons and animations.
    </Body>
    <PaletteSwatch
      colors={[
        { name: 'Y700', field: 'yellow.700' },
        { name: 'Y600', field: 'yellow.600' },
        { name: 'Y500', field: 'yellow.500' },
        { name: 'Y400', field: 'yellow.400' },
        { name: 'Y300', field: 'yellow.300' },
        { name: 'Y200', field: 'yellow.200' },
        { name: 'Y100', field: 'yellow.100' },
      ]}
    />
    <Spacer />
    <H3>Green - Success</H3>
    <Body>
      We use green to indicate success or to celebrate a win. Green goes well
      with lozenges, badges, toggles, messages, and illustrations.
    </Body>
    <PaletteSwatch
      colors={[
        { name: 'G700', field: 'green.700' },
        { name: 'G600', field: 'green.600' },
        { name: 'G500', field: 'green.500' },
        { name: 'G400', field: 'green.400' },
        { name: 'G300', field: 'green.300' },
        { name: 'G200', field: 'green.200' },
        { name: 'G100', field: 'green.100' },
      ]}
    />
    <Spacer />
    <H3>Blue - Progress</H3>
    <Body>
      Blue is used to indicate authentication, connectivity, or progress. You'll
      find blue in messages, buttons, navigation, lozenges, badges, tabs, and
      the progress tracker.
    </Body>
    <PaletteSwatch
      colors={[
        { name: 'B700', field: 'blue.700' },
        { name: 'B600', field: 'blue.600' },
        { name: 'B500', field: 'blue.500' },
        { name: 'B400', field: 'blue.400' },
        { name: 'B300', field: 'blue.300' },
        { name: 'B200', field: 'blue.200' },
        { name: 'B100', field: 'blue.100' },
      ]}
    />
    <Spacer />
    <H3>Teal - Exploration</H3>
    <Body>
      Teal can typically be found in illustrations or as an accent color for
      components such a tags.
    </Body>
    <PaletteSwatch
      colors={[
        { name: 'T700', field: 'teal.700' },
        { name: 'T600', field: 'teal.600' },
        { name: 'T500', field: 'teal.500' },
        { name: 'T400', field: 'teal.400' },
        { name: 'T300', field: 'teal.300' },
        { name: 'T200', field: 'teal.200' },
        { name: 'T100', field: 'teal.100' },
      ]}
    />
    <Spacer />
    <H3>Purple - Learning</H3>
    <Body>
      Purple indicates help and support and is used as an accent color in
      illustration and icons.
    </Body>
    <PaletteSwatch
      colors={[
        { name: 'P700', field: 'purple.700' },
        { name: 'P600', field: 'purple.600' },
        { name: 'P500', field: 'purple.500' },
        { name: 'P400', field: 'purple.400' },
        { name: 'P300', field: 'purple.300' },
        { name: 'P200', field: 'purple.200' },
        { name: 'P100', field: 'purple.100' },
      ]}
    />
    <Spacer />
    <H3>Magenta - Start with Heart</H3>
    <Body>
      Magenta can typically be found in illustrations or as an accent color for
      components such a tags.
    </Body>
    <PaletteSwatch
      colors={[
        { name: 'M700', field: 'magenta.700' },
        { name: 'M600', field: 'magenta.600' },
        { name: 'M500', field: 'magenta.500' },
        { name: 'M400', field: 'magenta.400' },
        { name: 'M300', field: 'magenta.300' },
        { name: 'M200', field: 'magenta.200' },
        { name: 'M100', field: 'magenta.100' },
      ]}
    />
  </Root>
);

export const Tones: Story = () => (
  <Root>
    <H3>Warm Skin Tones</H3>
    <PaletteSwatch
      colors={[
        { name: 'Treacle', field: 'tones.warm.500' },
        { name: 'Roasted', field: 'tones.warm.400' },
        { name: 'Honey', field: 'tones.warm.300' },
        { name: 'Tan', field: 'tones.warm.200' },
        { name: 'Fair', field: 'tones.warm.100' },
      ]}
    />
    <Spacer />
    <H3>Neutral Skin Tones</H3>
    <PaletteSwatch
      colors={[
        { name: 'Espresso', field: 'tones.neutral.500' },
        { name: 'Bronze', field: 'tones.neutral.400' },
        { name: 'Golden', field: 'tones.neutral.300' },
        { name: 'Sand', field: 'tones.neutral.200' },
        { name: 'Ivory', field: 'tones.neutral.100' },
      ]}
    />
    <Spacer />
    <H3>Cool Skin Tones</H3>
    <PaletteSwatch
      colors={[
        { name: 'Chocolate', field: 'tones.cool.500' },
        { name: 'Latte', field: 'tones.cool.400' },
        { name: 'Cliffside', field: 'tones.cool.300' },
        { name: 'Wood', field: 'tones.cool.200' },
        { name: 'Porcelain', field: 'tones.cool.100' },
      ]}
    />
  </Root>
);
