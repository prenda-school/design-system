import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { Unstable_Tag, Unstable_TagProps } from '..';
import {
  containFocusIndicator,
  Filter,
  sparkThemeProvider,
} from '../../stories';

export const _retyped = Unstable_Tag as typeof Unstable_Tag;

const emptyFn = () => {
  return;
};

export default {
  title: '@ps/Tag',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containFocusIndicator],
  parameters: {
    actions: {
      // override default actions regex
      //  deleteIcon rendering is based on onDelete being supplied, so substitute
      //  custom argType control below.
      argTypesRegex: '^on(?!Delete).*',
    },
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['undefined', '<Filter />'],
      mapping: {
        undefined: undefined,
        '<Filter />': <Filter />,
      },
    },
    onClick: {
      control: 'select',
      options: ['undefined', '(handleClick)'],
      mapping: {
        undefined: undefined,
        '(handleClick)': emptyFn,
      },
    },
    onDelete: {
      control: 'select',
      options: ['undefined', '(handleDelete)'],
      mapping: {
        undefined: undefined,
        '(handleDelete)': emptyFn,
      },
    },
  },
  args: {
    onClick: 'undefined',
    onDelete: 'undefined',
  },
} as Meta;

const Template = (args) => <Unstable_Tag {...args} />;

type Story = DefaultStory<
  Unstable_TagProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDelete: any;
  }
>;

export const Label: Story = Template.bind({});
Label.args = { label: 'Label' };
Label.storyName = 'label';

export const LabelSTP: Story = Template.bind({});
LabelSTP.args = { label: 'Label' };
LabelSTP.decorators = [sparkThemeProvider];
LabelSTP.storyName = 'label (STP)';

export const LabelDisabled: Story = Template.bind({});
LabelDisabled.args = { label: 'Label', disabled: true };
LabelDisabled.storyName = 'label disabled';

export const LabelIcon: Story = Template.bind({});
LabelIcon.args = { label: 'Label', icon: '<Filter />' };
LabelIcon.storyName = 'label icon';

export const LabelOnDelete: Story = Template.bind({});
LabelOnDelete.args = { label: 'Label', onDelete: '(handleDelete)' };
LabelOnDelete.storyName = 'label onDelete';

export const LabelOnDeleteActive: Story = Template.bind({});
LabelOnDeleteActive.args = { label: 'Label', onDelete: '(handleDelete)' };
LabelOnDeleteActive.parameters = { pseudo: { active: true } };
LabelOnDeleteActive.storyName = 'label onDelete :active';

export const LabelOnDeleteFocus: Story = Template.bind({});
LabelOnDeleteFocus.args = { label: 'Label', onDelete: '(handleDelete)' };
LabelOnDeleteFocus.parameters = { pseudo: { focus: true } };
LabelOnDeleteFocus.storyName = 'label onDelete :focus';

export const LabelOnDeleteFocusVisible: Story = Template.bind({});
LabelOnDeleteFocusVisible.args = { label: 'Label', onDelete: '(handleDelete)' };
LabelOnDeleteFocusVisible.parameters = { pseudo: { focusVisible: true } };
LabelOnDeleteFocusVisible.storyName = 'label onDelete :focus-visible';

export const LabelOnDeleteHover: Story = Template.bind({});
LabelOnDeleteHover.args = { label: 'Label', onDelete: '(handleDelete)' };
LabelOnDeleteHover.parameters = { pseudo: { hover: true } };
LabelOnDeleteHover.storyName = 'label onDelete :hover';

const colors: Array<Unstable_TagProps['color']> = [
  'neutral',
  'red',
  'yellow',
  'teal',
  'green',
  'blue',
  'purple',
];

const ColorBySizeByVariantTemplate = ({ color, size, variant, ...other }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <div style={{ display: 'flex', gap: '8px' }}>
      {colors.map((color) => (
        <Unstable_Tag
          color={color}
          size="medium"
          variant="bold"
          {...other}
          key={color}
        />
      ))}
    </div>
    <div style={{ display: 'flex', gap: '8px' }}>
      {colors.map((color) => (
        <Unstable_Tag
          color={color}
          size="small"
          variant="bold"
          {...other}
          key={color}
        />
      ))}
    </div>
    <div style={{ display: 'flex', gap: '8px' }}>
      {colors.map((color) => (
        <Unstable_Tag
          color={color}
          size="medium"
          variant="subtle"
          {...other}
          key={color}
        />
      ))}
    </div>
    <div style={{ display: 'flex', gap: '8px' }}>
      {colors.map((color) => (
        <Unstable_Tag
          color={color}
          size="small"
          variant="subtle"
          {...other}
          key={color}
        />
      ))}
    </div>
  </div>
);

