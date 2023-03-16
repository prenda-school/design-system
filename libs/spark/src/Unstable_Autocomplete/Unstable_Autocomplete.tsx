import Popper, { PopperProps } from '@material-ui/core/Popper';
import {
  AutocompleteProps,
  AutocompleteRenderGroupParams,
} from '@material-ui/lab/Autocomplete';
import clsx from 'clsx';
import React, {
  ComponentType,
  HTMLAttributes,
  Key,
  ReactNode,
  forwardRef,
} from 'react';
import Skeleton from '../Skeleton';
import Unstable_CheckboxMenuItem from '../Unstable_CheckboxMenuItem';
import Unstable_IconButton, {
  Unstable_IconButtonProps,
} from '../Unstable_IconButton';
import Unstable_Input, { Unstable_InputProps } from '../Unstable_Input';
import Unstable_InputAdornment from '../Unstable_InputAdornment';
import Unstable_ListSubheader from '../Unstable_ListSubheader';
import Unstable_MenuItem from '../Unstable_MenuItem';
import Unstable_Paper, { Unstable_PaperProps } from '../Unstable_Paper';
import Unstable_Tag, { Unstable_TagProps } from '../Unstable_Tag';
import { ChevronDown, Cross } from '../internal';
import { buildVariant } from '../theme/typography';
import useAutocomplete_unstable, {
  UseAutocomplete_UnstableResultGetOptionProps,
} from '../useAutocomplete_unstable';
import useFormControl_unstable, {
  FormControlProperties_Unstable,
} from '../useFormControl_unstable';
import { StandardProps } from '../utils';
import withStyles, { Styles } from '../withStyles';

export interface Unstable_AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> extends StandardProps<
      AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
      Unstable_AutocompleteClassKey,
      | 'ChipProps'
      | 'classes'
      | 'closeIcon'
      | 'getLimitTagsText'
      | 'getOptionLabel'
      | 'limitTags'
      | 'ListboxProps'
      | 'loading'
      | 'loadingText'
      | 'renderGroup'
      | 'renderInput'
      | 'renderOption'
      | 'renderTags'
      // form control
      | 'disabled'
      | 'fullWidth'
      | 'size'
    >,
    Partial<
      Pick<
        FormControlProperties_Unstable,
        'disabled' | 'error' | 'fullWidth' | 'required' | 'size' | 'success'
      >
    > {
  /**
   * Whether the options should render with checkboxes (i.e. as `CheckboxMenuItem`) when `multiple={true}`.
   */
  checkboxes?: boolean;
  /**
   * The icon to display in place of the default clear indicator icon.
   */
  clearIcon?: ReactNode;
  /**
   * The component used to render the clear indicator.
   */
  ClearIndicatorComponent?: ComponentType<HTMLAttributes<HTMLElement>>;
  /**
   * A multiple value child props getter. Use to customize the props of an option rendered in the multiple value when `multiple={true}`.
   */
  getMultipleValueChildProps?: Unstable_AutocompleteGetMultipleValueChildProps<T>;
  /**
   * A list option props getter. Use to customize the props of the list options.
   */
  getOptionProps?: Unstable_AutocompleteGetOptionProps<T>;
  /**
   * Used to determine the string value for a given option.
   */
  getOptionLabel?: Unstable_AutocompleteGetOptionLabel<T>;
  /**
   * The label to display when the visible values are truncated (`multipleValueVisibleLimit`).
   *
   * @param more The number of truncated elements.
   */
  getMultipleValueVisibleLimitText?: Unstable_AutocompleteGetMultipleValueVisibleLimitText;
  /**
   * Props applied to the Input element.
   */
  InputProps?: Partial<Unstable_InputProps>;
  /**
   * Props applied to the listbox element.
   */
  ListboxProps?: HTMLAttributes<HTMLElement>;
  /**
   * If `true`, the component's options are in a loading state.
   */
  loadingOptions?: boolean;
  /**
   * The text to display when options are in a loading state.
   */
  loadingOptionsText?: string;
  /**
   * The component used to render the list when there are no options and `loadingOptions={true}`.
   */
  LoadingOptionsComponent?: ComponentType<HTMLAttributes<HTMLElement>>;
  /**
   * The maximum number of values that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  multipleValueVisibleLimit?: number;
  /**
   * Whether to limit the maximum number of values that will be visible when focused.
   */
  multipleValueVisibleLimitWhenFocused?: boolean;
  /**
   * The component used to render the list when there are no options and `loadingOptions={false}` and `freeSolo={false}`.
   */
  NoOptionsComponent?: ComponentType<HTMLAttributes<HTMLElement>>;
  /**
   * Whether to prevent wrapping in the component (e.g. input, multiple value).
   */
  noWrap?: boolean;
  /**
   * Render the clear indicator.
   */
  renderClearIndicator?: Unstable_AutocompleteRenderIndicator;
  /**
   * Render the input.
   */
  renderInput?: Unstable_AutocompleteRenderInput;
  /**
   * Render the `value` of the input when `multiple={true}`.
   */
  renderMultipleValue?: Unstable_AutocompleteRenderMultipleValue<T>;
  /**
   * Render an option.
   */
  renderOption?: Unstable_AutocompleteRenderOption<T>;
  /**
   * Render an option group.
   */
  renderOptionGroup?: Unstable_AutocompleteRenderOptionGroup;
  /**
   * Render the popup indicator.
   */
  renderPopupIndicator?: Unstable_AutocompleteRenderIndicator;
  /**
   * Props applied to the `Paper` element.
   */
  PaperProps?: Partial<Unstable_PaperProps>;
  /**
   * The component used to render the popup indicator.
   */
  PopupIndicatorComponent?: ComponentType<HTMLAttributes<HTMLElement>>;
  /**
   * Whether the value should render as tags in the leading element of the input when `multiple={true}`.
   */
  tags?: boolean;
  /**
   * Props applied to the Tag element(s) when `tags={true}` and `multiple={true}`.
   * Use to apply props to every tag without discrimination.
   */
  TagProps?: Partial<Unstable_TagProps>;
}

