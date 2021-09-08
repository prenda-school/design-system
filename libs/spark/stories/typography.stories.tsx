import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Typography, TypographyProps, styled, withStyles } from '../src';
import { ChangelogTemplate } from './changelog-template';

export default {
  title: 'prenda-spark/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'inherit',
          'display-lg',
          'display-md',
          'display-sm',
          'heading-xl',
          'heading-lg',
          'heading-md',
          'heading-sm',
          'uppercase-lg',
          'uppercase-md',
          'uppercase-sm',
          'label-xl',
          'label-lg',
          'label-md',
          'label-sm',
          'paragraph-xl',
          'paragraph-lg',
          'paragraph-md',
          'paragraph-sm',
          'code-lg',
          'code-md',
          'code-sm',
        ],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'initial',
          'inherit',
          'onDark',
          'onDarkLowContrast',
          'onLight',
          'onLightLowContrast',
        ],
      },
    },
  },
  args: {
    variant: 'paragraph-lg',
    color: 'onLight',
  },
} as Meta;

type TextKey =
  | 'display'
  | 'heading'
  | 'uppercase'
  | 'label'
  | 'paragraph'
  | 'code';

const text = {
  display: 'Empower learners everywhere',
  heading: 'Empower learners everywhere',
  uppercase: 'Passion to learn',
  label: 'Label',
  paragraph:
    'When we allow students to own their education, connect them with quality learning tools, caring adults, and a community, their natural love of learning takes over and they become unstoppable.',
  code: `<script>
  let mystring = 'abc123';
</script>

<h1>This is {myString}</h1>`,
} as const;

/**
 * Utility to get suitable text string for configurable typography.
 * @param {Variant} variant
 * @returns {string}
 */
function getText(variant: string): string {
  return text[variant.split('-')[0] as TextKey] || text.paragraph;
}

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>{getText(String(args.variant))}</Typography>
);
export const ConfigurableTypography = Template.bind({});

enum Bases {
  Display = 'Display',
  Heading = 'Heading',
  Smallcaps = 'Small caps',
  Labels = 'Labels',
  Paragraph = 'Paragraph',
  Code = 'Code',
}

enum Sizes {
  XXLarge = 'XXLarge',
  XLarge = 'XLarge',
  XLargeStrong = 'XLarge - Strong',
  Large = 'Large',
  LargeStrong = 'Large - Strong',
  Medium = 'Medium',
  MediumStrong = 'Medium - Strong',
  Small = 'Small',
  SmallStrong = 'Small - Strong',
}

enum Styles {
  Extrabold = 'ExtraBold',
  Bold = 'Bold',
  Semibold = 'SemiBold',
  Medium = 'Medium',
  Regular = 'Regular',
}

type BaseInfo = Pick<TypographyProps, 'variant'> & {
  text: Sizes;
  values: string;
  style: Styles;
};

