import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { ScopedCssBaseline, styled, withStyles } from '..';

export default {
  title: '@ps/theme/typography',
  excludeStories: ['VariantUseFor'],
} as Meta;

const FontsBaseline = withStyles({
  root: {
    letterSpacing: 0,
    '@global': {
      '@font-face': [
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
          fontWeight: 400,
          src: 'url(/internal/fonts/robotomono-regular.woff2) format("woff2")',
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

const VariantInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  '& > :nth-child(1)': {
    fontFamily: '"Poppins"',
    fontWeight: 900,
    fontSize: theme.typography.pxToRem(20),
    lineHeight: 32 / 20,
  },
  '& > :nth-child(2)': {
    ...theme.typography.code,
  },
}));

const FlexBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const VariantSwagger = styled(({ variant, ...other }) => <div {...other} />)(
  // @ts-expect-error ts(2339)
  ({ theme, variant }) => ({
    ...theme.typography[variant],
    color: theme.palette.neutral[500],
  })
);
export const VariantUseFor = styled('span')(({ theme }) => ({
  backgroundColor: '#f4f5f7',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 8,
  color: theme.palette.neutral[500],
  ...theme.typography.code,
  '& > :nth-child(1)': {
    fontWeight: 700,
  },
}));

const Root = styled('div')(({ theme }) => ({
  color: theme.palette.neutral[500],
  display: 'grid',
  gridGap: 32,
  gridTemplateColumns: '186px auto',
  paddingLeft: 8,
}));

export const Styles: Story = () => (
  // @ts-expect-error 2679
  <FontsBaseline>
    <Root>
      <VariantInfo>
        <span>Display</span>
        <span>
          48px/52px/-1%
          <br />
          Extrabold
          <br />
          Poppins
        </span>
      </VariantInfo>
      <FlexBox>
        <VariantSwagger variant="display">
          Empower Learners everywhere
        </VariantSwagger>
        <VariantUseFor>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span>// Use for //</span>
          <span>Oversized screen titles. Use in moderation</span>
        </VariantUseFor>
      </FlexBox>

      <VariantInfo>
        <span>T32</span>
        <span>
          32px/40px/-1%
          <br />
          Bold
          <br />
          Poppins
        </span>
      </VariantInfo>
      <FlexBox>
        <VariantSwagger variant="T32">
          Empower Learners everywhere
        </VariantSwagger>
        <VariantUseFor>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span>// Use for //</span>
          <span>
            Empty states and feature introductions. Top level headers.
          </span>
        </VariantUseFor>
      </FlexBox>

      <VariantInfo>
        <span>T28</span>
        <span>
          28px/36px/-1%
          <br />
          Bold
          <br />
          Poppins
        </span>
      </VariantInfo>
      <FlexBox>
        <VariantSwagger variant="T28">
          Empower Learners everywhere
        </VariantSwagger>
        <VariantUseFor>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span>// Use for //</span>
          <span>Main titles, use only once per page. Typical H1.</span>
        </VariantUseFor>
      </FlexBox>

      <VariantInfo>
        <span>T22</span>
        <span>
          22px/38px/-1%
          <br />
          Semibold
          <br />
          Poppins
        </span>
      </VariantInfo>
      <FlexBox>
        <VariantSwagger variant="T22">
          Empower Learners everywhere
        </VariantSwagger>
        <VariantUseFor>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span>// Use for //</span>
          <span>Headings that identify key functionality.</span>
        </VariantUseFor>
      </FlexBox>

      <VariantInfo>
        <span>T18</span>
        <span>
          18px/28px/-1%
          <br />
          Semibold
          <br />
          Poppins
        </span>
      </VariantInfo>
      <FlexBox>
        <VariantSwagger variant="T18">
          Empower Learners everywhere
        </VariantSwagger>
        <VariantUseFor>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span>// Use for //</span>
          <span>Sub-section and field group headings.</span>
        </VariantUseFor>
      </FlexBox>

      <VariantInfo>
        <span>T14</span>
        <span>
          14px/20px/4%/uppercase
          <br />
          Extrabold
          <br />
          Poppins
        </span>
      </VariantInfo>
      <FlexBox>
        <VariantSwagger variant="T14">Passion to Learn</VariantSwagger>
        <VariantUseFor>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span>// Use for //</span>
          <span>
            Heading up a group of list items, stylized heading for different
            areas.
          </span>
        </VariantUseFor>
      </FlexBox>

      <VariantInfo>
        <span>Body</span>
        <span>
          16px/24px
          <br />
          Regular
          <br />
          Inter
          <br />
          (cv05,ss03)
        </span>
      </VariantInfo>
      <FlexBox>
        <VariantSwagger variant="body">
          Body - When we allow students to own their education, connect them
          with quality learning tools, caring adults, and a community, their
          natural love of learning takes over and they become unstoppable.
        </VariantSwagger>
        <VariantUseFor>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span>// Use for //</span>
          <span>Paragraph text, field inputs, general copy.</span>
        </VariantUseFor>
      </FlexBox>

      <VariantInfo>
        <span>Label</span>
        <span>
          16px/20px
          <br />
          Semi-bold
          <br />
          Inter
          <br />
          (cv05,ss03)
        </span>
      </VariantInfo>
      <FlexBox>
        <VariantSwagger variant="label">Label - Select grades</VariantSwagger>
        <VariantUseFor>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span>// Use for //</span>
          <span>Field labels, list groupings, strong body copy</span>
        </VariantUseFor>
      </FlexBox>

      <VariantInfo>
        <span>Description</span>
        <span>
          14px/20px
          <br />
          Regular
          <br />
          Inter
          <br />
          (cv05,ss03)
        </span>
      </VariantInfo>
      <FlexBox>
        <VariantSwagger variant="description">
          Description - When we allow students to own their education, connect
          them with quality learning tools, caring adults, and a community,
          their natural love of learning takes over and they become unstoppable.
        </VariantSwagger>
        <VariantUseFor>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span>// Use for //</span>
          <span>
            Smaller text for hints, disclaimers, other areas where small text is
            needed.
          </span>
        </VariantUseFor>
      </FlexBox>

      <VariantInfo>
        <span>Code</span>
        <span>
          14px/24px
          <br />
          Regular
          <br />
          Roboto Mono
        </span>
      </VariantInfo>
      <FlexBox>
        <VariantSwagger variant="code">
          {`<script>`}
          <br />
          &nbsp;&nbsp;{`let mystring = 'abc123';`}
          <br />
          {`</script>`}
          <br />
          <br />
          {`<h1>This is {mystring}</h1>`}
        </VariantSwagger>
        <VariantUseFor>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span>// Use for //</span>
          <span>
            Smaller text for hints, disclaimers, other areas where small text is
            needed.
          </span>
        </VariantUseFor>
      </FlexBox>
    </Root>
  </FontsBaseline>
);
