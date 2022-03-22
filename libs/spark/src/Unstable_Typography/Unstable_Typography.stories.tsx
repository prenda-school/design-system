import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_Typography,
  Unstable_TypographyProps,
  styled,
  withStyles,
} from '..';
import { Unstable_TypographyVariant } from '../theme/unstable_typography';
import { capitalize } from '../utils';

export const SbUnstable_Typography = (props: Unstable_TypographyProps) => (
  <Unstable_Typography {...props} />
);

export default {
  title: '@ps/Unstable_Typography',
  component: SbUnstable_Typography,
  excludeStories: ['SbUnstable_Typography'],
  args: {
    children: 'typography',
    color: 'default',
    variant: 'body',
  },
} as Meta;

const Template = (args: Unstable_TypographyProps) => (
  <Unstable_Typography {...args} />
);
export const Playground: Story = Template.bind({});

const Container = styled('div')({
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

const CustomTypography = withStyles((theme) => ({
  root: {
    color: theme.unstable_palette.text.heading,
    fontFamily: '"Poppins"',
    fontSize: '1.25rem',
    lineHeight: 32 / 16,
    fontWeight: 900,
  },
}))(Unstable_Typography);

const VariantSection = (props: {
  variant: Unstable_TypographyProps['variant'];
  details: Array<string>;
  children: React.ReactNode;
}) => {
  const { variant, details, children } = props;

  return (
    <Container>
      <CustomTypography>{capitalize(variant)}</CustomTypography>

      <Unstable_Typography variant="code" className="pos-2">
        {details[0]}
        <br />
        {details[1]}
        <br />
        {details[2]}
        <br />
        {details.length === 4 ? details[3] : ''}
      </Unstable_Typography>

      <span className="pos-3">
        <Unstable_Typography variant={variant}>{children}</Unstable_Typography>
      </span>
    </Container>
  );
};

export const Overview: Story = () => (
  <div>
    <VariantSection
      variant="display"
      details={['48px/52px/-1%', 'Extrabold', 'Poppins']}
    >
      Empower learners everywhere
    </VariantSection>
    <VariantSection
      variant="T32"
      details={['32px/40px/-1%', 'Bold', 'Poppins']}
    >
      Empower learners everywhere
    </VariantSection>
    <VariantSection
      variant="T28"
      details={['28px/36px/-1%', 'Bold', 'Poppins']}
    >
      Empower learners everywhere
    </VariantSection>
    <VariantSection
      variant="T22"
      details={['22px/28px/-1%', 'Semibold', 'Poppins']}
    >
      Empower learners everywhere
    </VariantSection>
    <VariantSection
      variant="T18"
      details={['18px/28px/-1%', 'Semibold', 'Poppins']}
    >
      Empower learners everywhere
    </VariantSection>
    <VariantSection
      variant="T14"
      details={['14px/20px/4%/uppercase', 'Extrabold', 'Poppins']}
    >
      Passion to learn
    </VariantSection>
    <VariantSection
      variant="body"
      details={['16px/24px', 'Regular', 'Inter', '(cv05,ss03)']}
    >
      When we allow students to own their education, connect them with quality
      learning tools, caring adults, and a community, their natural love of
      learning takes over and they become <strong>unstoppable</strong>.
    </VariantSection>
    <VariantSection
      variant="label"
      details={['16px/20px', 'Semibold', 'Inter']}
    >
      Select a grade
    </VariantSection>
    <VariantSection
      variant="description"
      details={['14px/20px', 'Regular', 'Inter', '(cv05,ss03)']}
    >
      When we allow students to own their education, connect them with quality
      learning tools, caring adults, and a community, their natural love of
      learning takes over and they become <strong>unstoppable</strong>.
    </VariantSection>
    <VariantSection
      variant="code"
      details={['14px/24px', 'Regular', 'Roboto Mono']}
    >{`<script>
  let mystring = 'abc123';
</script>

<h1>This is {myString}</h1>`}</VariantSection>
  </div>
);
