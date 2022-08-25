import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Avatar, AvatarProps } from '..';
import { User } from '../../stories';

export default {
  title: '@ps/Avatar',
  component: Avatar,
  argTypes: {
    children: {
      control: 'select',
      options: [undefined, '(Initials)', '(Icon)'],
      mapping: {
        undefined: undefined,
        '(Initials)': <>A</>,
        '(Icon)': <User />,
      },
    },
    src: {
      control: 'select',
      options: [
        undefined,
        '(Guide 1)',
        '(Guide 2)',
        '(Guide 3)',
        '(Boy 1)',
        '(Boy 2)',
        '(Boy 3)',
        '(Girl 1)',
        '(Girl 2)',
        '(Girl 3)',
      ],
      mapping: {
        undefined: undefined,
        '(Guide 1)': '/img/guide-1.png',
        '(Guide 2)': '/img/guide-2.png',
        '(Guide 3)': '/img/guide-3.png',
        '(Boy 1)': '/img/student-boy-1.png',
        '(Boy 2)': '/img/student-boy-2.png',
        '(Boy 3)': '/img/student-boy-3.png',
        '(Girl 1)': '/img/student-girl-1.png',
        '(Girl 2)': '/img/student-girl-2.png',
        '(Girl 3)': '/img/student-girl-3.png',
      },
    },
    alt: {
      control: 'select',
      options: [undefined, '(for Guide)', '(for Boy)', '(for Girl)'],
      mapping: {
        undefined: undefined,
        '(for Guide)': 'Adult woman smiling',
        '(for Boy)': 'Child boy smiling',
        '(for Girl)': 'Child girl smiling',
      },
    },
  },
} as Meta;

const Template = (args) => <Avatar {...args} />;

export const ChildrenInitials: Story = Template.bind({});
ChildrenInitials.args = { children: '(Initials)' };
ChildrenInitials.storyName = 'children=(Initials)';

const colors: Array<AvatarProps['color']> = [
  'neutral',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'teal',
  'magenta',
];
const sizes: Array<AvatarProps['size']> = ['large', 'medium', 'small'];

const BySizeTemplate = ({ size, ...other }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    {sizes.map((size) => (
      <Avatar size={size} {...other} key={size} />
    ))}
  </div>
);

const ColorBySizeTemplate = ({ color, size, ...other }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    {sizes.map((size) => (
      <div key={size} style={{ display: 'flex', gap: '8px' }}>
        {colors.map((color) => (
          <Avatar color={color} size={size} {...other} key={color} />
        ))}
      </div>
    ))}
  </div>
);

export const ChildrenInitialsColorBySize: Story = ColorBySizeTemplate.bind({});
ChildrenInitialsColorBySize.args = { children: '(Initials)' };
ChildrenInitialsColorBySize.storyName = 'children=(Initials) color ⨯ size';

export const ChildrenIconColorBySize: Story = ColorBySizeTemplate.bind({});
ChildrenIconColorBySize.args = { children: '(Icon)' };
ChildrenIconColorBySize.storyName = 'children=(Icon) color ⨯ size';

export const SrcAltBySize: Story = BySizeTemplate.bind({});
SrcAltBySize.args = {
  children: 'undefined',
  src: '(Guide 3)',
  alt: '(for Guide)',
};
SrcAltBySize.storyName = 'src alt size';
