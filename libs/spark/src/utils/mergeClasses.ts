/* Full credit to https://github.com/mui-org/material-ui/blob/5cc1d0fc8756534f181d55af02a5a0d65b486603/packages/material-ui-styles/src/withStyles/withStyles.d.ts#L81 */
export type ClassNameMap<ClassKey extends string = string> = Record<
  ClassKey,
  string
>;

/* Original credit to https://github.com/mui-org/material-ui/blob/5cc1d0fc8756534f181d55af02a5a0d65b486603/packages/material-ui-styles/src/mergeClasses/mergeClasses.d.ts */
export default function mergeClasses(
  baseClasses: ClassNameMap,
  newClasses: ClassNameMap
): ClassNameMap {
  if (!newClasses) {
    return baseClasses;
  }

  const nextClasses = { ...baseClasses };

  Object.keys(newClasses).forEach((key) => {
    if (newClasses[key]) {
      nextClasses[key] = `${baseClasses[key]} ${newClasses[key]}`;
    }
  });

  return nextClasses;
}
