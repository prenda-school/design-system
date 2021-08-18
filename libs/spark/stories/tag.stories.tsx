import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Tag, Box, Typography, withStyles } from '../src';
import { DocTemplate } from './documentation-template';
import { ChangelogTemplate } from './changelog-template';

export default {
  title: 'prenda-spark/Tag',
  component: Tag,
  argTypes: {
    variant: {
      control: 'select',
      options: ['subtle', 'bold'],
    },
    color: {
      control: 'select',
      options: [
        'default',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
      ],
    },
    disabled: { control: 'boolean' },
    onDelete: { control: 'select', options: ['undefined', 'function() {}'] },
  },
  args: {
    variant: 'subtle',
    color: 'default',
    disabled: false,
    onDelete: undefined,
  },
} as Meta;

const handleDelete = () => console.log('delete');

const Template = ({ onDelete, args }) => (
  <Box p={1}>
    <Tag
      label="Label"
      onDelete={onDelete ? handleDelete : undefined}
      {...args}
    />
  </Box>
);

export const Configurable: Story = Template.bind({});

const GridContainer = (props) => (
  <Box
    m={1}
    display="grid"
    gridTemplateColumns="repeat(3, 85px)"
    gridGap="16px"
    alignItems="center"
    justifyItems="center"
    {...props}
  />
);

const ColorAndVariantTemplate = (args) => (
  <GridContainer>
    <span>Color / Variant (Delete)</span>
    <span>subtle</span>
    <span>bold</span>
    <span>default</span>
    <span>
      <Tag {...args} label="Label" {...args} />
    </span>
    <span>
      <Tag {...args} label="Label" variant="bold" />
    </span>
    <span>red</span>
    <span>
      <Tag {...args} label="Label" color="red" />
    </span>
    <span>
      <Tag {...args} label="Label" color="red" variant="bold" />
    </span>
    <span>orange</span>
    <span>
      <Tag {...args} label="Label" color="orange" />
    </span>
    <span>
      <Tag {...args} label="Label" color="orange" variant="bold" />
    </span>
    <span>yellow</span>
    <span>
      <Tag {...args} label="Label" color="yellow" />
    </span>
    <span>
      <Tag {...args} label="Label" color="yellow" variant="bold" />
    </span>
    <span>green</span>
    <span>
      <Tag {...args} label="Label" color="green" />
    </span>
    <span>
      <Tag {...args} label="Label" color="green" variant="bold" />
    </span>
    <span>blue</span>
    <span>
      <Tag {...args} label="Label" color="blue" />
    </span>
    <span>
      <Tag {...args} label="Label" color="blue" variant="bold" />
    </span>
    <span>purple</span>
    <span>
      <Tag {...args} label="Label" color="purple" />
    </span>
    <span>
      <Tag {...args} label="Label" color="purple" variant="bold" />
    </span>
  </GridContainer>
);

export const ColorAndVariant: Story = ColorAndVariantTemplate.bind({});

export const ColorVariantDelete: Story = ColorAndVariantTemplate.bind({});
ColorVariantDelete.args = { onDelete: handleDelete };

export const ColorVariantDeleteHover: Story = ColorAndVariantTemplate.bind({});
ColorVariantDeleteHover.args = { onDelete: handleDelete };
ColorVariantDeleteHover.parameters = { pseudo: { hover: true } };

export const ColorVariantDeleteFocus: Story = ColorAndVariantTemplate.bind({});
ColorVariantDeleteFocus.args = { onDelete: handleDelete };
ColorVariantDeleteFocus.parameters = { pseudo: { focus: true } };

export const ColorVariantDeleteDisabled: Story = ColorAndVariantTemplate.bind(
  {}
);
ColorVariantDeleteDisabled.args = { onDelete: handleDelete, disabled: true };

const AvatarDocTemplate = (args) => <DocTemplate {...args} />;

export const Documentation: Story = AvatarDocTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'Avatar',
    href: 'https://material-ui.com/components/avatars/#avatar',
  },
  props: {
    extends: {
      href: 'https://material-ui.com/api/avatar/#props',
    },
    omits: [
      {
        name: 'color',
        defaultValue: "'default'",
      },
      {
        name: 'size',
        defaultValue: "'medium'",
      },
      {
        name: 'variant',
        defaultValue: "'default'",
      },
    ],
    adds: [
      {
        name: 'color',
        type:
          "'default' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple'",
        defaultValue: "'default'",
      },
      {
        name: 'variant',
        type: "'subtle' | 'bold'",
        defaultValue: "'subtle'",
      },
    ],
  },
  css: {
    extends: {
      href: 'https://material-ui.com/api/chip/#css',
    },
    adds: [
      'colorRed',
      'colorOrange',
      'colorYellow',
      'colorGreen',
      'colorBlue',
      'colorPurple',
      'bold',
      'boldColorRed',
      'boldColorOrange',
      'boldColorYellow',
      'boldColorGreen',
      'boldColorBlue',
      'boldColorPurple',
      'labelColorRed',
      'labelColorOrange',
      'labelColorYellow',
      'labelColorGreen',
      'labelColorBlue',
      'labelColorPurple',
      'labelBold',
      'labelBoldColorRed',
      'labelBoldColorOrange',
      'labelBoldColorYellow',
      'labelBoldColorGreen',
      'labelBoldColorBlue',
      'labelBoldColorPurple',
      'deleteIconColorRed',
      'deleteIconColorOrange',
      'deleteIconColorYellow',
      'deleteIconColorGreen',
      'deleteIconColorBlue',
      'deleteIconColorPurple',
      'deleteIconBold',
      'deleteIconBoldColorRed',
      'deleteIconBoldColorOrange',
      'deleteIconBoldColorYellow',
      'deleteIconBoldColorGreen',
      'deleteIconBoldColorBlue',
      'deleteIconBoldColorPurple',
    ],
  },
};

const AvatarChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = AvatarChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'vNext',
      versionDate: 'yyyy-mm-dd',
      changes: ['Initial implementation'],
    },
  ],
};