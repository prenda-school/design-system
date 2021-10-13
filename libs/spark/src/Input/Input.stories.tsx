import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { GearDuotone, QuestionDuotone } from '@prenda/spark-icons';
import { default as Input, InputProps } from './Input';
import InputAdornment from '../InputAdornment';
import styled from '../styled';
import { ChangelogTemplate } from '../../stories/templates';

export const TypedInput = (props: InputProps) => <Input {...props} />;

export default {
  title: 'PDS/@ps/Input',
  component: TypedInput,
  excludeStories: ['TypedInput'],
  // Misses all props
  argTypes: {
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    success: { control: 'boolean' },
    disabled: { control: 'boolean' },
    multiline: { control: 'boolean' },
    rows: { control: 'number' },
    startAdornment: { control: 'select', options: [undefined, 'GearDuotone'] },
    endAdornment: {
      control: 'select',
      options: [undefined, 'QuestionDuotone'],
    },
  },
  args: {
    placeholder: 'Placeholder',
    startAdornment: undefined,
    endAdornment: undefined,
  },
} as Meta;

const Template: Story = ({ startAdornment, endAdornment, ...args }) => (
  <Input
    startAdornment={
      startAdornment ? (
        <InputAdornment position="start">
          <GearDuotone />
        </InputAdornment>
      ) : undefined
    }
    endAdornment={
      endAdornment ? (
        <InputAdornment position="end">
          <QuestionDuotone />
        </InputAdornment>
      ) : undefined
    }
    {...args}
  />
);

export const ConfigurableInput = Template.bind({});

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

const StatesTemplate: Story = ({ pseudo, ...args }) => (
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

export const States = StatesTemplate.bind({});

export const StatesFocus = StatesTemplate.bind({});
StatesFocus.args = { pseudo: true };
StatesFocus.parameters = { pseudo: { focus: true } };

const AdornmentsTemplate: Story = ({ pseudo, ...args }) => (
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

export const StartAdornment = AdornmentsTemplate.bind({});
StartAdornment.args = {
  startAdornment: (
    <InputAdornment position="start">
      <GearDuotone />
    </InputAdornment>
  ),
};

export const EndAdornment = AdornmentsTemplate.bind({});
EndAdornment.args = {
  endAdornment: (
    <InputAdornment position="end">
      <QuestionDuotone />
    </InputAdornment>
  ),
};

const InputChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = InputChangelogTemplate.bind({});
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
