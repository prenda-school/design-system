import * as React from 'react';
import type { ButtonTypeMap } from '@material-ui/core';
import Button from '../Button/Button';
import { useDropdownContext } from '../DropdownContext';
import { OverridableComponent, OverrideProps } from '../utils';

export type DropdownAnchorProps<
  D extends React.ElementType = DropdownAnchorTypeMap['defaultComponent'],
  P = Record<string, unknown>
> = OverrideProps<DropdownAnchorTypeMap<P, D>, D>;

export interface DropdownAnchorTypeMap<
  P = Record<string, unknown>,
  D extends React.ElementType = ButtonTypeMap['defaultComponent']
> {
  props: P;
  defaultComponent: D;
  classKey: string;
}

const DropdownAnchor: OverridableComponent<DropdownAnchorTypeMap> = React.forwardRef(
  function DropdownAnchor(
    { component = Button, onClick, ...other }: DropdownAnchorProps,
    ref
  ) {
    const { id, openDropdown } = useDropdownContext();

    const Component = component as React.ElementType;

    return (
      <Component
        aria-controls={id}
        aria-haspopup="true"
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

export default DropdownAnchor;
