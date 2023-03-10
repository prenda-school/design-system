import clsx from 'clsx';
import React, { ElementType, forwardRef } from 'react';
import Unstable_Button, {
  Unstable_ButtonProps,
  Unstable_ButtonTypeMap,
} from '../Unstable_Button';
import { Unstable_ChevronDown } from '../internal';
import useDropdown_unstable from '../useDropdown_unstable/useDropdown_unstable';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_DropdownTriggerTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = Unstable_ButtonTypeMap['defaultComponent']
> {
  props: P;
  defaultComponent: D;
  classKey: Unstable_DropdownTriggerClassKey;
}

export type Unstable_DropdownTriggerProps<
  D extends ElementType = Unstable_DropdownTriggerTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_DropdownTriggerTypeMap<P, D>, D>;

export type Unstable_DropdownTriggerClassKey = 'root';

type PrivateClassKey =
  | 'private-root-trailingIcon'
  | 'private-root-trailingIcon-open';

const styles: Styles<Unstable_DropdownTriggerClassKey | PrivateClassKey> = {
  root: {},
  'private-root-trailingIcon': {
    transition: 'transform 250ms ease',
  },
  'private-root-trailingIcon-open': {
    transform: 'rotate(180deg)',
  },
};

const UnstyledUnstable_DropdownTrigger: OverridableComponent<Unstable_DropdownTriggerTypeMap> =
  forwardRef(function Unstable_DropdownTrigger(
    {
      classes,
      className,
      // @ts-expect-error TS can't recognize component prop
      component = Unstable_Button,
      onClick,
      ...other
    },
    ref
  ) {
    const { id, isOpen, open } = useDropdown_unstable();

    const Component = component as ElementType;

    const extra = {};
    // @ts-expect-error property does not exist
    if (Component._PDS_ID === 'Unstable_Button') {
      // check if should add default trailing icon and styles
      if (
        Object.prototype.hasOwnProperty.call(other, 'trailingIcon') === false
      ) {
        (extra as Unstable_ButtonProps).trailingIcon = <Unstable_ChevronDown />;
        (extra as Unstable_ButtonProps).classes = {
          ...(other as Unstable_ButtonProps)?.classes,
          trailingIcon: clsx(
            classes['private-root-trailingIcon'],
            {
              [classes['private-root-trailingIcon-open']]: isOpen,
            },
            (other as Unstable_ButtonProps)?.classes?.trailingIcon
          ),
        };
      }
    }

    const handleClick: Unstable_DropdownTriggerProps['onClick'] = (event) => {
      onClick?.(event);
      open(event);
    };

    return (
      <Component
        aria-controls={id}
        aria-haspopup="true"
        className={clsx(classes.root, className)}
        onClick={handleClick}
        ref={ref}
        {...extra}
        {...other}
      />
    );
  });

const Unstable_DropdownTrigger = withStyles(styles, {
  name: 'MuiSparkUnstable_DropdownTrigger',
})(UnstyledUnstable_DropdownTrigger) as typeof UnstyledUnstable_DropdownTrigger;

export default Unstable_DropdownTrigger;
