import Unstable_List, {
  Unstable_ListClassKey,
  Unstable_ListProps,
} from '../Unstable_List';
import withStyles, { Styles } from '../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SideBarListProps_unstable extends Unstable_ListProps {}

export type SideBarListClassKey_unstable = Unstable_ListClassKey;

const styles: Styles<SideBarListClassKey_unstable> = {
  root: {},
};

const UnstyledSideBarList_unstable = Unstable_List;

const SideBarList_unstable = withStyles(styles, {
  name: 'MuiSparkSideBarList_unstable',
})(UnstyledSideBarList_unstable) as typeof UnstyledSideBarList_unstable;

export default SideBarList_unstable;
