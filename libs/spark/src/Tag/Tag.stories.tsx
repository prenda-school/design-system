import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Box from '../Box';
import Tag from './Tag';
import {
  DocumentationTemplate,
  ChangelogTemplate,
} from '../../stories/templates';

export const TypedTag = Tag;

const handleDelete = () => {
  return;
};

export default {
  title: '@ps/Tag',
  component: TypedTag,
  excludeStories: ['TypedTag'],
  parameters: {
    actions: {
      // override default actions regex
      //  deleteIcon rendering is based on onDelete being supplied, so substitute
      //  custom argType control below.
      argTypesRegex: '^on(?!Delete).*',
    },
  },
  argTypes: {
    onDelete: { control: 'select', options: [undefined, handleDelete] },
  },
  args: {
    onDelete: undefined,
  },
} as Meta;

const Template = (args) => (
  <Box p={1}>
    <Tag
      label="Label"
      // onDelete={(() => {
      //   console.log(onDelete);
      //   return onDelete ? handleDelete : undefined;
      // })()}
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
    <span>Color / Variant</span>
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

const AvatarDocTemplate = (args) => <DocumentationTemplate {...args} />;

export const Documentation: Story = AvatarDocTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'Chip',
    href: 'https://v4.mui.com/components/chips/#chip',
  },
  props: {
    extends: {
      href: 'https://v4.mui.com/api/chip/#props',
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
      href: 'https://v4.mui.com/api/chip/#css',
    },
    adds: [
      'colorRed',
      'colorOrange',
      'colorYellow',
      'colorGreen',
      'colorBlue',
      'colorPurple',
      'bold',
    ],
  },
};

const AvatarChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = AvatarChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.12.0',
      versionDate: '2021-09-28',
      changes: ['Fix: custom class names not being global.'],
    },
    {
      version: 'v0.11.0',
      versionDate: '2021-08-21',
      changes: ['Initial implementation.'],
    },
  ],
};
