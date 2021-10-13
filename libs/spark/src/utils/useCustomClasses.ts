import clsx from 'clsx';
import { ClassNameMap } from './ClassNameMap';

/**
 * Capture custom classes while preserving all other classes.
 * @param classes The `classes` object from component props.
 * @param baseCustomClasses The custom `classes` defined as the component's rule names.
 */
export default function useCustomClasses<
  ClassKey extends string,
  CustomClassKey extends string
>({
  classes = {},
  baseCustomClasses,
}: {
  classes: Partial<ClassNameMap<ClassKey>>;
  baseCustomClasses: ClassNameMap<CustomClassKey>;
}): {
  otherClasses: Partial<ClassNameMap<ClassKey>>;
  customClasses: ClassNameMap<CustomClassKey>;
} {
  const otherClasses = {};
  const customClasses = { ...baseCustomClasses };

  // build upon the above initial values
  for (const [key, value] of Object.entries(classes)) {
    // A short-circuit type check for whether this key should be merged with
    // the custom classes. if it exists in custom, then merge with that.
    // this biases towards custom classes and is possible since customClasses
    // is not a partial.
    const customValue = customClasses[key];

    if (customValue) {
      customClasses[key] = clsx(customValue, value);
    } else {
      otherClasses[key] = value;
    }
  }

  return { otherClasses, customClasses };
}
