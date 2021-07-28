import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TextField, styled, MenuItem } from '../src';

export default {
  title: 'prenda-spark/TextField',
  component: TextField,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    defaultValue: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'boolean' },
    success: { control: 'boolean' },
    disabled: { control: 'boolean' },
    select: { control: 'boolean' },
    multiline: { control: 'boolean' },
    rows: { control: 'number' },
    rowsMax: { control: 'number' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text',
  },
} as Meta;

const Template: Story = (args) => <TextField {...args} />;

export const Configurable = Template.bind({});

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
      <TextField {...args} />
      <TextField value="Value" {...args} />
    </InnerGroup>
    <InnerGroup>
      <TextField multiline rows={3} {...args} />
      <TextField multiline rows={3} value="Value" {...args} />
    </InnerGroup>
    <InnerGroup>
      <TextField select value="" {...args}>
        <MenuItem value="" disabled>
          Placeholder
        </MenuItem>
        <MenuItem value="value">Option</MenuItem>
        <MenuItem value="valueB">Option B</MenuItem>
        <MenuItem value="valueC">Option C</MenuItem>
      </TextField>
      <TextField select value="value" {...args}>
        <MenuItem value="" disabled>
          Placeholder
        </MenuItem>
        <MenuItem value="value">Option</MenuItem>
        <MenuItem value="valueB">Option B</MenuItem>
        <MenuItem value="valueC">Option C</MenuItem>
      </TextField>
    </InnerGroup>
    <InnerGroup>
      <TextField className="Spark-success" {...args} />
      <TextField className="Spark-success" value="Value" {...args} />
    </InnerGroup>
    <InnerGroup>
      <TextField multiline rows={3} className="Spark-success" {...args} />
      <TextField
        multiline
        rows={3}
        className="Spark-success"
        value="Value"
        {...args}
      />
    </InnerGroup>
    <InnerGroup>
      <TextField select value="" className="Spark-success" {...args}>
        <MenuItem value="" disabled>
          Placeholder
        </MenuItem>
        <MenuItem value="value">Option</MenuItem>
        <MenuItem value="valueB">Option B</MenuItem>
        <MenuItem value="valueC">Option C</MenuItem>
      </TextField>
      <TextField select value="value" className="Spark-success" {...args}>
        <MenuItem value="" disabled>
          Placeholder
        </MenuItem>
        <MenuItem value="value">Option</MenuItem>
        <MenuItem value="valueB">Option B</MenuItem>
        <MenuItem value="valueC">Option C</MenuItem>
      </TextField>
    </InnerGroup>
    <InnerGroup>
      <TextField error {...args} />
      <TextField error value="Value" {...args} />
    </InnerGroup>
    <InnerGroup>
      <TextField multiline rows={3} error {...args} />
      <TextField multiline rows={3} error value="Value" {...args} />
    </InnerGroup>
    <InnerGroup>
      <TextField select value="" error {...args}>
        <MenuItem value="" disabled>
          Placeholder
        </MenuItem>
        <MenuItem value="value">Option</MenuItem>
        <MenuItem value="valueB">Option B</MenuItem>
        <MenuItem value="valueC">Option C</MenuItem>
      </TextField>
      <TextField select value="value" error {...args}>
        <MenuItem value="" disabled>
          Placeholder
        </MenuItem>
        <MenuItem value="value">Option</MenuItem>
        <MenuItem value="valueB">Option B</MenuItem>
        <MenuItem value="valueC">Option C</MenuItem>
      </TextField>
    </InnerGroup>
    {pseudo ? null : (
      <>
        <InnerGroup>
          <TextField disabled {...args} />
          <TextField disabled value="Value" {...args} />
        </InnerGroup>
        <InnerGroup>
          <TextField multiline rows={3} disabled {...args} />
          <TextField multiline rows={3} disabled value="Value" {...args} />
        </InnerGroup>
        <InnerGroup>
          <TextField select value="" disabled {...args}>
            <MenuItem value="" disabled>
              Placeholder
            </MenuItem>
            <MenuItem value="value">Option</MenuItem>
            <MenuItem value="valueB">Option B</MenuItem>
            <MenuItem value="valueC">Option C</MenuItem>
          </TextField>
          <TextField select value="value" disabled {...args}>
            <MenuItem value="" disabled>
              Placeholder
            </MenuItem>
            <MenuItem value="value">Option</MenuItem>
            <MenuItem value="valueB">Option B</MenuItem>
            <MenuItem value="valueC">Option C</MenuItem>
          </TextField>
        </InnerGroup>
      </>
    )}
  </OuterGroup>
);

export const States = StatesTemplate.bind({});

export const StatesFocus = StatesTemplate.bind({});
StatesFocus.args = { pseudo: true };
StatesFocus.parameters = { pseudo: { focus: true } };
