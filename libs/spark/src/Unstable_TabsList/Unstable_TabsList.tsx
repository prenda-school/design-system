import MuiTabList, {
  TabListTypeMap as MuiTabListTypeMap,
  TabListProps as MuiTabListProps,
} from '@material-ui/lab/TabList';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { useTabsContext } from '../Unstable_Tabs/Unstable_TabsContext';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_TabsListTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = MuiTabListTypeMap['defaultComponent']
> {
  props: P &
    Omit<
      MuiTabListProps,
      | 'centered'
      | 'indicatorColor'
      | 'onChange'
      | 'orientation'
      | 'selectionFollowsFocus'
      | 'ScrollButtonComponent'
      | 'scrollButtons'
      | 'TabScrollButtonProps'
      | 'textColor'
      | 'variant'
    >;
  defaultComponent: D;
  classKey: Unstable_TabsListClassKey;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type Unstable_TabsListProps<
  D extends React.ElementType = Unstable_TabsListTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_TabsListTypeMap<P, D>, D>;

export type Unstable_TabsListClassKey =
  | 'root'
  | 'tablist'
  | 'flexContainer'
  | 'indicator';

type PrivateClassKey =
  | 'private-flexContainer-orientation-horizontal'
  | 'private-flexContainer-orientation-vertical'
  | 'private-indicator-orientation-horizontal'
  | 'private-indicator-orientation-vertical';

// all the padding/margin work is to get Tab focus shadows to not be cutoff
const styles: Styles<Unstable_TabsListClassKey | PrivateClassKey> = (
  theme
) => ({
  /* Styles applied to the root element. */
  root: {
    margin: -4,
    padding: 4,
    // override v1
    boxShadow: 'none',
    // override MUI
    minHeight: 'unset',
  },
  /* Styles applied to the tablist element (child of root element). */
  tablist: {
    margin: -4,
    overflowX: 'scroll',
    padding: 4,
    // from MUI (Tabs.styles.scrollable)
    // Hide dimensionless scrollbar on MacOS
    scrollbarWidth: 'none', // Firefox
    '&::-webkit-scrollbar': {
      display: 'none', // Safari + Chrome
    },
    // override MUI
    width: 'unset',
  },
  /* Styles applied to the flex container element (child of scroller element). */
  flexContainer: {},
  /* Styles applied to the indicator element (child of scroller element). */
  indicator: {
    backgroundColor: theme.unstable_palette.blue[600],
  },
  /* Private */
  'private-flexContainer-orientation-horizontal': {
    // boxShadow: `0px 2px ${theme.unstable_palette.neutral[0]}, 0px 4px ${theme.unstable_palette.neutral[80]}`,
    boxShadow: `inset 0px -2px ${theme.unstable_palette.neutral[80]}`,
    gap: 32,
  },
  'private-flexContainer-orientation-vertical': {
    // boxShadow: `2px 0px ${theme.unstable_palette.neutral[0]}, 4px 0 ${theme.unstable_palette.neutral[80]}`,
    boxShadow: `inset -2px 0 ${theme.unstable_palette.neutral[80]}`,
    gap: 12,
  },
  'private-indicator-orientation-horizontal': {
    bottom: 4,
  },
  'private-indicator-orientation-vertical': {
    right: 4,
  },
});

const Unstable_TabsList: OverridableComponent<Unstable_TabsListTypeMap> = forwardRef(
  function Unstable_TabsList(props, ref) {
    const { classes, ...other } = props;

    const context = useTabsContext();
    if (context === null) {
      throw new Error('No TabsContext provided');
    }

    const onChange = (event, value) => {
      context.onSelected(event, value);
    };

    return (
      <MuiTabList
        classes={{
          root: classes.root,
          scroller: classes.tablist,
          flexContainer: clsx(
            classes.flexContainer,
            classes[`private-flexContainer-orientation-${context.orientation}`]
          ),
          indicator: clsx(
            classes.indicator,
            classes[`private-indicator-orientation-${context.orientation}`]
          ),
        }}
        onChange={onChange}
        orientation={context.orientation}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withStyles(styles, {
  name: 'MuiSparkUnstable_TabsList',
})(Unstable_TabsList) as typeof Unstable_TabsList;
