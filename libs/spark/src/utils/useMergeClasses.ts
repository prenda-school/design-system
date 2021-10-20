import clsx from 'clsx';
import { ClassNameMap } from './ClassNameMap';

/**
 * Merge `classes` objects.
 * @param baseClasses Any `classes` object, namely from component's default styling hook.
 * @param classesProp Any `classes` object, namely from component's props.
 */
export default function useMergeClasses<ClassKey extends string>({
  baseClasses,
  classesProp = {},
}: {
  baseClasses: ClassNameMap<ClassKey>;
  classesProp: Partial<ClassNameMap<ClassKey>>;
}): ClassNameMap<ClassKey> {
  const classes = { ...baseClasses };

  for (const [key, value] of Object.entries(classesProp)) {
    classes[key] = clsx(value, classes[key]);
  }

  return classes;
}
