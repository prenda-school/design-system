import React, { ElementType, forwardRef } from 'react';
import { default as Button, ButtonTypeMap } from '../Button';
import { useDropdownContext } from '../DropdownContext';
import { OverridableComponent, OverrideProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

/** @deprecated */
export type DropdownAnchorProps<
  D extends ElementType = DropdownAnchorTypeMap['defaultComponent'],
  P = Record<string, unknown>
> = OverrideProps<DropdownAnchorTypeMap<P, D>, D>;

/** @deprecated */
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

/** @deprecated */
const DropdownAnchor: OverridableComponent<DropdownAnchorTypeMap> = forwardRef(
  function DropdownAnchor(
    { classes, component = Button, onClick, ...other }: DropdownAnchorProps,
    ref
  ) {
    const { id, openDropdown } = useDropdownContext();

    const Component = component as ElementType;

    const {
      'private-button-trailingIcon': privateButtonTrailingIconClass,
      'private-button-trailingIcon-open': privateButtonTrailingIconOpenClass,
      ...otherClasses
    } = classes;

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
        {...other}
      />
    );
  }
);

/** @deprecated */
export default withStyles(styles, { name: 'MuiSparkDropdownAnchor' })(
  DropdownAnchor
) as typeof DropdownAnchor;
