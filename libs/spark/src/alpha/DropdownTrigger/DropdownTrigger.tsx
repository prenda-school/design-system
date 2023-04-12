import clsx from 'clsx';
import React, { ElementType, forwardRef } from 'react';
import Button, { ButtonProps, ButtonTypeMap } from '../Button';
import { ChevronDown } from '../../internal';
import useDropdown from '../useDropdown/useDropdown';
import { OverridableComponent, OverrideProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';

export interface DropdownTriggerTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = ButtonTypeMap['defaultComponent']
> {
  props: P;
  defaultComponent: D;
  classKey: DropdownTriggerClassKey;
}

export type DropdownTriggerProps<
  D extends ElementType = DropdownTriggerTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<DropdownTriggerTypeMap<P, D>, D>;

export type DropdownTriggerClassKey = 'root';

type PrivateClassKey =
  | 'private-root-trailingIcon'
  | 'private-root-trailingIcon-open';

const styles: Styles<DropdownTriggerClassKey | PrivateClassKey> = {
  root: {},
  'private-root-trailingIcon': {
    transition: 'transform 250ms ease',
  },
  'private-root-trailingIcon-open': {
    transform: 'rotate(180deg)',
  },
};

const UnstyledDropdownTrigger: OverridableComponent<DropdownTriggerTypeMap> =
  forwardRef(function DropdownTrigger(
    {
      classes,
      className,
      // @ts-expect-error TS can't recognize component prop
      component = Button,
      onClick,
      ...other
    },
    ref
  ) {
    const { id, isOpen, open } = useDropdown();

    const Component = component as ElementType;

    const extra = {};
    // @ts-expect-error property does not exist
    if (Component._PDS_ID === 'Button') {
      // check if should add default trailing icon and styles
      if (
        Object.prototype.hasOwnProperty.call(other, 'trailingIcon') === false
      ) {
        (extra as ButtonProps).trailingIcon = <ChevronDown />;
        (extra as ButtonProps).classes = {
          ...(other as ButtonProps)?.classes,
          trailingIcon: clsx(
            classes['private-root-trailingIcon'],
            {
              [classes['private-root-trailingIcon-open']]: isOpen,
            },
            (other as ButtonProps)?.classes?.trailingIcon
          ),
        };
      }
    }

    const handleClick: DropdownTriggerProps['onClick'] = (event) => {
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

const DropdownTrigger = withStyles(styles, {
  name: 'MuiSparkDropdownTrigger',
})(UnstyledDropdownTrigger) as typeof UnstyledDropdownTrigger;

export default DropdownTrigger;
