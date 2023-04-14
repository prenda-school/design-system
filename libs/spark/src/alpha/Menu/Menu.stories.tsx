import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { MenuProps } from '..';
import { Button, CheckboxMenuItem, MenuItem, Menu } from '..';
import { enableHooks } from '../../../stories';

export const _retyped = Menu as typeof Menu;

export default {
  title: '@ps/Menu',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [enableHooks],
  args: {
    children: '(MenuItem x6)',
    PaperProps: { style: { maxHeight: 40 * 4.5, width: 256 } },
  },
  argTypes: {
    children: {
      control: 'select',
      options: ['(MenuItem x6)', '(CheckboxMenuItem x6)'],
      mapping: {
        '(MenuItem x6)': Array.from(Array(6)).map((_v, i) => (
          <MenuItem key={i}>Menu item {i}</MenuItem>
        )),
        '(CheckboxMenuItem x6)': Array.from(Array(6)).map((_v, i) => (
          <CheckboxMenuItem key={i} value={`value-${i}`}>
            Menu item {i}
          </CheckboxMenuItem>
        )),
      },
    },
  },
} as Meta;

const Template = (args) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        {...args}
      />
    </>
  );
};

type Story = DefaultStory<MenuProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const MenuListPropsDisablePadding: Story = Template.bind({});
MenuListPropsDisablePadding.args = { MenuListProps: { disablePadding: true } };
MenuListPropsDisablePadding.storyName = 'MenuListProps={disablePadding}';

export const MenuListPropsSubheader: Story = Template.bind({});
MenuListPropsSubheader.args = { MenuListProps: { subheader: 'Subheader' } };
MenuListPropsSubheader.storyName = 'MenuListProps={subheader}';

export const MenuListPropsSubheaderDisableSticky: Story = Template.bind({});
MenuListPropsSubheaderDisableSticky.args = {
  MenuListProps: {
    ListSubheaderProps: { disableSticky: true },
    subheader: 'Subheader',
  },
};
MenuListPropsSubheaderDisableSticky.storyName =
  'MenuListProps={subheader, ListSubheaderProps: {disableSticky}}';
