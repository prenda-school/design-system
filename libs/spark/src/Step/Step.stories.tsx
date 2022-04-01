import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Step, StepButton, StepContent, StepLabel, StepProps } from '..';
import { sparkThemeProvider } from '../../stories';

interface SbStepProps extends StepProps {
  active?: StepProps['active'];
  completed?: StepProps['completed'];
  disabled?: StepProps['disabled'];
  /**
   * **[Storybook-only:** Show sample text in step content when `orientation="vertical"` and `active={true}`.**]**
   */
  sb_showContent?: boolean;
  /**
   * **[Storybook-only:** Show sample text in step label.**]**
   */
  sb_showLabel?: boolean;
  /**
   * **[Storybook-only:** Use a `StepButton` instead of `StepLabel`.**]**
   */
  sb_useButton?: boolean;
}

export const SbStep = ({
  sb_showLabel,
  sb_showContent,
  sb_useButton,
  ...props
}: SbStepProps) => <Step {...props} />;

export default {
  title: '@ps/Step',
  component: SbStep,
  excludeStories: ['SbStep'],
  args: {
    index: 0,
  },
  decorators: [sparkThemeProvider],
} as Meta;

const horizontalStyles = {
  display: 'flex',
  flexDirection: 'row' as const,
  alignItems: 'center',
};
const verticalStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  height: 'min-content',
};

const Template = ({
  sb_showLabel,
  sb_showContent,
  sb_useButton,
  ...args
}: SbStepProps) => (
  <div
    style={{
      // imitate Stepper wrapping
      ...(args.orientation === 'horizontal'
        ? horizontalStyles
        : verticalStyles),
    }}
  >
    <Step {...args}>
      {sb_showLabel ? (
        sb_useButton ? (
          <StepButton>Label</StepButton>
        ) : (
          <StepLabel>Label</StepLabel>
        )
      ) : sb_useButton ? (
        <StepButton />
      ) : (
        <StepLabel />
      )}
      {args.orientation === 'vertical' && sb_showContent ? (
        <StepContent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          enim possimus suscipit, aut vel, ...
        </StepContent>
      ) : null}
    </Step>
  </div>
);

export const Configurable: Story = Template.bind({});

const OrientationTemplate = ({
  sb_showLabel,
  sb_showContent,
  sb_useButton,
  ...args
}: SbStepProps) => (
  <div
    style={{
      ...(args.orientation === 'horizontal'
        ? {
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }
        : {
            display: 'flex',
            gap: 8,
          }),
    }}
  >
    <div
      style={{
        ...(args.orientation === 'horizontal'
          ? horizontalStyles
          : verticalStyles),
      }}
    >
      <Step {...args}>
        <StepLabel icon={1} />
      </Step>
    </div>
    <div
      style={{
        ...(args.orientation === 'horizontal'
          ? horizontalStyles
          : verticalStyles),
      }}
    >
      <Step {...args}>
        <StepLabel icon={1}>Label</StepLabel>
      </Step>
    </div>
    <div
      style={{
        ...(args.orientation === 'horizontal'
          ? horizontalStyles
          : verticalStyles),
      }}
    >
      <Step {...args} index={1}>
        <StepLabel icon={1} />
      </Step>
    </div>
    <div
      style={{
        ...(args.orientation === 'horizontal'
          ? horizontalStyles
          : verticalStyles),
      }}
    >
      <Step {...args} index={1}>
        <StepLabel icon={1}>Label</StepLabel>
      </Step>
    </div>
    {args.orientation === 'vertical' ? (
      <div style={verticalStyles}>
        <Step {...args} index={1}>
          <StepLabel icon={1}>Label</StepLabel>
          <StepContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            enim possimus suscipit, aut vel, ...
          </StepContent>
        </Step>
      </div>
    ) : null}
  </div>
);

export const Horizontal: Story = OrientationTemplate.bind({});
Horizontal.args = { orientation: 'horizontal' };
Horizontal.storyName = 'horizontal';

export const HorizontalActive: Story = OrientationTemplate.bind({});
HorizontalActive.args = { orientation: 'horizontal', active: true };
HorizontalActive.storyName = 'horizontal active';

export const HorizontalActiveCompleted: Story = OrientationTemplate.bind({});
HorizontalActiveCompleted.args = {
  orientation: 'horizontal',
  active: true,
  completed: true,
};
HorizontalActiveCompleted.storyName = 'horizontal active completed';

export const HorizontalCompleted: Story = OrientationTemplate.bind({});
HorizontalCompleted.args = { orientation: 'horizontal', completed: true };
HorizontalCompleted.storyName = 'horizontal completed';

export const HorizontalCompletedDisabled: Story = OrientationTemplate.bind({});
HorizontalCompletedDisabled.args = {
  orientation: 'horizontal',
  completed: true,
  disabled: true,
};
HorizontalCompletedDisabled.storyName = 'horizontal completed disabled';

export const HorizontalDisabled: Story = OrientationTemplate.bind({});
HorizontalDisabled.args = { orientation: 'horizontal', disabled: true };
HorizontalDisabled.storyName = 'horizontal disabled';

export const Vertical: Story = OrientationTemplate.bind({});
Vertical.args = { orientation: 'vertical' };
Vertical.storyName = 'vertical';

export const VerticalActive: Story = OrientationTemplate.bind({});
VerticalActive.args = { orientation: 'vertical', active: true };
VerticalActive.storyName = 'vertical active';

export const VerticalActiveCompleted: Story = OrientationTemplate.bind({});
VerticalActiveCompleted.args = {
  orientation: 'vertical',
  active: true,
  completed: true,
};
VerticalActiveCompleted.storyName = 'vertical active completed';

export const VerticalCompleted: Story = OrientationTemplate.bind({});
VerticalCompleted.args = { orientation: 'vertical', completed: true };
VerticalCompleted.storyName = 'vertical completed';

export const VerticalCompletedDisabled: Story = OrientationTemplate.bind({});
VerticalCompletedDisabled.args = {
  orientation: 'vertical',
  completed: true,
  disabled: true,
};
VerticalCompletedDisabled.storyName = 'vertical completed disabled';

export const VerticalDisabled: Story = OrientationTemplate.bind({});
VerticalDisabled.args = { orientation: 'vertical', disabled: true };
VerticalDisabled.storyName = 'vertical disabled';
