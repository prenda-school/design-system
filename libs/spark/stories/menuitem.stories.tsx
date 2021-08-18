import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  Avatar,
  Box,
  Checkbox,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
  MenuItem,
  styled,
  FormControlLabel,
} from '../src';
import { GearDuotone } from '@prenda/spark-icons';

export default {
  title: 'prenda-spark/MenuItem',
  component: MenuItem,
  argTypes: {
    startIcon: { control: 'boolean' },
    text: { control: 'text' },
  },
  args: {
    text: 'Menu item',
    startIcon: false,
    button: true,
  },
} as Meta;

const Container = styled('div')({
  width: 224,
});

const Template: Story = ({ text, startIcon, args }) => (
  <Container>
    <MenuItem {...args}>
      {startIcon ? (
        <ListItemIcon>
          <GearDuotone />
        </ListItemIcon>
      ) : null}
      <ListItemText primary={text} />
    </MenuItem>
  </Container>
);

export const Configurable: Story = Template.bind({});

const GridContainer = (props) => (
  <Box
    m={0.5}
    display="grid"
    gridTemplateColumns="224px"
    gridGap="4px"
    alignItems="center"
    {...props}
  />
);

const CompositionsTemplate: Story = ({ startIcon, ...args }) => (
  <GridContainer>
    <MenuItem {...args}>
      <ListItemText primary="Menu item" />
    </MenuItem>
    <MenuItem {...args}>
      <ListItemIcon>
        <GearDuotone />
      </ListItemIcon>
      <ListItemText primary="Menu item" />
    </MenuItem>
    <MenuItem {...args}>
      <ListItemAvatar>
        <Avatar size="xsmall" src="/img/student-girl-1.png" />
      </ListItemAvatar>
      <ListItemText primary="Menu item" />
    </MenuItem>
    {args.selected ? null : (
      <>
        <MenuItem {...args}>
          <ListItemIcon>
            <Checkbox
              tabIndex={-1}
              inputProps={{ 'aria-labelledby': 'menu-item-label' }}
              disabled={args.disabled}
            />
          </ListItemIcon>
          <ListItemText id="menu-item-label" primary="Menu item" />
        </MenuItem>
        <MenuItem {...args}>
          <FormControlLabel
            label="Menu item"
            control={<Checkbox />}
            disabled={args.disabled}
          />
        </MenuItem>
      </>
    )}
  </GridContainer>
);

export const Compositions = CompositionsTemplate.bind({});

export const CompositionsHover = CompositionsTemplate.bind({});
CompositionsHover.parameters = { pseudo: { hover: true } };

export const CompositionsFocus = CompositionsTemplate.bind({});
CompositionsFocus.parameters = { pseudo: { focus: true } };

export const CompositionsActive = CompositionsTemplate.bind({});
CompositionsActive.parameters = { pseudo: { active: true } };

export const CompositionsDisabled = CompositionsTemplate.bind({});
CompositionsDisabled.args = { disabled: true };

export const CompositionsSelected = CompositionsTemplate.bind({});
CompositionsSelected.args = { selected: true };

export const CompositionsSelectedHover = CompositionsTemplate.bind({});
CompositionsSelectedHover.args = { selected: true };
CompositionsSelectedHover.parameters = { pseudo: { hover: true } };

export const CompositionsSelectedFocus = CompositionsTemplate.bind({});
CompositionsSelectedFocus.args = { selected: true };
CompositionsSelectedFocus.parameters = { pseudo: { focus: true } };

export const CompositionsSelectedDisabled = CompositionsTemplate.bind({});
CompositionsSelectedDisabled.args = { selected: true, disabled: true };
