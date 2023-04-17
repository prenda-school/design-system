import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { TooltipProps } from '..';
import { IconButton, Tooltip, Typography } from '..';
import { Plus } from '../../../stories';
import type { DecoratorFn } from '@storybook/react';

export const _retyped = Tooltip as typeof Tooltip;

const pad: DecoratorFn = (Story, context) => (
  <div style={{ padding: '80px 120px' }}>
    <Story {...context} />
  </div>
);

export default {
  title: '@ps/Tooltip',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [pad],
  parameters: {
    chromatic: { delay: 3000 },
  },
  args: {
    title: 'Title',
  },
} as Meta;

const Template = (args) => (
  <Tooltip {...args}>
    <IconButton variant="stroked" size="small">
      <Plus />
    </IconButton>
  </Tooltip>
);

type Story = DefaultStory<TooltipProps>;

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
      <Typography color="inherit">Paragraph one.</Typography>
      <Typography color="inherit">Paragraph two.</Typography>
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
