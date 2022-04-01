import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { ScopedCssBaseline, styled, withStyles } from '..';
import { VariantUseFor } from './unstable_typography.stories';

export default {
  title: '@ps/theme/unstable_fonts',
} as Meta;

const FontsBaseline = withStyles({
  root: {
    letterSpacing: 0,
    '@global': {
      '@font-face': [
        {
          fontFamily: '"Inter"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 100,
          src: 'url(/internal/fonts/inter-thin.woff2) format("woff2")',
        },
        {
          fontFamily: '"Inter"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 200,
          src: 'url(/internal/fonts/inter-extralight.woff2) format("woff2")',
        },
        {
          fontFamily: '"Inter"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 300,
          src: 'url(/internal/fonts/inter-light.woff2) format("woff2")',
        },
        {
          fontFamily: '"Inter"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 500,
          src: 'url(/internal/fonts/inter-medium.woff2) format("woff2")',
        },
        {
          fontFamily: '"Inter"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 600,
          src: 'url(/internal/fonts/inter-semibold.woff2) format("woff2")',
        },
        {
          fontFamily: '"Inter"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 700,
          src: 'url(/internal/fonts/inter-bold.woff2) format("woff2")',
        },
        {
          fontFamily: '"Inter"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 800,
          src: 'url(/internal/fonts/inter-extrabold.woff2) format("woff2")',
        },
        {
          fontFamily: '"Inter"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 900,
          src: 'url(/internal/fonts/inter-black.woff2) format("woff2")',
        },
        {
          fontFamily: '"Poppins"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 100,
          src: 'url(/internal/fonts/poppins-thin.woff2) format("woff2")',
        },
        {
          fontFamily: '"Poppins"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 200,
          src: 'url(/internal/fonts/poppins-extralight.woff2) format("woff2")',
        },
        {
          fontFamily: '"Poppins"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 300,
          src: 'url(/internal/fonts/poppins-light.woff2) format("woff2")',
        },
        {
          fontFamily: '"Poppins"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 400,
          src: 'url(/internal/fonts/poppins-regular.woff2) format("woff2")',
        },
        {
          fontFamily: '"Poppins"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 500,
          src: 'url(/internal/fonts/poppins-medium.woff2) format("woff2")',
        },
        {
          fontFamily: '"Poppins"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 900,
          src: 'url(/internal/fonts/poppins-black.woff2) format("woff2")',
        },
        {
          fontFamily: '"Roboto Mono"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 100,
          src: 'url(/internal/fonts/robotomono-thin.woff2) format("woff2")',
        },
        {
          fontFamily: '"Roboto Mono"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 300,
          src: 'url(/internal/fonts/robotomono-light.woff2) format("woff2")',
        },
        {
          fontFamily: '"Roboto Mono"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 400,
          src: 'url(/internal/fonts/robotomono-regular.woff2) format("woff2")',
        },
        {
          fontFamily: '"Roboto Mono"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 500,
          src: 'url(/internal/fonts/robotomono-medium.woff2) format("woff2")',
        },
        {
          fontFamily: '"Roboto Mono"',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 700,
          src: 'url(/internal/fonts/robotomono-bold.woff2) format("woff2")',
        },
      ],
    },
  },
})(ScopedCssBaseline);

const Root = styled('div')({
  paddingLeft: 8,
});
const Heading = styled('h1')(({ theme }) => ({
  fontFamily: '"Poppins"',
  fontSize: theme.unstable_typography.pxToRem(32),
  fontWeight: 500,
  letterSpacing: '-0.04em',
  lineHeight: 48 / 32,
}));
const Description = styled('p')(({ theme }) => ({
  margin: 0, // reset
  marginBottom: 16,
  fontFamily: '"Inter"',
  fontSize: theme.unstable_typography.pxToRem(18),
  lineHeight: 28 / 18,
}));
const Code = styled('span')(({ theme }) => ({
  margin: 0, // reset
  display: 'inline',
  backgroundColor: '#f4f5f7',
  color: theme.unstable_palette.neutral[500],
  paddingRight: 4,
  paddingLeft: 4,
  ...theme.unstable_typography.code,
}));

