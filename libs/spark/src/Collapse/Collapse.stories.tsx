import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Box,
  Collapse,
  CollapseProps,
  FormControlLabel,
  Paper,
  Switch,
  makeStyles,
  styled,
} from '..';
import { sparkThemeProvider } from '../../stories';

interface SbCollapseProps extends CollapseProps {
  collapsedSize?: CollapseProps['collapsedSize'];
  in?: CollapseProps['in'];
  orientation?: CollapseProps['orientation'];
}

export const SbCollapse = (props: SbCollapseProps) => <Collapse {...props} />;

export default {
  title: '@ps/Collapse',
  component: SbCollapse,
  excludeStories: ['SbCollapse'],
  args: {
    collapsedSize: '0px',
    orientation: 'vertical',
  },
  decorators: [sparkThemeProvider],
} as Meta;

const useIconStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.grey.light,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.grey.dark,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const Icon = () => {
  const classes = useIconStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      <svg className={classes.svg}>
        <polygon className={classes.polygon} points="0,100 50,00, 100,100" />
      </svg>
    </Paper>
  );
};

const Root = styled('div')({
  height: 120,
  width: 100,
});

const Template: Story = (args) => (
  <Root>
    <Collapse {...args}>
      <Icon />
    </Collapse>
  </Root>
);

export const Configurable = Template.bind({});

export const Vertical = Template.bind({});
Vertical.args = { orientation: 'vertical' };
Vertical.storyName = 'vertical';

export const VerticalCollapseSize = Template.bind({});
VerticalCollapseSize.args = { orientation: 'vertical', collapsedSize: 40 };
VerticalCollapseSize.storyName = 'vertical collapsedSize';

export const VerticalIn = Template.bind({});
VerticalIn.args = { orientation: 'vertical', in: true };
VerticalIn.storyName = 'vertical in';

export const VerticalCollapsedSizeIn = Template.bind({});
VerticalCollapsedSizeIn.args = {
  orientation: 'vertical',
  collapsedSize: 40,
  in: true,
};
VerticalCollapsedSizeIn.storyName = 'vertical collapsedSize in';

export const Horizontal = Template.bind({});
Horizontal.args = { orientation: 'horizontal' };
Horizontal.storyName = 'horizontal';

export const HorizontalCollapseSize = Template.bind({});
HorizontalCollapseSize.args = { orientation: 'horizontal', collapsedSize: 40 };
HorizontalCollapseSize.storyName = 'horizontal collapsedSize';

export const HorizontalIn = Template.bind({});
HorizontalIn.args = { orientation: 'horizontal', in: true };
HorizontalIn.storyName = 'horizontal in';

export const HorizontalCollapsedSizeIn = Template.bind({});
HorizontalCollapsedSizeIn.args = {
  orientation: 'horizontal',
  collapsedSize: 40,
  in: true,
};
HorizontalCollapsedSizeIn.storyName = 'horizontal collapsedSize in';

const useDemoStyles = makeStyles({
  root: {
    height: 300,
  },
  container: {
    '& > :not(style)': {
      display: 'flex',
      justifyContent: 'space-around',
      height: 120,
      width: 100 * 2 + 16,
      gap: 16,
    },
  },
  subHorizontalContainer: {
    width: 100,
  },
});

const DemoTemplate: Story = () => {
  const classes = useDemoStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box className={classes.container}>
        <div>
          <Collapse in={checked}>
            <Icon />
          </Collapse>
          <Collapse in={checked} collapsedSize={40}>
            <Icon />
          </Collapse>
        </div>
        <div>
          <div className={classes.subHorizontalContainer}>
            <Collapse orientation="horizontal" in={checked}>
              <Icon />
            </Collapse>
          </div>
          <div className={classes.subHorizontalContainer}>
            <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
              <Icon />
            </Collapse>
          </div>
        </div>
      </Box>
    </div>
  );
};

export const Demo = DemoTemplate.bind({});
Demo.decorators = [(Story) => <Story />];
