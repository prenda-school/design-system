import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TextField, styled, MenuItem, InputAdornment } from '../src';
import { GearDuotone, QuestionDuotone } from '@prenda/spark-icons';
import { ChangelogTemplate } from './changelog-template';

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
    startAdornment: { control: 'select', options: [undefined, 'GearDuotone'] },
    endAdornment: {
      control: 'select',
      options: [undefined, 'QuestionDuotone'],
    },
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text',
    startAdornment: undefined,
    endAdornment: undefined,
  },
} as Meta;

const Template: Story = ({ startAdornment, endAdornment, ...args }) => (
  <TextField
    InputProps={{
      startAdornment: startAdornment ? (
        <InputAdornment position="start">
          <GearDuotone />
        </InputAdornment>
      ) : undefined,
      endAdornment: endAdornment ? (
        <InputAdornment position="end">
          <QuestionDuotone />
        </InputAdornment>
      ) : undefined,
    }}
    {...args}
  />
);

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

const AdornmentsTemplate: Story = ({ pseudo, ...args }) => (
  <OuterGroup>
    <InnerGroup>
      <TextField {...args} />
      <TextField value="Value" {...args} />
    </InnerGroup>
    <InnerGroup>
      <TextField multiline rows={3} {...args} />
      <TextField multiline rows={3} value="Value" {...args} />
    </InnerGroup>
    {args.InputProps?.endAdornment ? null : (
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
    )}
  </OuterGroup>
);

export const StartAdornment = AdornmentsTemplate.bind({});
StartAdornment.args = {
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <GearDuotone />
      </InputAdornment>
    ),
  },
};

export const EndAdornment = AdornmentsTemplate.bind({});
EndAdornment.args = {
  InputProps: {
    endAdornment: (
      <InputAdornment position="end">
        <QuestionDuotone />
      </InputAdornment>
    ),
  },
};

const TextFieldChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = TextFieldChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.11.0',
      versionDate: '2021-08-21',
      changes: ['See Input'],
    },
    {
      version: 'vHistory',
      versionDate: '...',
      changes: ['missing'],
    },
  ],
};
