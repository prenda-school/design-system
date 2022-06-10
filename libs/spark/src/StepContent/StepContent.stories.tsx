import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { StepContent, StepContentProps, Typography } from '..';
import { sparkThemeProvider } from '../../stories';

// underlying StepContentProps are undocumented
interface SbStepContentProps extends StepContentProps {
  active?: boolean;
  expanded?: boolean;
  /**
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';
}
export const SbStepContent = (props: SbStepContentProps) => (
  <StepContent {...props} />
);

export default {
  title: '@ps/StepContent',
  component: SbStepContent,
  excludeStories: ['SbStepContent'],
  args: {
    expanded: true,
  },
  decorators: [sparkThemeProvider],
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