// Renders

export type Unstable_AutocompleteRenderInput = (
  props: Partial<Unstable_InputProps>,
  state: Pick<FormControlProperties_Unstable, 'size'> & {
    clearIndicator: ReactNode;
    popupIndicator: ReactNode;
    multipleValue: ReactNode[];
  }
) => ReactNode;

export type Unstable_AutocompleteRenderOptionGroup = (
  groupProps: HTMLAttributes<HTMLLIElement> & { key: Key },
  groupLabelProps: HTMLAttributes<HTMLDivElement>,
  groupListProps: HTMLAttributes<HTMLUListElement> & { children: ReactNode },
  group: AutocompleteRenderGroupParams['group']
) => ReactNode;

export type Unstable_AutocompleteRenderOption<T> = (
  props: ReturnType<Unstable_AutocompleteGetOptionProps<T>>,
  option: T,
  state: {
    getOptionLabel: Unstable_AutocompleteGetOptionLabel<T>;
    selected: boolean;
    index: number;
    inputValue: string;
  }
) => ReactNode;

export type Unstable_AutocompleteRenderLoadingOptions = (
  props: HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
  }
) => ReactNode;

export type Unstable_AutocompleteRenderNoOptions = (
  props: HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
  }
) => ReactNode;

export type Unstable_AutocompleteRenderIndicator = (
  props: HTMLAttributes<HTMLButtonElement> & {
    component: ComponentType<HTMLAttributes<HTMLElement>>;
    children: ReactNode;
  },
  state: {
    dirty: boolean;
    disabled: boolean;
  }
) => ReactNode;

export type Unstable_AutocompleteRenderMultipleValue<T> = (
  getProps: Unstable_AutocompleteGetMultipleValueChildProps<T>,
  value: T[],
  state: Pick<FormControlProperties_Unstable, 'disabled' | 'size'> & {
    getOptionLabel: Unstable_AutocompleteGetOptionLabel<T>;
    inputValue: string;
  }
) => ReactNode[];

// Getters

export type Unstable_AutocompleteGetMultipleValueChildProps<T> = (
  option: T,
  index: number
) => HTMLAttributes<HTMLElement> & {
  onDelete: (index: number) => void;
};

export type Unstable_AutocompleteGetOptionProps<T> = (
  option: T,
  index: number
) => ReturnType<UseAutocomplete_UnstableResultGetOptionProps<T>> &
  Pick<HTMLAttributes<HTMLLIElement>, 'className'>;

export type Unstable_AutocompleteGetOptionLabel<T> = (option: T) => string;

