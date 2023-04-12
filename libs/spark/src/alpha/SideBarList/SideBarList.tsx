import List, { ListClassKey, ListProps } from '../List';
import withStyles, { Styles } from '../../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SideBarListProps extends ListProps {}

export type SideBarListClassKey = ListClassKey;

const styles: Styles<SideBarListClassKey> = {
  root: {},
};

const UnstyledSideBarList = List;

const SideBarList = withStyles(styles, {
  name: 'MuiSparkSideBarList',
})(UnstyledSideBarList) as typeof UnstyledSideBarList;

export default SideBarList;
