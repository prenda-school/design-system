import clsx from 'clsx';
import React, { ElementType, forwardRef } from 'react';
import { default as Button, ButtonTypeMap } from '../Button';
import { useDropdownContext } from '../DropdownContext';
import { Unstable_ChevronDown } from '../internal';
import { Unstable_ButtonProps } from '../Unstable_Button';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export type DropdownAnchorProps<
  D extends ElementType = DropdownAnchorTypeMap['defaultComponent'],
  P = Record<string, unknown>
> = OverrideProps<DropdownAnchorTypeMap<P, D>, D>;

export interface DropdownAnchorTypeMap<
  P = Record<string, unknown>,
  D extends ElementType = ButtonTypeMap['defaultComponent']
> {
  props: P;
  defaultComponent: D;
  classKey: string;
}

type PrivateClassKey =
  | 'private-button-trailingIcon'
  | 'private-button-trailingIcon-open';

const styles: Styles<PrivateClassKey> = {
  'private-button-trailingIcon': {
    transition: 'transform 250ms ease',
  },
  'private-button-trailingIcon-open': {
    transform: 'rotate(180deg)',
  },
};

const DropdownAnchor: OverridableComponent<DropdownAnchorTypeMap> = forwardRef(
  function DropdownAnchor(
    { classes, component = Button, onClick, ...other }: DropdownAnchorProps,
    ref
  ) {
    const { id, isOpen, openDropdown } = useDropdownContext();

    const Component = component as ElementType;

    const {
      'private-button-trailingIcon': privateButtonTrailingIconClass,
      'private-button-trailingIcon-open': privateButtonTrailingIconOpenClass,
      ...otherClasses
    } = classes;

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
            privateButtonTrailingIconClass,
            {
              [privateButtonTrailingIconOpenClass]: isOpen,
            },
            (other as Unstable_ButtonProps)?.classes?.trailingIcon
          ),
        };
      }
    }

    return (
      <Component
        aria-controls={id}
        aria-haspopup="true"
        classes={otherClasses}
        onClick={(event) => {
          onClick?.(event);
          openDropdown(event);
        }}
        ref={ref}
        {...extra}
        {...other}
      />
    );
  }
);

export default withStyles(styles, { name: 'MuiSparkDropdownAnchor' })(
  DropdownAnchor
) as typeof DropdownAnchor;