const baseMap: Record<Bases, Array<BaseInfo>> = {
  [Bases.Display]: [
    {
      text: Sizes.Large,
      values: '64px/72px',
      style: Styles.Extrabold,
      variant: 'display-lg',
    },
    {
      text: Sizes.Medium,
      values: '56px/64px',
      style: Styles.Extrabold,
      variant: 'display-md',
    },
    {
      text: Sizes.Small,
      values: '48px/56px',
      style: Styles.Extrabold,
      variant: 'display-sm',
    },
  ],
  [Bases.Heading]: [
    {
      text: Sizes.XLarge,
      values: '34px/48px',
      style: Styles.Bold,
      variant: 'heading-xl',
    },
    {
      text: Sizes.Large,
      values: '28px/40px',
      style: Styles.Bold,
      variant: 'heading-lg',
    },
    {
      text: Sizes.Medium,
      values: '24px/32px',
      style: Styles.Bold,
      variant: 'heading-md',
    },
    {
      text: Sizes.Small,
      values: '20px/32px',
      style: Styles.Bold,
      variant: 'heading-sm',
    },
  ],
  [Bases.Smallcaps]: [
    {
      text: Sizes.Large,
      values: '16px/16px/10%',
      style: Styles.Extrabold,
      variant: 'uppercase-lg',
    },
    {
      text: Sizes.Medium,
      values: '14px/14px/10%',
      style: Styles.Extrabold,
      variant: 'uppercase-md',
    },
    {
      text: Sizes.Small,
      values: '12px/12px/10%',
      style: Styles.Extrabold,
      variant: 'uppercase-sm',
    },
  ],
  [Bases.Labels]: [
    {
      text: Sizes.XLarge,
      values: '18px/20px',
      style: Styles.Semibold,
      variant: 'label-xl',
    },
    {
      text: Sizes.XLargeStrong,
      values: '18px/20px',
      style: Styles.Bold,
      variant: 'label-xl-strong',
    },
    {
      text: Sizes.Large,
      values: '16px/20px',
      style: Styles.Semibold,
      variant: 'label-lg',
    },
    {
      text: Sizes.LargeStrong,
      values: '16px/20px',
      style: Styles.Bold,
      variant: 'label-lg-strong',
    },
    {
      text: Sizes.Medium,
      values: '14px/20px',
      style: Styles.Semibold,
      variant: 'label-md',
    },
    {
      text: Sizes.MediumStrong,
      values: '14px/20px',
      style: Styles.Bold,
      variant: 'label-md-strong',
    },
    {
      text: Sizes.Small,
      values: '12px/20px',
      style: Styles.Semibold,
      variant: 'label-sm',
    },
    {
      text: Sizes.SmallStrong,
      values: '12px/20px',
      style: Styles.Bold,
      variant: 'label-sm-strong',
    },
  ],
  [Bases.Paragraph]: [
    {
      text: Sizes.XLarge,
      values: '18px/28px',
      style: Styles.Regular,
      variant: 'paragraph-xl',
    },
    {
      text: Sizes.Large,
      values: '16px/24px',
      style: Styles.Regular,
      variant: 'paragraph-lg',
    },
    {
      text: Sizes.Medium,
      values: '14px/20px',
      style: Styles.Regular,
      variant: 'paragraph-md',
    },
    {
      text: Sizes.Small,
      values: '12px/20px',
      style: Styles.Regular,
      variant: 'paragraph-sm',
    },
  ],
  [Bases.Code]: [
    {
      text: Sizes.Large,
      values: '18px/28px',
      style: Styles.Regular,
      variant: 'code-lg',
    },
    {
      text: Sizes.Medium,
      values: '16px/24px',
      style: Styles.Regular,
      variant: 'code-md',
    },
    {
      text: Sizes.Small,
      values: '14px/20px',
      style: Styles.Regular,
      variant: 'code-sm',
    },
  ],
};

type TypogPageProps = {
  variantBase: Bases;
};

const SizeSection = styled('div')({
  margin: '2.5rem 0',
  display: 'grid',
  gridTemplateColumns: '11rem 1.5rem auto',
  gridTemplateRows: '1.5rem auto',

  '& .pos-1': {
    gridColumn: 1,
    gridRow: 1,
  },

  '& .pos-2': {
    gridColumn: 1,
    gridRow: 2,
    paddingTop: '0.5rem',
  },

  '& .pos-3': {
    gridColumn: 3,
    gridRow: '1 / span 2',
  },
});

const BlueTypog = withStyles((theme) => ({
  root: {
    color: theme.palette.blue[3],
  },
}))(Typography);

const TypogPage = ({ variantBase }: TypogPageProps) => {
  return (
    <div>
      <Typography variant="heading-lg">{variantBase}</Typography>
      <hr />
      {baseMap[variantBase].map(
        ({ text, values, style, variant }: BaseInfo) => (
          <SizeSection key={text}>
            <BlueTypog variant="heading-sm" className="pos-1">
              {text}
            </BlueTypog>

            <BlueTypog variant="code-md" className="pos-2">
              {values}
              <br />
              {style}
            </BlueTypog>

            <span className="pos-3">
              <Typography variant={variant}>{getText(variant)}</Typography>
            </span>
          </SizeSection>
        )
      )}
    </div>
  );
};

export const Overview = () => (
  <div>
    <TypogPage variantBase={Bases.Display} />
    <TypogPage variantBase={Bases.Heading} />
    <TypogPage variantBase={Bases.Smallcaps} />
    <TypogPage variantBase={Bases.Labels} />
    <TypogPage variantBase={Bases.Paragraph} />
    <TypogPage variantBase={Bases.Code} />
  </div>
);

const TypographyChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = TypographyChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'vNext',
      versionDate: 'yyyy-mm-dd',
      changes: ['Fix: custom class names not being global.'],
    },
    {
      version: 'vPrevious',
      versionDate: 'unknown',
      changes: ['Missing.'],
    },
  ],
};
