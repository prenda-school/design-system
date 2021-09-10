import { useState, useEffect } from 'react';

/**
 * Generate a pseudo-random string (~16 bits of entropy). Useful as an element `id`.
 * @returns {string}
 * @see https://github.com/mui-org/material-ui/blob/cd8aeb64a9038ae9cb8ecf1cd7fd8a2bfea2d6b6/packages/material-ui-lab/src/TabContext/TabContext.js#L12-L18 credit to Mui
 */
export default function useUniqueId(): string {
  const [id, setId] = useState<string>('');

  useEffect(() => {
    setId(`spark-d-${Math.round(Math.random() * 1e5)}`);
  }, []);

  return id;
}
