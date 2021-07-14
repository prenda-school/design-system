// Original credit to https://github.com/mui-org/material-ui/blob/1c5beec4be20eae30e75c69ab513bbfec3e9baaf/modules/waterfall/waitUntil.js
import sleep from './sleep';

export default async function waitUntil(test, options = {}) {
  const { delay = 5e3, tries = -1 } = options;
  const { predicate, result } = await test();

  if (predicate) {
    return result;
  }

  if (tries - 1 === 0) {
    throw new Error('tries limit reached');
  }

  await sleep(delay);
  return waitUntil(test, { ...options, tries: tries > 0 ? tries - 1 : tries });
}
