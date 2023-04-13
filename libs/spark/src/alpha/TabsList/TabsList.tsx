import MuiTabList, {
  TabListTypeMap as MuiTabListTypeMap,
  TabListProps as MuiTabListProps,
} from '@material-ui/lab/TabList';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import useTabs from '../useTabs';
import { OverridableComponent, OverrideProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';

export interface TabsListTypeMap<
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
  classKey: TabsListClassKey;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type TabsListProps<
  D extends React.ElementType = TabsListTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<TabsListTypeMap<P, D>, D>;

export type TabsListClassKey =
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
const styles: Styles<TabsListClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    margin: -4,
    padding: 4,
    // override v1
    boxShadow: theme.shadows_alpha.none,
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
    backgroundColor: theme.palette_alpha.blue[600],
  },
  /* Private */
  'private-flexContainer-orientation-horizontal': {
    boxShadow: `inset 0px -2px ${theme.palette_alpha.neutral[80]}`,
    gap: 32,
  },
  'private-flexContainer-orientation-vertical': {
    boxShadow: `inset -2px 0 ${theme.palette_alpha.neutral[80]}`,
    gap: 12,
  },
  'private-indicator-orientation-horizontal': {
    bottom: 4,
  },
  'private-indicator-orientation-vertical': {
    right: 4,
  },
});

const TabsList: OverridableComponent<TabsListTypeMap> = forwardRef(
  function TabsList(props, ref) {
    const { classes, ...other } = props;

    const tabs = useTabs();
    if (tabs === null) {
      throw new Error('No Tabs provided');
    }

    const onChange = (event, value) => {
      tabs.onSelected(event, value);
    };

    return (
      <MuiTabList
        classes={{
          root: classes.root,
          scroller: classes.tablist,
          flexContainer: clsx(
            classes.flexContainer,
            classes[`private-flexContainer-orientation-${tabs.orientation}`]
          ),
          indicator: clsx(
            classes.indicator,
            classes[`private-indicator-orientation-${tabs.orientation}`]
          ),
        }}
        onChange={onChange}
        orientation={tabs.orientation}
        ref={ref}
        {...other}
      />
    );
  }
);

export default withStyles(styles, {
  name: 'MuiSpark_alpha_TabsList',
})(TabsList) as typeof TabsList;
