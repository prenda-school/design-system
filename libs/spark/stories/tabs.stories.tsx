import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  Box,
  Tab,
  TabContext,
  TabList,
  TabPanel,
  Typography,
  withStyles,
} from '../src';
import { ChangelogTemplate } from './changelog-template';
import { DocTemplate } from './documentation-template';

export default {
  title: 'prenda-spark/TabList',
  component: TabList,
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
        <TabPanel value="value-1">Panel 1</TabPanel>
        <TabPanel value="value-2">Panel 2</TabPanel>
        <TabPanel value="value-3">Panel 3</TabPanel>
        <TabPanel value="value-4">Panel 4</TabPanel>
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

const TabDocTemplate = (args) => <DocTemplate {...args} />;

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
      version: 'vNext',
      versionDate: 'yyyy-mm-dd',
      changes: ['Feat: Initial implementation.'],
    },
  ],
};