export const Guide: Story = () => (
  // @ts-expect-error ts(2769)
  <FontsBaseline>
    <Root>
      <Heading>Fonts guide</Heading>
      <Description>
        The Prenda Design System (PDS) describes three fonts for web
        applications: "Poppins", "Inter", and "Roboto Mono". The web components
        rely on various font weights and styles being available on the client.
        To achieve this, the complete set of <Code>@font-face</Code> rules
        required are injected into the document's styles using the{' '}
        <Code>CssBaseline</Code> as a child of the <Code>ThemeProvider</Code>{' '}
        component with PDS's <Code>theme</Code>. This steps are encapsulated for
        you if you simply wrap your app in <Code>SparkThemeProvider</Code>.
      </Description>
      <Description>
        These fonts are available through{' '}
        <a href="https://fonts.google.com/" rel="noreferrer" target="_blank">
          Google Fonts
        </a>
        , but self-hosting is preferable for performance, reliability, and
        tracking concerns. All of the fonts are "open source", and usually
        reside within a GitHub repository. Google fonts can be found under
        Google's{' '}
        <a
          href="https://github.com/google/fonts"
          rel="noreferrer"
          target="_blank"
        >
          "fonts" repository
        </a>
        . Typically the repository forks the work of the original font
        repositories. We trace back to the original:{' '}
        <a
          href="https://github.com/rsms/inter"
          rel="noreferrer"
          target="_blank"
        >
          Inter
        </a>{' '}
        (not a Google font),{' '}
        <a
          href="https://github.com/itfoundry/Poppins"
          rel="noreferrer"
          target="_blank"
        >
          Poppins
        </a>
        ,{' '}
        <a
          href="https://github.com/googlefonts/RobotoMono"
          rel="noreferrer"
          target="_blank"
        >
          Roboto Mono
        </a>{' '}
        (PDS v1:{' '}
        <a
          href="https://github.com/adobe-fonts/source-code-pro"
          rel="noreferrer"
          target="_blank"
        >
          Source Code Pro
        </a>
        ,{' '}
        <a
          href="https://github.com/vernnobile/NunitoFont"
          rel="noreferrer"
          target="_blank"
        >
          Nunito
        </a>
        ). From these repositories, we are looking for "original" font files,
        i.e. with extensions <Code>.ttf</Code> or <Code>.otf</Code> (preferred).
        Then, we upload those files to{' '}
        <a
          href="https://www.fontsquirrel.com/tools/webfont-generator"
          rel="noreferrer"
          target="_blank"
        >
          Font Squirrel's "Webfont Generator"
        </a>{' '}
        and convert using the recommended, "optimal" settings. The aim is to
        convert "original" font files to ones optimized for serving on the web,
        i.e. with extension <Code>.woff</Code> and <Code>.woff2</Code>.
        Sometimes, these files can be found in source repositories themselves,
        or distributed by some vendor, but they can be up to 100kb or 200kb in
        size. The generator consistently produces files that are less than 40kb
        in size, ideal for self-hosting and optimal client-download performance.
      </Description>
      <Description>
        As a consumer of PDS, you should serve the contents of the{' '}
        <Code>libs/spark/public/</Code> directory in your app, minus the{' '}
        <Code>internal/</Code> directory, and any files / directories that are
        undesirable (e.g. "nunito" files if you are consuming PDS v2
        implementations).
      </Description>
      <Description>
        You can also found complete source "zips" and "converted" files under
        the top level <Code>assets/</Code> directory of the repository. These
        are useful if your designs fall outside of the PDS specifications, and
        you need to load additional font face declarations and associated files.
      </Description>
      <Description>
        <em>Note: </em>most font files updated to Font Squirrel's "Webfont
        Generator" were converted using the "Optimal" settings. However, the
        files for "Roboto Mono" were converted using "Expert" settings, with
        "Truetype Hinting" set to "Keep Existing" and "Vertical Metrics" set to
        "No Adjustment" (the remaining settings were kept as default). This
        change was meant to fix appearance issue with certain letters like "e",
        "r", "n", etc. that would appear to have a lower baseline if the files
        were generated with "Optimal" settings.
      </Description>
    </Root>
  </FontsBaseline>
);

