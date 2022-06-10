import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { GearDuotone, QuestionDuotone } from '@prenda/spark-icons';
import {
  InputAdornment,
  MenuItem,
  TextField,
  StandardTextFieldProps,
  styled,
} from '..';
import { ChangelogTemplate } from '../../stories/templates';
import { sparkThemeProvider } from '../../stories';

interface SbTextFieldProps extends StandardTextFieldProps {
  /**
   * **Note**: the custom `success` styling is delivered through a class name instead of a prop.
   */
  className?: StandardTextFieldProps['className'];
  defaultValue?: StandardTextFieldProps['defaultValue'];
  disabled?: StandardTextFieldProps['disabled'];
  error?: StandardTextFieldProps['error'];
  fullWidth?: StandardTextFieldProps['fullWidth'];
  helperText?: StandardTextFieldProps['helperText'];
  label?: StandardTextFieldProps['label'];
  multiline?: StandardTextFieldProps['multiline'];
  placeholder?: StandardTextFieldProps['placeholder'];
  maxRows?: StandardTextFieldProps['maxRows'];
  minRows?: StandardTextFieldProps['minRows'];
  select?: StandardTextFieldProps['select'];
  value?: StandardTextFieldProps['value'];
  InputProps?: StandardTextFieldProps['InputProps'];
  /**
   * **[Storybook-only:** broken out from `props.InputProps`.**]**
   */
  'sb_InputProps.endAdornment'?: StandardTextFieldProps['InputProps']['endAdornment'];
  /**
   * **[Storybook-only:** broken out from `props.InputProps`.**]**
   */
  'sb_InputProps.startAdornment'?: StandardTextFieldProps['InputProps']['startAdornment'];
}

export const SbTextField = ({
  'sb_InputProps.endAdornment': endAdornment,
  'sb_InputProps.startAdornment': startAdornment,
  ...props
}: SbTextFieldProps) => (
  <TextField InputProps={{ endAdornment, startAdornment }} {...props} />
);

export default {
  title: '@ps/TextField',
  component: SbTextField,
  excludeStories: ['SbTextField'],
  // Doesn't pick up most props
  argTypes: {
    className: { control: 'select', options: [undefined, 'Spark-success'] },
    'sb_InputProps.endAdornment': {
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
    'sb_InputProps.startAdornment': {
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
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text',
  },
  decorators: [sparkThemeProvider],
} as Meta;

const Template = ({
  'sb_InputProps.endAdornment': endAdornment,
  'sb_InputProps.startAdornment': startAdornment,
  ...args
}) => (
  <TextField
    InputProps={{
      startAdornment,
      endAdornment,
    }}
    {...args}
  />
);

export const Configurable: Story = Template.bind({});

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

const StatesTemplate = ({
  pseudo,
  'sb_InputProps.endAdornment': endAdornment,
  'sb_InputProps.startAdornment': startAdornment,
  ...args
}) => (
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

export const States: Story = StatesTemplate.bind({});

export const StatesFocus: Story = StatesTemplate.bind({});
StatesFocus.args = { pseudo: true };
StatesFocus.parameters = { pseudo: { focusVisible: true } };

const AdornmentsTemplate = ({
  pseudo,
  'sb_InputProps.endAdornment': endAdornment,
  'sb_InputProps.startAdornment': startAdornment,
  ...args
}) => (
  <OuterGroup>
    <InnerGroup>
      <TextField
        InputProps={{
          startAdornment,
          endAdornment,
        }}
        {...args}
      />
      <TextField
        value="Value"
        InputProps={{
          startAdornment,
          endAdornment,
        }}
        {...args}
      />
    </InnerGroup>
    <InnerGroup>
      <TextField
        multiline
        rows={3}
        InputProps={{
          startAdornment,
          endAdornment,
        }}
        {...args}
      />
      <TextField
        multiline
        rows={3}
        value="Value"
        InputProps={{
          startAdornment,
          endAdornment,
        }}
        {...args}
      />
    </InnerGroup>
    {endAdornment ? null : (
      <InnerGroup>
        <TextField
          select
          value=""
          InputProps={{
            startAdornment,
            endAdornment,
          }}
          {...args}
        >
          <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
          <MenuItem value="value">Option</MenuItem>
          <MenuItem value="valueB">Option B</MenuItem>
          <MenuItem value="valueC">Option C</MenuItem>
        </TextField>
        <TextField
          select
          value="value"
          InputProps={{
            startAdornment,
            endAdornment,
          }}
          {...args}
        >
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

export const StartAdornment: Story = AdornmentsTemplate.bind({});
StartAdornment.args = { 'sb_InputProps.startAdornment': 'GearDuotone' };

export const EndAdornment: Story = AdornmentsTemplate.bind({});
EndAdornment.args = { 'sb_InputProps.endAdornment': 'QuestionDuotone' };

export const Changelog: Story = ChangelogTemplate.bind({});
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
