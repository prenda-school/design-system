import Unstable_ListSubheader, {
  Unstable_ListSubheaderClassKey,
  Unstable_ListSubheaderProps,
} from '../Unstable_ListSubheader';
import withStyles, { Styles } from '../withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SideBarListSubheaderProps_unstable
  extends Unstable_ListSubheaderProps {}

export type SideBarListSubheaderClassKey_unstable =
  Unstable_ListSubheaderClassKey;

const styles: Styles<SideBarListSubheaderClassKey_unstable> = {
  root: {
    paddingLeft: 24,
    height: 24,
    marginBottom: 4,
  },
};

const UnstyledSideBarListSubheader_unstable = Unstable_ListSubheader;

const SideBarListSubheader_unstable = withStyles(styles, {
  name: 'MuiSparkSideBarListSubheader_unstable',
})(
  UnstyledSideBarListSubheader_unstable
) as typeof UnstyledSideBarListSubheader_unstable;

export default SideBarListSubheader_unstable;
