import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { GearDuotone, QuestionDuotone } from '@prenda/spark-icons';
import { Input, InputAdornment, InputProps, styled } from '..';
import { ChangelogTemplate } from '../../stories/templates';

interface SbInputProps extends InputProps {
  defaultValue?: InputProps['defaultValue'];
  disabled?: InputProps['disabled'];
  endAdornment?: InputProps['endAdornment'];
  error?: InputProps['error'];
  fullWidth?: InputProps['fullWidth'];
  id?: InputProps['id'];
  multiline?: InputProps['multiline'];
  name?: InputProps['name'];
  placeholder?: InputProps['placeholder'];
  readOnly?: InputProps['readOnly'];
  required?: InputProps['required'];
  rows?: InputProps['rows'];
  maxRows?: InputProps['maxRows'];
  minRows?: InputProps['minRows'];
  startAdornment?: InputProps['startAdornment'];
  type?: InputProps['type'];
  value?: InputProps['value'];
}

export const SbInput = (props: SbInputProps) => <Input {...props} />;

export default {
  title: '@ps/Input',
  component: SbInput,
  excludeStories: ['SbInput'],
  argTypes: {
    startAdornment: {
      control: 'select',
      options: ['undefined', 'GearDuotone'],
      mapping: {
        undefined: undefined,
        GearDuotone: (
          <InputAdornment position="start">
            <GearDuotone />
          </InputAdornment>
        ),
      },
    },
    endAdornment: {
      control: 'select',
      options: ['undefined', 'QuestionDuotone'],
      mapping: {
        undefined: undefined,
        QuestionDuotone: (
          <InputAdornment position="end">
            <QuestionDuotone />
          </InputAdornment>
        ),
      },
    },
  },
  args: {
    placeholder: 'Placeholder',
  },
} as Meta;

const Template = ({ startAdornment, endAdornment, ...args }) => (
  <Input {...args} />
);

export const ConfigurableInput: Story = Template.bind({});

const OuterGroup = styled('span')({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: '1rem',
  margin: '1rem',
});

const InnerGroup = styled('span')({
  display: 'flex',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '1rem',
});

const StatesTemplate = ({ pseudo, ...args }) => (
  <OuterGroup>
    <InnerGroup>
      <Input {...args} />
      <Input value="Value" {...args} />
    </InnerGroup>
    <InnerGroup>
      <Input multiline rows={3} {...args} />
      <Input multiline rows={3} value="Value" {...args} />
    </InnerGroup>
    <InnerGroup>
      <Input className="Spark-success" {...args} />
      <Input className="Spark-success" value="Value" {...args} />
    </InnerGroup>
    <InnerGroup>
      <Input multiline rows={3} className="Spark-success" {...args} />
      <Input
        multiline
        rows={3}
        className="Spark-success"
        value="Value"
        {...args}
      />
    </InnerGroup>
    <InnerGroup>
      <Input error {...args} />
      <Input error value="Value" {...args} />
    </InnerGroup>
    <InnerGroup>
      <Input multiline rows={3} error {...args} />
      <Input multiline rows={3} error value="Value" {...args} />
    </InnerGroup>
    {pseudo ? null : (
      <>
        <InnerGroup>
          <Input disabled {...args} />
          <Input disabled value="Value" {...args} />
        </InnerGroup>
        <InnerGroup>
          <Input multiline rows={3} disabled {...args} />
          <Input multiline rows={3} disabled value="Value" {...args} />
        </InnerGroup>
      </>
    )}
  </OuterGroup>
);

export const States: Story = StatesTemplate.bind({});

export const StatesFocus: Story = StatesTemplate.bind({});
StatesFocus.args = { pseudo: true };
StatesFocus.parameters = { pseudo: { focusVisible: true } };

const AdornmentsTemplate = ({ pseudo, ...args }) => (
  <OuterGroup>
    <InnerGroup>
      <Input {...args} />
      <Input value="Value" {...args} />
    </InnerGroup>
    <InnerGroup>
      <Input multiline rows={3} {...args} />
      <Input multiline rows={3} value="Value" {...args} />
    </InnerGroup>
  </OuterGroup>
);

export const StartAdornment: Story = AdornmentsTemplate.bind({});
StartAdornment.args = {
  startAdornment: 'GearDuotone',
};

export const EndAdornment: Story = AdornmentsTemplate.bind({});
EndAdornment.args = {
  endAdornment: 'QuestionDuotone',
};

export const Changelog: Story = ChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.11.0',
      versionDate: '2021-08-21',
      changes: ['Added styling for `startAdornment` and `endAdornment` props.'],
    },
    {
      version: 'vHistory',
      versionDate: '...',
      changes: ['missing'],
    },
  ],
};
