import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { Input, styled } from '@material-ui/core';

export default {
  title: 'prenda-spark/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    success: { control: 'boolean' },
    disabled: { control: 'boolean' },
    multiline: { control: 'boolean' },
    rows: { control: 'number' },
  },
  args: {
    placeholder: 'Placeholder',
  },
} as Meta;

const Template: Story = (args) => <Input {...args} />;
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
      <Input className={'SparkInput-success'} {...args} />
      <Input className={'SparkInput-success'} value="Value" {...args} />
    </InnerGroup>
    <InnerGroup>
      <Input multiline rows={3} className={'SparkInput-success'} {...args} />
      <Input
        multiline
        rows={3}
        className={'SparkInput-success'}
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