export const Label_CxSxV: Story = ColorBySizeByVariantTemplate.bind({});
Label_CxSxV.args = { label: 'Label' };
Label_CxSxV.storyName = 'label color ⨯ size ⨯ variant';

export const Label_CxSxV_onDelete: Story = ColorBySizeByVariantTemplate.bind(
  {}
);
Label_CxSxV_onDelete.args = { label: 'Label', onDelete: '(handleDelete)' };
Label_CxSxV_onDelete.storyName = 'label color ⨯ size ⨯ variant onDelete';

export const Label_CxSxV_onDeleteActive: Story =
  ColorBySizeByVariantTemplate.bind({});
Label_CxSxV_onDeleteActive.args = {
  label: 'Label',
  onDelete: '(handleDelete)',
};
Label_CxSxV_onDeleteActive.parameters = { pseudo: { active: true } };
Label_CxSxV_onDeleteActive.storyName =
  'label color ⨯ size ⨯ variant onDelete :active';

export const Label_CxSxV_onDeleteHover: Story =
  ColorBySizeByVariantTemplate.bind({});
Label_CxSxV_onDeleteHover.args = { label: 'Label', onDelete: '(handleDelete)' };
Label_CxSxV_onDeleteHover.parameters = { pseudo: { hover: true } };
Label_CxSxV_onDeleteHover.storyName =
  'label color ⨯ size ⨯ variant onDelete :hover';

export const Label_CxSxV_onDeleteFocus: Story =
  ColorBySizeByVariantTemplate.bind({});
Label_CxSxV_onDeleteFocus.args = { label: 'Label', onDelete: '(handleDelete)' };
Label_CxSxV_onDeleteFocus.parameters = { pseudo: { focus: true } };
Label_CxSxV_onDeleteFocus.storyName =
  'label color ⨯ size ⨯ variant onDelete :focus';

export const Label_CxSxV_onDeleteFocusVisible: Story =
  ColorBySizeByVariantTemplate.bind({});
Label_CxSxV_onDeleteFocusVisible.args = {
  label: 'Label',
  onDelete: '(handleDelete)',
};
Label_CxSxV_onDeleteFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};
Label_CxSxV_onDeleteFocusVisible.storyName =
  'label color ⨯ size ⨯ variant onDelete :focus-visible';

export const Label_CxSxV_onClick: Story = ColorBySizeByVariantTemplate.bind({});
Label_CxSxV_onClick.args = { label: 'Label', onClick: '(handleClick)' };
Label_CxSxV_onClick.storyName = 'label color ⨯ size ⨯ variant onClick';

export const Label_CxSxV_onClickActive: Story =
  ColorBySizeByVariantTemplate.bind({});
Label_CxSxV_onClickActive.args = { label: 'Label', onClick: '(handleClick)' };
Label_CxSxV_onClickActive.parameters = { pseudo: { active: true } };
Label_CxSxV_onClickActive.storyName =
  'label color ⨯ size ⨯ variant onClick :active';

export const Label_CxSxV_onClickHover: Story =
  ColorBySizeByVariantTemplate.bind({});
Label_CxSxV_onClickHover.args = { label: 'Label', onClick: '(handleClick)' };
Label_CxSxV_onClickHover.parameters = { pseudo: { hover: true } };
Label_CxSxV_onClickHover.storyName =
  'label color ⨯ size ⨯ variant onClick :hover';

export const Label_CxSxV_onClickFocus: Story =
  ColorBySizeByVariantTemplate.bind({});
Label_CxSxV_onClickFocus.args = { label: 'Label', onClick: '(handleClick)' };
Label_CxSxV_onClickFocus.parameters = { pseudo: { focus: true } };
Label_CxSxV_onClickFocus.storyName =
  'label color ⨯ size ⨯ variant onClick :focus';

export const Label_CxSxV_onClickFocusVisible: Story =
  ColorBySizeByVariantTemplate.bind({});
Label_CxSxV_onClickFocusVisible.args = {
  label: 'Label',
  onClick: '(handleClick)',
};
Label_CxSxV_onClickFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};
Label_CxSxV_onClickFocusVisible.storyName =
  'label color ⨯ size ⨯ variant onClick :focus-visible';
