import MuiTabContext from '@material-ui/lab/TabContext';
import clsx from 'clsx';
import React, {
  ElementType,
  forwardRef,
  SyntheticEvent,
  useCallback,
  useMemo,
} from 'react';
import {
  OverridableComponent,
  OverrideProps,
  useControlled,
} from '../../utils';
import withStyles, { Styles } from '../../withStyles';
import TabsContext, { TabsContextValue } from '../TabsContext';

export interface TabsTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P & {
    /**
     * The value of the currently selected `Tab`.
     * If you don't want any selected `Tab`, you can set this prop to `false`.
     */
    value?: TabsContextValue['value'];
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue?: TabsContextValue['value'];
    /**
     * The component orientation (layout flow direction).
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Callback invoked when new value is being set.
     */
    onChange?: (
      event: SyntheticEvent,
      value: TabsContextValue['value']
    ) => void;
  };
  defaultComponent: D;
  classKey: TabsClassKey;
}

export type TabsProps<
  D extends ElementType = TabsTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<TabsTypeMap<P, D>, D> & {
  component?: D;
};

export type TabsClassKey = 'root';

type PrivateClassKey =
  | 'private-root-orientation-horizontal'
  | 'private-root-orientation-vertical';

const styles: Styles<TabsClassKey | PrivateClassKey> = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
  },
  /* Private */
  'private-root-orientation-horizontal': {
    flexDirection: 'column',
  },
  'private-root-orientation-vertical': {
    flexDirection: 'row',
  },
};

const Tabs: OverridableComponent<TabsTypeMap> = forwardRef(function Tabs(
  props,
  ref
) {
  const {
    children,
    classes,
    className,
    defaultValue,
    onChange,
    orientation = 'horizontal',
    value: valueProp,
    ...other
  } = props;

  const [value, setValue] = useControlled({
    // coerce to string since v4 only accepts string
    controlled: valueProp === false ? '_false' : valueProp,
    default: defaultValue === false ? '_false' : defaultValue,
    name: 'Tabs',
    state: 'value',
  });

  const onSelected = useCallback(
    (event: SyntheticEvent, newValue: string) => {
      setValue(newValue);
      if (onChange) {
        onChange(event, newValue);
      }
    },
    [onChange, setValue]
  );

  const contextValue = useMemo<TabsContextValue>(
    () =>
      ({
        onSelected,
        orientation,
        value,
        // missing `idPrefix` but not actually necessary
      } as TabsContextValue),
    [onSelected, orientation, value]
  );

  return (
    <div
      className={clsx(
        classes.root,
        classes[`private-root-orientation-${orientation}`],
        className
      )}
      ref={ref}
      {...other}
    >
      <TabsContext.Provider value={contextValue}>
        <MuiTabContext value={value}>{children}</MuiTabContext>
      </TabsContext.Provider>
    </div>
  );
});

export default withStyles(styles, {
  name: 'MuiSpark_alpha_Tabs',
})(Tabs) as typeof Tabs;
