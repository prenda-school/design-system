import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { StepContent, StepContentProps, Typography } from '..';

export const SbStepContent = (props: StepContentProps) => (
  <StepContent {...props} />
);

export default {
  title: 'PDS/@ps/StepContent',
  component: SbStepContent,
  excludeStories: ['SbStepContent'],
  argTypes: {
    active: { control: 'boolean' },
    expanded: { control: 'boolean' },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
  args: {
    orientation: 'vertical',
    expanded: true,
  },
} as Meta;

const Template = (args: StepContentProps) => (
  <StepContent {...args}>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
      nesciunt, non veniam quis pariatur quidem, optio necessitatibus fugit
      nihil doloremque eius deleniti nulla harum inventore eligendi natus
      consequatur rem delectus!
    </Typography>
  </StepContent>
);

export const Configurable: Story = Template.bind({});
