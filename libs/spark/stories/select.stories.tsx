import * as React from 'react';
import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { Select, styled, MenuItem } from '@material-ui/core';

export default {
  title: 'prenda-spark/Select',
  component: Select,
  parameters: { actions: { handles: ['change'] } },
  argTypes: {
    value: { control: 'text' },
    displayEmpty: { control: 'boolean' },
    error: { control: 'boolean' },
    success: { control: 'boolean' },
    disabled: { control: 'boolean' },
    open: { control: 'boolean' },
  },
  args: {
    value: '',
  },
} as Meta;

const Template: Story = ({ value: propValue, ...args }) => {
  const [value, setValue] = React.useState(propValue);

  const handleChange = (event) => setValue(event.target.value);

  return (
    <Select value={value} {...args} onChange={handleChange}>
      <MenuItem value="" disabled>
        Placeholder
      </MenuItem>
      <MenuItem value="value">Option</MenuItem>
      <MenuItem value="valueB">Option B</MenuItem>
      <MenuItem value="valueC">Option C</MenuItem>
    </Select>
  );
};

export const Configurable = Template.bind({});
Configurable.decorators = [(Story) => <Story />];

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
      <Template {...args} value="" />
      <Template {...args} value="value" />
    </InnerGroup>
    <InnerGroup>
      <Template {...args} className="Spark-success" value="" />
      <Template {...args} className="Spark-success" value="value" />
    </InnerGroup>
    <InnerGroup>
      <Template {...args} error value="" />
      <Template {...args} error value="value" />
    </InnerGroup>
    {pseudo ? null : (
      <InnerGroup>
        <Template {...args} disabled value="" />
        <Template {...args} disabled value="value" />
      </InnerGroup>
    )}
  </OuterGroup>
);

export const States = StatesTemplate.bind({});

export const StatesFocus = StatesTemplate.bind({});
StatesFocus.args = { pseudo: true };
StatesFocus.parameters = { pseudo: { focus: true } };

export const Open = Template.bind({});
Open.args = { open: true };
