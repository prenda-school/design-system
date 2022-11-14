import MuiTabContext from '@material-ui/lab/TabContext';
import clsx from 'clsx';
import {
  ElementType,
  forwardRef,
  SyntheticEvent,
  useCallback,
  useMemo,
} from 'react';
import { OverridableComponent, OverrideProps, useControlled } from '../utils';
import withStyles, { Styles } from '../withStyles';
import Context, { Unstable_TabsContextValue } from './Unstable_TabsContext';

export interface Unstable_TabsTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P & {
    /**
     * The value of the currently selected `Tab`.
     * If you don't want any selected `Tab`, you can set this prop to `false`.
     */
    value?: string | false;
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue?: string | false;
    /**
     * The component orientation (layout flow direction).
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Callback invoked when new value is being set.
     */
    onChange?: (
      event: SyntheticEvent,
      value: number | string | boolean
    ) => void;
  };
  defaultComponent: D;
  classKey: Unstable_TabsClassKey;
}

export type Unstable_TabsProps<
  D extends ElementType = Unstable_TabsTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_TabsTypeMap<P, D>, D> & {
  component?: D;
};

export type Unstable_TabsClassKey = 'root';

type PrivateClassKey =
  | 'private-root-orientation-horizontal'
  | 'private-root-orientation-vertical';

const styles: Styles<Unstable_TabsClassKey | PrivateClassKey> = {
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

const Unstable_Tabs: OverridableComponent<Unstable_TabsTypeMap> = forwardRef(
  function Unstable_Tabs(props, ref) {
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

    const contextValue = useMemo<Unstable_TabsContextValue>(
      () =>
        ({
          onSelected,
          orientation,
          value,
          // missing `idPrefix` but not actually necessary
        } as Unstable_TabsContextValue),
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
        <Context.Provider value={contextValue}>
          <MuiTabContext value={value}>{children}</MuiTabContext>
        </Context.Provider>
      </div>
    );
  }
);

export default withStyles(styles, {
  name: 'MuiSparkUnstable_Tabs',
})(Unstable_Tabs) as typeof Unstable_Tabs;
