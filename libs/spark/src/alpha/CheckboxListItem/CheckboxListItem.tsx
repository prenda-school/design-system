import type { ElementType, MouseEvent, MouseEventHandler, Ref } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { CheckboxProps } from '../Checkbox';
import Checkbox from '../Checkbox';
import type { ListItemTypeMap, ListItemProps } from '../ListItem';
import ListItem from '../ListItem';
import type { OverridableComponent, OverrideProps } from '../../utils';
import { useId } from '../../utils';
import type { ExtendButtonBase } from '../../ButtonBase';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export type CheckboxListItemTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'li'
> = Omit<ListItemTypeMap<P, D>, 'props' | 'classKey'> & {
  props: Omit<ListItemTypeMap<P, D>['props'], 'onClick'>;
} & {
  classKey: CheckboxListItemClassKey;
  props: P & {
    /**
     * Props applied to the `Checkbox` element.
     */
    CheckboxProps?: Partial<CheckboxProps>;
    /**
     * If `true`, the component is checked.
     */
    checked?: CheckboxProps['checked'];
    /**
     * If `true`, the component appears indeterminate.
     */
    indeterminate?: CheckboxProps['indeterminate'];
    /**
     * A `classes` prop applied to the `ListItem` element.
     */
    ListItemClasses?: ListItemProps['classes'];
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
    selected?: ListItemProps['selected'];
    /**
     * The value of the component.
     */
    value: string;
  };
};

export type CheckboxListItemProps<
  D extends ElementType = CheckboxListItemTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = Omit<OverrideProps<CheckboxListItemTypeMap<P, D>, D>, 'onClick'> &
  Pick<CheckboxListItemTypeMap<P, D>['props'], 'onClick'>;

export type CheckboxListItemClassKey = 'root' | 'label';

const styles: Styles<CheckboxListItemClassKey> = {
  root: {},
  label: {
    '$root:hover &': {
      textDecoration: 'underline',
    },
  },
};

// @ts-expect-error can't handle overloads by `button` values
const CheckboxListItem: OverridableComponent<
  CheckboxListItemTypeMap<
    { button: false },
    CheckboxListItemTypeMap['defaultComponent']
  >
> &
  ExtendButtonBase<
    CheckboxListItemTypeMap<
      { button?: true },
      CheckboxListItemTypeMap['defaultComponent']
    >
  > = forwardRef(function CheckboxListItem(props, ref) {
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
  const inputProps: CheckboxProps['inputProps'] = {
    'aria-labelledby': ariaLabelledBy,
    ...CheckboxProps?.inputProps,
  };
  if (ariaDescribedBy) {
    inputProps['aria-describedby'] = ariaDescribedBy;
  }

  const checked = checkedProp === undefined ? selected : checkedProp;

  const handleClick: MouseEventHandler<HTMLLIElement> = (event) => {
    if (onClick) {
      onClick(event, value, checked);
    }
  };

  return (
    <ListItem
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
        <Checkbox
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
    </ListItem>
  );
});

export default withStyles(styles, {
  name: 'MuiSpark_alpha_CheckboxListItem',
})(CheckboxListItem) as typeof CheckboxListItem;
