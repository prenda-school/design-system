import clsx from 'clsx';
import { ClassNameMap } from './ClassNameMap';

/**
 * Addresses goal to
 *  - capture custom classes and don't pass them to underlying component
 *  - allow consumers to add onto (override) any custom or underlying class
 */
export default function useTriMergeClasses<
  UnderlyingClassKey extends string = string,
  CustomClassKey extends string = string
>({
  baseUnderlyingClasses,
  baseCustomClasses,
  passedClasses,
}: {
  baseUnderlyingClasses: Partial<ClassNameMap<UnderlyingClassKey>>;
  baseCustomClasses: ClassNameMap<CustomClassKey>;
  passedClasses: Partial<ClassNameMap<UnderlyingClassKey | CustomClassKey>>;
}): {
  underlyingClasses: Partial<ClassNameMap<UnderlyingClassKey>>;
  customClasses: ClassNameMap<CustomClassKey>;
} {
  const underlyingClasses = { ...baseUnderlyingClasses };

  const customClasses = { ...baseCustomClasses };

  // build upon the above initial values
  for (const [key, value] of Object.entries(passedClasses)) {
    // A short-circuit type check for whether this key should be merged with
    // the custom or underlying classes. if it exists in custom, then merge
    // with that. bias towards custom classes is desired and possible since
    // customClasses  is not a partial, whereas underlyingClasses is; spark
    // may not fully override every underlying class, but it does  *fully*
    // define its custom classes.
    const customValue = customClasses[key];

    if (customValue) {
      customClasses[key] = clsx(customValue, value);
    } else {
      underlyingClasses[key] = clsx(underlyingClasses[key], value);
    }
  }

  return { underlyingClasses, customClasses };
}
