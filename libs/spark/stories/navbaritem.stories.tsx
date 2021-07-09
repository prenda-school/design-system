import { NavBarItem } from '@prenda/spark';
import { UsersIconDuotone } from '../src/icons';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'prenda-spark/NavBarItem',
  component: NavBarItem,
  argTypes: {},
  args: {},
} as Meta;

const Template = () => (
  <NavBarItem href="#" startIcon={<UsersIconDuotone />}>
    Link Text
  </NavBarItem>
);
export const Basic = Template.bind({});
