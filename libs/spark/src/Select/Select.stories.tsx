import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { GearDuotone } from '@prenda/spark-icons';
import { InputAdornment, MenuItem, Select, SelectProps, styled } from '..';
import { ChangelogTemplate } from '../../stories/templates';

interface SbSelectProps extends SelectProps {
  /**
   * **Note**: the custom `success` styling is delivered through a class name instead of a prop.
   */
  className?: SelectProps['className'];
  disabled?: SelectProps['disabled'];
  displayEmpty?: SelectProps['displayEmpty'];
  error?: SelectProps['error'];
  open?: SelectProps['open'];
  startAdornment?: SelectProps['startAdornment'];
  success?: boolean;
  value?: SelectProps['value'];
}

export const SbSelect = (props: SbSelectProps) => <Select {...props} />;

export default {
  title: '@ps/Select',
  component: SbSelect,
  excludeStories: ['SbSelect'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  // Doesn't pick up props
  argTypes: {
    className: { control: 'select', options: [undefined, 'Spark-success'] },
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
  },
  args: {
    value: '',
  },
} as Meta;

const Template = ({ value: propValue, ...args }) => {
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

export const Configurable: Story = Template.bind({});
Configurable.decorators = [(Story) => <Story />];

// export const Open: Story = Template.bind({});
// Open.decorators = [(Story) => <Story />];
// Open.args = { open: true };

const AdornmentsTemplate = ({ pseudo, ...args }) => (
  <OuterGroup>
    <InnerGroup>
      <Template {...args} value="" />
      <Template {...args} value="value" />
    </InnerGroup>
  </OuterGroup>
);

export const StartAdornment: Story = AdornmentsTemplate.bind({});
StartAdornment.args = {
  startAdornment: 'GearDuotone',
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

const StatesTemplate = ({ pseudo, ...args }) => (
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

export const States: Story = StatesTemplate.bind({});

export const StatesFocus: Story = StatesTemplate.bind({});
StatesFocus.args = { pseudo: true };
StatesFocus.parameters = { pseudo: { focus: true } };

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
