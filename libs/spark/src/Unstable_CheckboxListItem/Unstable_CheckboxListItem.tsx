import React, { ElementType, forwardRef, MouseEvent, Ref } from 'react';
import clsx from 'clsx';
import Unstable_Checkbox, {
  Unstable_CheckboxProps,
} from '../Unstable_Checkbox';
import Unstable_ListItem, {
  Unstable_ListItemTypeMap,
  Unstable_ListItemProps,
} from '../Unstable_ListItem';
import { OverridableComponent, OverrideProps, useId } from '../utils';
import { ExtendButtonBase } from '../ButtonBase';
import withStyles from '../withStyles';

export type Unstable_CheckboxListItemTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'li'
> = Omit<Unstable_ListItemTypeMap<P, D>, 'classKey'> & {
  classKey: Unstable_CheckboxListItemClassKey;
  props: P & {
    /**
     * Props applied to the `Checkbox` element.
     */
    CheckboxProps?: Partial<Unstable_CheckboxProps>;
    /**
     * If `true`, the component is checked.
     */
    checked?: Unstable_CheckboxProps['checked'];
    /**
     * If `true`, the component appears indeterminate.
     */
    indeterminate?: Unstable_CheckboxProps['indeterminate'];
    /**
     * A `classes` prop applied to the `ListItem` element.
     */
    ListItemClasses?: Unstable_ListItemProps['classes'];
    /**
     * Callback fired when the component is clicked (either the checkbox input or list item).
     *
     * @param {object} event The event source of the callback.
     * @param {string} value The current value of the component
     * @param {boolean} checked The current checked state of the component
     */
    onClick?: (
      // eslint-disable-next-line @typescript-eslint/ban-types
      event: MouseEvent<{}>,
      value: string,
      checked: boolean
    ) => void;
    /**
     * An alias for the `checked` prop.
     */
    selected?: Unstable_ListItemProps['selected'];
    /**
     * The value of the component.
     */
    value: string;
  };
};

export type Unstable_CheckboxListItemProps<
  D extends ElementType = Unstable_CheckboxListItemTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_CheckboxListItemTypeMap<P, D>, D>;

export type Unstable_CheckboxListItemClassKey = 'root' | 'label';

const withClasses = withStyles<Unstable_CheckboxListItemClassKey>(
  {
    root: {},
    label: {
      '$root:hover &': {
        textDecoration: 'underline',
      },
    },
  },
  { name: 'MuiSparkUnstable_CheckboxListItem' }
);

// @ts-expect-error can't handle overloads by `button` values
const Unstable_CheckboxListItem: OverridableComponent<
  Unstable_CheckboxListItemTypeMap<
    { button: false },
    Unstable_CheckboxListItemTypeMap['defaultComponent']
  >
> &
  ExtendButtonBase<
    Unstable_CheckboxListItemTypeMap<
      { button?: true },
      Unstable_CheckboxListItemTypeMap['defaultComponent']
    >
  > = forwardRef(function Unstable_CheckboxListItem(props, ref) {
  const {
    className,
    CheckboxProps,
    checked: checkedProp,
    children,
    classes,
    ContentGroupProps = {},
    disabled,
    id: idProp,
    indeterminate,
    ListItemClasses,
    onClick,
    selected,
    value,
    ...other
  } = props;

  const primaryId = useId(ContentGroupProps.primaryTypographyProps?.id);
  const secondaryId = useId(ContentGroupProps.secondaryTypographyProps?.id);
  const tertiaryId = useId(ContentGroupProps.tertiaryTypographyProps?.id);

  const ariaLabelledBy = primaryId;
  const ariaDescribedBy = clsx({
    [secondaryId]: !!ContentGroupProps.secondary,
    [tertiaryId]: !!ContentGroupProps.tertiary,
  });
  const inputProps: Unstable_CheckboxProps['inputProps'] = {
    'aria-labelledby': ariaLabelledBy,
    ...CheckboxProps?.inputProps,
  };
  if (ariaDescribedBy) {
    inputProps['aria-describedby'] = ariaDescribedBy;
  }

  const checked = checkedProp === undefined ? selected : checkedProp;

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleClick = (event) => {
    if (onClick) {
      onClick(event, value, checked);
    }
  };

  return (
    <Unstable_ListItem
      button
      classes={{
        ...ListItemClasses,
      }}
      className={clsx(classes.root, className)}
      ContentGroupProps={{
        ...ContentGroupProps,
        classes: {
          ...ContentGroupProps.classes,
          primary: clsx(classes.label, ContentGroupProps.classes?.primary),
        },
        primaryTypographyProps: {
          ...ContentGroupProps.primaryTypographyProps,
          id: primaryId,
          // reset default description of primary to secondary/tertiary
          'aria-describedby': undefined,
        },
        secondaryTypographyProps: {
          ...ContentGroupProps.secondaryTypographyProps,
          id: secondaryId,
        },
        tertiaryTypographyProps: {
          ...ContentGroupProps.tertiaryTypographyProps,
          id: tertiaryId,
        },
      }}
      disabled={disabled}
      onClick={handleClick}
      primaryAction={
        <Unstable_Checkbox
          checked={checked}
          disabled={disabled}
          indeterminate={indeterminate}
          inputProps={inputProps}
          tabIndex={-1}
          value={value}
          {...CheckboxProps}
        />
      }
      ref={ref as Ref<HTMLLIElement>}
      value={value}
      {...other}
    >
      {children}
    </Unstable_ListItem>
  );
});

export default withClasses(
  Unstable_CheckboxListItem
) as typeof Unstable_CheckboxListItem;
