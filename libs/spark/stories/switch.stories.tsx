import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  Switch,
  FormControlLabel,
  Card,
  ListItem,
  ListItemText,
  List,
  withStyles,
  ListItemIcon,
  styled,
} from '../src';
import { ChangelogTemplate } from './changelog-template';
import { DocTemplate } from './documentation-template';

export default {
  title: 'prenda-spark/Switch',
  component: Switch,
  parameters: { actions: { handles: ['change'] } },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['large', 'small'] },
  },
  args: {
    checked: false,
    disabled: false,
    size: 'small',
  },
} as Meta;

const Template: Story = (args) => (
  <Switch
    // a11y required props when there's no label
    name="Demo"
    value="value"
    inputProps={{ 'aria-label': 'Value' }}
    {...args}
  />
);

export const Configurable = Template.bind({});

const StatesTemplate: Story = () => (
  <>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <Switch
        name="nameA"
        value="valueA"
        inputProps={{ 'aria-label': 'Name A' }}
      />
      <Switch
        name="nameB"
        value="valueB"
        inputProps={{ 'aria-label': 'Name B' }}
        disabled
      />
      <Switch
        name="nameC"
        value="valueC"
        inputProps={{ 'aria-label': 'Name C' }}
        checked
      />
      <Switch
        name="nameD"
        value="valueD"
        inputProps={{ 'aria-label': 'Name D' }}
        checked
        disabled
      />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <Switch
        name="nameA"
        value="valueA"
        inputProps={{ 'aria-label': 'Name A' }}
        size="large"
      />
      <Switch
        name="nameB"
        value="valueB"
        inputProps={{ 'aria-label': 'Name B' }}
        size="large"
        disabled
      />
      <Switch
        name="nameC"
        value="valueC"
        inputProps={{ 'aria-label': 'Name C' }}
        size="large"
        checked
      />
      <Switch
        name="nameD"
        value="valueD"
        inputProps={{ 'aria-label': 'Name D' }}
        size="large"
        checked
        disabled
      />
    </div>
  </>
);

const PseudoStatesTemplate: Story = () => (
  <>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <Switch
        name="nameA"
        value="valueA"
        inputProps={{ 'aria-label': 'Name A' }}
      />
      <Switch
        name="nameB"
        value="valueB"
        inputProps={{ 'aria-label': 'Name B' }}
        checked
      />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <Switch
        name="nameA"
        value="valueA"
        inputProps={{ 'aria-label': 'Name A' }}
        size="large"
      />
      <Switch
        name="nameB"
        value="valueB"
        inputProps={{ 'aria-label': 'Name B' }}
        size="large"
        checked
      />
    </div>
  </>
);

export const States = StatesTemplate.bind({});

export const StatesHover = PseudoStatesTemplate.bind({});
StatesHover.parameters = { pseudo: { hover: true } };

export const StatesFocus = PseudoStatesTemplate.bind({});
StatesFocus.parameters = { pseudo: { focus: true } };

const LabeledStatesTemplate: Story = () => (
  <>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel label="Label" control={<Switch />} />
      <FormControlLabel label="Label" control={<Switch />} disabled />
      <FormControlLabel label="Label" control={<Switch checked />} />
      <FormControlLabel label="Label" control={<Switch checked />} disabled />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel label="Label" control={<Switch size="large" />} />
      <FormControlLabel
        label="Label"
        control={<Switch size="large" />}
        disabled
      />
      <FormControlLabel
        label="Label"
        control={<Switch size="large" checked />}
      />
      <FormControlLabel
        label="Label"
        control={<Switch size="large" checked />}
        disabled
      />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch />}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch />}
        disabled
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch checked />}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch checked />}
        disabled
      />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" />}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" />}
        disabled
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" checked />}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" checked />}
        disabled
      />
    </div>
  </>
);

const PseudoLabeledStatesTemplate: Story = (args) => (
  <>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel label="Label" control={<Switch />} {...args} />
      <FormControlLabel label="Label" control={<Switch checked />} {...args} />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel
        label="Label"
        control={<Switch size="large" />}
        {...args}
      />
      <FormControlLabel
        label="Label"
        control={<Switch size="large" checked />}
        {...args}
      />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch />}
        {...args}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch checked />}
        {...args}
      />
    </div>
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" />}
        {...args}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" checked />}
        {...args}
      />
    </div>
  </>
);