const Showcase = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'auto 446px',
  gridGap: 64,
});
const Hr = styled('hr')(({ theme }) => ({
  background: theme.unstable_palette.neutral[600],
  marginTop: 24,
  marginBottom: 48,
  opacity: 0.32,
}));

const LargeDisplay = styled(({ fontFamily, fontWeight, ...other }) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h2 {...other} />
))(
  // @ts-expect-error ts(2339)
  ({ fontFamily = '"Poppins"', fontWeight = 700, theme }) => ({
    color: theme.unstable_palette.neutral[600],
    fontFamily,
    fontSize: theme.unstable_typography.pxToRem(64),
    fontWeight,
    lineHeight: 72 / 64,
    margin: 0, // reset
  })
);
const Body = styled('p')(({ theme }) => ({
  marginTop: 16,
  marginBottom: 32,
  ...theme.unstable_typography.body,
}));
const WeightWaterfall = styled(({ fontFamily, ...other }) => (
  <div {...other} />
))(
  // @ts-expect-error ts(2339)
  ({ theme, fontFamily }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    '& > *': {
      fontFamily,
      fontSize: theme.unstable_typography.pxToRem(48),
      letterSpacing: '-0.02em',
      lineHeight: 40 / 48,
      // inline `fontWeight`
    },
  })
);

export const Poppins: Story = () => (
  // @ts-expect-error ts(2769)
  <FontsBaseline>
    <Root>
      <Heading>Brand font</Heading>
      <Description>
        Marketing, Learning and development, and Product all will use Poppins
        throughout their experiences to create a unified brand.
      </Description>
      <Hr />
      <Showcase>
        <div>
          <LargeDisplay>Poppins</LargeDisplay>
          <Body>
            Geometric sans serif typefaces have been a popular design tool ever
            since these actors took to the world’s stage. Poppins is one of the
            new comers to this long tradition. With support for the Devanagari
            and Latin writing systems, it is an internationalist take on the
            genre.
            <br />
            <br />
            Many of the Latin glyphs (such as the ampersand) are more
            constructed and rationalist than is typical. The Devanagari design
            is particularly new, and is the first ever Devanagari typeface with
            a range of weights in this genre. Just like the Latin, the
            Devanagari is based on pure geometry, particularly circles.
            <br />
            <br />
            Each letterform is nearly monolinear, with optical corrections
            applied to stroke joints where necessary to maintain an even
            typographic color. The Devanagari base character height and the
            Latin ascender height are equal; Latin capital letters are shorter
            than the Devanagari characters, and the Latin x-height is set rather
            high.
          </Body>
          <VariantUseFor>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <span>// Use for //</span>
            <span>
              Headings, display text, marketing site, marketing materials,
              section groupings.
            </span>
          </VariantUseFor>
        </div>
        <WeightWaterfall fontFamily='"Poppins"'>
          {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((fontWeight) => (
            <span key={fontWeight} style={{ fontWeight }}>
              AaBbCcDd 123 &!?
            </span>
          ))}
        </WeightWaterfall>
      </Showcase>
    </Root>
  </FontsBaseline>
);
Poppins.storyName = '"Poppins"';

