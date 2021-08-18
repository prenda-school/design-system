import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Select, styled, MenuItem, InputAdornment } from '../src';
import { GearDuotone } from '@prenda/spark-icons';
import { ChangelogTemplate } from './changelog-template';

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
    startAdornment: { control: 'select', options: [undefined, 'GearDuotone'] },
  },
  args: {
    value: '',
    startAdornment: undefined,
  },
} as Meta;

const Template: Story = ({ value: propValue, startAdornment, ...args }) => {
  const [value, setValue] = React.useState(propValue);

  const handleChange = (event) => setValue(event.target.value);

  return (
    <Select
      startAdornment={
        startAdornment ? (
          <InputAdornment position="start">
            <GearDuotone />
          </InputAdornment>
        ) : undefined
      }
      value={value}
      {...args}
      onChange={handleChange}
    >
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

export const Open = Template.bind({});
Open.decorators = [(Story) => <Story />];
Open.args = { open: true };

const AdornmentsTemplate: Story = ({ pseudo, ...args }) => (
  <OuterGroup>
    <InnerGroup>
      <Template {...args} value="" />
      <Template {...args} value="value" />
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

const SelectChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = SelectChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'vNext',
      versionDate: 'yyyy-mm-dd',
      changes: ['See Input'],
    },
    {
      version: 'vHistory',
      versionDate: '...',
      changes: ['missing'],
    },
  ],
};