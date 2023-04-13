import Popper, { PopperProps } from '@material-ui/core/Popper';
import {
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteRenderGroupParams as MuiAutocompleteRenderGroupParams,
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
import CheckboxMenuItem from '../CheckboxMenuItem';
import IconButton, { IconButtonProps } from '../IconButton';
import Input, { InputProps } from '../Input';
import InputAdornment from '../InputAdornment';
import ListSubheader from '../ListSubheader';
import MenuItem from '../MenuItem';
import Paper, { PaperProps } from '../Paper';
import Tag, { TagProps } from '../Tag';
import { ChevronDown, Cross } from '../../internal';
import { buildVariant } from '../theme/typography';
import useAutocomplete, {
  UseAutocompleteResultGetOptionProps,
} from '../useAutocomplete';
import useFormControl, { FormControlProperties } from '../useFormControl';
import { StandardProps } from '../../utils';
import withStyles, { Styles } from '../../withStyles';

export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> extends StandardProps<
      MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
      AutocompleteClassKey,
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
        FormControlProperties,
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
  getMultipleValueChildProps?: AutocompleteGetMultipleValueChildProps<T>;
  /**
   * A list option props getter. Use to customize the props of the list options.
   */
  getOptionProps?: AutocompleteGetOptionProps<T>;
  /**
   * Used to determine the string value for a given option.
   */
  getOptionLabel?: AutocompleteGetOptionLabel<T>;
  /**
   * The label to display when the visible values are truncated (`multipleValueVisibleLimit`).
   *
   * @param more The number of truncated elements.
   */
  getMultipleValueVisibleLimitText?: AutocompleteGetMultipleValueVisibleLimitText;
  /**
   * Props applied to the Input element.
   */
  InputProps?: Partial<InputProps>;
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
  renderClearIndicator?: AutocompleteRenderIndicator;
  /**
   * Render the input.
   */
  renderInput?: AutocompleteRenderInput;
  /**
   * Render the `value` of the input when `multiple={true}`.
   */
  renderMultipleValue?: AutocompleteRenderMultipleValue<T>;
  /**
   * Render an option.
   */
  renderOption?: AutocompleteRenderOption<T>;
  /**
   * Render an option group.
   */
  renderOptionGroup?: AutocompleteRenderOptionGroup;
  /**
   * Render the popup indicator.
   */
  renderPopupIndicator?: AutocompleteRenderIndicator;
  /**
   * Props applied to the `Paper` element.
   */
  PaperProps?: Partial<PaperProps>;
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
  TagProps?: Partial<TagProps>;
}

// Renders

export type AutocompleteRenderInput = (
  props: Partial<InputProps>,
  state: Pick<FormControlProperties, 'size'> & {
    clearIndicator: ReactNode;
    popupIndicator: ReactNode;
    multipleValue: ReactNode | ReactNode[];
    noWrap: boolean;
  }
) => ReactNode;

export type AutocompleteRenderOptionGroup = (
  groupProps: HTMLAttributes<HTMLLIElement> & { key: Key },
  groupLabelProps: HTMLAttributes<HTMLDivElement>,
  groupListProps: HTMLAttributes<HTMLUListElement> & { children: ReactNode },
  group: MuiAutocompleteRenderGroupParams['group']
) => ReactNode;

export type AutocompleteRenderOption<T> = (
  props: ReturnType<AutocompleteGetOptionProps<T>>,
  option: T,
  state: {
    getOptionLabel: AutocompleteGetOptionLabel<T>;
    selected: boolean;
    index: number;
    inputValue: string;
  }
) => ReactNode;

export type AutocompleteRenderLoadingOptions = (
  props: HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
  }
) => ReactNode;

export type AutocompleteRenderNoOptions = (
  props: HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
  }
) => ReactNode;

export type AutocompleteRenderIndicator = (
  props: HTMLAttributes<HTMLButtonElement> & {
    component: ComponentType<HTMLAttributes<HTMLElement>>;
    children: ReactNode;
  },
  state: {
    dirty: boolean;
    disabled: boolean;
  }
) => ReactNode;

export type AutocompleteRenderMultipleValue<T> = (
  getProps: AutocompleteGetMultipleValueChildProps<T>,
  value: T[],
  state: Pick<FormControlProperties, 'disabled' | 'size'> & {
    getOptionLabel: AutocompleteGetOptionLabel<T>;
    inputValue: string;
  }
) => ReactNode[];

// Getters

