import type { ListClassKey, ListProps } from '../List';
import List from '../List';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SideBarListProps extends ListProps {}

export type SideBarListClassKey = ListClassKey;

const styles: Styles<SideBarListClassKey> = {
  root: {},
};

const UnstyledSideBarList = List;

const SideBarList = withStyles(styles, {
  name: 'MuiSpark_alpha_SideBarList',
})(UnstyledSideBarList) as typeof UnstyledSideBarList;

export default SideBarList;
