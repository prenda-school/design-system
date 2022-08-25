/** Uppercase the first letter. */
export default function capitalize(string: string): string {
  if (process.env.NODE_ENV !== 'production' && typeof string !== 'string') {
    throw new Error('PDS: capitalize(string) expects a string argument');
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}