export type AutocompleteGetMultipleValueChildProps<T> = (
  option: T,
  index: number
) => HTMLAttributes<HTMLElement> & {
  onDelete: (index: number) => void;
};

export type AutocompleteGetOptionProps<T> = (
  option: T,
  index: number
) => ReturnType<UseAutocompleteResultGetOptionProps<T>> &
  Pick<HTMLAttributes<HTMLLIElement>, 'className'>;

export type AutocompleteGetOptionLabel<T> = (option: T) => string;

type GetOptionState<T> = (
  option: T,
  index: number
) => {
  selected: boolean;
  index: number;
  inputValue: string;
  getOptionLabel: AutocompleteGetOptionLabel<T>;
};

export type AutocompleteGetMultipleValueVisibleLimitText = (
  more: number
) => ReactNode;

// Styles

export type AutocompleteClassKey =
  | 'root'
  | 'focused'
  | 'inputRoot'
  | 'multipleValueWrapper'
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
  | 'private-multipleValueWrapper-size-medium'
  | 'private-multipleValueWrapper-size-small'
  | 'private-multipleValueWrapper-focused'
  | 'private-multipleValueChild-size-medium'
  | 'private-multipleValueChild-size-small'
  | 'private-multipleValueChild-tags'
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

const styles: Styles<AutocompleteClassKey | PrivateClassKey> = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',

    maxWidth: theme.typography_alpha.pxToRem(320),
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
    alignItems: 'center',
    alignSelf: 'flex-start',
    display: 'inline-flex',
    // flexWrap: 'wrap',
    marginRight: 0,
    marginTop: 0,
    '& > $input': {
      width: 0,
      minWidth: '5ch',
    },
    '& [class*="MuiSpark_alpha_InputAdornment-root"]': {
      alignSelf: 'center',
      marginBottom: 0,
      marginTop: 0,
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
    ...theme.typography_alpha.body,
    gap: 4,
    '& [class*="MuiSpark_alpha_InputAdornment-root"]': {
      marginLeft: 8,
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
    ...inputLeadingElSizeSmallTypography,
    gap: 2,
    '& [class*="MuiSpark_alpha_InputAdornment-root"]': {
      marginLeft: 4,
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
    paddingLeft: 4,
    paddingTop: 4,
    paddingBottom: 4,
    '&:first-child': {
      paddingLeft: 8,
    },
  },
  'private-input-size-small': {
    paddingLeft: 2,
    paddingTop: 4,
    paddingBottom: 4,
    '&:first-child': {
      paddingLeft: 4,
    },
  },
  'private-input-focused': {
    opacity: 1,
  },
  /* Styles applied to the multiple value wrapping element (applied when `noWrap={true}`). */
  multipleValueWrapper: {
    display: 'inline-flex',
    flexWrap: 'nowrap',
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
  },
  'private-multipleValueWrapper-size-medium': {
    gap: 4,
  },
  'private-multipleValueWrapper-size-small': {
    gap: 2,
  },
  'private-multipleValueWrapper-focused': {
    flexDirection: 'row-reverse',
    '& > $multipleValueChild:first-child': {
      marginLeft: 0,
    },
  },
  /* Styles applied to multiple value child elements. */
  multipleValueChild: {
    color: theme.palette_alpha.text.subdued,
    marginTop: 4,
    marginBottom: 4,
    '.Mui-disabled &': {
      color: theme.palette_alpha.text.disabled,
    },
  },
  'private-multipleValueChild-size-medium': {
    '&:first-child': {
      marginLeft: 8,
    },
  },
  'private-multipleValueChild-size-small': {
    '&:first-child': {
      marginLeft: 4,
    },
  },
  'private-multipleValueChild-tags': {
    marginTop: 0,
    marginBottom: 0,
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
    '& [class*="MuiSpark_alpha_IconButton-label"]': {
      fontSize: theme.typography_alpha.pxToRem(20),
    },
  },
  /* Styles applied to the popup indicator. */
  popupIndicator: {
    '& [class*="MuiSpark_alpha_IconButton-label"]': {
      transition: 'transform 250ms ease',
    },
  },
  /* Styles applied to the popup indicator if the popup is open. */
  'private-popupIndicator-open': {
    '& [class*="MuiSpark_alpha_IconButton-label"]': {
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
    '& [class*="MuiSpark_alpha_IconButton-label"]': {
      fontSize: theme.typography_alpha.pxToRem(20),
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
    ...theme.typography_alpha.body,
    color: theme.palette_alpha.text.subdued,
    padding: '8px 16px',
  },
  /* Styles applied to the no option wrapper. */
  'private-listbox-noOptions': {
    ...theme.typography_alpha.body,
    color: theme.palette_alpha.text.subdued,
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

const DefaultIndicatorComponent = (props: IconButtonProps) => (
  <IconButton variant="ghost" size="small" {...props} />
);

const DefaultPaperComponent = (props: PaperProps) => {
  const {
    bgcolor = 'default',
    border = 'none',
    radius = 'sm',
    shadow = 'E400',
    ...other
  } = props;

  return (
    <Paper
      bgcolor={bgcolor}
      border={border}
      radius={radius}
      shadow={shadow}
      {...other}
    />
  );
};

// default renders

const defaultRenderTags: AutocompleteRenderMultipleValue<unknown> = (
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
      <Tag
        disabled={state.disabled}
        size={state.size}
        label={state.getOptionLabel(option)}
        {...other}
      />
    );
  });
};

const defaultRenderInput: AutocompleteRenderInput = (props, state) => {
  const { leadingEl, ...other } = props;

  return (
    <Input
      {...other}
      leadingEl={
        <>
          {leadingEl ? (
            <InputAdornment
              className={props.className}
              size={state.size}
              position="start"
            >
              {leadingEl}
            </InputAdornment>
          ) : null}
          {state.multipleValue ? state.multipleValue : null}
        </>
      }
      renderLeadingEl={(props) => props.children}
      trailingEl={
        <>
          {state.clearIndicator}
          {state.popupIndicator}
        </>
      }
    />
  );
};

const defaultRenderOption: AutocompleteRenderOption<unknown> = (
  props,
  option,
  state
) => {
  return (
    <MenuItem {...props} selected={state.selected}>
      {state.getOptionLabel(option)}
    </MenuItem>
  );
};

const defaultRenderOptionGroup: AutocompleteRenderOptionGroup = (
  groupProps,
  groupLabelProps,
  groupListProps,
  group
) => (
  <li {...groupProps}>
    <ListSubheader component="div" {...groupLabelProps}>
      {group}
    </ListSubheader>
    <ul {...groupListProps} />
  </li>
);

const defaultRenderCheckboxesOption: AutocompleteRenderOption<unknown> = (
  props,
  option,
  state
) => {
  return (
    <CheckboxMenuItem
      {...props}
      selected={state.selected}
      value={state.index.toString()} // this may be a bad thing to do => omit and expect error
    >
      {state.getOptionLabel(option)}
    </CheckboxMenuItem>
  );
};

const defaultRenderIndicator: AutocompleteRenderIndicator = (props, state) => {
  const { component: Component, ...other } = props;

  return (
    <Component
      // @ts-expect-error :TODO: type so this is fine
      disabled={state.disabled}
      {...other}
    />
  );
};

const defaultRenderMultipleValue: AutocompleteRenderMultipleValue<unknown> = (
  getProps,
  value,
  state
) => {
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

const defaultGetOptionLabel: AutocompleteGetOptionLabel<unknown> = (option) =>
  option as string;

const defaultGetVisibleMultipleValueLimitText = (more) => `+${more}`;

// component

const UnstyledAutocomplete = forwardRef(function Autocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, ref) {
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

  const formControl = useFormControl({
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
  } = useAutocomplete({
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

  let multipleValue: ReactNode | ReactNode[] | undefined;

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
            classes[`private-multipleValueChild-size-${formControl.size}`],
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
      (multipleValue as ReactNode[]).push(
        <span
          className={clsx(classes.multipleValueChild)}
          key={(multipleValue as ReactNode[]).length}
        >
          {getMultipleValueVisibleLimitText(more)}
        </span>
      );
    }
  }

  if (noWrap && focused && Array.isArray(multipleValue)) {
    multipleValue.reverse();
  }

  if (noWrap) {
    multipleValue = (
      <span
        className={clsx(
          classes.multipleValueWrapper,
          classes[`private-multipleValueWrapper-size-${formControl.size}`],
          {
            [classes['private-multipleValueWrapper-focused']]: focused,
          }
        )}
      >
        {multipleValue}
      </span>
    );
  }

  const getOptionProps: AutocompleteGetOptionProps<T> = (option, index) => {
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
            noWrap,
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
  props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
) => JSX.Element;

const Autocomplete = withStyles(styles, {
  name: 'MuiSpark_alpha_Autocomplete',
})(UnstyledAutocomplete) as typeof UnstyledAutocomplete;

export default Autocomplete;