export const Inter: Story = () => (
  // @ts-expect-error ts(2769)
  <FontsBaseline>
    <Root>
      <Heading>Functional product font</Heading>
      <Description>
        For functional text inside products we use Inter. Inter was designed
        specifically for UI - this ensures that we have a highly legible and
        optimized interfaces. Ensuring that guides, admins, and parents can get
        their tasks accomplished with ease and efficiency.
      </Description>
      <Hr />
      <Showcase>
        <div>
          <LargeDisplay fontFamily='"Inter"'>Inter</LargeDisplay>
          <Body>
            Inter features a tall x-height to aid in readability of mixed-case
            and lower-case text. Several OpenType features are provided as well,
            like contextual alternates that adjusts punctuation depending on the
            shape of surrounding glyphs, slashed zero for when you need to
            disambiguate "0" from "o", tabular numbers, etc.
            <br />
            <br />
            There are nine weights, each with italic counterparts, making a
            total of 18 styles.
            <br />
            <br />
            Inter comes with many OpenType features that can be used to tailor
            functionality and aesthetics to your specific needs. Some of these
            features can be combined to form a great number of alternative
            variations.
            <br />
            <br />
            <a href="https://rsms.me/inter/" rel="noreferrer" target="_blank">
              For more information
            </a>
          </Body>
          <VariantUseFor>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <span>// Use for //</span>
            <span>
              Paragraph or body copy, small descriptions, components inside a
              product experience such as buttons, messages, input fields,
              checkboxes, etc.
            </span>
          </VariantUseFor>
        </div>
        <WeightWaterfall fontFamily='"Inter"'>
          {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((fontWeight) => (
            <span key={fontWeight} style={{ fontWeight }}>
              AaBbCcDd 123 &!?
            </span>
          ))}
        </WeightWaterfall>
      </Showcase>
    </Root>
  </FontsBaseline>
);
Inter.storyName = '"Inter"';

export const RobotoMono: Story = () => (
  // @ts-expect-error ts(2769)
  <FontsBaseline>
    <Root>
      <Heading>Monospaced font</Heading>
      <Description>
        Roboto Mono is provided as a pairing to Inter, Poppins, and KG neatly
        printed to be used in a monospace environment like a code editor.
      </Description>
      <Hr />
      <Showcase>
        <div>
          <LargeDisplay fontFamily='"Roboto Mono"' fontWeight={400}>
            Roboto Mono
          </LargeDisplay>
          <Body>
            Roboto Mono is a monospaced addition to the Roboto type family. Like
            the other members of the Roboto family, the fonts are optimized for
            readability on screens across a wide variety of devices and reading
            environments. While the monospaced version is related to its
            variable width cousin, it doesn’t hesitate to change forms to better
            fit the constraints of a monospaced environment. For example, narrow
            glyphs like ‘I’, ‘l’ and ‘i’ have added serifs for more even texture
            while wider glyphs are adjusted for weight. Curved caps like ‘C’ and
            ‘O’ take on the straighter sides from Roboto Condensed.
            <br />
            <br />
            Special consideration is given to glyphs important for reading and
            writing software source code. Letters with similar shapes are easy
            to tell apart. Digit ‘1’, lowercase ‘l’ and capital ‘I’ are easily
            differentiated as are zero and the letter ‘O’. Punctuation important
            for code has also been considered. For example, the curly braces ‘
            {'{ }'}’ have exaggerated points to clearly differentiate them from
            parenthesis ‘( )’ and braces ‘[ ]’. Periods and commas are also
            exaggerated to identify them more quickly. The scale and weight of
            symbols commonly used as operators have also been optimized.
          </Body>
        </div>
        <WeightWaterfall fontFamily='"Roboto Mono"'>
          {[100, 300, 400, 500, 700].map((fontWeight) => (
            <span key={fontWeight} style={{ fontWeight }}>
              AaBbCcDd 123 &!?
            </span>
          ))}
        </WeightWaterfall>
      </Showcase>
    </Root>
  </FontsBaseline>
);
RobotoMono.storyName = '"Roboto Mono"';
