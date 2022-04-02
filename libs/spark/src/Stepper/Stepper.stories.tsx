import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
  StepperProps,
} from '..';
import { sparkThemeProvider } from '../../stories';

interface SbStepperProps extends StepperProps {
  activeStep?: StepperProps['activeStep'];
  alternativeLabel?: StepperProps['alternativeLabel'];
  nonLinear?: StepperProps['nonLinear'];
  orientation?: StepperProps['orientation'];
  /**
   * **[Storybook-only:** Show sample text in step labels.**]**
   */
  sb_showLabel?: boolean;
  /**
   * **[Storybook-only:** Show sample text in step content when `orientation="vertical"` and `active={true}`.**]**
   */
  sb_showContent?: boolean;
  /**
   * **[Storybook-only:** Use a `StepButton` instead of `StepLabel`.**]**
   */
  sb_useButton?: boolean;
}

export const SbStepper = ({
  sb_showLabel,
  sb_showContent,
  sb_useButton,
  ...props
}: SbStepperProps) => <SbStepper {...props} />;

export default {
  title: '@ps/Stepper',
  component: SbStepper,
  excludeStories: ['SbStepper'],
  argTypes: {
    activeStep: { control: 'number' },
    alternativeLabel: { control: 'boolean' },
    nonLinear: { control: 'boolean' },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    sb_showLabel: { control: 'boolean' },
  },
  args: {
    activeStep: 2,
    alternativeLabel: false,
    nonLinear: false,
  },
  decorators: [sparkThemeProvider],
} as Meta;

const content =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim possimus suscipit, aut vel, ...';

const Template = ({
  sb_showLabel,
  sb_showContent,
  sb_useButton,
  ...args
}: SbStepperProps) => {
  return (
    <Stepper {...args}>
      {['one', 'two', 'three', 'four'].map((key) => (
        <Step key={key}>
          {sb_showLabel ? (
            args.nonLinear || sb_useButton ? (
              <StepButton>Label {key}</StepButton>
            ) : (
              <StepLabel>Label {key}</StepLabel>
            )
          ) : args.nonLinear || sb_useButton ? (
            <StepButton />
          ) : (
            <StepLabel />
          )}
          {args.orientation === 'vertical' && sb_showContent ? (
            <StepContent>{content}</StepContent>
          ) : null}
        </Step>
      ))}
    </Stepper>
  );
};

export const Configurable: Story = Template.bind({});

export const Horizontal: Story = Template.bind({});
Horizontal.args = { orientation: 'horizontal' };
Horizontal.storyName = 'horizontal';

export const HorizontalNonLinear: Story = Template.bind({});
HorizontalNonLinear.args = { orientation: 'horizontal', nonLinear: true };
HorizontalNonLinear.storyName = 'horizontal nonLinear';

export const LabelsHorizontal: Story = Template.bind({});
LabelsHorizontal.args = { orientation: 'horizontal', sb_showLabel: true };
LabelsHorizontal.storyName = 'Labels horizontal';

export const LabelsHorizontalNonLinear: Story = Template.bind({});
LabelsHorizontalNonLinear.args = {
  orientation: 'horizontal',
  nonLinear: true,
  sb_showLabel: true,
};
LabelsHorizontalNonLinear.storyName = 'Labels horizontal nonLinear';

export const LabelsHorizontalAlternativeLabel: Story = Template.bind({});
LabelsHorizontalAlternativeLabel.args = {
  orientation: 'horizontal',
  sb_showLabel: true,
  alternativeLabel: true,
};
LabelsHorizontalAlternativeLabel.storyName =
  'Labels horizontal alternativeLabel';

export const Vertical: Story = Template.bind({});
Vertical.args = { orientation: 'vertical' };
Vertical.storyName = 'vertical';

export const VerticalNonLinear: Story = Template.bind({});
VerticalNonLinear.args = { orientation: 'vertical', nonLinear: true };
VerticalNonLinear.storyName = 'vertical nonLinear';

export const LabelsVertical: Story = Template.bind({});
LabelsVertical.args = { orientation: 'vertical', sb_showLabel: true };
LabelsVertical.storyName = 'Labels vertical';

export const LabelsVerticalNonLinear: Story = Template.bind({});
LabelsVerticalNonLinear.args = {
  orientation: 'vertical',
  sb_showLabel: true,
  nonLinear: true,
};
LabelsVerticalNonLinear.storyName = 'Labels vertical nonLinear';

export const LabelsAndContentVertical: Story = Template.bind({});
LabelsAndContentVertical.args = {
  orientation: 'vertical',
  sb_showLabel: true,
  sb_showContent: true,
};
LabelsAndContentVertical.storyName = 'Labels & Content vertical';

export const LabelsAndContentVerticalNonLinear: Story = Template.bind({});
LabelsAndContentVerticalNonLinear.args = {
  orientation: 'vertical',
  sb_showLabel: true,
  sb_showContent: true,
  nonLinear: true,
};
LabelsAndContentVerticalNonLinear.storyName =
  'Labels & Content vertical nonLinear';
