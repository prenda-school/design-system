import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Box,
  Tab,
  TabContext,
  TabContextProps,
  TabList,
  TabListProps,
  TabPanel,
  Typography,
  withStyles,
} from '..';
import {
  ChangelogTemplate,
  DocumentationTemplate,
} from '../../stories/templates';

interface SbTabContextProps extends TabContextProps {
  value: TabContextProps['value'];
  /**
   * **[Storybook-only:** passed to `TabList` child.**]**
   */
  ['sb_TabList_aria-label']?: TabListProps['aria-label'];
  /**
   * **[Storybook-only:** passed to `TabList` child.**]**
   */
  sb_TabList_onChange?: TabListProps['onChange'];
}

export const SbTabContext = ({
  'sb_TabList_aria-label': sb_TabList_ariaLabel,
  sb_TabList_onChange,
  ...props
}: SbTabContextProps) => <TabContext {...props} />;

export default {
  title: '@ps/TabContext',
  component: SbTabContext,
  excludeStories: ['SbTabContext'],
  // Doesn't pick up any props
  argTypes: {
    value: {
      control: 'select',
      options: ['value-1', 'value-2', 'value-3', 'value-4'],
    },
  },
  args: {
    'sb_TabList_aria-label': 'tabs story',
    value: 'value-1',
  },
} as Meta;

const CodeSnippet = withStyles({
  root: { display: 'inline' },
})((props) => <Typography variant="code-md" {...props} />);

const Template = ({
  'sb_TabList_aria-label': sb_TabList_ariaLabel,
  sb_TabList_onChange,
  ...args
}) => {
  const [value, setValue] = React.useState(args.value);

  return (
    <>
      <TabContext {...args} value={value}>
        <TabList
          aria-label={sb_TabList_ariaLabel}
          onChange={(event, newValue) => setValue(newValue)}
        >
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

export const Configurable: Story = Template.bind({});
Configurable.decorators = [(Story) => <Story />];

export const Documentation: Story = DocumentationTemplate.bind({});
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

export const Changelog: Story = ChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.12.0',
      versionDate: '2021-09-28',
      changes: ['Feat: Initial implementation.'],
    },
  ],
};
