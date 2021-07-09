import { NavBarItem } from '@prenda/spark';
import { UsersIconDuotone } from '../src/icons';

const Template = () => (
  <NavBarItem href="#" startIcon={<UsersIconDuotone />}>
    Link Text
  </NavBarItem>
);
export const Basic = Template.bind({});
