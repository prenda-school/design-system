import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Card,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  SwitchProps,
  styled,
  withStyles,
} from '..';
import {
  ChangelogTemplate,
  DocumentationTemplate,
} from '../../stories/templates';

// Trying to omit /*ripple*/ props breaks all other props ???
interface SbSwitchProps extends SwitchProps {
  checked?: SwitchProps['checked'];
  disabled?: SwitchProps['disabled'];
}

export const SbSwitch = (props: SbSwitchProps) => <Switch {...props} />;

export default {
  title: '@ps/Switch',
  component: SbSwitch,
  excludeStories: ['SbSwitch'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  args: {
    checked: false,
    disabled: false,
  },
} as Meta;

const Template = (args) => (
  <Switch
    // a11y required props when there's no label
    name="Demo"
    value="value"
    inputProps={{ 'aria-label': 'Value' }}
    {...args}
  />
);

export const Configurable: Story = Template.bind({});

const Container = styled('div')({
  display: 'flex',
  gap: '1rem',
  margin: '1rem',
  width: 'min-content',
});

const StatesTemplate = () => (
  <>
    <Container>
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
    </Container>
    <Container>
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
    </Container>
  </>
);

const PseudoStatesTemplate = () => (
  <>
    <Container>
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
    </Container>
    <Container>
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
    </Container>
  </>
);

export const States: Story = StatesTemplate.bind({});

export const StatesHover: Story = PseudoStatesTemplate.bind({});
StatesHover.parameters = { pseudo: { hover: true } };

export const StatesFocus: Story = PseudoStatesTemplate.bind({});
StatesFocus.parameters = { pseudo: { focus: true } };

const LabeledStatesTemplate = () => (
  <>
    <Container>
      <FormControlLabel label="Label" control={<Switch />} />
      <FormControlLabel label="Label" control={<Switch />} disabled />
      <FormControlLabel label="Label" control={<Switch checked />} />
      <FormControlLabel label="Label" control={<Switch checked />} disabled />
    </Container>
    <Container>
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
    </Container>
    <Container>
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
    </Container>
    <Container>
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
    </Container>
  </>
);

const PseudoLabeledStatesTemplate = () => (
  <>
    <Container>
      <FormControlLabel label="Label" control={<Switch />} />
      <FormControlLabel label="Label" control={<Switch checked />} />
    </Container>
    <Container>
      <FormControlLabel label="Label" control={<Switch size="large" />} />
      <FormControlLabel
        label="Label"
        control={<Switch size="large" checked />}
      />
    </Container>
    <Container>
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch />}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch checked />}
      />
    </Container>
    <Container>
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" />}
      />
      <FormControlLabel
        label="Label"
        labelPlacement="start"
        control={<Switch size="large" checked />}
      />
    </Container>
  </>
);

export const LabeledStates: Story = LabeledStatesTemplate.bind({});

export const LabeledStatesHover: Story = PseudoLabeledStatesTemplate.bind({});
LabeledStatesHover.parameters = { pseudo: { hover: true } };

export const LabeledStatesFocus: Story = PseudoLabeledStatesTemplate.bind({});
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

export const LabeledInList: Story = () => (
  // `width: min-content` will shrink the cards, so set 2 card widths + gap.
  <Container style={{ width: 256 * 2 + 16 }}>
    <CustomCard>
      <List disablePadding>
        <PaddedListItem divider disableGutters>
          <ListItemText id="switch-list-label-1" primary="List label" />
          <ListItemEndIcon>
            <Switch
              edge="end"
              inputProps={{ 'aria-labelledby': 'switch-list-label-1' }}
            />
          </ListItemEndIcon>
        </PaddedListItem>
        <PaddedListItem divider disableGutters>
          <ListItemText id="switch-list-label-2" primary="List label" />
          <ListItemEndIcon>
            <Switch
              edge="end"
              inputProps={{ 'aria-labelledby': 'switch-list-label-2' }}
            />
          </ListItemEndIcon>
        </PaddedListItem>
        <PaddedListItem disableGutters>
          <ListItemText id="switch-list-label-3" primary="List label" />
          <ListItemEndIcon>
            <Switch
              edge="end"
              inputProps={{ 'aria-labelledby': 'switch-list-label-3' }}
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
            />
          </ListItemIcon>
          <RightAlignedListItemText
            id="switch-list-label-6"
            primary="List label"
          />
        </PaddedListItem>
      </List>
    </CustomCard>
  </Container>
);

export const Documentation: Story = DocumentationTemplate.bind({});
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

export const Changelog: Story = ChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.12.0',
      versionDate: '2021-09-28',
      changes: ['Initial implementation.'],
    },
  ],
};
