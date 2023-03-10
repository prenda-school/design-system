import useAutocomplete, {
  createFilterOptions,
  UseAutocompleteProps,
  UseAutocompleteResultGetClearProps,
  UseAutocompleteResultGetInputLabelProps,
  UseAutocompleteResultGetInputProps,
  UseAutocompleteResultGetListboxProps,
  UseAutocompleteResultGetOptionProps,
  UseAutocompleteResultGetPopupIndicatorProps,
  UseAutocompleteResultGetRootProps,
  UseAutocompleteResultGetTagProps,
  Value,
} from '@material-ui/lab/useAutocomplete';
import { HTMLAttributes, Key, LabelHTMLAttributes, Ref } from 'react';

export { createFilterOptions };

export type UseAutocompleteValue<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = Value<T, Multiple, DisableClearable, FreeSolo>;

export type UseAutocomplete_UnstableProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = UseAutocompleteProps<T, Multiple, DisableClearable, FreeSolo> & {
  disabled?: boolean;
};

export interface UseAutocomplete_UnstableResult<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> {
  getRootProps: UseAutocomplete_UnstableResultGetRootProps;
  getInputProps: UseAutocomplete_UnstableResultGetInputProps;
  getInputLabelProps: UseAutocomplete_UnstableResultGetInputLabelProps;
  getClearIndicatorProps: UseAutocomplete_UnstableResultGetClearIndicatorProps;
  getPopupIndicatorProps: UseAutocomplete_UnstableResultGetPopupIndicatorProps;
  getMultipleValueProps: UseAutocomplete_UnstableResultGetMultipleValueProps<T>;
  getListboxProps: UseAutocomplete_UnstableResultGetListboxProps;
  getOptionProps: UseAutocomplete_UnstableResultGetOptionProps<T>;
  id: string;
  inputValue: string;
  value: UseAutocompleteValue<T, Multiple, DisableClearable, FreeSolo>;
  dirty: boolean;
  popupOpen: boolean;
  focused: boolean;
  anchorEl: null | HTMLElement;
  setAnchorEl: () => void;
  focusedTag: number;
  groupedOptions:
    | T[]
    | {
        key: number;
        index: number;
        group: string;
        options: T[];
      }[];
}

export type UseAutocomplete_UnstableResultGetRootProps =
  UseAutocompleteResultGetRootProps;

export type UseAutocomplete_UnstableResultGetInputProps =
  UseAutocompleteResultGetInputProps;

export type UseAutocomplete_UnstableResultGetInputLabelProps =
  UseAutocompleteResultGetInputLabelProps;

export type UseAutocomplete_UnstableResultGetClearIndicatorProps =
  UseAutocompleteResultGetClearProps;

export type UseAutocomplete_UnstableResultGetPopupIndicatorProps =
  UseAutocompleteResultGetPopupIndicatorProps;

export type UseAutocomplete_UnstableResultGetMultipleValueProps<T> = (
  option: T,
  index: number
) => ReturnType<UseAutocompleteResultGetTagProps> &
  Pick<HTMLAttributes<HTMLElement>, 'role'> & {
    'aria-disabled': boolean; // narrower than base attribute type
  };

export type UseAutocomplete_UnstableResultGetListboxProps =
  UseAutocompleteResultGetListboxProps;

export type UseAutocomplete_UnstableResultGetOptionProps<T> = (
  option: T,
  index: number
) => ReturnType<UseAutocompleteResultGetOptionProps<T>> & {
  'aria-disabled': boolean; // narrower than base attribute type
  'aria-selected': boolean; // narrower than base attribute type
};

function useAutocomplete_unstable<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>(
  props: UseAutocomplete_UnstableProps<T, Multiple, DisableClearable, FreeSolo>
): UseAutocomplete_UnstableResult<T, Multiple, DisableClearable, FreeSolo> {
  const {
    getClearProps,
    getOptionProps: getAutocompleteOptionProps,
    getTagProps,
    inputValue,
    ...other
  } = useAutocomplete(props);

  const getClearIndicatorProps: UseAutocomplete_UnstableResultGetClearIndicatorProps =
    getClearProps;

  const getOptionProps: UseAutocomplete_UnstableResultGetOptionProps<T> = (
    option,
    index
  ) => {
    return getAutocompleteOptionProps({ option, index }) as ReturnType<
      UseAutocomplete_UnstableResultGetOptionProps<T>
    >;
  };

  const getMultipleValueProps: UseAutocomplete_UnstableResultGetMultipleValueProps<
    T
  > = (option, index) => {
    return {
      'aria-disabled': props.disabled,
      role: 'button',
      ...getTagProps({ index }),
    };
  };

  return {
    ...other,
    getClearIndicatorProps,
    getOptionProps,
    getMultipleValueProps,
    inputValue,
  };
}

export default useAutocomplete_unstable;

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
