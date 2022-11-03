import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import {
  Unstable_IconButton,
  Unstable_Tooltip,
  Unstable_TooltipProps,
  Unstable_Typography,
} from '..';
import { Plus } from '../../stories';
import { DecoratorFn } from '@storybook/react';

export const _retyped = Unstable_Tooltip as typeof Unstable_Tooltip;

const pad: DecoratorFn = (Story) => (
  <div style={{ padding: '80px 120px' }}>
    <Story />
  </div>
);

export default {
  title: '@ps/Tooltip',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [pad],
  args: {
    title: 'Title',
  },
} as Meta;

const Template = (args) => (
  <Unstable_Tooltip {...args}>
    <Unstable_IconButton variant="stroked" size="small">
      <Plus />
    </Unstable_IconButton>
  </Unstable_Tooltip>
);

type Story = DefaultStory<Unstable_TooltipProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const OpenTextOverflow: Story = Template.bind({});
OpenTextOverflow.args = {
  open: true,
  title:
    'Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.',
};
OpenTextOverflow.storyName = 'open title=(text overflow)';

export const OpenMultipleParagraphs: Story = Template.bind({});
OpenMultipleParagraphs.args = {
  open: true,
  title: (
    <>
      <Unstable_Typography color="inherit">Paragraph one.</Unstable_Typography>
      <Unstable_Typography color="inherit">Paragraph two.</Unstable_Typography>
    </>
  ),
};
OpenMultipleParagraphs.storyName = 'open title=(multiple paragraphs)';

export const OpenPlacementBottom: Story = Template.bind({});
OpenPlacementBottom.args = { open: true, placement: 'bottom' };
OpenPlacementBottom.storyName = 'open placement=bottom';

export const OpenPlacementRight: Story = Template.bind({});
OpenPlacementRight.args = { open: true, placement: 'right' };
OpenPlacementRight.storyName = 'open placement=right';

export const OpenPlacementTop: Story = Template.bind({});
OpenPlacementTop.args = { open: true, placement: 'top' };
OpenPlacementTop.storyName = 'open placement=top';

export const OpenPlacementLeft: Story = Template.bind({});
OpenPlacementLeft.args = { open: true, placement: 'left' };
OpenPlacementLeft.storyName = 'open placement=left';