type GetOptionState<T> = (
  option: T,
  index: number
) => {
  selected: boolean;
  index: number;
  inputValue: string;
  getOptionLabel: Unstable_AutocompleteGetOptionLabel<T>;
};

export type Unstable_AutocompleteGetMultipleValueVisibleLimitText = (
  more: number
) => ReactNode;

// Styles

export type Unstable_AutocompleteClassKey =
  | 'root'
  | 'focused'
  | 'inputRoot'
  | 'multipleValueChild'
  | 'input'
  | 'clearIndicator'
  | 'popupIndicator'
  | 'popper'
  | 'paper'
  | 'listbox'
  | 'option'
  | 'optionGroup'
  | 'optionGroupLabel'
  | 'optionGroupList';

type PrivateClassKey =
  | 'private-root-fullWidth'
  | 'private-root-hasClearIndicator'
  | 'private-root-hasPopupIndicator'
  | 'private-inputRoot-noWrap'
  | 'private-inputRoot-size-medium'
  | 'private-inputRoot-size-small'
  | 'private-multipleValueChild-tags'
  | 'private-inputLeadingEl'
  | 'private-inputLeadingEl-noWrap'
  | 'private-inputLeadingEl-noWrap-focused'
  | 'private-inputLeadingEl-size-medium'
  | 'private-inputLeadingEl-size-medium-tags'
  | 'private-inputLeadingEl-size-small'
  | 'private-inputLeadingEl-size-small-tags'
  | 'private-inputLeadingEl-tags'
  | 'private-inputLeadingEl-tags-noAdditionalLeadingEl'
  | 'private-inputTrailingEl'
  | 'private-inputTrailingEl-size-medium'
  | 'private-inputTrailingEl-size-small'
  | 'private-input-focused'
  | 'private-input-size-medium'
  | 'private-input-size-small'
  | 'private-clearIndicator-dirty'
  | 'private-popupIndicator-open'
  | 'private-popper-disablePortal'
  | 'private-listbox-loadingOptions'
  | 'private-listbox-noOptions';

const inputLeadingElSizeSmallTypography = buildVariant(
  400,
  14,
  16,
  undefined,
  'none',
  '"Inter", sans-serif',
  "'cv05' 1, 'ss03' 1"
);

