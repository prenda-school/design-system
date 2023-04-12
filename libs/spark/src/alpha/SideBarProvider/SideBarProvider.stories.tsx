import { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import {
  SideBarDrawer,
  SideBarListItem,
  SideBarListSubheader,
  SideBarList,
  SideBarProviderProps,
  SideBarProvider,
  useSideBarTrigger,
} from '..';

export default {
  title: '@ps/SideBarProvider',
  argTypes: {},
  args: {},
} as Meta;

const Template = (args) => {
  return (
    <SideBarProvider {...args}>
      <SideBarDrawer>
        <CloseSideBarTrigger />

        <SideBarList>
          <SideBarListSubheader>Subheader</SideBarListSubheader>

          <SideBarListItem button>List item</SideBarListItem>
        </SideBarList>
      </SideBarDrawer>

      <OpenSideBarTrigger />
    </SideBarProvider>
  );
};

const OpenSideBarTrigger = () => {
  const sidebarTrigger = useSideBarTrigger({ action: 'open' });

  return <button {...sidebarTrigger.ButtonProps}>Open</button>;
};

const CloseSideBarTrigger = () => {
  const sidebarTrigger = useSideBarTrigger({ action: 'close' });

  return <button {...sidebarTrigger.ButtonProps}>Close</button>;
};

type Story = DefaultStory<SideBarProviderProps>;

export const Composition: Story = Template.bind({});
Composition.storyName = '(composition)';
