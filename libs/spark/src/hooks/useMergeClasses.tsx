import { useState, useEffect } from 'react';
import { mergeClasses, ClassNameMap } from '../utils';

/**
 * Merge two `classes` objects.
 * @param local `classes` local to caller.
 * @param passed `classes` passed through props.
 * @returns a state instance value.
 * @example
 *  const useStyles = makeStyles(
 *    { root: { ... } },
 *    { name: OtherComponent.muiName }
 *  );
 *
 *  function Component({ classes: passed }) {
 *    const local = useStyles();
 *
 *    const merged = useMergedClasses(local, passed);
 *
 *    return <OtherComponent classes={merged} />;
 *  }
 */
export default function useMergeClasses(
  local: ClassNameMap,
  passed: ClassNameMap
): ClassNameMap {
  const [classes, setClasses] = useState({});

  useEffect(() => {
    setClasses(mergeClasses(local, passed));
  }, [passed, local]);

  return classes;
}
