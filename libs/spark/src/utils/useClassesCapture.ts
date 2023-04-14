import clsx from 'clsx';
import type { ClassNameMap } from './ClassNameMap';

/**
 * Capture custom classes while preserving all other classes.
 * @param classes Any `classes` object, usually from component props.
 * @param baseCustomClasses A custom `classes` object that will act as a basis for capturing from the given `classes` parameter.
 */
export default function useClassesCapture<
  ClassKey extends string,
  CustomClassKey extends string
>({
  classes = {},
  baseCustomClasses,
}: {
  classes: Partial<ClassNameMap<ClassKey>>;
  baseCustomClasses: ClassNameMap<CustomClassKey>;
}): {
  otherClasses: Partial<ClassNameMap<Exclude<ClassKey, CustomClassKey>>>;
  customClasses: ClassNameMap<CustomClassKey>;
} {
  const otherClasses = {};
  const customClasses = { ...baseCustomClasses };

  // build upon the above initial values
  for (const [key, value] of Object.entries(classes)) {
    // A short-circuit type check for whether this key should be merged with the `customClasses`; if already exists, then combine. This biases towards `customClasses` (i.e. ClassKey and CustomClassKey can have overlapping values but CustomClassKey wins -- on purpose) and is possible since `customClasses` is not a partial.
    const customValue = customClasses[key];

    if (customValue) {
      customClasses[key] = clsx(customValue, value);
    } else {
      otherClasses[key] = value;
    }
  }

  return { otherClasses, customClasses };
}
