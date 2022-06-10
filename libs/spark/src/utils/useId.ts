// copied from https://github.com/mui/material-ui/blob/50966dfa785e2163e7d8f903678822fad9970ae3/packages/mui-utils/src/useId.ts
import React, { useEffect, useState } from 'react';

let globalId = 0;
const useGlobalId = (idOverride?: string): string | undefined => {
  const [defaultId, setDefaultId] = useState(idOverride);
  const id = idOverride || defaultId;
  useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const maybeReactUseId: undefined | (() => string) = (React as any)[
  // eslint-disable-next-line no-useless-concat -- Workaround for https://github.com/webpack/webpack/issues/14814
  'useId' + ''
];
/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
export default function useId(idOverride?: string): string | undefined {
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride ?? reactId;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `useId` is invariant at runtime.
  return useGlobalId(idOverride);
}
