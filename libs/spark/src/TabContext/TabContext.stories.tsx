import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Box from '../Box';
import Tab from '../Tab';
import { default as TabContext, TabContextProps } from './TabContext';
import TabList from '../TabList';
import TabPanel from '../TabPanel';
import Typography from '../Typography';
import withStyles from '../withStyles';
import {
  ChangelogTemplate,
  DocumentationTemplate,
} from '../../stories/templates';

export const TypedTabContext = (props: TabContextProps) => (
  <TabContext {...props} />
);

export default {
  title: 'Packages/@ps/TabContext',
  component: TypedTabContext,
  excludeStories: ['TypedTabContext'],
  // Doesn't pick up any props
  argTypes: {
    'aria-label': { control: 'text' },
    onChange: { actions: 'changed' },
    value: {
      control: 'select',
      options: ['value-1', 'value-2', 'value-3', 'value-4'],
    },
  },
  args: {
    'aria-label': 'tabs story',
    value: 'value-1',
  },
} as Meta;

const CodeSnippet = withStyles({
  root: { display: 'inline' },
})((props) => <Typography variant="code-md" {...props} />);

const Template: Story = (args) => {
  const [value, setValue] = React.useState(args.value);

  return (
    <>
      <TabContext value={value}>
        <TabList {...args} onChange={(event, newValue) => setValue(newValue)}>
          <Tab value="value-1" label="Label" />
          <Tab value="value-2" label="Label" />
          <Tab value="value-3" label="Label" />
          <Tab value="value-4" label="Label" />
        </TabList>
        <TabPanel value="value-1">
          <Box pt={1}>Panel 1</Box>
        </TabPanel>
        <TabPanel value="value-2">
          <Box pt={1}>Panel 2</Box>
        </TabPanel>
        <TabPanel value="value-3">
          <Box pt={1}>Panel 3</Box>
        </TabPanel>
        <TabPanel value="value-4">
          <Box pt={1}>Panel 4</Box>
        </TabPanel>
      </TabContext>

      <Box mt={4}>
        <Typography component="span" variant="paragraph-lg">
          <strong>Note:</strong> It is <em>highly</em> recommended to use{' '}
          <CodeSnippet>{'<TabList>'}</CodeSnippet> (with{' '}
          <CodeSnippet>{'<TabContext>'}</CodeSnippet> and{' '}
          <CodeSnippet>{'<TabPanel>'}</CodeSnippet>) instead of{' '}
          <CodeSnippet>{'<Tabs>'}</CodeSnippet> because of the built-in
          accessibility handling.
        </Typography>
      </Box>
    </>
  );
};

export const Configurable = Template.bind({});
Configurable.decorators = [(Story) => <Story />];

const TabDocTemplate = (args) => <DocumentationTemplate {...args} />;

export const Documentation: Story = TabDocTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'TabList (Tabs)',
    href: 'https://v4.mui.com/components/tabs/#accessibility',
  },
  props: {
    extends: {
      href: 'https://v4.mui.com/api/tab-list/#props',
    },
  },
  css: {
    extends: {
      href: 'https://v4.mui.com/api/tab-list/#css',
    },
  },
};

const TabChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = TabChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.12.0',
      versionDate: '2021-09-28',
      changes: ['Feat: Initial implementation.'],
    },
  ],
};
