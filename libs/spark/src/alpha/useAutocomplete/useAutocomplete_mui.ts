import type {
  UseAutocompleteProps,
  Value,
} from '@material-ui/lab/useAutocomplete';
import type { HTMLAttributes, Key, LabelHTMLAttributes, Ref } from 'react';

declare module '@material-ui/lab/useAutocomplete' {
  export default function useAutocomplete<
    T,
    Multiple extends boolean | undefined = undefined,
    DisableClearable extends boolean | undefined = undefined,
    FreeSolo extends boolean | undefined = undefined
  >(
    props: UseAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
  ): {
    getRootProps: UseAutocompleteResultGetRootProps;
    getInputProps: UseAutocompleteResultGetInputProps;
    getInputLabelProps: UseAutocompleteResultGetInputLabelProps;
    getClearProps: UseAutocompleteResultGetClearProps;
    getPopupIndicatorProps: UseAutocompleteResultGetPopupIndicatorProps;
    getTagProps: UseAutocompleteResultGetTagProps;
    getListboxProps: UseAutocompleteResultGetListboxProps;
    getOptionProps: UseAutocompleteResultGetOptionProps<T>;
    id: string;
    inputValue: string;
    value: Value<T, Multiple, DisableClearable, FreeSolo>;
    dirty: boolean;
    popupOpen: boolean;
    focused: boolean;
    anchorEl: null | HTMLElement;
    setAnchorEl: () => void;
    focusedTag: number;
    groupedOptions: T[];
  };

  export type UseAutocompleteResultGetRootProps = (
    other: HTMLAttributes<HTMLElement>
  ) => HTMLAttributes<HTMLElement>;

  export type UseAutocompleteResultGetInputProps =
    () => HTMLAttributes<HTMLInputElement>;

  export type UseAutocompleteResultGetInputLabelProps = () => Pick<
    LabelHTMLAttributes<HTMLElement>,
    'id' | 'htmlFor'
  >;

  export type UseAutocompleteResultGetClearProps = () => Pick<
    HTMLAttributes<HTMLElement>,
    'tabIndex' | 'onClick'
  >;
  export type UseAutocompleteResultGetPopupIndicatorProps = () => Pick<
    HTMLAttributes<HTMLElement>,
    'tabIndex' | 'onClick'
  >;

  export type UseAutocompleteResultGetTagProps = (params: {
    index: number;
  }) => Pick<HTMLAttributes<HTMLElement>, 'tabIndex'> & {
    key: Key;
    'data-tag-index': number;
    onDelete?: (index: number) => void;
  };

  export type UseAutocompleteResultGetListboxProps = () => Pick<
    HTMLAttributes<HTMLElement>,
    'role' | 'id' | 'aria-labelledby' | 'onMouseDown'
  > & {
    ref: Ref<HTMLUListElement>;
  };

  export type UseAutocompleteResultGetOptionProps<T> = ({
    option,
    index,
  }: {
    option: T;
    index: number;
  }) => Pick<
    HTMLAttributes<HTMLElement>,
    | 'tabIndex'
    | 'role'
    | 'id'
    | 'onMouseOver'
    | 'onClick'
    | 'onTouchStart'
    | 'aria-disabled'
    | 'aria-selected'
  > & {
    key: Key;
    'data-option-index': number;
  };
}