export const styles: Styles<Unstable_AutocompleteClassKey | PrivateClassKey> = (
  theme
) => ({
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',

    maxWidth: theme.unstable_typography.pxToRem(320),
    width: '100%',
    verticalAlign: 'bottom',
    '&$focused $private-clearIndicator-dirty': {
      visibility: 'visible',
    },
    /* Avoid double tap issue on iOS */
    '@media (pointer: fine)': {
      '&:hover $private-clearIndicator-dirty': {
        visibility: 'visible',
      },
    },
  },
  /* Styles applied to the root element if `fullWidth={true}`. */
  'private-root-fullWidth': {
    maxWidth: '100%',
  },
  /* Styles applied to the root element when the popup icon is rendered. */
  'private-root-hasPopupIndicator': {},
  /* Styles applied to the root element when the clear icon is rendered. */
  'private-root-hasClearIndicator': {},
  /* Pseudo-class applied to the root element if focused. */
  focused: {},
  /* Styles applied to the Input element. */
  inputRoot: {
    flexWrap: 'wrap',
    '& $input': {
      width: 0,
      minWidth: '5ch',
    },
  },
  'private-inputRoot-noWrap': {
    flexWrap: 'nowrap',
  },
  'private-inputRoot-size-medium': {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    '$private-root-hasPopupIndicator &, $private-root-hasClearIndicator &': {
      paddingRight: 4 + 32 + 12,
    },
    '$private-root-hasPopupIndicator$private-root-hasClearIndicator &': {
      paddingRight: 4 + 32 + 4 + 32 + 12,
    },
  },
  'private-inputRoot-size-small': {
    paddingLeft: 4,
    paddingTop: 6,
    paddingBottom: 6,
    '$private-root-hasPopupIndicator &, $private-root-hasClearIndicator &': {
      paddingRight: 2 + 28 + 8, // spacing + popup-indicator + padding
    },
    '$private-root-hasPopupIndicator$private-root-hasClearIndicator &': {
      paddingRight: 2 + 28 + 2 + 28 + 8, // spacing + popup-indicator + gap + popup-indicator + padding
    },
  },
  /* Styles applied to the input element. */
  input: {
    flexGrow: 1,
    textOverflow: 'ellipsis',
    opacity: 0,
    paddingRight: 0,
  },
  'private-input-size-medium': {
    paddingLeft: 8,
    paddingTop: 4,
    paddingBottom: 4,
  },
  'private-input-size-small': {
    paddingLeft: 4,
    paddingTop: 0,
    paddingBottom: 0,
  },
  'private-input-focused': {
    opacity: 1,
  },
  'private-inputLeadingEl': {
    alignItems: 'center',
    alignSelf: 'flex-start',
    color: theme.unstable_palette.text.subdued,
    display: 'inline-flex',
    flexWrap: 'wrap',
    marginRight: 0,
    marginTop: 0,
    '.Mui-disabled > &': {
      color: theme.unstable_palette.text.disabled,
    },
    '& [class*="MuiSparkUnstable_InputAdornment-root"]': {
      alignSelf: 'center',
      marginBottom: 0,
      marginTop: 0,
    },
  },
  'private-inputLeadingEl-noWrap': {
    flexWrap: 'nowrap',
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
  },
  'private-inputLeadingEl-noWrap-focused': {
    flexDirection: 'row-reverse',
  },
  'private-inputLeadingEl-size-medium': {
    ...theme.unstable_typography.body,
    gap: 4,
    minHeight: 32,
    '& > *:first-child': {
      marginLeft: 8,
    },
  },
  'private-inputLeadingEl-size-medium-tags': {},
  'private-inputLeadingEl-size-small': {
    ...inputLeadingElSizeSmallTypography,
    gap: 2,
    minHeight: 24,
    '& > *:first-child': {
      marginLeft: 4,
    },
  },
  'private-inputLeadingEl-size-small-tags': {},
  'private-inputLeadingEl-tags-noAdditionalLeadingEl': {
    marginLeft: 0,
  },
  'private-inputLeadingEl-tags': {},
  /* Styles applied to leading element child elements. */
  multipleValueChild: {},
  'private-multipleValueChild-tags': {
    '&:first-child': {
      marginLeft: 0,
    },
  },
  'private-inputTrailingEl': {
    display: 'flex',
    position: 'absolute', // support wrapping leading element
    margin: 0,
  },
  'private-inputTrailingEl-size-medium': {
    gap: 4,
    right: 12,
    top: 'calc(50% - 16px)',
  },
  'private-inputTrailingEl-size-small': {
    gap: 2,
    right: 8,
    top: 'calc(50% - 14px)',
  },
  /* Styles applied to the clear indicator. */
  clearIndicator: {
    visibility: 'hidden',
  },
  /* Styles applied to the clear indicator if the input is dirty. */
  'private-clearIndicator-dirty': {},
  /* Styles applied to the clear indicator if `size='medium'`. */
  'private-clearIndicator-size-medium': {},
  /* Styles applied to the clear indicator if `size='small'`. */
  'private-clearIndicator-size-small': {
    '& [class*="MuiSparkUnstable_IconButton-label"]': {
      fontSize: theme.unstable_typography.pxToRem(20),
    },
  },
  /* Styles applied to the popup indicator. */
  popupIndicator: {
    '& [class*="MuiSparkUnstable_IconButton-label"]': {
      transition: 'transform 250ms ease',
    },
  },
  /* Styles applied to the popup indicator if the popup is open. */
  'private-popupIndicator-open': {
    '& [class*="MuiSparkUnstable_IconButton-label"]': {
      transform: 'rotate(180deg)',
    },
  },
  /* Styles applied to the popup indicator if `disabled={true}`. */
  'private-popupIndicator-disabled': {
    '&&': {
      backgroundColor: 'transparent',
    },
  },
  /* Styles applied to the popup indicator if `size='medium'`. */
  'private-popupIndicator-size-medium': {},
  /* Styles applied to the popup indicator if `size='small'`. */
  'private-popupIndicator-size-small': {
    '& [class*="MuiSparkUnstable_IconButton-label"]': {
      fontSize: theme.unstable_typography.pxToRem(20),
    },
  },
  /* Styles applied to the popper element. */
  popper: {
    zIndex: theme.zIndex.modal,
  },
  /* Styles applied to the popper element if `disablePortal={true}`. */
  'private-popper-disablePortal': {
    position: 'absolute',
  },
  /* Styles applied to the `Paper` component. */
  paper: {
    // ...theme.typography.body1,
    overflow: 'hidden',
    margin: '4px 0',
  },
  /* Styles applied to the `listbox` component. */
  listbox: {
    listStyle: 'none',
    margin: 0,
    padding: '8px 0',
    maxHeight: '40vh',
    overflow: 'auto',
  },
  /* Styles applied to the optionsLoading wrapper. */
  'private-listbox-loadingOptions': {
    ...theme.unstable_typography.body,
    color: theme.unstable_palette.text.subdued,
    padding: '8px 16px',
  },
  /* Styles applied to the no option wrapper. */
  'private-listbox-noOptions': {
    ...theme.unstable_typography.body,
    color: theme.unstable_palette.text.subdued,
    padding: '8px 16px',
  },
  /* Styles applied to the option elements. */
  option: {},
  /* Styles applied to the option group root elements (li). */
  optionGroup: {},
  /* Styles applied to the option group label elements. */
  optionGroupLabel: {},
  /* Styles applied to the option group list elements (ul). */
  optionGroupList: {
    padding: 0,
    '& $option': {
      paddingLeft: 24,
    },
  },
});

