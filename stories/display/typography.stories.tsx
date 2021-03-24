import * as React from 'react';
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { Typography, TypographyProps } from "../../dist";

export default {
  title: 'prenda-spark/Typography',
  component: Typography,
  argTypes: {
    variant: { type: { name: "string"}}
  },
  args: {
    variant: "paragraph"
  }
} as Meta;

const text = {
  display: 'Empower learners everywhere',
  heading: 'Empower learners everywhere',
  smallCaps: 'Passion to learn',
  label: 'Label',
  paragraph: 'When we allow students to own their education, connect them with quality learning tools, caring adults, and a community, their natural love of learning takes over and they become unstoppable.',
  code: `<script>
  let mystring = 'abc123';
</script>

<h1>This is {myString}</h1>`
}

const Template: Story<TypographyProps> = (args) => <Typography {...args}>{text[args.variant]}</Typography>;
export const ConfigurableTypography = Template.bind({});