export const LabeledStates = LabeledStatesTemplate.bind({});

export const LabeledStatesHover = PseudoLabeledStatesTemplate.bind({});
LabeledStatesHover.parameters = { pseudo: { hover: true } };

export const LabeledStatesFocus = PseudoLabeledStatesTemplate.bind({});
LabeledStatesFocus.parameters = { pseudo: { focus: true } };

const CustomCard = withStyles({
  root: {
    maxWidth: 256,
    width: '100%',
    padding: '0 16px',
  },
})(Card);

const PaddedListItem = withStyles({
  root: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  // without cast, TS infers wrong props signature
})(ListItem) as typeof ListItem;

const ListItemEndIcon = styled('div')(({ theme }) => ({
  color: theme.palette.action.active,
  flexShrink: 0,
  display: 'inline-flex',
}));

const RightAlignedListItemText = withStyles({
  root: {
    textAlign: 'right',
  },
})(ListItemText);

const LabeledInListTemplate: Story = (args) => (
  <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
    <CustomCard>
      <List disablePadding>
        <PaddedListItem divider disableGutters>
          <ListItemText id="switch-list-label-1" primary="List label" />
          <ListItemEndIcon>
            <Switch
              edge="end"
              inputProps={{ 'aria-labelledby': 'switch-list-label-1' }}
              {...args}
            />
          </ListItemEndIcon>
        </PaddedListItem>
        <PaddedListItem divider disableGutters>
          <ListItemText id="switch-list-label-2" primary="List label" />
          <ListItemEndIcon>
            <Switch
              edge="end"
              inputProps={{ 'aria-labelledby': 'switch-list-label-2' }}
              {...args}
            />
          </ListItemEndIcon>
        </PaddedListItem>
        <PaddedListItem disableGutters>
          <ListItemText id="switch-list-label-3" primary="List label" />
          <ListItemEndIcon>
            <Switch
              edge="end"
              inputProps={{ 'aria-labelledby': 'switch-list-label-3' }}
              {...args}
            />
          </ListItemEndIcon>
        </PaddedListItem>
      </List>
    </CustomCard>
    <CustomCard>
      <List disablePadding>
        <PaddedListItem divider disableGutters>
          <ListItemIcon>
            <Switch
              edge="start"
              inputProps={{ 'aria-labelledby': 'switch-list-label-4' }}
              {...args}
            />
          </ListItemIcon>
          <RightAlignedListItemText
            id="switch-list-label-4"
            primary="List label"
          />
        </PaddedListItem>
        <PaddedListItem divider disableGutters>
          <ListItemIcon>
            <Switch
              edge="start"
              inputProps={{ 'aria-labelledby': 'switch-list-label-5' }}
              {...args}
            />
          </ListItemIcon>
          <RightAlignedListItemText
            id="switch-list-label-5"
            primary="List label"
          />
        </PaddedListItem>
        <PaddedListItem disableGutters>
          <ListItemIcon>
            <Switch
              edge="start"
              inputProps={{ 'aria-labelledby': 'switch-list-label-6' }}
              {...args}
            />
          </ListItemIcon>
          <RightAlignedListItemText
            id="switch-list-label-6"
            primary="List label"
          />
        </PaddedListItem>
      </List>
    </CustomCard>
  </div>
);

export const LabeledInList = LabeledInListTemplate.bind({});

const SwitchDocTemplate = (args) => <DocTemplate {...args} />;

export const Documentation: Story = SwitchDocTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'Switch',
    href: 'https://v4.mui.com/components/switches',
  },
  props: {
    extends: {
      href: 'https://v4.mui.com/api/switch/#props',
    },
    omits: [
      {
        name: 'color',
        defaultValue: "'default'",
      },
      {
        name: 'size',
        defaultValue: "'small'",
      },
    ],
    adds: [
      {
        name: 'size',
        type: "'small' | 'large'",
        defaultValue: "'small'",
      },
    ],
  },
  css: {
    extends: {
      href: 'https://v4.mui.com/api/switch/#css',
    },
  },
};

const SwitchChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = SwitchChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'vNext',
      versionDate: 'yyyy-mm-dd',
      changes: ['Initial implementation.'],
    },
  ],
};
