import React, { ElementType, forwardRef, MouseEvent, Ref } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import Unstable_Checkbox, {
  Unstable_CheckboxProps,
} from '../Unstable_Checkbox';
import Unstable_ListItem, {
  Unstable_ListItemTypeMap,
  Unstable_ListItemProps,
} from '../Unstable_ListItem';
import { OverridableComponent, OverrideProps, useId } from '../utils';
import { ExtendButtonBase } from '../ButtonBase';

export type Unstable_CheckboxListItemTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'li'
> = Omit<Unstable_ListItemTypeMap<P, D>, 'classKey'> & {
  classKey: Unstable_CheckboxListItemClassKey;

  // 'button' | 'onClick' | 'primaryAction' | 'value'
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

export type Unstable_CheckboxListItemClassKey = 'root' | 'primary';

const useStyles = makeStyles(
  {
    root: {},
    primary: {
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
    classes: classesProp,
    disabled,
    id: idProp,
    indeterminate,
    ListItemClasses,
    onClick,
    primary,
    primaryTypographyProps,
    secondary,
    secondaryTypographyProps,
    selected,
    tertiary,
    tertiaryTypographyProps,
    value,
    ...other
  } = props;

  const classes = useStyles();

  const primaryId = useId(primaryTypographyProps?.id);
  const secondaryId = useId(secondaryTypographyProps?.id);
  const tertiaryId = useId(tertiaryTypographyProps?.id);

  if (process.env.NODE_ENV !== 'production') {
    if (!primary && !children) {
      console.error(
        'Prenda Spark: Material-UI: `children` or `primary` must be passed when using the `CheckboxListItem` component.'
      );
    }
  }

  const ariaLabelledBy = primaryId;
  const ariaDescribedBy = clsx({
    [secondaryId]: !!secondary,
    [tertiaryId]: !!tertiary,
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
        primary: clsx(
          classes.primary,
          classesProp?.primary,
          ListItemClasses?.primary
        ),
      }}
      className={clsx(classes.root, classesProp?.root, className)}
      disabled={disabled}
      onClick={handleClick}
      primary={primary}
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
      primaryTypographyProps={{
        id: primaryId,
        // reset default description of primary to secondary/tertiary
        'aria-describedby': undefined,
        ...primaryTypographyProps,
      }}
      ref={ref as Ref<HTMLLIElement>}
      secondary={secondary}
      secondaryTypographyProps={{
        id: secondaryId,
        ...secondaryTypographyProps,
      }}
      tertiary={tertiary}
      tertiaryTypographyProps={{
        id: tertiaryId,
        ...tertiaryTypographyProps,
      }}
      value={value}
      {...other}
    >
      {children}
    </Unstable_ListItem>
  );
});

export default Unstable_CheckboxListItem;
