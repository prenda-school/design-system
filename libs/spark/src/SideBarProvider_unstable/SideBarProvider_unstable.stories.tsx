import { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import {
  SideBarDrawer_unstable,
  SideBarListItem_unstable,
  SideBarListSubheader_unstable,
  SideBarList_unstable,
  SideBarProviderProps_unstable,
  SideBarProvider_unstable,
  useSideBarTrigger_unstable,
} from '..';

export default {
  title: '@ps/SideBarProvider',
  argTypes: {},
  args: {},
} as Meta;

const Template = (args) => {
  return (
    <SideBarProvider_unstable {...args}>
      <SideBarDrawer_unstable>
        <CloseSideBarTrigger />

        <SideBarList_unstable>
          <SideBarListSubheader_unstable>
            Subheader
          </SideBarListSubheader_unstable>

          <SideBarListItem_unstable button>List item</SideBarListItem_unstable>
        </SideBarList_unstable>
      </SideBarDrawer_unstable>

      <OpenSideBarTrigger />
    </SideBarProvider_unstable>
  );
};

const OpenSideBarTrigger = () => {
  const sidebarTrigger = useSideBarTrigger_unstable({ action: 'open' });

  return <button {...sidebarTrigger.ButtonProps}>Open</button>;
};

const CloseSideBarTrigger = () => {
  const sidebarTrigger = useSideBarTrigger_unstable({ action: 'close' });

  return <button {...sidebarTrigger.ButtonProps}>Close</button>;
};

type Story = DefaultStory<SideBarProviderProps_unstable>;

export const Composition: Story = Template.bind({});
Composition.storyName = '(composition)';