// default components

const DisablePortal = (props: PopperProps) => {
  const { anchorEl, open, ...other } = props;
  return <div {...other} />;
};

const DefaultIndicatorComponent = (props: Unstable_IconButtonProps) => (
  <Unstable_IconButton variant="ghost" size="small" {...props} />
);

const DefaultPaperComponent = (props: Unstable_PaperProps) => {
  const {
    bgcolor = 'default',
    border = 'none',
    radius = 'sm',
    shadow = 'E400',
    ...other
  } = props;

  return (
    <Unstable_Paper
      bgcolor={bgcolor}
      border={border}
      radius={radius}
      shadow={shadow}
      {...other}
    />
  );
};

// default renders

const defaultRenderTags: Unstable_AutocompleteRenderMultipleValue<unknown> = (
  getProps,
  value,
  state
) => {
  return value.map((option, index) => {
    const {
      children: _children,
      color: _color,
      ...other
    } = getProps(option, index);

    return (
      <Unstable_Tag
        disabled={state.disabled}
        size={state.size}
        label={state.getOptionLabel(option)}
        {...other}
      />
    );
  });
};

const defaultRenderInput: Unstable_AutocompleteRenderInput = (props, state) => {
  const { leadingEl, ...other } = props;

  return (
    <Unstable_Input
      {...other}
      leadingEl={
        <>
          {leadingEl ? (
            <Unstable_InputAdornment
              className={props.className}
              size={state.size}
              position="start"
            >
              {leadingEl}
            </Unstable_InputAdornment>
          ) : null}

          {state.multipleValue ? state.multipleValue : null}
        </>
      }
      renderLeadingEl={(props) => <div {...props} />}
      trailingEl={
        <>
          {state.clearIndicator}
          {state.popupIndicator}
        </>
      }
    />
  );
};

const defaultRenderOption: Unstable_AutocompleteRenderOption<unknown> = (
  props,
  option,
  state
) => {
  return (
    <Unstable_MenuItem {...props} selected={state.selected}>
      {state.getOptionLabel(option)}
    </Unstable_MenuItem>
  );
};

const defaultRenderOptionGroup: Unstable_AutocompleteRenderOptionGroup = (
  groupProps,
  groupLabelProps,
  groupListProps,
  group
) => (
  <li {...groupProps}>
    <Unstable_ListSubheader component="div" {...groupLabelProps}>
      {group}
    </Unstable_ListSubheader>
    <ul {...groupListProps} />
  </li>
);

const defaultRenderCheckboxesOption: Unstable_AutocompleteRenderOption<
  unknown
> = (props, option, state) => {
  return (
    <Unstable_CheckboxMenuItem
      {...props}
      selected={state.selected}
      value={state.index.toString()} // this may be a bad thing to do => omit and expect error
    >
      {state.getOptionLabel(option)}
    </Unstable_CheckboxMenuItem>
  );
};

const defaultRenderIndicator: Unstable_AutocompleteRenderIndicator = (
  props,
  state
) => {
  const { component: Component, ...other } = props;

  return (
    <Component
      // @ts-expect-error :TODO: type so this is fine
      disabled={state.disabled}
      {...other}
    />
  );
};

