import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Link, LinkProps } from '..';
import { sparkThemeProvider } from '../../stories';

// underlying props don't have descriptions
export const SbLink = (props: LinkProps) => <Link {...props} />;

export default {
  title: '@ps/Link',
  component: SbLink,
  excludeStories: ['SbLink'],
  args: {
    href: '#',
  },
  decorators: [sparkThemeProvider],
} as Meta;

const Template = (args) => <Link {...args}>Text</Link>;

export const Configurable: Story = Template.bind({});

export const Hover: Story = Template.bind({});
Hover.parameters = { pseudo: { visited: false, hover: true } };
Hover.storyName = ':hover';

export const FocusVisible: Story = Template.bind({});
FocusVisible.parameters = { pseudo: { visited: false, focusVisible: true } };
FocusVisible.storyName = ':focus-visible';

export const Visited: Story = Template.bind({});
Visited.parameters = { pseudo: { visited: true } };
Visited.storyName = ':visited';

export const VisitedHover: Story = Template.bind({});
VisitedHover.parameters = { pseudo: { visited: true, hover: true } };
VisitedHover.storyName = ':visited :hover';

export const VisitedFocusVisible: Story = Template.bind({});
VisitedFocusVisible.parameters = {
  pseudo: { visited: true, focusVisible: true },
};
VisitedFocusVisible.storyName = ':visited :focus-visible';

export const Standalone: Story = Template.bind({});
Standalone.args = { standalone: true };
Standalone.storyName = 'standalone';

export const StandaloneHover: Story = Template.bind({});
StandaloneHover.args = { standalone: true };
StandaloneHover.parameters = { pseudo: { visited: false, hover: true } };
StandaloneHover.storyName = 'standalone :hover';

export const StandaloneFocusVisible: Story = Template.bind({});
StandaloneFocusVisible.args = { standalone: true };
StandaloneFocusVisible.parameters = {
  pseudo: { visited: false, focusVisible: true },
};
StandaloneFocusVisible.storyName = 'standalone :focus-visible';

export const StandaloneVisited: Story = Template.bind({});
StandaloneVisited.args = { standalone: true };
StandaloneVisited.parameters = { pseudo: { visited: true } };
StandaloneVisited.storyName = 'standalone :visited';

export const StandaloneVisitedHover: Story = Template.bind({});
StandaloneVisitedHover.args = { standalone: true };
StandaloneVisitedHover.parameters = { pseudo: { visited: true, hover: true } };
StandaloneVisitedHover.storyName = 'standalone :visited :hover';

export const StandaloneVisitedFocusVisible: Story = Template.bind({});
StandaloneVisitedFocusVisible.args = { standalone: true };
StandaloneVisitedFocusVisible.parameters = {
  pseudo: { visited: true, focusVisible: true },
};
StandaloneVisitedFocusVisible.storyName = 'standalone :visited :focus-visible';
