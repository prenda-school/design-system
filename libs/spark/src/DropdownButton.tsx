import * as React from 'react';
import { Button, ButtonProps } from './Button';
import { useDropdownContext } from './DropdownContext';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DropdownButtonProps extends ButtonProps {}

export default function DropdownButton(props: DropdownButtonProps) {
  const { id, handleClick } = useDropdownContext();
  return (
    <Button
      aria-controls={id}
      aria-haspopup="true"
      onClick={handleClick}
      {...props}
    />
  );
}
