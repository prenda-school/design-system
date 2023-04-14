import type {
  UseAutocompleteProps as UseAutocompleteProps_mui,
  UseAutocompleteResultGetClearProps as UseAutocompleteResultGetClearProps_mui,
  UseAutocompleteResultGetInputLabelProps as UseAutocompleteResultGetInputLabelProps_mui,
  UseAutocompleteResultGetInputProps as UseAutocompleteResultGetInputProps_mui,
  UseAutocompleteResultGetListboxProps as UseAutocompleteResultGetListboxProps_mui,
  UseAutocompleteResultGetOptionProps as UseAutocompleteResultGetOptionProps_mui,
  UseAutocompleteResultGetPopupIndicatorProps as UseAutocompleteResultGetPopupIndicatorProps_mui,
  UseAutocompleteResultGetRootProps as UseAutocompleteResultGetRootProps_mui,
  UseAutocompleteResultGetTagProps as UseAutocompleteResultGetTagProps_mui,
  Value as Value_mui} from '@material-ui/lab/useAutocomplete';
import useAutocomplete_mui, {
  createFilterOptions as createFilterOptions_mui
} from '@material-ui/lab/useAutocomplete';
import type { HTMLAttributes } from 'react';

export const createFilterOptions = createFilterOptions_mui;

export type UseAutocompleteValue<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = Value_mui<T, Multiple, DisableClearable, FreeSolo>;

export type UseAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = UseAutocompleteProps_mui<T, Multiple, DisableClearable, FreeSolo> & {
  disabled?: boolean;
};

export interface UseAutocompleteResult<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> {
  getRootProps: UseAutocompleteResultGetRootProps;
  getInputProps: UseAutocompleteResultGetInputProps;
  getInputLabelProps: UseAutocompleteResultGetInputLabelProps;
  getClearIndicatorProps: UseAutocompleteResultGetClearIndicatorProps;
  getPopupIndicatorProps: UseAutocompleteResultGetPopupIndicatorProps;
  getMultipleValueProps: UseAutocompleteResultGetMultipleValueProps<T>;
  getListboxProps: UseAutocompleteResultGetListboxProps;
  getOptionProps: UseAutocompleteResultGetOptionProps<T>;
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

export type UseAutocompleteResultGetRootProps =
  UseAutocompleteResultGetRootProps_mui;

export type UseAutocompleteResultGetInputProps =
  UseAutocompleteResultGetInputProps_mui;

export type UseAutocompleteResultGetInputLabelProps =
  UseAutocompleteResultGetInputLabelProps_mui;

export type UseAutocompleteResultGetClearIndicatorProps =
  UseAutocompleteResultGetClearProps_mui;

export type UseAutocompleteResultGetPopupIndicatorProps =
  UseAutocompleteResultGetPopupIndicatorProps_mui;

export type UseAutocompleteResultGetMultipleValueProps<T> = (
  option: T,
  index: number
) => ReturnType<UseAutocompleteResultGetTagProps_mui> &
  Pick<HTMLAttributes<HTMLElement>, 'role'> & {
    'aria-disabled': boolean; // narrower than base attribute type
  };

export type UseAutocompleteResultGetListboxProps =
  UseAutocompleteResultGetListboxProps_mui;

export type UseAutocompleteResultGetOptionProps<T> = (
  option: T,
  index: number
) => ReturnType<UseAutocompleteResultGetOptionProps_mui<T>> & {
  'aria-disabled': boolean; // narrower than base attribute type
  'aria-selected': boolean; // narrower than base attribute type
};

function useAutocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>(
  props: UseAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
): UseAutocompleteResult<T, Multiple, DisableClearable, FreeSolo> {
  const {
    getClearProps,
    getOptionProps: getAutocompleteOptionProps,
    getTagProps,
    inputValue,
    ...other
  } = useAutocomplete_mui(props);

  const getClearIndicatorProps: UseAutocompleteResultGetClearIndicatorProps =
    getClearProps;

  const getOptionProps: UseAutocompleteResultGetOptionProps<T> = (
    option,
    index
  ) => {
    return getAutocompleteOptionProps({ option, index }) as ReturnType<
      UseAutocompleteResultGetOptionProps<T>
    >;
  };

  const getMultipleValueProps: UseAutocompleteResultGetMultipleValueProps<T> = (
    option,
    index
  ) => {
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

export default useAutocomplete;