const defaultRenderMultipleValue: Unstable_AutocompleteRenderMultipleValue<
  unknown
> = (getProps, value, state) => {
  return value.map((option, index) => {
    const { onDelete, ...other } = getProps(option, index);
    return (
      <span {...other}>
        {state.getOptionLabel(option)}
        {index < value.length - 1 ? ',' : null}
        {index === value.length - 1 ? (
          <span style={{ display: 'inline-block', width: '.25em' }}>
            {state.inputValue ? ',' : null}
          </span>
        ) : null}
      </span>
    );
  });
};

// default prop getters

const defaultGetOptionLabel: Unstable_AutocompleteGetOptionLabel<unknown> = (
  option
) => option as string;

const defaultGetVisibleMultipleValueLimitText = (more) => `+${more}`;

// component

const UnstyledUnstable_Autocomplete = forwardRef(function Unstable_Autocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>(
  props: Unstable_AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
  ref
) {
  const {
    // no idea why this section exists
    /* eslint-disable @typescript-eslint/no-unused-vars */
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    checkboxes,
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    debug = false,
    defaultValue = props.multiple ? [] : null,
    disableCloseOnSelect = false,
    disabledItemsFocusable = false,
    disableListWrap = false,
    filterSelectedOptions = false,
    handleHomeEndKeys = !props.freeSolo,
    includeInputInList = false,
    openOnFocus = false,
    selectOnFocus = !props.freeSolo,
    /* eslint-enable @typescript-eslint/no-unused-vars */
    classes,
    className,
    clearIcon = <Cross />,
    clearText = 'Clear',
    ClearIndicatorComponent = DefaultIndicatorComponent,
    closeText = 'Close',
    disableClearable = false,
    disablePortal = false,
    filterOptions,
    forcePopupIcon = 'auto',
    freeSolo = false,
    getMultipleValueVisibleLimitText = defaultGetVisibleMultipleValueLimitText,
    getMultipleValueChildProps: getMultipleValueChildPropsProp,
    getOptionProps: getOptionPropsProp,
    getOptionDisabled,
    getOptionLabel = defaultGetOptionLabel,
    getOptionSelected,
    groupBy,
    InputProps,
    inputValue: inputValueProp,
    multipleValueVisibleLimitWhenFocused = false,
    ListboxComponent = 'ul',
    ListboxProps,
    loadingOptions = false,
    loadingOptionsText = 'Loading…',
    LoadingOptionsComponent = 'div',
    multiple = false,
    noOptionsText = 'No options',
    NoOptionsComponent = 'div',
    noWrap = false,
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open,
    openText = 'Open',
    options,
    PaperComponent = DefaultPaperComponent,
    PaperProps,
    PopperComponent: PopperComponentProp = Popper,
    popupIcon = <ChevronDown />,
    PopupIndicatorComponent = DefaultIndicatorComponent,
    renderClearIndicator = defaultRenderIndicator,
    renderInput = defaultRenderInput,
    renderOptionGroup = defaultRenderOptionGroup,
    renderOption = checkboxes
      ? defaultRenderCheckboxesOption
      : defaultRenderOption,
    renderPopupIndicator = defaultRenderIndicator,
    TagProps,
    tags = false,
    value: valueProp,
    multipleValueVisibleLimit = -1,
    // needs to come after `tags`
    renderMultipleValue = tags ? defaultRenderTags : defaultRenderMultipleValue,
    // form control
    disabled: disabledProp,
    error: errorProp,
    fullWidth: fullWidthProp,
    id: idProp,
    required: requiredProp,
    size: sizeProp,
    success: successProp,
    ...other
  } = props;
  /* eslint-enable no-unused-vars */

  const PopperComponent = disablePortal ? DisablePortal : PopperComponentProp;

  const formControl = useFormControl_unstable({
    disabled: disabledProp,
    error: errorProp,
    fullWidth: fullWidthProp,
    inputId: idProp,
    required: requiredProp,
    size: sizeProp,
    success: successProp,
  });

  const {
    getRootProps,
    getInputProps,
    getPopupIndicatorProps,
    getClearIndicatorProps,
    getMultipleValueProps: getAutocompleteMultipleValueProps,
    getListboxProps,
    getOptionProps: getAutocompleteOptionProps,
    value,
    dirty,
    id,
    popupOpen,
    focused,
    focusedTag,
    anchorEl,
    setAnchorEl,
    inputValue,
    groupedOptions,
  } = useAutocomplete_unstable({
    ...props,
    componentName: 'Autocomplete',
    id: formControl.inputId,
    disabled: formControl.disabled,
  });

  const hasClearIndicator = !disableClearable && !formControl.disabled;
  const hasPopupIndicator =
    (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;
  const hasLoadingOptions = loadingOptions && groupedOptions.length === 0;
  const hasNoOptions =
    groupedOptions.length === 0 && !freeSolo && !loadingOptions;

  let multipleValue: ReactNode[] | undefined;

  if (multiple && (value as T[]).length > 0) {
    multipleValue = renderMultipleValue(
      (option, index) => {
        const consumerProps = {
          ...(tags && TagProps),
          ...getMultipleValueChildPropsProp?.(option as T, index),
        };
        return {
          ...getAutocompleteMultipleValueProps(option as T, index),
          ...consumerProps,
          className: clsx(
            classes.multipleValueChild,
            {
              [classes['private-multipleValueChild-tags']]: tags,
            },
            consumerProps?.className
          ),
        };
      },
      value as T[],
      {
        disabled: formControl.disabled,
        getOptionLabel,
        size: formControl.size,
        inputValue,
      }
    );
  }

  if (multipleValueVisibleLimit > -1 && Array.isArray(multipleValue)) {
    const more = multipleValue.length - multipleValueVisibleLimit;
    if (
      (!focused || (focused && multipleValueVisibleLimitWhenFocused)) &&
      more > 0
    ) {
      multipleValue = multipleValue.splice(0, multipleValueVisibleLimit);
      multipleValue.push(
        <span
          className={clsx(classes.multipleValueChild)}
          key={multipleValue.length}
        >
          {getMultipleValueVisibleLimitText(more)}
        </span>
      );
    }
  }

  if (noWrap && focused && Array.isArray(multipleValue)) {
    multipleValue.reverse();
  }

  const getOptionProps: Unstable_AutocompleteGetOptionProps<T> = (
    option,
    index
  ) => {
    return {
      ...getAutocompleteOptionProps(option, index),
      className: classes.option,
      ...getOptionPropsProp?.(option, index),
    };
  };

  const getOptionState: GetOptionState<T> = (option, index) => {
    const props = getAutocompleteOptionProps(option, index);
    return {
      selected: props['aria-selected'],
      index,
      inputValue,
      getOptionLabel,
    };
  };

  return (
    <React.Fragment>
      {/* Root */}
      <div
        ref={ref}
        className={clsx(
          classes.root,
          {
            [classes.focused]: focused,
            [classes['private-root-fullWidth']]: formControl.fullWidth,
            [classes['private-root-hasClearIndicator']]: hasClearIndicator,
            [classes['private-root-hasPopupIndicator']]: hasPopupIndicator,
          },
          className
        )}
        {...getRootProps(other)}
      >
        {/* Input */}
        {renderInput(
          {
            id,
            ref: setAnchorEl,
            // pass all parts of being a form control -- avoids different default values when used outside of a provided context
            fullWidth: true,
            disabled: formControl.disabled,
            error: formControl.error,
            required: formControl.required,
            size: formControl.size,
            success: formControl.success,
            // rest
            ...InputProps,
            classes: {
              root: clsx(
                classes.inputRoot,
                classes[`private-inputRoot-size-${formControl.size}`],
                {
                  [classes['private-inputRoot-noWrap']]: noWrap,
                },
                InputProps?.classes?.root
              ),
              leadingEl: clsx(
                classes['private-inputLeadingEl'],
                classes[`private-inputLeadingEl-size-${formControl.size}`],
                {
                  [classes[
                    `private-inputLeadingEl-size-${formControl.size}-tags`
                  ]]: tags,
                  [classes['private-inputLeadingEl-noWrap']]: noWrap,
                  [classes['private-inputLeadingEl-noWrap-focused']]:
                    noWrap && focused,
                  [classes['private-inputLeadingEl-tags']]: tags,
                  [classes[
                    'private-inputLeadingEl-tags-noAdditionalLeadingEl'
                  ]]: tags && !InputProps?.leadingEl,
                },
                InputProps?.classes?.leadingEl
              ),
              trailingEl: clsx(
                classes['private-inputTrailingEl'],
                classes[`private-inputTrailingEl-size-${formControl.size}`],
                InputProps?.classes?.trailingEl
              ),
            },
            inputProps: {
              className: clsx(
                classes.input,
                classes[`private-input-size-${formControl.size}`],
                {
                  [classes['private-input-focused']]: focusedTag === -1,
                },
                InputProps?.inputProps?.className
              ),
              disabled: formControl.disabled,
              ...getInputProps(),
              ...InputProps?.inputProps,
            },
          },
          {
            size: formControl.size,
            // Clear Indicator
            clearIndicator: hasClearIndicator
              ? renderClearIndicator(
                  {
                    'aria-label': clearText,
                    children: clearIcon,
                    className: clsx(
                      classes.clearIndicator,
                      classes[
                        `private-clearIndicator-size-${formControl.size}`
                      ],
                      {
                        [classes['private-clearIndicator-dirty']]: dirty,
                      }
                    ),
                    component: ClearIndicatorComponent,
                    title: clearText,
                    ...getClearIndicatorProps(),
                  },
                  {
                    dirty,
                    disabled: formControl.disabled,
                  }
                )
              : null,
            // Multiple Value
            multipleValue,
            // Popup Indicator
            popupIndicator: hasPopupIndicator
              ? renderPopupIndicator(
                  {
                    'aria-label': popupOpen ? closeText : openText,
                    children: popupIcon,
                    className: clsx(
                      classes.popupIndicator,
                      classes[
                        `private-popupIndicator-size-${formControl.size}`
                      ],
                      {
                        [classes['private-popupIndicator-disabled']]:
                          formControl.disabled,
                        [classes['private-popupIndicator-open']]: popupOpen,
                      }
                    ),
                    component: PopupIndicatorComponent,
                    title: popupOpen ? closeText : openText,
                    ...getPopupIndicatorProps(),
                  },
                  {
                    dirty,
                    disabled: formControl.disabled,
                  }
                )
              : null,
          }
        )}
      </div>

      {/* Popup */}
      {popupOpen && anchorEl ? (
        <PopperComponent
          className={clsx(classes.popper, {
            [classes['private-popper-disablePortal']]: disablePortal,
          })}
          style={{
            width: anchorEl ? anchorEl.clientWidth : null,
          }}
          role="presentation"
          anchorEl={anchorEl}
          open
        >
          {/* Paper */}
          <PaperComponent
            {...PaperProps}
            className={clsx(classes.paper, PaperProps?.className)}
          >
            {/* Listbox Loading */}
            {hasLoadingOptions ? (
              <LoadingOptionsComponent
                className={classes['private-listbox-loadingOptions']}
              >
                <Skeleton animation="wave" aria-label={loadingOptionsText} />
              </LoadingOptionsComponent>
            ) : null}

            {/* Listbox No Options */}
            {hasNoOptions ? (
              <NoOptionsComponent
                className={classes['private-listbox-noOptions']}
              >
                {noOptionsText}
              </NoOptionsComponent>
            ) : null}

            {/* Listbox */}
            {groupedOptions.length > 0 ? (
              <ListboxComponent
                {...getListboxProps()}
                {...ListboxProps}
                className={clsx(classes.listbox, ListboxProps?.className)}
              >
                {groupedOptions.map((option, index) =>
                  groupBy
                    ? // List Option Group
                      renderOptionGroup(
                        {
                          key: option.key,
                          className: classes.optionGroup,
                        },
                        { className: classes.optionGroupLabel },
                        {
                          className: classes.optionGroupList,
                          children: option.options.map((option2, index2) => {
                            const index = option.index + index2;
                            return renderOption(
                              getOptionProps(option2, index),
                              option2,
                              getOptionState(option2, index)
                            );
                          }),
                        },
                        option.group
                      )
                    : // List Option
                      renderOption(
                        getOptionProps(option, index),
                        option,
                        getOptionState(option, index)
                      )
                )}
              </ListboxComponent>
            ) : null}
          </PaperComponent>
        </PopperComponent>
      ) : null}
    </React.Fragment>
  );
}) as <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>(
  props: Unstable_AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
) => JSX.Element;

const Unstable_Autocomplete = withStyles(styles, {
  name: 'MuiPDSUnstable_Autocomplete',
})(UnstyledUnstable_Autocomplete) as typeof UnstyledUnstable_Autocomplete;

export default Unstable_Autocomplete;
